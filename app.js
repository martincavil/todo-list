const form = document.querySelector('form');
const taskName = document.querySelector('#task-name');
const taskDate = document.querySelector('#task-date');
const taskTag = document.querySelector('#task-tag');
const tasks = document.querySelector('.tasks');

form.addEventListener('click', (e) => {
  e.preventDefault();
  const taskNameEl = taskName.value;
  const taskDateEl = taskDate.value;
  const taskTagEl = taskTag.value;


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

    tasks.appendChild(taskEl);

    taskName.value = "";
    taskDate.value = "";
    taskTag.value = "";
  }
});
