
let getWeather = async(city) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `http://api.weatherapi.com/v1/current.json?key=2d34eea714394068915102306232101&q=${city}&aqi=no`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()
    xhr.onload = () => {
        let response = xhr.response
        response = JSON.parse(response)
        writeWeather(response.current.temp_c)
    }
}

let inputCity = document.querySelector("#input-city")
let btnSearch = document.querySelector("#btn-search")

if (localStorage.getItem("city")) {
    getWeather(localStorage.getItem("city"))
}

btnSearch.addEventListener('click', () => {
    getWeather(inputCity.value)
    localStorage.setItem('city', inputCity.value)
})

let writeWeather = (temp_c) => {
    document.querySelector("#weather").innerHTML = `${temp_c}°C`
}

let obj = {
    "city" : "Los Angeles"
}