/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var mergeKLists = function(lists) {
  if (lists.length === 0) return null

  while(lists.length > 1) {
      const l1 = lists.shift()
      const l2 = lists.shift()
      const merged = merge(l1, l2)
      lists.push(merged)
  }
  return lists[0];
};

var merge = function(l1, l2) {
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

}