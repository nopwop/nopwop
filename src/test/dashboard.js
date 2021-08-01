import './dashboard.css'
import {test1} from './test1'
import {testCatTree} from './test-cat-tree'

mocha.setup('bdd')

test1.execute()
testCatTree.execute()

mocha.run()
