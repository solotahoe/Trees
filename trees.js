// console.log("this should work")
// Define a Node class to represent each member of the family

class Node {
    constructor(name){
    this.name = name;
    this.children = [];
    }

//add children function
addChildren(Childname){
this.children.push(Childname)
}
// Create the family tree


}

const familyTree = new Node("Grandpa");
const dad = new Node("Dad");
const mom = new Node("Mom");
 familyTree.addChildren(dad);
// familyTree.addChildren(mom);
const child1 = new Node("Judy");
const child2 = new Node("James");
const child3 = new Node("Joyce");
 dad.addChildren(child1);
// dad.addChildren(child2);
// mom.addChildren(child3);

console.log(familyTree.children[0].children[0].name)
// Function to print the family tree recursively
function printFamilyTree(node, level = 0) {
    const indentation = "  ".repeat(level); // Add spaces for indentation
  
   // console.log(`${indentation}- ${node.name}`);
  
    for (const child of node.children) {
      printFamilyTree(child, level + 1);
    }
  }
  
//   // Print the family tree
//   console.log("Family Tree:");
  // printFamilyTree(familyTree);

//  console.log(familyTree)



  

