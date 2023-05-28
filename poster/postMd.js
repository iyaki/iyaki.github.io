import { newMarkdownArticle } from './article.js'
import { addUtf8Bom, cleanFilenameDate, getDateForFilename, getFilename, read, removeUtf8Bom, write } from './utils/file.js'
import { firstTitleFrom } from './utils/markdown.js'

const POSTS_PATH = '../docs/posts/'

export function publish(postPath) {

	let filename = getFilename(postPath)

	const newPublication = isNew(filename)

	const newFilename = (
		newPublication
		? getDateForFilename() + cleanFilenameDate(filename)
		: filename
	)

	const newPostPath = POSTS_PATH + newFilename

	const content = removeUtf8Bom(read(postPath))

	// wikilinker.searchAndReplaceWikilinks()

	write(
		newPostPath,
		addUtf8Bom(content)
	)

	return newMarkdownArticle({
			filename: newFilename,
			title: firstTitleFrom(content),
			content,
			datePublished: new Date(),
			newPublication,
	})
}

// A post is considered new if his filename does not starts with a date (8 numbers)
function isNew(postFilename) {
	return isNaN(postFilename.substring(0, 8))
}
