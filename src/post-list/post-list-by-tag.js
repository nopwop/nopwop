import { WpApiWrapper } from '../common/wpapi'

export function getPostListByTag(scr) {
  const api = new WpApiWrapper()
    
  return new Promise(function(resolve, reject) {
    let n = scr.getAttribute('name')
    let slg = scr.getAttribute('slug')
    let id = scr.getAttribute('tagid')
    let per_page = scr.getAttribute('count')
    if (id) {
      api.postsByTagId(id, per_page).then(function(list) {
        resolve(list)
      })
    } else if (slg) {
      api.tagBySlug(slg).then(function(d) {
        return (d && 0 < d.length) ? api.postsByTagId(d[0].id, per_page) : Promise.resolve()
      }).then(function(list){
        resolve(list)
      })
    } else if (n) {
      api.tagBySearch(n).then(function(d) {
        return (d && 0 < d.length) ? api.postsByTagId(d[0].id, per_page) : Promise.resolve()
      }).then(function(list){
        resolve(list)
      })
    } else {
      reject(new Error('script タグにtagの指定が見つかりません'))
    } 
  })
}

