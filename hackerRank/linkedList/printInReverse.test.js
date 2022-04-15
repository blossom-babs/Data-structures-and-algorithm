/*
TEST: npm test ./hackerRank/linkedList/printInReverse.test.js
*/

describe('print in reverse', () => {
  it('prints the data values of a linked list in reverse', () => {
    const list = new SinglyLinkedList()
    list.insert(10)
    list.insert(20)
    list.insert(30)
    const reverse = list.reverse()
    expect(reverse.data).toBe(30)
    expect(reverse.next.data).toBe(20)
    expect(reverse.next.next.data).toBe(10)
    expect(reverse.next.next.next).toBe(null)
  })
})

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList{
 insert(data){
   let newNode = new Node(data)
   if(!this.head){
     this.head = newNode
     return this.head
   }
   let current = this.head
   while(current.next){
     current = current.next
   }
   current.next = newNode
   return current
 } 

 reverse(){
   if(this.head){
     let current = this.head
     let prev = null

     while(current){
       let nxt = current.next
       current.next = prev
       prev = current
       current = nxt
     }
     return prev
   }

   while(prev){
     console.log(prev.data)
     prev = prev.next
   }
 }
}

