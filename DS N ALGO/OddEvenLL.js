/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return head;

  let oddLinkedList = head;
  let evenLinkedList = head.next;
  let evenHead = evenLinkedList;

  while (evenLinkedList && evenLinkedList.next) {
    oddLinkedList.next = evenLinkedList.next;
    oddLinkedList = oddLinkedList.next;
    evenLinkedList.next = oddLinkedList.next;
    evenLinkedList = evenLinkedList.next;
  }

  oddLinkedList.next = evenHead;
  return head;
};

// time Complexity of the solution is O(N) as traversing each node once
// Space complexity of the solution is O(1) only constant space required
