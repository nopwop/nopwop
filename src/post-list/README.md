# nopwop-post-list snippet

Sometimes, you may want to contains list of category related posts in WordPress while editing a post. nopwop-post-list is useful. it generates some type of such post list below:

- post list which related to specific category
- post list which related to specific tag
- post list which related to the post
- child page list which has same static parent page

# How to use

(in case of page list for specific category)

1. Add 'Custom HTML' block in editing page of WordPress
2. Copy below code and paste into the Custom HTML block
3. Specify category by categoryid parameter (change xxx to real id in your WordPress)

You can use it in 'Custom HTML' of block editor as well as 'Custom HTML Widget' especially when you want show related post in every page.

```html
<script listtype='category-posts' categoryid='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```

# Parameters

## listtype

Must be specified with one of value below to identify which type of list you want to generate.

- category-posts: post list which related to specific category
- tag-posts: post list which related to specific tag
- related-posts: post list which related to the post
- child-pages: child page list which has same static parent page


Available additional parameters depend on which type of list you want to generate.

## liststyle

use **simple** or **rich** for ***liststyle*** parameter.
if **simple** is specified, `<ul>` type of post/page list will be generated.

```html
<script listtype='category-posts' liststyle='simple' categoryid='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```

## count
maximum number of list. default is 10.

# parameters when listtype is 'category-posts'

As ***listype***='category-posts', to identify WordPress category, use either below

| parameter name to identify category| description | example |
| ---- | ---- | --- |
| ***name*** | name of category | name='dog' |
| ***slug*** | slug of category | slug='dog' |
| ***categoryid*** | category id in WordPress site | categoryid='123'

Example for ***name***,
```html
<script listtype='category-posts' name='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***slug***,
```html
<script listtype='category-posts' slug='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***categoryid***,
```html
<script listtype='category-posts' categoryid='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```

# parameters when listtype is 'tag-posts'

As ***listype***='tag-posts', to identify WordPress tag, use either below

| parameter name to identify tag| description | example |
| ---- | ---- | --- |
| ***name*** | name of tag | name='dog' |
| ***slug*** | slug of tag | slug='dog' |
| ***tagid*** | tag id in WordPress site | tagid='123'

Example for ***name***,
```html
<script listtype='tag-posts' name='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***slug***,
```html
<script listtype='tag-posts' slug='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***tagid***,
```html
<script listtype='tag-posts' tagid='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```

# parameters when listtype is 'related-posts'

no paramters with 'related-posts' list type. Just use below code.

```html
<script listtype='related-posts' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```


> **Notice for related posts:**
> 'related-posts' list will not be generated until editing post is 'published' because of WordPress REST api limitation. That means you could not __pre-view__ it.


# parameters when listtype is 'child-pages'

As ***listype***='child-pages', to identify WordPress parent static page, use either below

| parameter name to parent page| description | example |
| ---- | ---- | --- |
| ***name*** | name of parent page | name='dog' |
| ***slug*** | slug of  parent page | slug='dog' |
| ***parentId*** | page id of parent page in WordPress site | parentId='123'

Example for ***name***,
```html
<script listtype='child-pages' name='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***slug***,
```html
<script listtype='child-pages' slug='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```
Example for ***parentId***,
```html
<script listtype='child-pages' parentId='xxx' src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-post-list.min.js'></script>
```


