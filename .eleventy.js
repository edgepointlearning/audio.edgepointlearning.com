const faviconsPlugin = require('eleventy-plugin-gen-favicons');
const metagen = require('eleventy-plugin-metagen');
const svgSprite = require('eleventy-plugin-svg-sprite');

const htmlmin = require('html-minifier');

// const CleanCSS = require('clean-css');
const postCss = require('postcss');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksAsyncFilter("postcss");

  // passthrough files
  eleventyConfig.addPassthroughCopy({'./node_modules/amplitudejs/dist/amplitude.min.js': './amplitude.min.js'});
  eleventyConfig.addPassthroughCopy({'./node_modules/amplitudejs/dist/amplitude.js.map': './amplitude.js.map'});
  eleventyConfig.addPassthroughCopy({'./src/static': './'});

  // watch files for changes
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/_includes/styles.css');
  
  // add plugins
  eleventyConfig.addPlugin(metagen);
  eleventyConfig.addPlugin(faviconsPlugin, {
    'outputDir': './dist',
    'manifestData': {'name': 'EdgePoint Learning Narrator Samples'},
    'generateManifest': false
  });
  eleventyConfig.addPlugin(svgSprite, {
    path: './src/_includes/svg',
  });

  // process postcss & minify with clean-css
  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    // const cleanCss = new CleanCSS({});
    postCss([tailwind,autoprefixer])
      .process( cssCode, { from: undefined } )
      .then( 
        r => done(null, r.css),
        e => done(e, null)
      )
      //   (r) => {
      //     const result = cleanCss.minify(r.css);
      //       if (result.errors.length) {
      //         done(result.errors, null);
      //       } else {
      //         done(null, result.styles);
      //       }
      //   },
      //   (e) => {
      //     done(e, null);
      //   }
      // );
  });

  // minify html with html-minifier
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if( this.outputPath && this.outputPath.endsWith('.html') ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: false
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};