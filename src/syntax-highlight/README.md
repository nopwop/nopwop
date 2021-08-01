# nopwop-syntax-highlight snippet

nopwop-syntax-highlight decorates *code block* in WordPress contents, adding 'copy to clipboard' button.

# How to use

You can use it by two ways.

## use it as global in site
1. Add 'Custom HTML' block in editing page of WordPress
2. Copy below code and paste into the Custom HTML block 

```html
<script src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-syntax-highlight.min.js'></script>
```

This results all 'pre' and 'code' html tag(s) in any pages will be highlighted by it.

## use it in local page

1. Add 'Custom HTML' block in 'Widget' configuration of WordPress
2. Copy below code and paste into the Custom HTML block 

```html
<script src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-syntax-highlight.min.js'></script>
```
This results that only 'pre' and 'code' html tag(s) in the particular page which contains the 'Custom HTML' block will be highlighted by it.

# Parameters

No parameters

# Dependency

This snippet use ['highlightjs'](https://highlightjs.org/download/) javascript library to process syntax high lighting.
It will be loaded dynamically and automatically from cdnjs when nopwop-syntax-highlight snippet is loaded.
