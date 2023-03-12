function Tasks(_formInput, _todosWrapper) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML('beforeend', this.createTemplate(this.input.value));
        this.input.value = '';
        document.querySelectorAll('.js--delete').forEach(item => {
            item.addEventListener('click', this.delete);
        })
        document.querySelectorAll('.js--markAsDone').forEach(item => {
            item.addEventListener('click', this.markAsDone);
        })
    }
    this.delete = function (event) {
        event.target.closest('.js--todo-item').remove();
    }
    this.createTemplate = function (description) {
        return `
            <div class="todo-item js--todo-item">
                    <div class="todo-item__description">${description}</div>
                    <button class="todo-item__btn  js--markAsDone">Выполнено</button>
                    <button class="todo-item__btn js--delete">Удалить</button>
            </div> 
        `
    }
    this.markAsDone = function (event) {
        event.target.closest('.js--todo-item').
        querySelector('.todo-item__description').classList.add('todo-item--checked')
    }
}
const task = new Tasks(
    '.js--form__input',
    '.js--todos-wrapper',
);
// console.log(task.addItem);
// console.log(task.addItem());
// console.log(task.todosWrapper);
document.querySelector('.js--form').addEventListener('submit', task.addItem);

// const task2 = new Tasks(
//     '.js--form__input2',
//     '.js--todos-wrapper2',
// );
// document.querySelector('.js--form2').addEventListener('submit', task2.addItem);
// task.input
