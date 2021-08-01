
// sample: https://shizuka-na-kazushi.style/wp-json/wp/v2/pages?parent=6797&per_page=10&_fields=id,featured_media,title,link,excerpt,date
let pages_defaults = [
  {
    date: "2021-04-04T13:47:18",
    excerpt: {rendered: "other - exerpt", protected: false},
    featured_media: 0,
    id: 6802,
    link: "https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/",
    title: {rendered: "other"},
  },
    {
    date: "2021-04-11T13:20:29",
    excerpt: {rendered: "hello - excerpt", protected: false},
    featured_media: 0,
    id: 6832,
    link: "https://shizuka-na-kazushi.style/ftp-exchange-faq/google-not-certify-developer-when-creating-ftp-account/",
    title:{rendered: "hello"}
  },
  {
    date: "2021-04-04T13:47:18",
    excerpt: {rendered: "happy - exerpt", protected: false},
    featured_media: 0,
    id: 6801,
    link: "https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/",
    title: {rendered: "happy"},
  },
  ]

let media_default = 
  {
    id: 6320,
    date:'2020-11-08T12:46:46',
    media_details: {
      sizes: {
        thumbnail: {
          source_url: '/nopwop/resources/no-image-icon.png'
        },
      },
    },
  }

export class WpApiWrapper {
  constructor() {

  }

  mediaById(media_id) {
    let data = {default: media_default}
    return new Promise(function(resolve, reject) {
      if (media_id in data) {
        resolve(data[media_id])
      } else {
        resolve(data.default)
      }
    })
  }

  postsByCategoryId(cat_id, per_page) {
    let pp = per_page || 50
    let url = `/wp-json/wp/v2/posts?categories=${cat_id}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`
    return Promise.reject(new Error(`postsByCategoryId()stub not implemented`))
  }

  postsByTagId(tag_id, per_page) {
    let pp = per_page || 30
    let url = `/wp-json/wp/v2/posts?tags=${tag_id}&per_page=${pp}&_fields=id,link,title,featured_media,excerpt,date`
    return Promise.reject(new Error(`postsByTagId()stub not implemented`))
  }

  postById(post_id) {
    let url = `/wp-json/wp/v2/posts/${post_id}?_fields=id,featured_media,title,link,excerpt,date,tags,categories`
    return Promise.reject(new Error(`postById()stub not implemented`))
  }

  categoryBySlug(slug) {
    let url = `/wp-json/wp/v2/categories?slug=${slug}&_fields=id,name,link,count`
    return Promise.reject(new Error(`categoryBySlug()stub not implemented`))
  }

  categoryBySearch(name) {
    let url = `/wp-json/wp/v2/categories?search=${name}&_fields=id,name,link,count`
    return Promise.reject(new Error(`categoryBySearch()stub not implemented`))
  }

  tagBySlug(slug) {
    let url = `/wp-json/wp/v2/tags?slug=${slug}&_fields=id,name,link,count`
    return Promise.reject(new Error(`tagBySlug()stub not implemented`))
  }

  tagBySearch(name) {
    let url = `/wp-json/wp/v2/tags?search=${name}&_fields=id,name,link,count`
    return Promise.reject(new Error(`tagBySearch()stub not implemented`))
  }

  childPagesOf(parent_id, per_page) {
    let ret = pages_defaults.filter((i) => {return i.id == parent_id})
    return new Promise(function(resolve, reject) {
      if (ret.length) {
        resolve(ret)
      } else {
        resolve(pages_defaults)
      }
    })
  }

  pagesBySlug(slug) {
    let data = {default: pages_defaults}
    data['happy']  = [
      {
        date: "2021-04-04T13:47:18",
        excerpt: {rendered: "<p>現在、ftp exchangeは以下の3rd partyサービスをサポートしています。 Googleフォト Googleドライブ OneDrive Dropbox</p>\n", protected: false},
        featured_media: 0,
        id: 6801,
        link: "https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/",
        title: {rendered: "dummy-6801"},
      }]
    return new Promise(function(resolve, reject) {
      if (slug in data) {
        resolve(data[slug])
      } else {
        resolve(data.default)
      }
    })
  }

  pagesBySearch(name) {
    let data = {default: pages_defaults}
    data['hello']  = [{
        date: "2021-04-04T13:47:18",
        excerpt: {rendered: "<p>現在、ftp exchangeは以下の3rd partyサービスをサポートしています。 Googleフォト Googleドライブ OneDrive Dropbox</p>\n", protected: false},
        featured_media: 0,
        id: 6832,
        link: "https://shizuka-na-kazushi.style/ftp-exchange-faq/what-3rd-party-services-ftp-exchange-supports/",
        title: {rendered: "dummy-6832"},
    }]
    return new Promise(function(resolve, reject) {
      if (name in data) {
        resolve(data[name])
      } else {
        resolve(data.default)
      }
    })
  }
}