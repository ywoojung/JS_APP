const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];           //해야할 일 추가하면 이 배열에 추가 되도록


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}



function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function filterFn(toDo) {
    return toDo.id === 1;
}

function deleteToDo(event) {
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}



function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function paintToDo(text) {
    //console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);


    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);

    saveToDos();
}






function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();