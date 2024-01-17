import { dgData } from "./data.js"
const getTournament = document.querySelector(".get-tournament")
const displayPlaylist = document.querySelector(".outcome")

getTournament.addEventListener("click", getPlaylist)

function getPlaylist() {
    const randNum = Math.floor(Math.random() * dgData.length)
    displayPlaylist.innerHTML = `
        <a href="${dgData[randNum].link}" target="_blank" id="picture-link"> <img src="${dgData[randNum].thumbnail}" alt="${dgData[randNum].year} ${dgData[randNum].tournament}"> </a>
        <p id="tournament-name">The ${dgData[randNum].year} ${dgData[randNum].tournament}</p>
        <p id="prod-company">Produced by: ${dgData[randNum].productionCompany}</p>
        <p id="field-presented">This playlist features players from ${dgData[randNum].field}.</p>
        <a href="${dgData[randNum].link}" id="playlist-link" target="_blank">Watch it here</a>
    `
}