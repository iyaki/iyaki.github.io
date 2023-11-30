/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
	const BASE_APTH = 'src';

	eleventyConfig.addPassthroughCopy(BASE_APTH + '/robots.txt')
	eleventyConfig.addPassthroughCopy(BASE_APTH + '/css')
	eleventyConfig.addPassthroughCopy(BASE_APTH + '/images')
	eleventyConfig.addPassthroughCopy(BASE_APTH + '/**/*.{png,jpg,jpeg,svg,webp,avif,mp4,mp3,ogg}')

	return {
		dir: {
			input: BASE_APTH,
		}
	}
};
