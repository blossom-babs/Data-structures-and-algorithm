//https://leetcode.com/problems/min-stack/
// Test: npm test ./leetcode/easy/minStack.test.js
// 0(1) - time | 0(n) - space

describe('#min stack', () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
  })

  it('PUSH element to the stack', () => {
    expect(minStack.stack).toStrictEqual([[-2, -2], [0, -2], [-3, -3]])
  })

  it('POP element from the stack', () => {
    minStack.pop()
    expect(minStack.stack).toStrictEqual([[-2, -2], [0, -2]])
  })

  it('returns element at the TOP of the stack', () => {
    let top = minStack.top()
    expect(top).toBe(-3)
  })

  it('returns the MINIMUM value in the stack in constant time', () => {
    let min = minStack.getMin()
    expect(min).toBe(-3)
  })
})

class MinStack {
  constructor() {
    this.stack = []
  }

  push(val) {
    let min = Math.min(val, this.getMin())
    this.stack[this.stack.length++] = [val, min]
  }

  pop() {
    this.stack.pop()
  }

  top() {
    return this.peek()[0]
  }

  getMin() {
    return this.peek()[1] ?? Infinity
  }

  peek() {
    return this.stack[this.stack.length - 1] || 0
  }
}