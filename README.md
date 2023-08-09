 # WHAT ARE TREESS
  A tree is a **hierarchical data structure** consisting of nodes connected by edges

 - Each node in a tree has a parent node (except for the root node) and zero or more child nodes. The topmost node in a tree is called the "root," and nodes with no children are called "leaves."

  [image visualization of a tree structure](https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png)

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

  5. Efficient Data Retrieval: Depending on the specific non-linear data structure and the use case, retrieval of specific data elements can be more efficient compared to linear data structures. For instance, in balanced binary search trees, searching for an element takes O(log n) time, which is faster than linear search in an array (O(n))



        5
       /  \
      3    8
    /  \   / \
   1    4  7  9  
### Trees implementation in software/programs

- Trees are widely used in computer science and programming due to their versatility and efficiency in organizing and representing data in a hierarchical manner.
 e.g 
 1. representing file systems
 2. organizing hierarchical data like organizational charts, DOM
 3. implementing search algorithms like binary search trees(most popular implementation)




 ### Deleting a node in BST
 1. There are three cases to consider when deleting a node
  - Node has no children: Simply remove the node from the tree
  - Node has one child: Remove the node and replace it with its child
  - Node has two children: Find the node's in-order successor (the smallest node in its right subtree), replace the node's value with the successor's value.



  ### BFS -  Breadth-First Search

  - Breadth-First Search (BFS) is a graph traversal algorithm that explores all the vertices or nodes on the same level before moving to the next level. In the context of a Binary Search Tree, BFS involves visiting the nodes level by level, starting from the root and moving to the nodes at the next level before proceeding to the subsequent levels.


  ### DFS -  Depth-First Search

  - graph traversal algorithm that explores as far as possible along a branch before backtracking. In the context of a Binary Search Tree, DFS involves exploring the nodes of the tree depth by depth, either in a pre-order, in-order, or post-order manner.


  ### USAGE EXAMPLES 
   .Web Crawling:
When building web crawlers or web scraping tools, BFS can be used to discover and explore web pages or URLs in a systematic manner, starting from a base URL and expanding to linked pages

. Garbage Collection:
In some memory management algorithms, BFS can be used to mark or sweep through memory blocks, identifying reachable memory blocks and freeing those that are unreachable.

.In maze-solving algorithms, BFS can be used to find the shortest path from the starting point to the exit point in a maze.


  ### There are three common ways to perform DFS in a Binary Search Tree:
   1 Pre-order DFS (Root-Left-Right):
In pre-order DFS, you start from the root node and visit each node before exploring its children. The order is root, left child, right child.

2 In-order DFS (Left-Root-Right):
In in-order DFS, you start from the root node and visit nodes in ascending order. You visit the left child, then the root, and then the right child.

3 Post-order DFS (Left-Right-Root):
In post-order DFS, you start from the root node and visit each node after exploring its children. The order is left child, right child, and then the root.


### USAGE EXAMPLES 
Finding Paths:
DFS can be used to find paths between two nodes in a graph, such as finding a path between two locations on a map