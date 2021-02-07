let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
]
/*
Buatlah sebuang function CRUD sederhana pada data di atas

- deleteByID(id)
- updateByID(id) */

// Function printAll()
console.log("Hasil fungsi printAll:")

let printAll = () => {
  todos.map((todo) => {
    
    console.log(todo.id+",", todo.todo)
  })
}
printAll();

// Function printByID()
console.log("Hasil fungsi printByID:")

function printByID(id){
  console.log(todos[id].id+",", todos[id].todo);
}
printByID(0);

//Function add(newTodo)
console.log("Hasil fungsi addTodos:")

let addTodos = (newTodo) => {
  todos.push({
    id: todos.length+1,
    todo: newTodo
  })
  printAll()
}
addTodos("Ngerjain tugas");


//Function deleteByID(id)
console.log("Hasil fungsi deleteByID:")

function deleteByID(id){
  // console.log(id);
  delete todos[id];
  printAll()
}
deleteByID(1);

//Function updateByID(id)
console.log("Hasil fungsi updateByID:")


function updateByID(id,newTodo){
  // console.log(todos[id].id.todo)
  
  console.log(todos[id-1].todo=newTodo);
  // console.log(todos[id].id.todo=newTodo)
  printAll();
}

updateByID(1,"belajar CRUD");






//tes
// function printAll(item){
//   console.log(`${item.id}, ${item.todo}\n`);
// }
// todos.forEach(printAll);

//item 3 dobel
// printById();
// function add(item){
//   printAll(item);
//   // return 
//   // console.log(`${item.id}, ${item.todo}\n`);
//   console.log(`${item.id=3}, ${item.todo="ngerjain tugas"}\n`);
// }
// todos.forEach(add);


