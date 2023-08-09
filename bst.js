// Define a Node class to represent each node in the binary search tree
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define the Binary Search Tree class
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a new node into the BST
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
    //helper function
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform binary search
    search(target) {
      return this.searchNode(this.root, target);
    }
  
    searchNode(node, target) {
      if (node === null || node.value === target) {
        return node;
      }
  
      if (target < node.value) {
        return this.searchNode(node.left, target);
      } else {
        return this.searchNode(node.right, target);
      }
    }

    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (node === null) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        // Node with only one child or no child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
  
        // Node with two children, get the in-order successor (smallest in the right subtree)
        node.value = this.minValueNode(node.right).value;
  
        // Delete the in-order successor
        node.right = this.deleteNode(node.right, node.value);
      }
  
      return node;
    }

     // Helper method to find the node with the smallest value in a tree
  minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(1);
  bst.insert(4);
  bst.insert(7);
  bst.insert(9);

  
  const targetValue = 10;
  const result = bst.search(targetValue);
  
  console.log(bst)
  if (result) {
    console.log(`Found ${targetValue} in the BST.`);
  } else {
    console.log(`${targetValue} not found in the BST.`);
  }
  