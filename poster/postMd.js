import { newMarkdownArticle } from './article.js'
import { addUtf8Bom, cleanPostFilename, getDateForFilename, getFilename, read, removeUtf8Bom, write } from './utils/file.js'
import { addCommonAbbreviations, firstTitleFrom } from './utils/markdown.js'

export function draft(postPath) {

	let filename = getFilename(postPath)

	const newPublication = isNew(filename)

	const newFilename = (
		newPublication
		? getDateForFilename() + '_' + cleanPostFilename(filename)
		: filename
	)

	const content = removeUtf8Bom(read(postPath))

	return newMarkdownArticle({
			filename: newFilename,
			title: firstTitleFrom(content),
			content,
			datePublished: new Date(),
			newPublication,
	})
}

export function process(markdownArticle) {
	let content = markdownArticle.content

	content = addCommonAbbreviations(content)

	markdownArticle.content = content

	return markdownArticle
}

export function publish(markdownArticle) {
	write(
		markdownArticle.path,
		addUtf8Bom(markdownArticle.content)
	)
}

// A post is considered new if his filename does not starts with a date (8 numbers)
function isNew(postFilename) {
	return isNaN(postFilename.substring(0, 8))
}
