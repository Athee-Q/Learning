  function ListNode(val , next ){
        this.val = val;
        this.next = next;
    }
    function sumTwoLinkedList(l1,l2){
        let listNode = new ListNode(0);
        let currentNode = listNode;
        let carry = 0;
 
        while (l1 !== null || l2 !== null ) {
          let x = l1 ? l1.val : 0 ;
          let y =l2 ? l2.val  : 0 ;
        
          let sum = x + y + carry ;
        
          carry = Math.floor(sum / 10);
          currentNode.next = new ListNode(sum % 10);
          currentNode = currentNode.next
          
          if (l1) l1= l1.next;
          if (l2) l2= l2.next;

          
        }
        if ( carry > 0){
            currentNode.next = new ListNode(carry)
        }
        return listNode.next
        
    }
    function list ( arr ) {
        if (!arr || arr.length === 0){
            return null;
        }

        let list = new ListNode ( arr[0]);
        let current = list;
        for ( let i = 1 ; i < arr.length ; i++){

            current.next= new ListNode(arr[i]);
            current = current.next
        } 
        return list ; 

    }

        let a = [1,3,5]
        let b = [2,6,8]

  let l1 = list(a)
  let l2 = list(b)

  let result = sumTwoLinkedList(l1,l2)
    let final = '';
  while ( result !== null){
    final += [result.val]
    result = result.next
  }
  let answer = final.split('').map(Number);

  console.log(answer)
 

 