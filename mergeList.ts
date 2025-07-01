 class ListNode {
    val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
  }
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let mergedHead: ListNode | null = null;
    if (list1.val < list2.val) {
        mergedHead = list1;
        list1 = list1.next;
    } else {
        mergedHead = list2;
        list2 = list2.next;
    }

    let current = mergedHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes from either list
    current.next = list1 ? list1 : list2;

    return mergedHead;
};
// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(6, null))));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5, null))));
const mergedList = mergeTwoLists(list1, list2);
let current = mergedList;
while (current) {
    console.log(current.val);
    current = current.next;
}