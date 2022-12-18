const hourHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date()

    const secondsPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

    setRotation(secondsHand, secondsPercentage)
    setRotation(minutesHand, minutesPercentage)
    setRotation(hourHand, hoursPercentage)
    setRotation(hourHand, hoursPercentage)
}

setClock()

setInterval(setClock, 1000)