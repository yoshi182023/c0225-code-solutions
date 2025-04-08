import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */

export function contains(bst: BinarySearchTree, value: number): boolean {
  return containsRecursive(bst.root, value);
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  // If the current node is undefined, return false since an undefined node doesn't contain a value
  if (node === undefined) {
    return false;
  }
  // If the current node's value matches the search value, return true
  if (node.value === value) {
    return true;
  }
  // Otherwise, if the right child contains the value, return true

  if (value < node.value) {
    return containsRecursive(node.left, value);
  } else {
    // Finally, if the left child contains the value, return true
    return containsRecursive(node.right, value);
  }
}
