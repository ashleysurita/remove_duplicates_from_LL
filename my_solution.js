class ListNode {
    constructor(value = 0, next = null){
        
    this.value = value
    this.next = next
    }
}

function removeDupesLL(head){
    if(!head) return head
    
    let map = {}
    let hold = new ListNode('hold', head)
    let curr = hold
    while(curr.next){
        if(map[curr.next.value]) curr.next = curr.next.next
        else{
            map[curr.next.value] = true
            curr = curr.next
        }
    }
    return hold.next
}

// test
console.log(removeDupesLL(new ListNode(1)))
console.log(removeDupesLL(new ListNode(1, new ListNode(2, new ListNode(1)))))
console.log(removeDupesLL(new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(1)))))))
