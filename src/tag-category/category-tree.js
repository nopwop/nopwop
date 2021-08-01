import './category-tree.css'

const d = document

export class CatTree {
  constructor(options) {
    let o = options
    this.template = {item: {}, children: []}
    this.show_children = (o && ('show_children' in o)) ? o.show_children : false
    this.show_count = (o && ('show_count' in o)) ? o.show_count : true
  }
    
  proc(tree, parentId, categories) {
    let _self = this
    let list = categories.filter(i => (!('parent' in i) && parentId == 0) || (i.parent == parentId))
    list.forEach(element => {
      tree.push({item: element, children: []})
    });

    tree.forEach(element => {
      _self.proc(element.children, element.item.id, categories)
    })

    return tree
  }

  createTree(categories) {
    let tree = []
    return this.proc(tree, 0, categories)
  }

  appendItem(parent, leaf) {
    let _self = this
    let li = d.createElement('li')
    li.classList.add('cat-item')

    let a  = d.createElement('a')
    a.href = leaf.item.link
    a.textContent = leaf.item.name

    let span = d.createElement('span')
    span.textContent = leaf.item.count
    span.classList.add('entry-count')
    if (_self.show_count) 
      span.classList.add('active')

    parent.appendChild(li).appendChild(a).appendChild(span)

    if (0 < leaf.children.length) {
      let ul = d.createElement('ul')
      ul.classList.add('cat-children')
      if (_self.show_children) 
        ul.classList.add('active')

      leaf.children.forEach((i) => {
        _self.appendItem(ul, i)
      })

      let caret = d.createElement('span')
      caret.classList.add('caret')
      if (_self.show_children) 
        caret.classList.add('caret-open')

      li.prepend(caret)
      li.appendChild(ul)
    } else {
      let nc = d.createElement('span')
      nc.classList.add('no-caret')
      li.prepend(nc)
    }
  }

  addClickEventHandlers(ul) {
    let toggler = ul.querySelectorAll('.caret')
    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        this.parentElement.querySelector('.cat-children').classList.toggle('active');
        this.classList.toggle('caret-open');
      });
    }
  }

  createElementForTree(tree) {
    let _self = this
    let ul = d.createElement('ul')
    ul.classList.add('nopwop-categories')
    tree.forEach(n => {
      _self.appendItem(ul, n)
    })

    _self.addClickEventHandlers(ul)
    return ul
  }
}