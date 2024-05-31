/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = eleventyConfig => {
	const BASE_PATH = 'src';

	eleventyConfig.addPlugin(require('./.eleventy/production-tweaks'));
	eleventyConfig.addPlugin(require('./.eleventy/shortcodes'));

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
