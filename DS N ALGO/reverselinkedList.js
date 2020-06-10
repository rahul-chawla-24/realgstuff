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
var reverseListRecursive = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let finalHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return finalHead;
};

var reverseListIterative = function(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
