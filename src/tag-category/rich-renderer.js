
import { CatTree } from "./category-tree"

export class RichRenderer {
  constructor(s) {
    this.scr = s.element
    this.args = s.args
  }

  /* function: renderPostList() */
  renderPostList(list) {
    let _self = this
    let obj = new CatTree({show_count: _self.args['count']})
    let tree = obj.createTree(list)
    let elmTree = obj.createElementForTree(tree)

    _self.scr.parentElement.insertBefore(elmTree, _self.scr)
  }

  /* function: renderError() */
  renderError(msg) {
    let d = document
    let parent = this.scr
    let m = d.createElement('div')
    m.classList.add('npwp-err-msg')
    m.textContent = 'nopwop: ' + msg
    parent.parentElement.insertBefore(m, parent)
  }
}