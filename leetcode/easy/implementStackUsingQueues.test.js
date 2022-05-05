// https://leetcode.com/problems/implement-stack-using-stacks/submissions/
// Test: npm test ./leetcode/easy/implementStackUsingQueues.test.js

describe('Implement stack using queue', () => {
  let obk;

  beforeEach(() => {
    obj = new MyStack()
    obj.push(7); obj.push(8); obj.push(9)
  })

  it('adds element to the end of stack', () => {
    expect(obj.stack).toStrictEqual([7, 8,9])
  })

  it('removed element from the end of stack', () => {
    expect(obj.pop()).toStrictEqual(9)
  })

  it('returns the last element in the stack', () => {
    expect(obj.top()).toStrictEqual(9)
  })

  it('returns false if the stack is empty', () => {
    expect(obj.empty()).toStrictEqual(false)
  })
})


class MyStack {
  constructor() {
    this.stack = []
  }

  // 0(1) - time && space
  push(x) {
    return this.stack[this.stack.length++] = x
  }

  // 0(n) - time | 0(1) - space
  pop() {
    for (let i = 0; i < this.stack.length - 1; i++) {
      this.stack.push(this.stack.shift())
    }
    return this.stack.shift()
  }

  // 0(1) - time | 0(1) - space
  top() {
    return this.stack[this.stack.length - 1]
  }


  empty() {
    return this.stack.length === 0
  }
}

