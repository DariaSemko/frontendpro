function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.send()
    if (xhr.status !== 200) {
        return new Error("ERROR: " + xhr.status + " " + xhr.statusText)
    }
    return JSON.parse(xhr.response)
}

let weather = getWeather("LVIV")
console.log(weather)
const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`

document.querySelector(".js--city").innerHTML = "Місто - " + weather.name
document.querySelector(".js--temp").innerHTML = "Температура" + ": " + weather.main.temp
document.querySelector(".js--pressure").innerHTML = "Тиск" + ": " + weather.main.pressure
document.querySelector(".js--description").innerHTML = "Опис" + ": " + weather.weather[0].description
document.querySelector(".js--humidity").innerHTML = "Вологість" + ": " + weather.main.humidity
document.querySelector(".js--speed").innerHTML = "Швидкість вітру" + ": " + weather.wind.speed
document.querySelector(".js--deg").innerHTML = "Напрям у градусах" + ": " + weather.wind.deg
document.querySelector(".js--icon").innerHTML = `<img src="${iconUrl}" alt="icon">`