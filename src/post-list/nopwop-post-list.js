import {ScriptTraverser} from '../common/script-traverser'
import './nopwop-post-list.css'

// import renderers
import { RichPostRenderer } from '../common/rich-post-renderer'
import { SimplePostRenderer } from '../common/simple-post-renderer'

// import functions which will get post/page list
import { getPostListByCategory } from './post-list-by-category'
import { getPostListByTag } from './post-list-by-tag'
import { getPageListWithParent } from './page-list-with-parent'
import { getPostListRelated } from './post-list-related'
import { WpApiWrapper } from '../common/wpapi'

(function() {
  let ctx = ScriptTraverser('nopwop-post-list', 'nopwopPostList')
  .init((ctx) => {
    /* nop */
  })
  .forEach((s) => {
    handleScriptElement(s.element)
  })

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
    let api = new WpApiWrapper()
    let type = scr.getAttribute('listtype')
    if (type == 'child-pages') {
      return getPageListWithParent(api, scr)
    } else if (type == 'related-posts') {
      return getPostListRelated(api, scr)
    } else if (type == 'tag-posts') {
      return getPostListByTag(api, scr)
    } else if (type == 'category-posts') {
      return getPostListByCategory(api, scr)
    } else {
      return getPostListByCategory(api, scr)
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

})()
