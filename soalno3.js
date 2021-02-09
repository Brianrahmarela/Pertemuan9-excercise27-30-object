let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
]
/*Buatlah sebuah function CRUD sederhana pada data di atas*/

// Function printAll()
// console.log(todos.length);
console.log("Hasil fungsi printAll:");

function printAll(){
  todos.forEach(value => {
    console.log(`${value.id}, ${value.todo}\n`);
  });
}
printAll();

// Function printByID()
console.log("Hasil fungsi printByID:")

function printByID(x){
  todos.forEach(value => {
    if(value.id === x){
      console.log(value.id+", "+value.todo);
    }
  })
}
printByID(1);

// Function add(newTodo)
console.log("Hasil fungsi add(newTodo):")

function add(newTodo) {
  todos.push({
    // id: [todos.length-1],
    id: todos.length+1,
    todo: newTodo
  })
  printAll()
}

add("ngerjain tugas");
// add("main games");

// Function deleteByID(id)
console.log("Hasil fungsi deleteByID:")

function deleteByID(idnya) {
  todos.forEach((value,idx) => {
    if(value.id === idnya){
      
      todos.splice(idx,1);
    }
  })
  printAll()
}

deleteByID(2);

// Function updateByID(newTodo)
console.log("Hasil fungsi updateByID(newTodo):")

function updateByID(idupdate,newtodo) {
  todos.forEach(value => {
    if(value.id === idupdate){
      value.todo = newtodo;
    }
  })
  // delete todos.id;
  printAll()  
}

updateByID(1,"belajar CRUD");