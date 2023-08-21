import { updateWithArticle as updateBlogWithArticle } from "./blog.js";
import { publish as publishHtml } from "./postHtml.js";
import { draft as draftMd, process as processMd, publish as publishMd} from "./postMd.js";
import { updateWithArticle as updatePostsIndexWithArticle } from "./postsIndex.js";

function main() {
	const args = process.argv.slice(2)

	if (args.length === 0) {
		throw new Error('ERROR: El script requiere, por lo menos, un argumento; el path al post en markdown')
	}

	const markdownPostPath = args[0]

	const articleMd = processMd(draftMd(markdownPostPath))

	const articleHtml = publishHtml(articleMd)

	publishMd(articleMd)
	if (articleHtml.newPublication) {
		updatePostsIndexWithArticle(articleHtml)

		updateBlogWithArticle(articleHtml)
	}
}


main()
