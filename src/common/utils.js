
import defaultThumbnail from '../../resources/no-image-icon.png'

export function loadCSS(styleSheet) {
  let d = document
  let list = d.getElementsByTagName('head')
  if (0 < list.length) {
    let s = d.createElement('link')
    s.rel = 'stylesheet'
    s.href = styleSheet
    list[0].appendChild(s)
  }
}

export class PostRenderer {
  constructor() {

  }

  mediaById(media_id) {
    let url = `/wp-json/wp/v2/media/${media_id}`
    return fetch(url).then(r => r.json())
  }

  /* function: renderPostList() */
  renderPostList(scr, list) {
    let d = document
    let _self = this

    let c = d.createElement('ul')
    c.classList.add('nopwop-post-list')
    scr.parentElement.insertBefore(c, scr)

    let defaultImg = scr.getAttribute('defaultImg')

    list && list.forEach(function(i) {
      _self.appendPostInfo(c, i, defaultImg)
    })
  }

  /* function: appendPostInfo() */
  appendPostInfo(parent, info, defaultImg) {
    let d = document
    let promise = null
    if (info.featured_media && (info.featured_media != 0)) {
      promise = this.mediaById(info.featured_media)
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

  /* function: renderError() */
  renderError(scr, msg) {
    let d = document
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.textContent = 'nopwop: ' + msg
    scr.parentElement.insertBefore(m, scr)
  }
}