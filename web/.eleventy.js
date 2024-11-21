import ProductionTweaks from './.eleventy/production-tweaks.js'
import GitCommitDate from 'eleventy-plugin-git-commit-date'

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	const BASE_PATH = 'src'

	eleventyConfig.addPlugin(ProductionTweaks)
	eleventyConfig.addPlugin(GitCommitDate)


	eleventyConfig.addPassthroughCopy(BASE_PATH + '/robots.txt')
	// eleventyConfig.addPassthroughCopy(BASE_PATH + '/css')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/images')
	eleventyConfig.addPassthroughCopy(BASE_PATH + '/**/*.{png,jpg,jpeg,svg,webp,avif,mp4,mp3,ogg}')

	return {
		dir: {
			input: BASE_PATH,
		}
	}
};
