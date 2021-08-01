export function getCategoryList(api, scr) {
  return new Promise(function(resolve, reject) {
    fetch('/wp-json/wp/v2/categories?per_page=100&orderby=count&order=desc&_fields=id,count,link,name,slug').then(r=>r.json())
      .then((data) => {resolve(data)})
  })
}
