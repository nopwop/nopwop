import {ScriptTraverser} from '../common/script-traverser'
import nopwop_search_box_css from './nopwop-search-box.css'
import autocomplete_js from '!!raw-loader!../../lib/JavaScript-autoComplete-master/auto-complete.min.js'

(function() {

  // const autocomplete_js_url = '/nopwop/lib/JavaScript-autoComplete-master/auto-complete.js'
  const autocomplete_js_url = URL.createObjectURL(new Blob([autocomplete_js], {type: 'text/javascript'}))

  const per_page = 30
  const d = document
  const className_search_box = 'nopwop-search-box-input'

  let ctx = ScriptTraverser('nopwop-search-box', 'nopwopSearchBox')
  .init((ctx) => {
    loadAutocomplete(() => {
      let elements = d.querySelectorAll(`.${className_search_box}`)
      elements.forEach(el => { attachAutocomplete(el) })
    })
  })
  .forEach((s) => {
    createContainerElement(s.element)
  })

  function attachAutocomplete(element) {
    // console.log('## attachAutocomplete ##')
    new autoComplete({
      selector: element,
      minChars: 2,
      source: function(term, suggest) {
        if (term.length < 1) { return [] }
        let url = `/wp-json/wp/v2/search?search=${term}&per_page=${per_page}`
        fetch(url).then((r)=>r.json()).then((results) => {
          suggest(results)
        })
      },
      renderItem: function (item, search){
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return `<div class="autocomplete-suggestion" data-val="${search}" target-url="${item.url}">${item.title.replace(re, "<b>$1</b>")}</div>`
      },
      onSelect: function(event, term, item) {
        let target_url = item.getAttribute('target-url')
        if (target_url) location.href = target_url
      },
    })
  }

  function loadAutocomplete(onLoadCompleted) {
    if ('autoComplete' in window) return 

    let url_css = nopwop_search_box_css
    let url_js  = autocomplete_js_url

    let h = d.getElementsByTagName('head')
    if (0 < h.length) {
        h = h[0]
        let c = d.createElement('link')
        c.setAttribute('rel', 'stylesheet')
        c.setAttribute('href', url_css)
        h.appendChild(c)

        let s = d.createElement('script')
        s.setAttribute('src', url_js)
        h.appendChild(s)
        s.addEventListener('load', onLoadCompleted)
    }
  }

  function createBoxElement() {

    let div = d.createElement('div')
    div.classList.add('nopwop-search-box')

    let input = d.createElement('input')
    input.classList.add(className_search_box)
    input.type = 'text'
    input.setAttribute('placeholder', 'サイト内検索')

    input.addEventListener('keydown', (e) => {
      const key = e.code
      // enter key
      if (key == 'Enter' && input.value != '') {
        let action = '/?s=' + input.value
        location.href = action  
      }
    })
      
    div.appendChild(input)
    return div
  }

  function createContainerElement(scr) {
    let top = createBoxElement()

    scr.parentElement.insertBefore(top, scr)
  }

})(this)

