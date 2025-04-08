import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  //   Visit each of the nodes in the order left-center-right, as follows:
  // Return an array that contains:
  // All the left subtree's values (spread might be useful)
  // All the right subtree's values
  if (node === undefined) {
    return [];
  }

  // Recursively traverse left subtree
  const leftValues = traverseRecursive(node.left);
  // Recursively traverse right subtree
  const rightValues = traverseRecursive(node.right);
  console.log(leftValues.concat([node.value]).concat(rightValues));

  // Concatenate left values, current node's value, and right values
  return leftValues.concat([node.value]).concat(rightValues);
}
