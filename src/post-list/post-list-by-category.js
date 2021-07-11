import { WpApiWrapper } from '../common/wpapi'

export function getPostListByCategory(scr) {
  const api = new WpApiWrapper()
    
  return new Promise(function(resolve, reject) {
    let n = scr.getAttribute('name')
    let slg = scr.getAttribute('slug')
    let id = scr.getAttribute('categoryid')
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

