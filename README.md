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







### Trees implementation in software/programs

- Trees are widely used in computer science and programming due to their versatility and efficiency in organizing and representing data in a hierarchical manner.
 e.g 
 1. representing file systems
 2. organizing hierarchical data like organizational charts, DOM
 3. implementing search algorithms like binary search trees(most popular implementation)