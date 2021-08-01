import { CatTree } from "../tag-category/category-tree";

const wpDummyData = 
  [
    {
        "id": 7573,
        "count": 76,
        "link": "https://shizuka-na-kazushi.style/category/lifestyle/",
        "name": "ライフスタイル",
        "slug": "lifestyle",
        "parent": 0
    },
    {
        "id": 7574,
        "count": 46,
        "link": "https://shizuka-na-kazushi.style/category/lifehack/",
        "name": "ライフハック",
        "slug": "lifehack",
        "parent": 0
    },
    {
        "id": 7577,
        "count": 42,
        "link": "https://shizuka-na-kazushi.style/category/local-travel/",
        "name": "地域（世田谷）と旅行",
        "slug": "local-travel",
        "parent": 0
    },
    {
        "id": 7578,
        "count": 41,
        "link": "https://shizuka-na-kazushi.style/category/cooking/",
        "name": "料理・レシピ",
        "slug": "cooking",
        "parent": 0
    },
    {
        "id": 7572,
        "count": 38,
        "link": "https://shizuka-na-kazushi.style/category/programming/",
        "name": "プログラミング",
        "slug": "programming",
        "parent": 0
    },
    {
        "id": 7575,
        "count": 34,
        "link": "https://shizuka-na-kazushi.style/category/family/",
        "name": "家族と自分",
        "slug": "family",
        "parent": 0
    },
    {
        "id": 7569,
        "count": 33,
        "link": "https://shizuka-na-kazushi.style/category/web-design/",
        "name": "Webデザイン",
        "slug": "web-design",
        "parent": 0
    },
    {
        "id": 7576,
        "count": 33,
        "link": "https://shizuka-na-kazushi.style/category/architecture/",
        "name": "建築・リノベ",
        "slug": "architecture",
        "parent": 0
    },
    {
        "id": 7570,
        "count": 22,
        "link": "https://shizuka-na-kazushi.style/category/entertainment/",
        "name": "エンターテイメント",
        "slug": "entertainment",
        "parent": 0
    },
    {
        "id": 7571,
        "count": 16,
        "link": "https://shizuka-na-kazushi.style/category/network/",
        "name": "ネットワーク",
        "slug": "network",
        "parent": 0
    },
    {
        "id": 1,
        "count": 0,
        "link": "https://shizuka-na-kazushi.style/category/%e6%9c%aa%e5%88%86%e9%a1%9e/",
        "name": "未分類",
        "slug": "%e6%9c%aa%e5%88%86%e9%a1%9e",
        "parent": 0
    },
    {
      "id": 1000,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/food/",
      "name": "food",
      "slug": "food",
      "parent": 0
    },
    {
      "id": 1001,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/vegitable/",
      "name": "vegitable",
      "slug": "vegitable",
      "parent": 1000,
    },
    {
      "id": 1002,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/meat/",
      "name": "meat",
      "slug": "meat",
      "parent": 1000,
    },  
    {
      "id": 1003,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/fish/",
      "name": "fish",
      "slug": "fish",
      "parent": 1000,
    },      
    {
      "id": 1004,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/fruits/",
      "name": "fruits",
      "slug": "fruits",
      "parent": 1000,
    },  
    {
      "id": 1005,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/apple/",
      "name": "apple",
      "slug": "apple",
      "parent": 1004,
    },  
    {
      "id": 1006,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/remon/",
      "name": "remon",
      "slug": "remon",
      "parent": 1004,
    },
    {
      "id": 1007,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/grape/",
      "name": "grape",
      "slug": "grape",
      "parent": 1004,
    }, 
    {
      "id": 1008,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/chicken/",
      "name": "chicken",
      "slug": "chicken",
      "parent": 1002,
    },
    {
      "id": 1009,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/beaf/",
      "name": "beaf",
      "slug": "beaf",
      "parent": 1002,
    },    
    {
      "id": 1010,
      "count": 0,
      "link": "https://shizuka-na-kazushi.style/category/poke/",
      "name": "poke",
      "slug": "poke",
      "parent": 1002,
    },    
  
  ]

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function execute() {
  let expect = chai.expect

  describe('category tree', function() {

    let dummyDataSource = null
    before(function() {
      dummyDataSource = shuffle(wpDummyData)
    })

    // *** ***/
    it('Category structure is proper', function(done) {
      let obj = new CatTree()
      let tree = obj.createTree(dummyDataSource)

      let food   = tree.filter(i => (i.item.name == 'food'))
      expect(food.length).to.be.equal(1)
      expect(food[0].children.length).to.be.equal(4)

      let fruits = food[0].children.filter(i => (i.item.name == 'fruits'))
      expect(fruits.length).to.be.equal(1)
      expect(fruits[0].children.length).to.be.equal(3)

      let meat   = food[0].children.filter(i => (i.item.name == 'meat'))
      expect(meat.length).to.be.equal(1)
      expect(meat[0].children.length).to.be.equal(3)

      let fish   = food[0].children.filter(i => (i.item.name == 'fish'))
      expect(fish.length).to.be.equal(1)
      expect(fish[0].children.length).to.be.equal(0)

      done()
    })

    function checkOptions(elm) {
      let c1 = elm.querySelector('.cat-children')
      let c2 = elm.querySelector('.entry-count')
      return {
        show_children:  c1.classList.contains('active'),
        show_count:     c2.classList.contains('active'),
      }
    }

    // *** ***/
    it('Category structure append tree to DOM (with default options)', function(done) {
      let obj = new CatTree()
      let tree = obj.createTree(dummyDataSource)

      let elm = document.getElementById('test-cat-tree')
      expect(elm).to.not.be.null
      
      /* append Children under elm */
      let elmTree = obj.createElementForTree(tree)
      elm.appendChild(elmTree)

      /* check elements */
      expect(elm.childElementCount).to.be.equal(1)

      let e = elm.firstElementChild
      expect(e.tagName).to.be.equal('UL')


      /* check options */
      let result = checkOptions(elm)
      expect(result.show_children).to.be.equal(false)
      expect(result.show_count).to.be.equal(true)

      done()
    })

    // *** ***/
    it('CatTree options (show_children, show_count)', function(done) {
      let opt = {show_children: true, show_count: false}
      let obj = new CatTree(opt)
      let tree = obj.createTree(dummyDataSource)

      let elm = document.getElementById('test-cat-tree-2')
      expect(elm).to.not.be.null

      /* append Children under elm */
      let elmTree = obj.createElementForTree(tree)
      elm.appendChild(elmTree)

      /* check elements */
      expect(elm.childElementCount).to.be.equal(1)

      let e = elm.firstElementChild
      expect(e.tagName).to.be.equal('UL')

      /* check options */
      let result = checkOptions(elm)
      expect(result.show_children).to.be.equal(opt.show_children)
      expect(result.show_count).to.be.equal(opt.show_count)
      
      done()
    })    
  })
}

export const testCatTree = { 
  execute: execute,
}
