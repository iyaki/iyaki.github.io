import { cleanFilenameDate, exists, getDateForFilename, getFilename, getFilenameWithoutExtension, read, write } from './utils/file.js';
import { htmlFrom } from './utils/markdown.js';
import { newArticle } from './article.js';

const POST_TEMPLATE_PATH = './templates/post.html'
const POST_TEMPLATE = read(POST_TEMPLATE_PATH)

const POSTS_PATH = '../docs/posts/'

export function publish(articleMd) {
	const content = POST_TEMPLATE
		.replaceAll('{{title}}', articleMd.title)
		.replaceAll('{{article}}', htmlFrom(articleMd.content))

	const filename = getFilenameWithoutExtension(articleMd.path) + '.html'

	const postPath = getPathForPost(filename)

	const newPublication = isNew(postPath)

	write(postPath, content)

	return newArticle({
		filename,
		title: articleMd.title,
		content,
		datePublished: new Date(),
		newPublication,
	})
}

function isNew(postPath) {
	return !exists(postPath)
}

function getPathForPost(filename) {
	return POSTS_PATH + filename
}

function getNewPathForPost(filename) {
	return getPathForPost(getDateForFilename() + cleanFilenameDate(filename))
}
