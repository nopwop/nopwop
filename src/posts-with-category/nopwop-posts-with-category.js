import './nopwop-posts-with-category.css'
import { RichPostRenderer } from '../common/rich-post-renderer'
import { SimplePostRenderer } from '../common/simple-post-renderer'
import { WpApiWrapper } from '../common/wpapi'

(function() {
  const scriptName = 'nopwop-posts-with-category'

  if ('nopwopPostsWithCat' in global) {
    return;
  }

  const d = document
  const renderer = new SimplePostRenderer()
  const api = new WpApiWrapper()

  function getPostListByCategory(scr) {
    return new Promise(function(resolve, reject) {
      let n = scr.getAttribute('name')
      let slg = scr.getAttribute('slug')
      let id = scr.getAttribute('categoryId')
      let per_page = scr.getAttribute('count')
      if (id) {
        api.postsByCategoryId(id, per_page).then(function(list) {
          resolve(list)
        })
      } else if (slg) {
        api.categoryBySlug(slg).then(function(d) {
          return (d && 0 < d.length) ? api.postsByCategoryId(d[0].id, per_page) : Promise.resolve()
        }).then(function(list){
          resolve(list)
        })
      } else if (n) {
        api.categoryBySearch(n).then(function(d) {
          return (d && 0 < d.length) ? api.postsByCategoryId(d[0].id, per_page) : Promise.resolve()
        }).then(function(list){
          resolve(list)
        })
      } else {
        reject(new Error('script タグにカテゴリの指定が見つかりません'))
      } 
    })
  }

  function handleScriptElement(scr) {
    getPostListByCategory(scr).then(list => {
      list && renderer.renderPostList(scr, list)
    }).catch(err => {
      renderer.renderError(scr, err.message)
    });
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

  global.nopwopPostsWithCat = {
    render: function() {}
  }
})()
