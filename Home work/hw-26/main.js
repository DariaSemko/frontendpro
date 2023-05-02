class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }

    setValue (value) {
        this.value = value
    }
}
class TextElement extends FormElement {
    constructor(name, type, placeholder) {
        super(name,type, "");
        this.placeholder = placeholder
    }

    getInput() {
        let input = document.createElement("input")
        input.name = this.name;
        input.type = this.type;
        input.placeholder = this.placeholder;
        return input
    }
}

class CheckboxElement extends FormElement {
    constructor(name, type, checked) {
        super(name, "checkbox", checked);
        this.checked = checked;
    }

    getCheckbox() {
        let label = document.createElement("label")
        label.htmlFor = "agreement"
        let checkbox = document.createElement("input")
        checkbox.id = "agreement"
        checkbox.name = this.name;
        checkbox.type = this.type;
        checkbox.checked = this.checked;
        label.textContent = "I agree all statements in Terms os service"
        label.appendChild(checkbox)
        return label
    }
}

class ButtonElement extends FormElement {
    constructor(name, value) {
        super(name, "submit", value);
    }

    createButton() {
        const button = document.createElement("input");
        button.setAttribute("name", this.name);
        button.setAttribute("type", this.type);
        button.innerText = this.value;
        return button;
    }
}
let parent = document.getElementById("js--form")

const username = new TextElement(`username`, "text","Your name")
const email = new TextElement("email", "email", "Your email")
const password = new TextElement("password", "password", "Password")
const repeatedPassword = new TextElement("repeatedPassword", "password", "Repeat your password")
const agreeToTerms = new CheckboxElement("agree-to-terms", "checkbox", true)
const submitButton = new ButtonElement("submit", "Submit");

parent.appendChild(username.getInput());
parent.appendChild(email.getInput());
parent.appendChild(password.getInput());
parent.appendChild(repeatedPassword.getInput());
parent.appendChild(agreeToTerms.getCheckbox())
parent.appendChild(submitButton.createButton())

parent.addEventListener("submit", (event) => {
    event.preventDefault();

    username.setValue(event.target.querySelector(`input[name=${username.name}]`).value)
    email.setValue(event.target.querySelector(`input[name=${email.name}]`).value)
    password.setValue(event.target.querySelector(`input[name=${password.name}]`).value)
    repeatedPassword.setValue(event.target.querySelector(`input[name=${repeatedPassword.name}]`).value)
    agreeToTerms.setValue(event.target.querySelector(`input[name=${agreeToTerms.name}]`).checked)
    console.log(`Username: ${username.getValue()}`);
    console.log(`Email: ${email.getValue()}`);
    console.log(`password: ${password.getValue()}`);
    console.log(`repeatedPassword: ${repeatedPassword.getValue()}`);
    console.log(`Agree to Terms: ${agreeToTerms.getValue()}`);
});
