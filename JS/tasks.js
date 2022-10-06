let inputNewTask = document.querySelector('#inputNewTask');
let btnAddTask = document.querySelector('btnAddTask');
let taskList = document.querySelector('taskList');

inputNewTask.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let task = {
            nome: inputNewTask.value,
            id: generateId(),
        }
        addTask(task);
    }
});

btnAddTask.addEventListener('click', (e) => {
    let task = {
        nome: inputNewTask.value,
        id: generateId(),
    }
    addTask(task);
});

function generateId() {
    return Math.floor(Math.random() * 3000);
}

function addTask(task) {
    let li = createTagLi(task);
    taskList.appendChild(li);
    inputNewTask.value = '';
}

function createTagLi(task) {
    let li = document.createElement('li');
    li.id = task.id;

    let span = document.childElement('span');
    span.classList.add('taskText');
    span.innerHTML = task.nome;

    let div = document.createElement('div');

    let btnEditor = document.createElement('button');
    btnEditor.classList.add('btnAction');
    btnEditor.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditor.setAttribute('onClick', 'editor('+task.id+')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAction');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onClick', 'excluir('+task.id+')');

    div.appendChild(btnEditor);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
};

function editor(idTask) {
    alert(idTask)
};

function excluir(idTask) {
    let confirm = window.confirm('Tem certeza que quer excluir?');
    if(confirm) {
        let li = document.getElementById('' + idTask + '');
        if(li) {
            taskList.removeChild(li);
        }
    }
};
