# void-link
Web component extends HTMLAnchorElement. Prevent click if `href` is empty.

## Why?
When you have `<a href="#">dummy click</a>` it scrolls you to top.  
You can do `<a href="javascript:">dummy click</a>` but it can violate your CSP policy.

## Usage
```html
<a is="void-link" href="">Nothing</a>
```
