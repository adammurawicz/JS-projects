const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.cityName')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temp')
const pressure = document.querySelector('.pressure')
const windSpeed = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=abbbd50046acef4b449223c3bbf920c7'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'Poznan'
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const press = res.data.main.pressure
        const hum = res.data.main.humidity
        const wind = res.data.wind.speed
        const status = Object.assign({}, ...res.data.weather)


        console.log(status.id);
        // status.id = 801
        
        cityName.textContent = res.data.name
        temperature.textContent = temp.toFixed(1) + ' ℃'
        pressure.textContent = press + ' hPA'
        humidity.textContent = hum + ' %'
        windSpeed.textContent = wind.toFixed(1) + ' m/s'
        weather.textContent = status.main

        warning.textContent = ''
        input.value = ''

        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute('src', './img/thunderstorm.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_960_720.jpg)'
        } else if (status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', './img/drizzle.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_960_720.jpg)'
        } else if (status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', './img/rain.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg)'
        } else if (status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', './img/ice.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2019/12/30/20/34/road-4730553_960_720.jpg)'
        } else if (status.id >= 700 && status.id < 800) {
            photo.setAttribute('src', './img/fog.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2021/10/10/10/45/fog-6696312_960_720.jpg)'
        } else if (status.id === 800) {
            photo.setAttribute('src', './img/sun.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/18/19/14/sea-1836480_960_720.jpg)'
        } else if (status.id >= 800 && status.id < 900) {
            photo.setAttribute('src', './img/cloud.png')
            document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_960_720.jpg)'
        } else {
            photo.setAttribute('src', './img/unknown.png')
            document.body.style.backgroundColor = 'lightgray'
        }
    })
    .catch(()=>warning.textContent = 'Type correct name of the city')
}

const enterCheck = (e) => {
    if(e.key === 'Enter'){
        getWeather()
    }
}

input.addEventListener('keyup', enterCheck)
getWeather()
button.addEventListener('click', getWeather)

