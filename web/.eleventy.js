module.exports = function(eleventyConfig) {
	const BASE_APTH = 'src';

	eleventyConfig.addPassthroughCopy(BASE_APTH + '/css');
	eleventyConfig.addPassthroughCopy(BASE_APTH + '/images');
	eleventyConfig.addPassthroughCopy(BASE_APTH + '/images-shared');

	return {
		dir: {
			input: BASE_APTH,
		}
	}
};
