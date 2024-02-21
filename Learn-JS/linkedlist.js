function ListNode(val,next = null){
  this.val = val;
  this.next = next;
}
function linkedList(arr){
  let refference = new ListNode(0);
  let current = refference;
  for(let i = 0 ; i < arr.length ; i++){
      current.next = new ListNode(arr[i]);
      current = current.next;
  }
  return refference.next;
}
function addTwoNumbers(l1, l2) {
  let list = new ListNode(0);
  let current = list;
  let carry = 0;

  while (l1 !== null || l2 !== null){
      let x = l1 ? l1.val : 0 ;
      let y = l2 ? l2.val : 0 ;
      let sum = x + y + carry;
      
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;

  }
  if (carry > 0){
      current.next = new ListNode(carry);
  }
  return list.next;
};
let list1 = [2,4,3];
let list2 = [5,6,4];
let l1 = linkedList(list1);
let l2 = linkedList(list2);
console.log(addTwoNumbers(l1, l2))