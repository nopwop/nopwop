export class SimplePostRenderer {
  constructor() {

  }

  /* function: renderPostList() */
  renderPostList(scr, list) {
    let d = document
    let _self = this

    let c = d.createElement('ul')
    // c.classList.add('nopwop-simple-post-list')
    scr.parentElement.insertBefore(c, scr)

    list && list.forEach(function(i) {
      _self.appendPostInfo(c, i)
    })
  }

  /* function: appendPostInfo() */
  appendPostInfo(parent, info) {
    let d = document
    let promise = Promise.resolve()

    promise.then(function(media) {
      let m = d.createElement('li')
      // m.classList.add('post-simple-list-item')
      let a = d.createElement('a')
      // a.classList.add('post-list-eyecatch-link')
      a.href = info.link
      a.textContent = info.title.rendered

      parent.appendChild(m).appendChild(a)
    })
  }

  /* function: renderError() */
  renderError(scr, msg) {
    let d = document
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.textContent = 'nopwop: ' + msg
    scr.parentElement.insertBefore(m, scr)
  }
}