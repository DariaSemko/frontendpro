import {renderResults} from "./render.js"

const apiForm = document.querySelector("#js--apiForm")
const action = apiForm.action

apiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let preloaderEl = document.querySelector('.loader');
    preloaderEl.classList.add("open")
    let controllerAndIdInput = event.target.querySelector("#js--apiUrl").value.trim()
    let controllerAndId = controllerAndIdInput.split("/");
    fetch(action + `${controllerAndIdInput}`)
        .then(response => {
            if (response.ok) {
                document.querySelector("#controllerContainer").innerHTML = controllerAndId[0]
                document.querySelector("#idContainer").innerHTML = controllerAndId[1]
                document.querySelector(".js--infoContainer").classList.add("open")
                return response
            } else {
                alert(`Error: ${response.status}`)
            }
        })
        .then(response => response.json())
        .then(json => {
            preloaderEl.classList.remove("open")
            renderResults(json)
        })
        .catch(error => {
            alert("Error " + error);
        });
})
