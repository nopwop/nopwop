import './dashboard.css'
import {test1} from './test1'
import {test2} from './test2'

mocha.setup('bdd')

test1.execute()
test2.execute()

mocha.run()
