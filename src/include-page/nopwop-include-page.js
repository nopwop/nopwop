(function(global) {
  const scriptName = 'nopwop-include-page'

  if ('nopwopIncludePage' in global) {
    return;
  }

  const d = document

  function pageById(pageid) {
    let url = `/wp-json/wp/v2/pages/${pageid}?_fields=id,featured_media,title,content,date`
    return fetch(url).then(r => r.json())
  }

  function pagesBySlug(slug) {
    let url = `/wp-json/wp/v2/pages?slug=${slug}&_fields=id,featured_media,title,content,date`
    return fetch(url).then(r => r.json())
  }

  function errorMsgElement(scr, msg) {
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.style.color = 'red'
    m.textContent = 'nopwop: ' + msg
    let parent = scr.parentNode;
    parent.insertBefore(m, scr)
  }

  function appendPage(scr, page) {
    scr.insertAdjacentHTML('beforebegin', page.content.rendered)
  }

  function createContainerElement(scr) {
    let id = scr.getAttribute('pageid')
    let slg = scr.getAttribute('slug')
    if (id) {
      pageById(id).then(function(page) {
        appendPage(scr, page)
      })
    } else if (slg) {
      pagesBySlug(slg).then(function(list){
        list && list.forEach(function(page) {
          appendPage(scr, page)
        })
      })
    } else {
      errorMsgElement(scr, 'scriptタグにページID(pageid属性)かslug属性が必要です')
    }
  }

  function addContainerElements() {
    let list = d.querySelectorAll('script')
    list.forEach((i) => {
      let a = i.getAttribute('src')
      if (a && a.indexOf(scriptName) != -1) {
        createContainerElement(i)
      }
    })
    return
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    addContainerElements()
  })

  global.nopwopIncludePage = {
    render: function() {}
  }
})(this)
