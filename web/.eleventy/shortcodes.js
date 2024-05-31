const getDateFromGitLastUpdated = require("@11ty/eleventy/src/Util/DateGitLastUpdated");

// Como la operacion de buscar fechas con git puede ser lenta se realiza una cache de sus resultados
const cache = {}
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = eleventyConfig => {
	// Based on https://github.com/11ty/eleventy/blob/v2.0.1/src/Template.js#L940
	eleventyConfig.addShortcode('gitLastModified', function (path) {
		if (cache[path]) {
			if (cache[path].gitLastModified) {
				return cache[path].gitLastModified
			}
		} else {
			cache[path] = {}
		}

		const d = getDateFromGitLastUpdated(path);
		if (d) {
			cache[path].gitLastModified = d
			return d
		}

		// return now if this file is not yet available in `git`
		return new Date()
	})
}
