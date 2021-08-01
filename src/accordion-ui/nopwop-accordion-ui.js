import {ScriptTraverser} from '../common/script-traverser'
import styleSheet from './nopwop-accordion-ui.css?base64'

(function() {

  const d = document

  let ctx = ScriptTraverser('nopwop-accordion-ui', 'nopwopAccordionUi')
  .init((ctx) => {
    loadCSS(styleSheet)
  })
  .forEach((s) => {
    setupAccordionUi(s.element)
  })

  function loadCSS(styleSheet) {
    let list = d.getElementsByTagName('head')
    if (0 < list.length) {
      let s = d.createElement('link')
      s.rel = 'stylesheet'
      s.href = styleSheet
      list[0].appendChild(s)
    }
  }

  function setupEvents(title, desc) {
    title.addEventListener('click', (e) => {
      desc.classList.toggle('is-open')
      title.classList.toggle('is-active')
    })
  }

  let insertRulesIndex = 500
  function insertStyleRules(scr) {
    let bgcolor = scr.getAttribute('background-color')
    let color = scr.getAttribute('color')

    if (!bgcolor && !color) return null

    let postfix = '' + insertRulesIndex++
    let addedClasses = {
      desc: `nopwop-accordion-${postfix}-desc`,
      title: `nopwop-accordion-${postfix}-title` ,
    }

    let rules = []
    if (bgcolor) {
      rules.push(`.${addedClasses.desc}.is-open {border-color: ${bgcolor};}`)
      rules.push(`.${addedClasses.title} {background-color: ${bgcolor}}`)
    }
    if (color) {
      rules.push(`.${addedClasses.title} {color: ${color}}`)
    }
    
    let s = d.createElement('style')
    d.head.appendChild(s)
    rules.forEach((r) => {
      s.sheet.insertRule(r)
    })

    return addedClasses
  }

  function addClasses(title, desc, classes) {
    if (classes) {
      desc.classList.add(classes.desc)
      title.classList.add(classes.title)
    }
  }

  function setupAccordionUi(scr) {
    let classes = insertStyleRules(scr)

    let title = scr.nextElementSibling
    title.classList.add('nopwop-accordion-title')
    let desc  = title.nextElementSibling
    desc.classList.add('nopwop-accordion-desc')

    addClasses(title, desc, classes)
    setupEvents(title, desc)
  }

})()
