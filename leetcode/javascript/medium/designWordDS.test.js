//https://leetcode.com/problems/design-add-and-search-words-data-structure/
// TEST: npm test ./leetcode/medium/designWordDS.test.js

/*
addWord - 0(n) - time | 0(n) - space
search - 0(n) - time | 0(1) - space
*/

describe('#word dictionary', () => {
  let obj

  beforeEach(() => {
    obj = new WordDictionary()
    obj.addWord('bad'); obj.addWord('mad');
    obj.addWord('dad');
  })

  it('returns true if word is found in the dictionary', () => {
    expect(obj.search('pad')).toBe(false)
    expect(obj.search('bad')).toBe(true)
    expect(obj.search('.ad')).toBe(true)
    expect(obj.search('b..')).toBe(true)
  })
})

class WordDictionary {
  constructor() {
    this.root = {}
  }

  addWord(word) {
    let node = this.root

    for (const char of word) {
      if (!node[char]) node[char] = {}

      node = node[char]
    }
    node.isEnd = true
  }


  search(word) {

    const dfs = (i, node) => {

      if (i === word.length) {
        return node.isEnd || false
      }

      const char = word[i]

      if (char === ".") {

        for (const c of Object.keys(node)) {
          return (dfs(i + 1, node[c])) || false
        }

      } else {
        if (!node[char]) return false
        return dfs(i + 1, node[char])
      }


    }
    return dfs(0, this.root)
  }

}





