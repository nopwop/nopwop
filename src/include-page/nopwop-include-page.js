import {ScriptTraverser} from '../common/script-traverser'

(function(global) {
  let ctx = ScriptTraverser('nopwop-include-page', 'nopwopIncludePage')
  .init((ctx) => {
    /* nop */
  })
  .forEach((s) => {
    createContainerElement(s.element)
  })

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

})(this)
