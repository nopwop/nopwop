//@ts-check
class PageCtx {
  constructor(scriptName) {
    this.scriptName = scriptName
  }

  searchScriptTag(callback) {
    let _self = this
    let list = document.querySelectorAll('script')
    list.forEach((i) => {
      let a = i.getAttribute('src')
      if (a && a.indexOf(_self.scriptName) != -1) {
        callback && callback(i)
      }
    })
    return
  }
}

/**
* [description]
*   ScriptTraverser() will traverse the page and find specified script tag in HTML
*   and it returns object which contains init() func.
*   init() takes callback function with 'context' which is unique in the page 
*   
*   Usage is something like below:
*
*     let ctx = ScriptTraverser('foo-bar', 'FooBar')
*          .init((ctx) => {...})
*          .forEach((traversed) => {...})
*
*   Finally,forEach() will receive travesed object which has 'element' and 'args' property array
* 
* @param {String} scriptName script name to search (it shouldn't include '.js' or 'min.js')
* @param {String} contextName property name which is assigned to global window object by this function 
  so that to avoid duplicated execution of main logic
*
*/
//@ts-check
export const ScriptTraverser = function(scriptName, contextName) {
  
  function get_args_array(elm) {
    let args = {}
    let attr = elm.attributes
    for (let i=0; i < attr.length; i++) { args[attr[i].name] = attr[i].value } 
    return args
  }

  return {
    init : function(initCallback) {
      let ctx = null
      if (!(contextName in window)) {
        ctx = new PageCtx(scriptName)
      }

      return {
        forEach: function(eachCallback) {
          if (ctx) { 
            window.addEventListener('DOMContentLoaded', (event) => {
              
              initCallback && initCallback(ctx)

              ctx.searchScriptTag(function(scrElem) {
                let obj = {
                  args: get_args_array(scrElem), 
                  element: scrElem, 
                  insert: (elm) => {
                    scrElem.parentElement.insertBefore(elm, scrElem)
                  },
                }
                eachCallback && eachCallback(obj)
              })
            })
            window[contextName] = ctx
          }
          return window[contextName]
        }
      }
    }
  }
}
