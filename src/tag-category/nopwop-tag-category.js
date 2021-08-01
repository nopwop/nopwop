import {ScriptTraverser} from '../common/script-traverser'
import './nopwop-tag-category.css'

// import renderers
import { RichRenderer } from './rich-renderer'
import { SimpleRenderer } from './simple-renderer'

// import functions which will get post/page list
import { getCategoryList } from './get-category-list'
import { getTagList } from './get-tag-list'
import { WpApiWrapper } from '../common/wpapi'

(function() {
  let ctx = ScriptTraverser('nopwop-tag-category', 'nopwopTagCategory')
  .init((ctx) => {
    /* nop */
  })
  .forEach((s) => {
    handleScriptElement(s)
  })

  const d = document

  function selectRenderer(s) {
    let listStyle = s.args["list-style"]
    if (listStyle == 'simple') {
      return new SimpleRenderer(s)
    } else {
      return new RichRenderer(s)
    }
  }

  function selectHandlerType(s) {
    let api = new WpApiWrapper()
    let type = s.args['list-type']
    if (type == 'category') {
      return getCategoryList(api, s)
    } else if (type == 'tag') {
      return getTagList(api, s)
    } else {
      return getCategoryList(api, s)
    }
  }

  function handleScriptElement(s) {
    let renderer = selectRenderer(s)
    selectHandlerType(s).then(list => {
      list && renderer.renderPostList(list)
    }).catch(err => {
      renderer.renderError(err.message)
    })
  }

})()
