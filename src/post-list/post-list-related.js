import { WpApiWrapper } from '../common/wpapi'

const related_tags_max = 3
const related_categories_max = 3
const related_max = 9

const api = new WpApiWrapper()

function getCurrentPostId() {
  var el = document.getElementsByTagName('body')
  var classes = el[0].className.split(' ')
  var postid = null
  classes.forEach((i) => {if (i.split('-')[0] == 'postid') postid = i.split('-')[1]})
  return postid
  //return '6951'
}

function getTagRelatedPost(post) {
  if (!post.tags || !post.tags.length || post.tags.length < 0) 
    return Promise.resolve([])
  
  let tags = post.tags
  let listOfPost = []
  return new Promise(function(resolve, reject) {
    let promise = Promise.resolve()
    let count = 0
    for (let i=0; (i < tags.length) && (count < related_tags_max); i++) {
      promise = promise.then(data => {
        if (data && data.id != post.id) {
          listOfPost = listOfPost.concat(data)
          count++
        }
        return api.postsByTagId(tags[i], 10)
      })
    }
    promise.then(data => {
      if (data && data.id != post.id && count < related_tags_max) {
        listOfPost = listOfPost.concat(data)
      }
      resolve(listOfPost)
    })
  })
}

function getCategoryRelatedPost(post) {
  if (!post.categories || !post.categories.length || post.categories.length < 0) 
    return Promise.resolve([])
  
  let categories = post.categories
  let listOfPost = []
  return new Promise(function(resolve, reject) {
    let promise = Promise.resolve()
    let count = 0
    for (let i=0; (i < categories.length) && (count < related_categories_max); i++) {
      promise = promise.then(data => {
        if (data && data.id != post.id) {
          listOfPost = listOfPost.concat(data)
          count++
        }
        return api.postsByCategoryId(categories[i], 10)
      })
    }
    promise.then(data => {
      if (data && data.id != post.id && count < related_categories_max) {
        listOfPost = listOfPost.concat(data)
      }
      resolve(listOfPost)
    })
  })
}

function chosePostsFrom(current, listFromCategories, listFromTags) {
  let ret = []
  let l = listFromCategories.concat(listFromTags)

  // sort by post.id
  l.sort((a, b) => b.id - a.id)

  // remove duplicated id on the SORTED list
  let trackingId = null
  ret = l.filter((i) => {
    if (i.id != trackingId) {
      trackingId = i.id
      return (current.id != i.id);
    } else {
      return false;
    }
  })

  // sort if featured_media exists
  ret.sort((a, b) => {
    if (a.featured_media) {
      return 1
    } else if (b.featured_media) {
      return -1
    } else {
      return 0
    }
  })

  return ret.slice(0, related_max)
}

function getPostRelatedTo(post) {
  let list_from_categories = []
  let list_from_tags = []
  return new Promise(function(resolve, reject) {
    getCategoryRelatedPost(post).then(list => {
      list_from_categories = list
      return getTagRelatedPost(post)
    }).then(list => {
      list_from_tags = list
      resolve(chosePostsFrom(post, list_from_categories, list_from_tags))
    })
  })
}

export function getPostListRelated(scr) {
  return new Promise(function(resolve, reject) {
    api.postById(getCurrentPostId()).then((currentPost) => {
      return getPostRelatedTo(currentPost)
    }).then(list => {
      resolve(list)
    })  
  })
}

