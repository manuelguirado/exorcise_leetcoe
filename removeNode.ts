

  class listNode {
    val: number
    next: listNode | null
      constructor(val?: number, next?: listNode | null) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
     }
 }
 

function removeNthFromEnd(head: listNode | null, n: number): listNode | null {
    let dummy = new listNode(0, head);
    let fast: listNode | null = dummy;
    let slow: listNode | null = dummy;

    // Move fast pointer n+1 steps ahead
    for (let i = 0; i < n + 1; i++) {
        if (fast) fast = fast.next;
    }

    // Move both fast and slow pointers until fast reaches the end
    while (fast) {
        fast = fast.next;
        if (slow) slow = slow.next;
    }

    // Remove the nth node from the end
    if (slow && slow.next) {
        slow.next = slow.next.next;
    }

    return dummy.next;
};
// Example usage:
const head = new listNode(1, new listNode(2, new listNode(3, new listNode(4, new listNode(5, null)))));
const n = 2;
const updatedList = removeNthFromEnd(head, n);
console.log("Updated List:");
let actual = updatedList;
while (actual) {
    console.log(actual.val);
    actual = actual.next;
}