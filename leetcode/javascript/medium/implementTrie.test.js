//TEST: npm test ./leetcode/medium/implementTrie.test.js

describe('#Implement Trie Data structure', () => {
  let myTrie;

  beforeEach(() => {
    myTrie = new Trie()
    myTrie.insert('gorilla'); myTrie.insert('gotham'); myTrie.insert('boo');
  })

  it('inserts string into trie', () => {
    expect(myTrie.root.g).toBeDefined()
    expect(myTrie.root.n).toBeUndefined()
  })

  it('searches for string in trie', () => {
    expect(myTrie.search('golang')).toEqual(false)
    expect(myTrie.search('boo')).toEqual(true)
  })

  it('finds prefix of string in trie', () => {
    expect(myTrie.startsWith('go')).toEqual(true)
    expect(myTrie.startsWith('boom')).toEqual(false)
  })
})

class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let node = this.root

    for (const char of word) {
      if (!node[char]) {
        node[char] = {}
      }
      node = node[char]
    }
    node.isEnd = true
  }

  search(word) {
    let node = this.root

    for (const char of word) {
      if (!node[char]) return false
      node = node[char]
    }

    return node.isEnd || false
  }

  startsWith(prefix) {
    let node = this.root

    for (const char of prefix) {
      if (!node[char]) return false
      node = node[char]
    }

    return true
  }
}