document.addEventListener('DOMContentLoaded', () => {
     const input = document.getElementById('intxt');
     const addButton = document.querySelector('.addbtn');
     const taskDiv = document.querySelector('.taskdiv');
     const taskNo = document.getElementById('taskno');

     let taskCount = 0;

     addButton.addEventListener('click', addTask);

     function addTask() {
         const taskText = input.value.trim();
         if (taskText !== '') {
             const taskItem = document.createElement('div');
             taskItem.className = 'task-item';
             taskItem.innerHTML = `
                 <span class=" task">${taskText}</span>
                 <button class="renamebtn"><i class='bx bxs-edit' id='edit'></i></button>
                 <button class="deletebtn"><i class='bx bxs-trash-alt' id='trash'></i></button>
             `;
             taskDiv.appendChild(taskItem);
             input.value = '';
             taskCount++;
             updateTaskCount();
             const deleteButton = taskItem.querySelector('.deletebtn');
             deleteButton.addEventListener('click', () => {
                 taskDiv.removeChild(taskItem);
                 taskCount--;
                 updateTaskCount();
             });
                const renameButton = taskItem.querySelector('.renamebtn');
                renameButton.addEventListener('click', () => {
                const newTaskText = prompt('Enter new task name:', taskText);
                    if (newTaskText !== null && newTaskText.trim() !== '') {
                        taskItem.querySelector('.task-text').textContent = newTaskText.trim();
                    }
                });
         }
     }

     function updateTaskCount() {
         taskNo.textContent = `${taskCount} Task${taskCount !== 1 ? 's' : ''} to be done!`;
    }
 });