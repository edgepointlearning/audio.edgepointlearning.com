module.exports = function(eleventyConfig) {
  
  // Copy '/src/assets/' to site root
  eleventyConfig.addPassthroughCopy({'./src/assets': '/'});
  // eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  // Set input and output directories
  return {
    dir: {
      input: 'src/*.html',
      output: 'public'
    }
  }
};