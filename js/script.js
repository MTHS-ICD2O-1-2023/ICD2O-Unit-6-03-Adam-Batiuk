// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function updateCookieCount() {
  if (localStorage.getItem("counter") === null) {
    localStorage.setItem("counter", 0)
  }
  let clicks = localStorage.getItem("counter")
  document.getElementById("answer").innerHTML = clicks
}

function cookieClicked() {
  let clicks = parseInt(localStorage.getItem("counter")) + 1
  localStorage.setItem("counter", clicks)
  // print answer
  document.getElementById("answer").innerHTML = clicks
}