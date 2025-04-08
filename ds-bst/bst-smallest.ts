import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  return smallestRecursive(bst.root);
}

function smallestRecursive(node: TreeNode | undefined): number {
  //   If the current node is undefined, return Infinity since an undefined node doesn't have a smallest value
  if (node === undefined) return Infinity;
  // Find the smallest value in the node's left subtree

  return Math.min(
    node.value,
    smallestRecursive(node.left),
    smallestRecursive(node.right)
  );
}
