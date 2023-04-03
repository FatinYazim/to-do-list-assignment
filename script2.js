let addtolistInput = document.querySelector(".add-to-list");
let addButtonDOM = document.querySelector("#addButton");
let listContainerDOM = document.querySelector("#ListContainer");

function newTask() {
  // safe guard, condition to return
  if (addtolistInput.value === "") return;


  // count the number of li elements
  let numLis = listContainerDOM.querySelectorAll("li").length;
  
  // stop adding li elements if there are already 6
  if (numLis >= 7) {
    alert("Maximum limit of litss reached!");
    return;
  }
  
  // create new li using javascript
  let newLiDOM = document.createElement("li");
newLiDOM.className = "custom-list-item";

  newLiDOM.innerText = addtolistInput.value ;
  
  let newSpan2 = document.createElement("span");
  let newSpan = document.createElement("span");
  
  let newEdit =  document.createElement("i");
  newEdit.classList.add("bi","bi-pencil-square");


  // add click event listener to newEdit element
  newEdit.addEventListener("click", function(event) {
    // toggle line-through style of the task
    newLiDOM.classList.add("task-done");
  });
  
  let newDelete =  document.createElement("i");
  newDelete.classList.add("bi","bi-file-earmark-x-fill");
  
  // add event listener to newDelete element
  newDelete.addEventListener("click", function(event) {
    removeTask(event);
  });
  
  // get the parent and append a child inside it
  // parent : listContainerDOM, child : newLiDOM
  listContainerDOM.appendChild(newLiDOM);
  newSpan.appendChild(newEdit);
  newSpan.appendChild(newDelete);
  newSpan2.appendChild(newSpan);
  newLiDOM.appendChild(newSpan2);

  // empty the form
  resetForm();


}



function removeTask(event) {
  // get the clicked newDelete element
  console.log(event);
  let clickedDelete = event.target;
  
  
  // get the parent li element of the clickedDelete element
  let parentLi = clickedDelete.closest('li');
  
  // remove the parent li element from the listContainerDOM
  listContainerDOM.removeChild(parentLi);
}

// add event listener to addButtonDOM
addButtonDOM.addEventListener("click", newTask);

// empty the form 
function resetForm() {
  addtolistInput.value = "";
}