import ProductionTweaks from './.eleventy/production-tweaks.js'
import GitCommitDate from 'eleventy-plugin-git-commit-date'
import { readFileSync } from 'node:fs'

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	const BASE_PATH = 'web'

	// ponytail: regex sobre el fuente del post; un <h2 id> dentro de un <pre> haría ruido, mover a parseo real si pasa
	eleventyConfig.addShortcode('toc', function () {
		const source = readFileSync(this.page.inputPath, 'utf8')
		const items = [...source.matchAll(/<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)]
			.map(([, id, text]) => `\t\t\t\t<li><a href="#${id}">${text.replace(/<[^>]+>/g, '').trim()}</a></li>`)
			.join('\n')
		return `<aside aria-label="Índice">
	<details>
		<summary>
			<h2>Índice</h2>
		</summary>
		<nav aria-label="Índice">
			<ul>
${items}
			</ul>
		</nav>
	</details>
</aside>`
	})

	eleventyConfig.addPlugin(ProductionTweaks)
	eleventyConfig.addPlugin(GitCommitDate)


	eleventyConfig.addPassthroughCopy(BASE_PATH + '/robots.txt')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/llms.txt')
	// eleventyConfig.addPassthroughCopy(BASE_PATH + '/css')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/images')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/components')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/resources')
	// eleventyConfig.addPassthroughCopy(BASE_PATH + '/scripts')
	// eleventyConfig.addPassthroughCopy(BASE_PATH + '/**/*.js')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/**/*.{png,jpg,jpeg,svg,webp,avif,mp4,mp3,ogg}')

	return {
		dir: {
			input: BASE_PATH,
		}
	}
};
