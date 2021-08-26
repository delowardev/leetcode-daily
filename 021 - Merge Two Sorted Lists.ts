// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let d = new ListNode(0)
  let c = d

  while(l1 && l2) {
      if (l1.val < l2.val) {
          c.next = l1
          l1 = l1.next
      } else {
          c.next = l2
          l2 = l2.next
      }
      c = c.next
  }

  c.next = l1 || l2

  return d.next
};