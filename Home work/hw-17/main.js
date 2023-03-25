function UserTable({ form, content, userInfo, addButton }) {
    const usersKey = "users"

    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements.name.value,
                form.elements.phone.value,
                form.elements.age.value
            )
        })

        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
    }

    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }

        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem(usersKey)) || [];
        currentUsers.push(user);
        localStorage.setItem(usersKey, JSON.stringify(currentUsers))
    }

    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem(usersKey));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }

    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr>`+
                `<td>${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td><button class="btn">View</button><button class="btn">Edit</button><button class="btn js--delete">Delete</button></td>`+
            `</tr>`
        ))
        document.querySelectorAll(`.js--delete` ).forEach(element =>{
            element.addEventListener('click', this.delete)
        })
    }

    this.delete = function (event) {
        const row = event.target.closest("tr")
        const userID = +row.firstChild.textContent
        const users = JSON.parse(localStorage.getItem(usersKey));
        users.splice(users.findIndex(user => user.id === userID), 1);
        localStorage.setItem(usersKey, JSON.stringify(users))
        row.remove()
    }
}

(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
