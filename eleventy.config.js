const svgSprite = require('eleventy-plugin-svg-sprite');

module.exports = function(eleventyConfig) {

  // reload dev server from postcss output in package.json
  eleventyConfig.setServerOptions({
    watch: ["_site/styles.css"],
  });

  // watch tailwind config for changes
  eleventyConfig.addWatchTarget('./tailwind.config.js');

  // passhthrough static files
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });
  eleventyConfig.addPassthroughCopy({'./node_modules/amplitudejs/dist/amplitude.min.js': './amplitude.min.js'});
  eleventyConfig.addPassthroughCopy({'./node_modules/amplitudejs/dist/amplitude.js.map': './amplitude.js.map'});

  // opt out of emulated passthrough during --serve
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // add plugins
  eleventyConfig.addPlugin(svgSprite, {
    path: './src/_includes/svg',
  });

  // import external configs
  eleventyConfig.addPlugin(require('./src/_11ty/html.js'))
  eleventyConfig.addPlugin(require('./src/_11ty/postcss.js'))

  return {
    dir: {
      input: 'src',
    }
  };
};