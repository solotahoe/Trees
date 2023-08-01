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

//   console.log(bst)
  
  const targetValue = 10;
  const result = bst.search(targetValue);
  
  if (result) {
    console.log(`Found ${targetValue} in the BST.`);
  } else {
    console.log(`${targetValue} not found in the BST.`);
  }
  