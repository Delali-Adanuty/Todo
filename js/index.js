const addTask = document.querySelector('div.add-task button.add');
const input = document.querySelector('div.add-task input');
const submit = document.querySelector('div.add-task button[type = "submit"]');
const todoContainer = document.querySelector('div.todo-container ul.todo-items');

submit.addEventListener('click', validateAdd);
addTask.addEventListener('click', showInput);

function showInput(){
    input.style.display = 'block';
    submit .style.display = 'block';
    addTask .style.display = 'none';
    input.click == true;
}

function validateAdd(onsubmit){
    onsubmit.preventDefault();
    var ab = document.createElement('li');
    var bc = document.createElement('input');
    var cd = document.createElement('p');
    cd.innerHTML = input.value;
    document.body.appendChild(ab);
    todoContainer.appendChild(ab);
    document.body.appendChild(cd);
    ab.appendChild(cd);
    input.style.display = 'none';
    submit .style.display = 'none';
    addTask .style.display = 'block';
    input.value = '';
    bc.type = 'checkbox'
    document.body.appendChild(bc);
    ab.appendChild(bc); 
}