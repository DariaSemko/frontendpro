const url = "https://jsonplaceholder.typicode.com"
let id = ""
document.getElementById("js--form").addEventListener("submit", (event)=> {
    event.preventDefault();
    let container = document.querySelector(".js--container")
    if (container !== null) {
        container.remove()
    }
    id = event.target.querySelector("#js--input").value
    fetch(url + `/posts/${id}`)
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                alert(`Error: ${response.status} - Попробуйте позже`)
            }
        })
        .then(response=> response.json())
        .then(json => renderPost(json))
        .catch(error => {
            alert("Error " + error);
        });
    document.querySelector(".box").classList.add("open")
    document.querySelector(".btn").classList.add("open")
})
    document.getElementById("js--comments").addEventListener("click", () => {
        if (id === "") {
            return
        }
        fetch(url + `/posts/${id}/comments`)
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    alert(`Error: ${response.status} - Попробуйте позже`)
                }
            })
            .then(response => response.json())
            .then(json => renderComments(json))
            .catch(error => {
                alert("Error " + error);
            });
    })
function renderPost (postJSON) {
    document.querySelector(".userId").innerHTML = "UserId: " + postJSON.userId
    document.querySelector(".idPost").innerHTML = "Id: " + postJSON.id
    document.querySelector(".title").innerHTML = "Title: " + postJSON.title
    document.querySelector(".bodyPost").innerHTML = "Body: " + postJSON.body
}
function renderComments (commentsJSON) {
   let div = document.createElement("div")
    div.classList.add("js--container")
    for(let el of commentsJSON) {
        let postIdDiv = document.createElement("div")
        postIdDiv.innerHTML = `Post ID: ${el.postId}`
        postIdDiv.classList.add("comment")
        div.appendChild(postIdDiv)

        let idDiv = document.createElement("div")
        idDiv.innerHTML = `ID: ${el.id}`
        idDiv.classList.add("comment")
        div.appendChild(idDiv)

        let nameDiv = document.createElement("div")
        nameDiv.innerHTML = `Name: ${el.name}`
        div.appendChild(nameDiv)

        let emailDiv = document.createElement("div")
        emailDiv.innerHTML = `Email: ${el.email}`
        div.appendChild(emailDiv)

        let bodyDiv = document.createElement("div")
        bodyDiv.innerHTML = `Body: ${el.body}`
        bodyDiv.classList.add("last_el")
        div.appendChild(bodyDiv)
    }
    document.querySelector("body").appendChild(div)
}
