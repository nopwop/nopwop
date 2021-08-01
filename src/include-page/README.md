# nopwop-include-page snippet


While editing post, sometimes you may want to describe typical sentences which is used frequently for every post. In such case, nopwop-include-page snippet may be useful.

Make static page which has typical contents, and using the slug, copy and paste below code!

# How to use

1. Create a static page which you want to refer
2. Add 'Custom HTML' block in editing page of WordPress
3. Copy below code and paste into the Custom HTML block while editing post
4. Change 'slug' parameter (i.e. 'foo-bar-age') to what you made for the static page

```html
<script slug='foo-bar-page' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-include-page.min.js'></script>
```

# Parameters


## slug
You can also use page 'slug' to identify the page which you want to include

```html
<script slug='something-new' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-include-page.min.js'></script>
```

## pageid
You can use page Id for WordPress static instead of slug.

```html
<script pageid='31' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-include-page.min.js'></script>
```


