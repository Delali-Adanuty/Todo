const addTask = document.querySelector('div.add-task button.add');
const input = document.querySelector('div.add-task-modal input.add-task');
const time = document.querySelector('div.add-task-modal input.time');
const submit = document.querySelector('div.add-task-modal button[type = "submit"]');
const setReminder = document.querySelector('div.add-task-modal button.set-reminder');
const todoContainer = document.querySelector('div.todo-container ul.todo-items');
const modal = document.querySelector('div.add-task-modal');
const enterInput = document.querySelector('div.add-task-modal section.enter-input');
const closeModal = document.querySelector('div.add-task-modal section.close');
const sidebar = document.querySelector('nav.sidebar');
const sidebarBtn = document.querySelector('nav ul li.menu');
const exitSidebarBtn = document.querySelector('nav.sidebar ul.exit li');
const sidetaskContainer = document.querySelector('nav.sidebar ol.item-type');
const userButton = document.querySelector('nav.sidebar ul.button-ul button');
const colorList = ['turquoise', 'mediumspringgreen', '#66ccdd', '#597ccd', 'orangered', 'cf3333', '#117fe3', '#6f33cf', '#cf33b5', '#4a054d'];
var r = Math.random();
r = r * 10;
r = r.toFixed(0);
userButton.style.background = colorList[r];
sidebar.style.display = 'none';
enterInput.style.display = 'none';

setInterval(listItems, 100);

function listItems() {
    var tasksNumber = document.querySelector('nav.sidebar ul.item-type section button.task-number');
    var fy = document.querySelectorAll('div.todo-container ul.todo-items li');
    fyLength = fy.length;
    tasksNumber.innerHTML = fyLength;
}


submit.addEventListener('click', validateAdd);
addTask.addEventListener('click', showInput);
setReminder.addEventListener('click', remind);
closeModal.addEventListener('click', closeUpModal);
sidebarBtn.addEventListener('click', showSidebar);
exitSidebarBtn.addEventListener('click', exitSidebar);



function closeUpModal() {
    modal.style.display = 'none';
    addTask.style.display = 'block';
}

function showSidebar() {
    sidebar.style.display = 'block'
}

function exitSidebar() {
    sidebar.style.display = 'none';
}

function showInput() {
    modal.style.display = "block";
    modal.style.display = "grid";
    addTask.style.display = 'none';
}

function validateAdd(onsubmit) {
    onsubmit.preventDefault();
    setReminder.type = 'active'
    if (input.value !== '') {
        var ab = document.createElement('li');
        var bc = document.createElement('input');
        var cd = document.createElement('p');
        var doe = document.createElement('div');
        var del = document.createElement('button');
        var sect = document.createElement('section');
        var left = document.createElement('p');
        var br = document.createElement('br');
        var sidetask = document.createElement('li');
        sidetask.innerHTML = input.value;
        document.body.appendChild(sidetask);
        sidetaskContainer.appendChild(sidetask);
        del.innerHTML = 'Remove';
        cd.innerHTML = input.value;
        modal.style.display = "none";
        addTask.style.display = 'block';
        bc.type = 'checkbox';
        document.body.appendChild(ab);
        todoContainer.appendChild(ab);
        document.body.appendChild(sect);
        document.body.appendChild(br);
        ab.appendChild(sect);
        ab.appendChild(br);
        ab.style.display = 'block';
        document.body.appendChild(cd);
        sect.appendChild(cd);
        document.body.appendChild(bc);
        sect.appendChild(bc);
        document.body.appendChild(del);
        ab.appendChild(del);
        bc.addEventListener('click', showDel);
        doe.style.display = 'none';
        left.innerHTML = 'Time : ' + time.value;
        document.body.appendChild(doe);
        ab.appendChild(doe);
        doe.appendChild(del);
        document.body.appendChild(left);
        ab.appendChild(left);
        doe.appendChild(left);


        function showDel() {
            if (doe.style.display == 'none') {
                doe.style.display = 'block';
                doe.style.display = 'flex';
            } else {
                doe.style.display = 'none';
            }
        }

        del.addEventListener('click', delEvent);

        function delEvent() {
            todoContainer.removeChild(ab);
            sidetaskContainer.removeChild(sidetask);
            sidetask.style.display = 'none';
            ab.style.display = 'none'
        }

    } else {
        enterInput.style.display = 'block';
        enterInput.style.display = 'grid';
        setTimeout(removeEnterInput, 3000);

        function removeEnterInput() {
            enterInput.style.display = 'none';
        }
    }

}

function remind(onsubmit) {
    onsubmit.preventDefault();
    setInterval(checkTime, 500);
    setReminder.type = 'disabled'

    function checkTime() {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var timeElem = decodeURIComponent(time.value);
        var elements = timeElem.split(':');
        var taskHours = elements[0];
        var taskMinutes = elements[1];

        if (hours == taskHours && minutes == taskMinutes) {
            alert(input.value);
            clearInterval(checkTime, 1000)
        } else {
            /*Do nothing*/
        }
    }
}