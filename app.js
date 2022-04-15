const form = document.querySelector('form');
const taskName = document.querySelector('#task-name');
const taskDate = document.querySelector('#task-date');
const taskTag = document.querySelector('#task-tag');
const tasksList = document.querySelector('.tasks')

const tasks = JSON.parse(localStorage.getItem('tasks'));

if(tasks) {
  tasks.forEach(task => {
    addTask(task);
  });
};


form.addEventListener('click', (e) => {
  e.preventDefault();

  addTask();
});

function addTask(task){

  let taskNameEl = taskName.value;
  let taskDateEl = taskDate.value;
  let taskTagEl = taskTag.value;


  if (taskNameEl && taskDateEl && taskTagEl) {
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    taskEl.innerHTML = `
    <div class="left">
    <div class="round"></div>
    <div class="task-desc">
    <h3>${taskNameEl}</h3>
    <span>${taskDateEl}</span>
    </div>
    </div>
    <div class="tags">
    <div class="tag">${taskTagEl}</div>
    </div>`;

    taskEl.addEventListener('click', () => {
      const round = document.querySelector('.round');
      round.classList.toggle('done');
    });

    tasksList.appendChild(taskEl);

    taskName.value = "";
    taskDate.value = "";
    taskTag.value = "";

  };
};
