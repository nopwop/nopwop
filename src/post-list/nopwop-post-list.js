import './nopwop-post-list.css'

// import renderers
import { RichPostRenderer } from '../common/rich-post-renderer'
import { SimplePostRenderer } from '../common/simple-post-renderer'

// import functions which will get post/page list
import { getPostListByCategory } from './post-list-by-category'
import { getPostListByTag } from './post-list-by-tag'
import { getPageListWithParent } from './page-list-with-parent'
import { getPostListRelated } from './post-list-related'

(function() {
  const scriptName = 'nopwop-post-list'

  if ('nopwopPostList' in global) {
    return;
  }

  const d = document

  function selectRenderer(scr) {
    let type = scr.getAttribute('liststyle')
    if (type == 'simple') {
      return new SimplePostRenderer()
    } else {
      return new RichPostRenderer()
    }
  }

  function selectHandlerType(scr) {
    let type = scr.getAttribute('listtype')
    if (type == 'child-pages') {
      return getPageListWithParent(scr)
    } else if (type == 'related-posts') {
      return getPostListRelated(scr)
    } else if (type == 'tag-posts') {
      return getPostListByTag(scr)
    } else if (type == 'category-posts') {
      return getPostListByCategory(scr)
    } else {
      return getPostListByCategory(scr)
    }
  }

  function handleScriptElement(scr) {
    let renderer = selectRenderer(scr)
    selectHandlerType(scr).then(list => {
      list && renderer.renderPostList(scr, list)
    }).catch(err => {
      renderer.renderError(scr, err.message)
    })
  }

  function addContainerElements() {
    let list = d.querySelectorAll('script')
    list.forEach((i) => {
      let a = i.getAttribute('src')
      if (a && a.indexOf(scriptName) != -1) {
        handleScriptElement(i)
      }
    })
    return
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    addContainerElements()
  })

  global.nopwopPostList = {
    nop: function() {}
  }
})()
