# nopwop-tag-category snippet

*nopwop-tag-category* generates tag/category list in WordPress site.

- category list (with hierarchy)
- tag list

# How to use

(in case of category list)

1. Add 'Custom HTML' block in editing page of WordPress
2. Copy below code and paste into the Custom HTML block

You can use it in 'Custom HTML' of block editor as well as 'Custom HTML Widget'.

```html
<script list-type='category' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-tag-category.min.js'></script>
```

# Parameters

## list-type

- ***category*** : category list of WordPress site
```html
<script list-type='category' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-tag-category.min.js'></script>
```
- ***tag***: tag list of WordPress site

```html
<script list-type='tag' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-tag-category.min.js'></script>
```

## list-style

To specify **simple** for *list-style* parameter, it generates just `<ul>` type of list without hierarchy.

```html
<script list-type='category' list-style='simple' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-tag-category.min.js'></script>
```
