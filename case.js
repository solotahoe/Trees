// Suppose you have a text file containing a list of valid words, each word separated 
// by a newline character. We can construct a BST with these words where each node 
// contains a word, and its left child node contains words that come before it in
//  alphabetical order, while the right child node contains words that come after it.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SpellChecker {    
  constructor() {
    this.root = null;
  }

  insert(word) {
    if (!this.root) {
      this.root = new Node(word);
    } else {
      this._insertNode(this.root, word);
    }
  }
 ///helper function
  _insertNode(node, word) {
    if (word < node.value) {
      if (node.left) {
        this._insertNode(node.left, word);
      } else {
        node.left = new Node(word);
      }
    } else if (word > node.value) {
      if (node.right) {
        this._insertNode(node.right, word);
      } else {
        node.right = new Node(word);
      }
    }
  }

  search(word) {
    return this._searchNode(this.root, word);
  }

  _searchNode(node, word) {
    if (!node) {
      return false;
    }

    if (word === node.value) {
      return true;
    } else if (word < node.value) {
      return this._searchNode(node.left, word);
    } else {
      return this._searchNode(node.right, word);
    }
  }
}

// Usage:
const spellChecker = new SpellChecker();
const validWords = ["apple", "banana", "orange", "grape", "pear"];

// Construct the BST
validWords.forEach((word) => {
  spellChecker.insert(word);
});


 console.log(spellChecker)
// Search for a word
const searchWord = "banana";
if (spellChecker.search(searchWord)) {
  console.log(`${searchWord} is a valid word.`);
} else {
  console.log(`${searchWord} is not a valid word.`);
}
