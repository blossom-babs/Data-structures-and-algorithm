// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Test: npm test ./leetcode/medium/removeDupsInString.test.js

describe('remove duplicates', () => {
  it('removes duplicates that occurs k times', () => {
    expect(removeDuplicatesOne('deeedbbcccbdaa', 3)).toBe('aa')
    expect(removeDuplicatesTwo('blooom', 3)).toBe('blm')
    expect(removeDuplicatesThree('b', 2)).toBe('b')
  })
})

// 0(n) - space | 0(n) - time
const removeDuplicatesThree = function(s, k) {
  const stack = []
  let newStr = ''
    
  for(let el of s){
    if(stack.length > 0 && stack[stack.length - 1][0] === el){
      stack[stack.length - 1][1] += 1
    } else{
      stack.push([el, 1])
    }
    
    if(stack[stack.length - 1][1] === k){
      stack.pop()
    }
  }
  
  for (const key in stack) {
      newStr += (stack[key][0]).repeat(stack[key][1])
    
  }
  
    return newStr
  };
  

// 0(n) - space | 0(n) - time
const removeDuplicatesTwo = function(s, k) {
  const hash = {}
  let newStr = ''
    
  for(let el of s){
    if(hash[el] === k){
        hash[el] = 1
      } 
    else if(hash[el]){   
      
      hash[el] = hash[el] + 1
    } else{
      hash[el] = 1
    }
  }
    
  for (const item in hash) {
    if(hash[item] < k){
      newStr += item.repeat(hash[item])
    }
  }
    return newStr
  };
  

// 0(n) - space | 0(n) - time
const removeDuplicatesOne = function(s, k) {
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
