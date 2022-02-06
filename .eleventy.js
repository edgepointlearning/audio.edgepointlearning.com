module.exports = function(eleventyConfig) {
  
  // Copy '/src/assets/' to site root
  eleventyConfig.addPassthroughCopy({'./src/assets': '/'});

  // Set input and output directories
  return {
    dir: {
      input: 'src/index.html',
      output: '_site'
    }
  }
};