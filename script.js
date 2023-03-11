const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-tasks ul');
const message = document.querySelector('.list-tasks');
let tasks = [];

function eventListeners(){
    document.addEventListener('DOMContentLoad', () => {
        tasks = JSON.parse(localStorage.getItem('tasks')) || []
        createHTML();
    });

    listTasks.addEventListener('click', deleteTask);

}

function deleteTask(e){
    if(e.target.tagName == 'SPAN'){
        const deleteId = parseInt(e.target.getAttribute('task-id'));
        tasks = tasks.filter(task => task.id !== deleteId);
        console.log(tasks);
        createHTML();

    }
}

function deleteAll(){
    tasks = [];
    createHTML;

}

function addTasks(){
    const task = input.value;
    if(task === ''){
        showError('Porfavor ingrese una tarea');
        return;
    }
    const taskObj = {
        task: task,
        id:Date.now()
    }
    tasks = [...tasks, taskObj]
    createHTML();
    input.value = '';
}

function createHTML(){
    clearHTML();
    if(tasks.length > 0){
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = '${task.task} <span task-id="${task.id}></span>';
        listTasks.appenedchild(li);
        });
    }
    sincronizationStorage();
}

function sincronizationStorage(){
    localStorage.setItem('tasks', json.stringify(tasks));
};

function clearHTML(){
    listTasks.innerHTML = '';
}

function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error'); 

    message.appenedChild(messageError);
    setTimeout(() => {
        messageError.remove();
    }, 2000);

}