import {ScriptTraverser} from '../common/script-traverser'
import './nopwop-toc.css'

(function() {
  let ctx = ScriptTraverser('nopwop-toc', 'nopwopToc')
  .init((ctx) => {
    ctx['anchorIdx'] = 1000
  })
  .forEach((s) => {
    createContainerElement(s.element)
  })

  const d = document

  function adjustAnchorPosition(helm) {
    function pxToNum(str) {return parseFloat(str.slice(0, str.indexOf('pm')))}

    const shift_pixel = 130;
    let decr = getComputedStyle(helm)
    if (decr) {
      let mtop = decr.getPropertyValue('margin-top')
      let ptop = decr.getPropertyValue('padding-top')

      let addional_shift = pxToNum(mtop) + pxToNum(ptop)
      helm.style.marginTop = (-shift_pixel) + 'px'
      helm.style.paddingTop = (shift_pixel + addional_shift) + 'px'
    }
  }

  function createListItem(hobj) {
    let ref = 'nopwoptoc-' + (ctx['anchorIdx'])++
    let sectionElm = hobj.element
    // sectionElm.classList.add('nopwop-toc-anchor')
    adjustAnchorPosition(sectionElm)

    // hx tag already have id attributes, toc should link to it
    if ('id' in sectionElm && sectionElm.id != '') {
      ref = sectionElm.id
    } else {
      sectionElm.id = ref
    }
    
    let li = d.createElement('li')
    let a = d.createElement('a')
    a.textContent = hobj.element.textContent
    a.href = '#' + ref

    li.appendChild(a)
    return li
  }

  function createTocBox() {
    let elm = d.createElement('nav')
    elm.classList.add('nopwop-toc-box')
    let h2 = d.createElement('h2')
    h2.textContent = '目次'
    elm.appendChild(h2)
    return elm
  }

  function createTocBody(harray) {
    let top = d.createElement('ul')
    let elmstack = [top]
    let curNum = -1
    let li = null
    harray.forEach((i) => {
      curNum = (curNum < 0) ? i.hnum : curNum

      if (curNum < i.hnum) {
        let e = d.createElement('ul')
        li && li.appendChild(e)
        elmstack.push(e)
      } else if (i.hnum < curNum && 1 <= elmstack.length) {
        elmstack.pop()
      }

      curNum = i.hnum
      li = createListItem(i)
      elmstack.slice(-1)[0].appendChild(li)
    })
    return top
  }

  function renderToc(scr, harray) {
    if (harray <= 0)
      return

    let top = createTocBox()
    top.appendChild(createTocBody(harray))

    scr.parentElement.insertBefore(top, scr)
  }

  function searchHxElement(workElm, harray) {
    while (workElm) {
      if(workElm.tagName.toLowerCase().match(/^h[1-6]/)){
        let hnum = workElm.tagName.slice(1)
        harray.push({hnum: hnum, element: workElm})
      }
      workElm = workElm.nextElementSibling
    }
  }

  function createContainerElement(scr) {
    let elm = scr.parentElement
    let workElm = elm.firstElementChild

    let harray = []
    searchHxElement(workElm, harray)
    renderToc(scr, harray)
  }

})()

