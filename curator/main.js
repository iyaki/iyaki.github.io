import fs from 'fs'
import { Client } from '@notionhq/client'
import { Configuration, OpenAIApi } from 'openai'
import { parse } from 'node-html-parser'

const HTML_PATH = '../docs/curated.html'

async function main() {
	const articles = await retrieveArticles()

	const articlesData = await Promise.all(articles.map(extractArticleData))

	publishArticles(articlesData)
}

async function retrieveArticles() {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	})

	const results = await notion.databases.query({
		database_id: "066daa9a7abb4c029724323209c85ca6",
		page_size: 1,
		filter: {
			and: [
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Tool",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Service",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Website",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Note",
					},
				},
				{
					property: "Category",
					multi_select: {
						does_not_contain: "Framework/Library",
					},
				},
			]
		}
	})

	return results.results
}

async function extractArticleData(article) {
	return {
		id: article.id,
		title: article.properties.Name.title[0].plain_text,
		url: article.properties.URL.url,
		comment: await getArticleComment(article.id),
	}
}

async function getArticleComment(notionPageId) {
	const excerpt = await getArticleExcerpt(notionPageId)

	return getCommentFromChatGPT(excerpt)
}

async function getArticleExcerpt(notionPageId) {
	const blocks = await retrievePageBlocks(notionPageId)

	let excerpt = ''

	for (let block of blocks) {
		if (block.type !== 'paragraph') {
			continue
		}

		excerpt += block.paragraph.rich_text.map(rt => rt.plain_text).join('')
	}

	return excerpt
}

async function retrievePageBlocks(notionPageId) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	})

	const results = await notion.blocks.children.list({
		block_id: notionPageId,
		page_size: 15,
	})

	return results.results
}

async function getCommentFromChatGPT(excerpt) {
	const configuration = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{
			role: 'user',
			content: `Write, in spanish, an striking comment for this article: ${excerpt}`,
		}]
	})

	return completion.data.choices[0].message.content
}

function publishArticles(articlesData) {
	const file = fs.readFileSync(HTML_PATH, { encoding: 'utf8' })

	const root = parse(file)

	const templateElem = root.getElementById('article-template')

	const template = templateElem.innerHTML

	for (let articleData of articlesData) {
		const article = template
			.replace('{{articleID}}', articleData.id)
			.replace('{{articleTitle}}', articleData.title)
			.replace('{{dateAdded}}', (new Date()).toISOString().slice(0,10))
			.replace('{{articleLink}}', articleData.url)
			.replace('{{articleComment}}', articleData.comment)

		templateElem.insertAdjacentHTML('afterend', article)
	}
	writeHTML(root)
}

function writeHTML(root) {
	fs.writeFileSync(HTML_PATH, root.innerHTML);
}

main()
