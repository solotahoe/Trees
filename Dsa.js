// Problem Statement:
// Given a binary tree, find the maximum depth (height) of the tree. The maximum depth of a binary tree is the length of the longest path from the root node to any leaf node


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

//javascript implementation
  // Helper function to create a binary tree for demonstration purposes
function createBinaryTree() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
  }

  
  //algorithm implementation 
  // Function to find the maximum depth (height) of a binary tree using recursion
function maxDepth(root) {
    if (!root) {
      return 0;
    } else {
      const leftDepth = maxDepth(root.left);
      const rightDepth = maxDepth(root.right);
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  
  // Example usage:
  const root = createBinaryTree();
  const depth = maxDepth(root);
  console.log("Maximum Depth of Binary Tree:", depth); // Output: Maximum Depth of Binary Tree: 3
  
//   Explanation:
// In this example, we define a simple binary tree using the TreeNode class. Then, we create a binary tree using the createBinaryTree function. After that, we implement the maxDepth function using recursion to find the maximum depth of the binary tree. The function starts with the root node and recursively calculates the maximum depth of its left and right subtrees. The maximum depth of the binary tree is the maximum value between the depth of the left subtree and the depth of the right subtree, plus 1 to account for the current level.

// In this case, the binary tree has a maximum depth of 3, and the function correctly computes and returns this value.





// Regenerate
