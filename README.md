# What's NOPWOP?

NOPWOP stands for 'No plugin, without PHP' and it means that using NOPWOP javascript code snippets, you can easily customize or extend your WordPress web site with no WordPress Plugins or without complicated coding by PHP in server side.

# Concept

NOPWOP snippets is *script* tag description like code below, which could insert special JavaScript codes into WordPress page. The insertion is accomplished by using *Custom HTML* block in WordPress editor screen.

> \<script src='https://jsdelivr.com/....'>\</script>

Therefor, what the author needs in order to customize or extend their WordPress site is just 'copy and paste' NOPWOP code, instead of installing WordPress Plugins.

# Features

## [post-list](./src/post-list)
Generating 'post' or 'page' list under the condition below:
- related posts with the page
- post list related to category
- post list related to tag
- page list which has specific parent page

## [search-box](./src/search-box)
Search box with 'auto completion' for posts

## [toc](./src/toc)
Generating *Table of Content* automatically based on Headings (i.e. H2,H3,H4.. tags) written in the page

## [syntax-highlight](./src/syntax-highlight)
Decorating any source code in pre code written in the page with syntax highlighter

## [include-page](./src/include-page)
Including static page contents to the any page using 'include-page' snippet.

## [accordion-ui](./src/accordion-ui)
Rendering contents in subsequent blocks as *Accordion UI*.

## [tag-category](./src/tag-category)
Generating 'tag' list or 'category' list.

