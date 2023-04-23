export function renderResults(resultsJSON) {
    document.querySelector(".js--result").innerHTML = JSON.stringify(resultsJSON, null, 2)
}