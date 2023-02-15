module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
		files: ['./src/**/(|**)/style.scss', './src/assets/']
	});
    eleventyConfig.addWatchTarget("src/**/(|**)/demos/*.js"); // monitors the js files in the articles/**/demos/
    eleventyConfig.addWatchTarget("src/**/(|**)/style.scss"); // monitors the scss files in the articles/**/
    eleventyConfig.addWatchTarget("src/assets/styles/*.scss"); // monitors the scss files in the assets/styles/**/
    eleventyConfig.addPassthroughCopy("src/**/(|**)/images/*.(jpg|png|svg)"); // copies pictures to /dist
    eleventyConfig.addPassthroughCopy("src/**/(|**)/demos/(*.js|**/*.js)"); //copies js files to /dist
    eleventyConfig.addPassthroughCopy("src/assets/icons/*.(jpg|png|svg)"); //copies static icons to /dist

    return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid"
		],

		markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
		htmlTemplateEngine: "njk",

		dir: {
			input: "src",
			includes: "includes",
			output: "dist"
		},
	};
}