(()=>{"use strict";const t=new function(t,e){this.todosWrapper=document.querySelector(".js--todos-wrapper"),this.addItem=t=>{t.preventDefault(),this.input=t.target.querySelector(".js--form__input"),this.todosWrapper.insertAdjacentHTML("beforeend",this.createTemplate(this.input.value)),this.input.value="",document.querySelectorAll(".js--delete").forEach((t=>{t.addEventListener("click",this.delete)})),document.querySelectorAll(".js--markAsDone").forEach((t=>{t.addEventListener("click",this.markAsDone)}))},this.delete=function(t){t.target.closest(".js--todo-item").remove()},this.createTemplate=function(t){return`\n            <div class="todo-item js--todo-item">\n                    <div class="todo-item__description">${t}</div>\n                    <button class="todo-item__btn  js--markAsDone">Выполнено</button>\n                    <button class="todo-item__btn js--delete">Удалить</button>\n            </div> \n        `},this.markAsDone=function(t){t.target.closest(".js--todo-item").querySelector(".todo-item__description").classList.add("todo-item--checked")}}(".js--form__input",".js--todos-wrapper");document.querySelector(".js--form").addEventListener("submit",t.addItem)})();