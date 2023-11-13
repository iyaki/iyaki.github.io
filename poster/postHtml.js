import { getFilenameWithoutExtension, read, write } from './utils/file.js';
import { htmlFrom } from './utils/markdown.js';
import { newHtmlArticleFrom } from './article.js';

const POST_TEMPLATE_PATH = './templates/post.html'
const POST_TEMPLATE = read(POST_TEMPLATE_PATH)

const POSTS_PATH = '../web/src/posts/'

export function publish(articleMd) {
	const content = POST_TEMPLATE
		.replaceAll('{{title}}', articleMd.title)
		.replaceAll('{{article}}', htmlFrom(articleMd.content))

	const filename = getFilenameWithoutExtension(articleMd.path)

	const postPath = getPathForPost(filename)

	write(postPath, content)

	return newHtmlArticleFrom({
		markDownArticle: articleMd,
		filename,
		content,
	})
}

function getPathForPost(filename) {
	return POSTS_PATH + filename + '/' + filename + '.html'
}
