
import {ScriptTraverser} from '../../common/script-traverser'

(function() {
  let ctx = ScriptTraverser('script-traverser', 'testScriptTraverser')
  .init((ctx) => {
    ctx['index'] = 240
  })
  .forEach((s) => {
    s.insert(createInsertElement(ctx, s.element, s.args))
  })

  /**
  * @param {context} ctx page context for nopwop
  * @param {HTMLElement} scriptElement HTMLScriptElement going to be inserted 
  * @param {Array} args argument(or property) array which scriptElement has
  */
  function createInsertElement(c, scriptElement, args) {
    
    let temp = ''
    for (let key in args) {
      temp += 'key=: ' + key + ': value=: ' + args[key] + '<br>'
    }

    let d = document
    let elm = d.createElement('div')
    elm.classList.add('traverser-box')
    elm.id = 'test-id-' + args.id
    elm.innerHTML = JSON.stringify(args)
    return elm
  }

})()

