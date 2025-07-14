
 
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        let first = head;
        let second = head.next;

        // Swap the nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move pointers forward
        prev = first;
        head = first.next;
    }

    return dummy.next;
};