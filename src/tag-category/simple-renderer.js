export class SimpleRenderer {
  constructor(s) {
    this.scr = s.element
    this.args = s.args
  }

  /* function: renderPostList() */
  renderPostList(list) {
    let d = document
    let _self = this
    let parent = _self.scr

    let c = d.createElement('ul')
    // c.classList.add('nopwop-simple-post-list')
    parent.parentElement.insertBefore(c, parent)

    list && list.forEach(function(i) {
      _self.appendEachItem(c, i)
    })
  }

  appendCountForItem(parent, info) {
    let _self = this
    let d = document
    
    if (_self.args['count']) {
      let span = d.createElement('span')
      span.textContent = ' (' + info.count + ') '
      parent.appendChild(span)
    }
  }

  /* function: appendEachItem() */
  appendEachItem(parent, info) {
    let _self = this
    let d = document

    let m = d.createElement('li')
    // m.classList.add('post-simple-list-item')

    let a = d.createElement('a')
    // a.classList.add('post-list-eyecatch-link')
    a.href = info.link
    a.textContent = info.name
    _self.appendCountForItem(a, info)

    parent.appendChild(m).appendChild(a)
  }

  /* function: renderError() */
  renderError(msg) {
    let d = document
    let parent = this.scr
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.textContent = 'nopwop: ' + msg
    parent.parentElement.insertBefore(m, parent)
  }
}