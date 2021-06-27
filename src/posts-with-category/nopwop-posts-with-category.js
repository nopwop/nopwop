
(function(global) {
  const scriptName = 'nopwop-posts-with-category'
  const styleSheetName = '/nopwop/src/posts-with-category/nopwop-posts-with-category.css'
  const defaultThumbnail = '/nopwop/resources/no-image-icon.png'
  //const styleSheetName = 'data:text/css;base64,LyogY3NzICovCgoKLm5wd3AtcG9zdC1jb250YWluZXIgLm5wd3AtZXJyLW1zZyB7CiAgY29sb3I6IHJlZDsKfQoKLm5wd3AtcG9zdC1jb250YWluZXIgLm5wd3AtcG9zdC1jYXJkIHsKICBkaXNwbGF5OiBmbGV4Owp9CgoubnB3cC1wb3N0LWNvbnRhaW5lciAubnB3cC1jb2wtMiB7CiAgbWFyZ2luOiA4cHggOHB4Owp9CgoubnB3cC1wb3N0LWNvbnRhaW5lciAubnB3cC1leGNlcnB0IHsKICBmb250LXNpemU6IDcwJTsKfQo='

  if ('nopwopPostsWithCat' in global) {
    return;
  }

  const d = document

  function loadCSS(styleSheet) {
    let list = d.getElementsByTagName('head')
    if (0 < list.length) {
      let s = d.createElement('link')
      s.rel = 'stylesheet'
      s.href = styleSheet
      list[0].appendChild(s)
    }
  }

  function postsByCategoryId(cat_id, per_page) {
    let pp = per_page || 50
    let url = `/wp-json/wp/v2/posts?categories=${cat_id}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  function postById(post_id) {
    let url = `/wp-json/wp/v2/posts/${post_id}?_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  function categoryBySlug(slug) {
    let url = `/wp-json/wp/v2/categories?slug=${slug}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  function categoryBySearch(name) {
    let url = `/wp-json/wp/v2/categories?search=${name}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  function mediaById(media_id) {
    let url = `/wp-json/wp/v2/media/${media_id}`
    return fetch(url).then(r => r.json())
  }

  function errorMsgElement(msg) {
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.textContent = 'nopwop: ' + msg
    return m
  }

  function appendPostInfo(parent, info, defaultImg) {

    let promise = null
    if (info.featured_media && (info.featured_media != 0)) {
      promise = mediaById(info.featured_media)
    } else {
      promise = Promise.resolve()
    }

    promise.then(function(media) {
      let m = d.createElement('li')
      m.classList.add('post-list-item')
      let c = d.createElement('div')
      c.classList.add('post-list-container')
      m.appendChild(c)

      { // left side 
        let left = d.createElement('div')
        left.classList.add('post-list-eyecatch')

        let a = d.createElement('a')
        a.classList.add('post-list-eyecatch-link')
        a.href = info.link

        let i = d.createElement('img')
        i.classList.add('npwp-thumbnail')
        i.src = (media) ? media.media_details.sizes.thumbnail.source_url : (defaultImg ? defaultImg : defaultThumbnail)

        left.appendChild(a).appendChild(i)
        c.appendChild(left)
      }

      { // right side
        let right = d.createElement('div')
        right.classList.add('post-list-contents')

        let p = d.createElement('div')
        p.classList.add('post-list-date')
        p.textContent = info.date.match(new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}'))

        let a = d.createElement('a')
        a.classList.add('post-list-contents-link')
        a.href = info.link
        
        let h = d.createElement('h3')
        h.classList.add('post-list-header')
        h.textContent = info.title.rendered
    
        let e = d.createElement('div')
        e.classList.add('post-list-desc')
        e.innerHTML = info.excerpt.rendered

        right.appendChild(p)
        right.appendChild(a).appendChild(h)
        right.appendChild(e)
        c.appendChild(right)
      }
  
      parent.appendChild(m)
    })
  }

  function createContainerElement(scr) {
    let c = d.createElement('ul')
    c.classList.add('nopwop-post-list')
    scr.parentElement.insertBefore(c, scr)

    let n = scr.getAttribute('name')
    let slg = scr.getAttribute('slug')
    let id = scr.getAttribute('categoryId')
    let defaultImg = scr.getAttribute('defaultImg')
    let per_page = scr.getAttribute('count')
    if (id) {
      postsByCategoryId(id, per_page).then(function(list) {
        list && list.forEach(function(i) {
          appendPostInfo(c, i, defaultImg)
        })
      })
    } else if (slg) {
      categoryBySlug(slg).then(function(d) {
        return (d && 0 < d.length) ? postsByCategoryId(d[0].id, per_page) : Promise.resolve()
      }).then(function(list){
        list && list.forEach(function(i) {
          appendPostInfo(c, i, defaultImg)
        })
      })
    } else if (n) {
      categoryBySearch(n).then(function(d) {
        return (d && 0 < d.length) ? postsByCategoryId(d[0].id, per_page) : Promise.resolve()
      }).then(function(list){
        list && list.forEach(function(i) {
            appendPostInfo(c, i, defaultImg)
        })
      })
    } else {
      let elm = errorMsgElement('script タグにカテゴリの指定が見つかりません')
      c.appendChild(elm)
    }
    return c
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

  loadCSS(styleSheetName)  

  window.addEventListener('DOMContentLoaded', (event) => {
    addContainerElements()
  })

  global.nopwopPostsWithCat = {
    render: function() {}
  }
})(this)
