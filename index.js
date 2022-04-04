
let n = 19
let sum = 0

while(n){
let lastDigit = n % 10

n = Math.floor(n / 10)
  
sum += lastDigit * lastDigit
}
console.log('what exactly does this line do:', sum)