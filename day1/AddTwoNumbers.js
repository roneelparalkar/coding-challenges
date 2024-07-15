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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let outputListNode = new ListNode(),
    dummyNodeList = outputListNode;
  let carry = 0;
  while (l1 || l2 || carry) {
    let total = carry;
    let sumVal = 0;
    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    if (total >= 10) {
      carry = 1;
      sumVal = total % 10;
    } else {
      carry = 0;
      sumVal = total;
    }
    dummyNodeList.next = new ListNode(sumVal);
    dummyNodeList = dummyNodeList.next;
  }
  return outputListNode.next;
};

function createListNodeFromArray(arr) {
  let outputListNode = new ListNode(),
    dummyNodeList = outputListNode;
  arr.forEach(element => {
    let listNodeElem = new ListNode(element);
    dummyNodeList.next = listNodeElem;
    dummyNodeList = dummyNodeList.next;
  });
  return outputListNode.next;
}

console.log(addTwoNumbers(createListNodeFromArray([2, 4, 3]), createListNodeFromArray([5, 6, 4])));
console.log(addTwoNumbers(createListNodeFromArray([0]), createListNodeFromArray([0])));
console.log(addTwoNumbers(createListNodeFromArray([9, 9, 9, 9, 9, 9, 9]), createListNodeFromArray([9, 9, 9, 9])));
