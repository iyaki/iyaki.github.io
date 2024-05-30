module.exports = function(a) {
	return {
		date: process.env.ELEVENTY_RUN_MODE === 'build' ? 'git Last Modified' : 'Last Modified',
	}
}
