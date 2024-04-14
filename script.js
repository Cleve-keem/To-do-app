const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Enter a task to do for the day");
    }
    else{
        var element = document.createElement("li");
        element.innerHTML = inputBox.value.toLowerCase();
        listContainer.append(element);

        var deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00d7";
        element.append(deleteIcon);

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showData();