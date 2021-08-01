
//*** webpack entry list to build
module.exports = {
  entry: {
      'nopwop-accordion-ui':      `${__dirname}/src/accordion-ui/nopwop-accordion-ui.js`, 
      'nopwop-include-page':      `${__dirname}/src/include-page/nopwop-include-page.js`, 
      'nopwop-post-list':         `${__dirname}/src/post-list/nopwop-post-list.js`, 
      'nopwop-search-box':        `${__dirname}/src/search-box/nopwop-search-box.js`,
      'nopwop-syntax-highlight':  `${__dirname}/src/syntax-highlight/nopwop-syntax-highlight.js`,
      'nopwop-tag-category':      `${__dirname}/src/tag-category/nopwop-tag-category.js`,
      'nopwop-toc':               `${__dirname}/src/toc/nopwop-toc.js`,
    },
}
