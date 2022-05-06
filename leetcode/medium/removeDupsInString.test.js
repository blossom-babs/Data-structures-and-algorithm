// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/submissions/
// Test: npm test ./leetcode/medium/removeDupsInString.test.js
// 0(1) - space | 0(n) - time

describe('remove duplicates', () => {
  it('removes duplicates that occurs k times', () => {
    expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa')
    expect(removeDuplicates('blooom', 3)).toBe('blm')
    expect(removeDuplicates('b', 2)).toBe('b')
  })
})

const removeDuplicates = function(s, k) {
  let stack=[];
  let counter=[];
  for(let elem of s){
      if(stack[stack.length-1]===elem){ counter[counter.length-1]++; }
      else{  counter.push(1); }
      stack.push(elem); 
      if(counter[counter.length-1]===k){ stack.splice(stack.length-k,k); counter.pop(); } 
  }
  return stack.join('');
};
