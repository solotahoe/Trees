 # WHAT ARE TREESS
  A tree is a **hierarchical data structure** consisting of nodes connected by edges

 - Each node in a tree has a parent node (except for the root node) and zero or more child nodes. The topmost node in a tree is called the "root," and nodes with no children are called "leaves."

  [image visualization of a tree structure](https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png)

### Most commonly used Types of Trees
- Binary Tree: A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child. Binary trees are commonly used in various algorithms like binary search, binary tree traversals, and binary heap implementations.

- Binary Search Tree (BST): A binary search tree is a binary tree where each node's left child has a value less than the node, and the right child has a value greater than the node. This property makes searching, insertion, and deletion operations efficient
- Trie (Prefix Tree): A trie is a tree-like data structure used for efficiently storing and searching strings. It is particularly useful for tasks like autocomplete, spell-checking, and searching for words with common prefixes

- N-ary Tree: An N-ary tree is a tree data structure where each node can have more than two children. In contrast to binary trees, N-ary trees allow a variable number of child nodes per parent node

- Heap: Although a heap is not a strict tree data structure, it can be represented as a binary tree. A heap is a specialized tree-based data structure that satisfies the heap property, making it efficient for finding the maximum or minimum element in constant time and for efficiently extracting the extremum element

others
- AVL Tree
- Red-Black Tree
- Segment Tree
***

 ### Terminologies
 - Degree - The degree of a node is the total number of children it has
 - Depth - Depth of a node is the number of edges from the root to that node (depth of root node is always zero)

 - Height - The numbe of edges form the deepest leaf to that node (height of the root node is considered to be the height of the tree)

      
***
 - a tree is a non linear data structure compared to arrays, linked lists, stacks and queues which are linear data structures( elements are arranged in a sequential order, and each element has a unique predecessor (except for the first element) and a unique successor (except for the last element) ).

 - non linear - means elements can have multiple predecessors or successors, leading to more complex relationships between elements

 ### Advantages of using non linear data structures e.g trees 
   1. Flexible Relationships: Non-linear data structures enable multiple relationships between elements. In graphs, nodes can have any number of connections (edges) to other nodes, allowing for more complex and diverse data relationships
  2. Complex Algorithms: Many advanced algorithms, such as graph algorithms (e.g., Dijkstra's algorithm, breadth-first search, depth-first search), rely on non-linear data structures to solve complex problems efficiently. These algorithms find applications in route planning, network analysis, social networks, and more
  3. Dynamic Data: Non-linear data structures can handle dynamic data well, as they allow easy insertion and deletion of elements without much disruption to the overall structure
  4. Hierarchical Representation: Non-linear data structures like trees allow for hierarchical representation, which can model real-world relationships more accurately. For example, an organization's hierarchy, file systems, and family trees can be represented more naturally using trees

  5. Efficient Data Retrieval: Depending on the specific non-linear data structure and the use case, retrieval of specific data elements can be more efficient compared to linear data structures. For instance, in balanced binary search trees, searching for an element takes O(log n) time, which is faster than linear search in an array (O(n))  ... time required to search is propotinal to the size of the data set...


### Operations u can use in a BST
  - insertion
  - Search
  - DFS - Depth-First Search - it is a traversal algorithm used to visit all the nodes in a tree or graph data structure
  - BFS - Breadth-First Search  - it is a traversal algorithm used to visit all the nodes in a tree or graph data structure level by level.
  - Deletion  - remove a node given its value



### Trees implementation in software/programs

- Trees are widely used in computer science and programming due to their versatility and efficiency in organizing and representing data in a hierarchical manner.
 e.g 
 1. representing file systems  -  File systems often use BSTs to organize and search for files and directories efficiently.
 2. organizing hierarchical data like organizational charts, DOM (NOT A TREEE BUT tree-like structure to represent the hierarchical relationships among HTML elements in a web page, **each HTML element e.g., div, h1,  etc.) is a node in the tree,**
 3. implementing search algorithms like binary search trees(most popular implementation)
 4. Sorting
 5. auto predictions in keyboards e.g Search Autocomplete: Trie (a type of tree) can be used to implement an efficient search autocomplete feature, suggesting products or categories as the user types in the search bar.

 6. Contacts List: Many contact management applications use BSTs to sort and search contacts by name.
 7. Spell Checkers: BSTs are used in spell checkers to efficiently check if a given word is present in the dictionary


  ## How to use BTS 

   - There is no built-in method that directly uses a Binary Search Tree (BST). JavaScript provides basic data structures like arrays and objects, but it does not include native support for tree data structures.

   - If you want to use a BST in JavaScript, you'll need to implement it yourself or use a third-party library that provides BST functionality

   - LIBRARIES EXAMPLES INCLUDE bintrees" AND "binary-search-tree

   `````` javascript
   const bintrees = require('bintrees');
const { AVLTree } = bintrees;

// Create a new AVLTree
const bst = new AVLTree((a, b) => a.key - b.key);

// Insert elements
bst.insert({ key: 10, value: 'data1' });
bst.insert({ key: 5, value: 'data2' });
bst.insert({ key: 15, value: 'data3' });

// Search for elements
const node = bst.find({ key: 5 });
console.log(node && node.value); // Output: 'data2'





