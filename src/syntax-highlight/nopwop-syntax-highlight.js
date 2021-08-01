// let svg_clipboard = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiPjwvcGF0aD48cmVjdCB4PSI4IiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSI0IiByeD0iMSIgcnk9IjEiPjwvcmVjdD48L3N2Zz4='
import svg_clipboard from './clipboard.svg'

(function () {

  const traverser = function(contextName) {
    return {
      init : function(initCallback) {
        let ctx = null
        if (!(contextName in window)) {
          ctx = {dummy: 'dummy'}
        }
        
        return {
          forEach: function(eachCallback) {
            if (ctx) {
              window.addEventListener('DOMContentLoaded', (event) => {
                initCallback && initCallback()
                let list = d.querySelectorAll('pre code')
                list.forEach(function (elm) {
                  eachCallback && eachCallback(elm.parentElement)
                })
                window[contextName] = ctx
              })
            }
          }
        }
     }
    }
  }

  let d = document

  function loadHighlightJs() {
    if ('hljs' in window) return

    let cssfile = 'vs2015.min.css'
    //let cssfile = 'dark.min.css'
    let url_css = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/${cssfile}`
    let url_js = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js`

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
      s.onload = function () {
        hljs.highlightAll()
      }
    }
  }

  function createPlate() {
    let p = d.createElement('div')
    let s = p.style
    s.display = 'flex'
    s.position = 'absolute'
    s.right = '5px'
    s.transform = 'translateY(-10px)'
    s.alignItems = 'center'
    return p
  }

  function createCopiedMsg() {
    let m = d.createElement('div')
    m.textContent = 'コピーしました！'
    let s = m.style
    s.fontSize = '10px'
    s.display = 'none'
    s.marginRight = '5px'
    return m
  }

  function animateToHide(m) {
    m.style.opacity = 1.0
    let countMax = 10
    let count = 0
    let t = setInterval(function () {
      if (count < countMax) {
        count += 1
        m.style.opacity = 1.0 * (countMax - count) / countMax
      } else {
        m.display = 'none'
        clearInterval(t)
      }
    }, 150)
  }

  function createClipboardIcon() {
    let i = d.createElement('img')
    // i.src = './clipboard.svg'
    i.src = svg_clipboard
    i.setAttribute('width', '16px')
    i.setAttribute('height', '16px')
    return i
  }

  function createCopyButton(elm) {
    let p = createPlate()
    let m = createCopiedMsg()
    p.appendChild(m)
    let btn = d.createElement('button')
    p.appendChild(btn)

    let i = createClipboardIcon()
    btn.appendChild(i)
    btn.addEventListener('click', function () {
      let r = d.createRange()
      r.selectNode(elm)
      let n = window.getSelection()
      if (n) {
        n.removeAllRanges()
        n.addRange(r)
        d.execCommand('copy')
        n.removeAllRanges()
        m.style.display = ''
        animateToHide(m)
        // setTimeout(function() {m.style.display='none'}, 1500)
      }
    })

    let parent = elm.parentElement
    parent.insertBefore(p, elm)
    return p
  }

  /*
  window.addEventListener('DOMContentLoaded', (event) => {
    let list = d.querySelectorAll('pre code')
    list.forEach(function (elm) {
      createCopyButton(elm.parentElement)
    })
    loadHighlightJs()
  })

  window.syntaxHighlight = {
    render: function () {
      console.log('render()!')
    }
  }
  */

  traverser('syntaxHighlight').init(() => {
    loadHighlightJs()
  }).forEach((elm) => {
    createCopyButton(elm)
  })
})()
