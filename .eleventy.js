const metagen = require('eleventy-plugin-metagen');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'./src/assets': '/'});
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPlugin(metagen);
  return {
    dir: {
      input: 'src/*.html',
      output: 'public'
    }
  }
};