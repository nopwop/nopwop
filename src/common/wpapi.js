export class WpApiWrapper {
  constructor() {

  }

  mediaById(media_id) {
    let url = `/wp-json/wp/v2/media/${media_id}`
    return fetch(url).then(r => r.json())
  }

  postsByCategoryId(cat_id, per_page) {
    let pp = per_page || 50
    let url = `/wp-json/wp/v2/posts?categories=${cat_id}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  postsByTagId(tag_id, per_page) {
    let pp = per_page || 30
    let url = `/wp-json/wp/v2/posts?tags=${tag_id}&per_page=${pp}&_fields=id,link,title,featured_media,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  postById(post_id) {
    let url = `/wp-json/wp/v2/posts/${post_id}?_fields=id,featured_media,title,link,excerpt,date,tags,categories`
    return fetch(url).then(r => r.json())
  }

  categoryBySlug(slug) {
    let url = `/wp-json/wp/v2/categories?slug=${slug}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  categoryBySearch(name) {
    let url = `/wp-json/wp/v2/categories?search=${name}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  tagBySlug(slug) {
    let url = `/wp-json/wp/v2/tags?slug=${slug}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  tagBySearch(name) {
    let url = `/wp-json/wp/v2/tags?search=${name}&_fields=id,name,link,count`
    return fetch(url).then(r => r.json())
  }

  childPagesOf(parent_id, per_page) {
    let pp = per_page || 50
    let url = `/wp-json/wp/v2/pages?parent=${parent_id}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  pagesBySlug(slug) {
    let url = `/wp-json/wp/v2/pages?slug=${slug}&per_page=${pp}&_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }

  pagesBySearch(name) {
    let url = `/wp-json/wp/v2/pages?search=${name}&_fields=id,featured_media,title,link,excerpt,date`
    return fetch(url).then(r => r.json())
  }
}