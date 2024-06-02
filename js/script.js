// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

// convert K to C to one decimal
function kelvinToCelcius(tempK) {
  const tempC = tempK - 273.15
  return tempC.toFixed(1)
}

async function getWeather() {
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    //console.log(jsonData)
    // extract data
    const iconId = jsonData.weather[0].icon
    const description = jsonData.weather[0].description
    const temp = kelvinToCelcius(jsonData.main.temp)
    const feelsLike = kelvinToCelcius(jsonData.main.feels_like)
    const tempMin = kelvinToCelcius(jsonData.main.temp_min)
    const tempMax = kelvinToCelcius(jsonData.main.temp_max)
    const pressure = jsonData.main.pressure
    const humidity = jsonData.main.humidity
    // test cases
    //console.log("300 K is " + kelvinToCelcius(300) + " °C") // expect 26.9
    //console.log("250 K is " + kelvinToCelcius(250) + " °C") // expect -23.1
    //console.log("340 K is " + kelvinToCelcius(340) + " °C") // 66.9
    // display data
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + iconId + "@2x.png"
    document.getElementById("icon").alt = description
    document.getElementById("description").innerHTML = description
    document.getElementById("temp").innerHTML = "Temp: " + temp + " °C"
    document.getElementById("feels-like").innerHTML = "Feels like: " + feelsLike + " °C"
    document.getElementById("temp-min").innerHTML = "Min: " + tempMin + " °C"
    document.getElementById("temp-max").innerHTML = "Max: " + tempMax + " °C"
    document.getElementById("pressure").innerHTML = "Pressure: " + pressure + " mb"
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%"
  } catch (error) {
    console.error(error)
  }
}