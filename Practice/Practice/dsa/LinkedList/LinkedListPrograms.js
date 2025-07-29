const LinkedListPrograms = () => {
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  //recursion method
  function mergeTwoList(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
      list1.next = mergeTwoList(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoList(list1, list2.next);
      return list2;
    }
  }

  function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);

      current = current.next;
    }

    return head;
  }

  function linkedListToArray(head) {
    const result = [];

    let current = head;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  const list1 = [1, 2, 3];
  const list2 = [1, 3, 4];

  const l1 = arrayToLinkedList(list1);
  const l2 = arrayToLinkedList(list2);

  const newMergeList = mergeTwoList(l1, l2);

  const result = linkedListToArray(newMergeList);

  console.log(result);
};
export default LinkedListPrograms;
