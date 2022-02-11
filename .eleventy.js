const metagen = require('eleventy-plugin-metagen');
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'./src/static': '/'});

  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  
  eleventyConfig.addPlugin(metagen);
  
  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg",
  });

  return {
    dir: {
      input: 'src/*.html',
      output: 'public'
    }
  }
};