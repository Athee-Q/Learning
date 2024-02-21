// class Link{
//     constructor(val ,next = null){
//         this.val = val;
//         this.next = next;
//     }
// }
// function linkedList(arr){
//     if(!arr || arr.length === 0 ){
//         return null;
//     }
//     let reference = new Link (0);
//     let current = reference;

//     for(let i = 0 ; i < arr.length ; i++){
//         current.next = new Link (arr[i]);
//         current = current.next;
//     }
//     return reference.next ;
// }

// let link1 = [1,3,5];
// let link2 = [2,4,6];
// let l1 = linkedList(link1);
// let l2 = linkedList(link2);

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify code
    let dummy = new ListNode(-1);
    let current = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // If one of the lists is not empty, append the remaining nodes
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    return dummy.next; // The merged sorted list starts from the next of the dummy node
  }
  
  // Example usage:
  let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
  let list2 = new ListNode(1, new ListNode(2, new ListNode(6)));
  
  let mergedList = mergeTwoLists(list1, list2);
  
  // Print the merged list values
  while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
  }
  