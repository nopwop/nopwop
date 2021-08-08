# nopwop-accordion-ui snippet

Using nopwop-accordion-ui snippet, paragraph blocks in WordPress are shown as [Accordion UI](https://en.wikipedia.org/wiki/Accordion_(GUI)). That is, one block is shown in the title, and block next to it is shaded until user clicks the title.

# How to use

1. Add 'Custom HTML' block in editing page of WordPress
2. Copy below code and paste into the Custom HTML block while editing post
3. Write title in the following paragraph block
4. Write shaded sentence in other paragraph block next to the title.

```html
<script src='https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-accordion-ui.min.js'></script>
```

# Parameters

## background-color

Background color of accordion ui using CSS style.

## color

Text color of accordion ui using CSS style.

An example is below:



```html
<script background-color="black" color="red" src="https://cdn.jsdelivr.net/gh/nopwop/nopwop@0.1/dist/nopwop-accordion-ui.min.js"></script>
```

