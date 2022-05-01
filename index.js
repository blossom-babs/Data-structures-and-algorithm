const medianArr = (num1, num2) => {
  let A, B;
  A = num1
  B = num2

  if (num2.length < num1.length) {
    A = num2
    B = num1
  }

  let total = num1.length + num2.length
  let half = Math.floor(total / 2)

  let left = 0
  let right = A.length - 1

  while (true) {
    console.log({ left, right })
    let mid = Math.floor(right - left / 2)
    console.log({ mid })
    let midB = half - mid - 2
    console.log({ midB })
    let ALeft, ARight, BLeft, BRight;

    ALeft = mid >= 0 ? A[mid] : -Infinity
    ARight = (mid + 1 < A.length) ? A[mid + 1] : Infinity
    BLeft = midB >= 0 ? B[midB] : -Infinity
    BRight = (midB + 1 < B.length) ? B[midB + 1] : Infinity

    if (ALeft <= BRight && BLeft <= ARight) {
      let odd = Math.min(ARight, BRight)
      let even = Math.floor(Math.max(ALeft, BLeft) 
      + Math.min(BRight, ARight) / 2)

      console.log({ odd })
      console.log({ even })
      return total % 2 === 0 ? even : odd

    } else if (ALeft > BRight) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

}

let m = medianArr([1,2,3,4,5], [1,2,3,4,5,6,7,8])
let k = medianArr([1, 2], [3, 4])
console.log(k)