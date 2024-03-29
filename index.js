import { dgData } from "./data.js"
const getTournament = document.querySelector(".get-tournament")
const displayPlaylist = document.querySelector(".outcome")
const tournamentCount = document.getElementById("tournament-count")

getTournament.addEventListener("click", getPlaylist)

function getPlaylist() {
    getTournament.innerText = "Get a different tournament";
    getTournament.style.fontSize = "1.15rem";
    const randNum = Math.floor(Math.random() * dgData.length);
    displayPlaylist.innerHTML = `
        <a href="${dgData[randNum].link}" target="_blank" id="picture-link"> <img src="${dgData[randNum].thumbnail}" alt="${dgData[randNum].year} ${dgData[randNum].tournament}"> </a>
        <p id="tournament-name">Watch the ${dgData[randNum].year} ${dgData[randNum].tournament}</p>
        <p id="prod-company">Produced by: ${dgData[randNum].productionCompany}</p>
        <p id="field-presented">This playlist features players from ${dgData[randNum].field}.</p>
        <a href="${dgData[randNum].link}" id="playlist-link" target="_blank" style="color: whitesmoke; font-size: 1.1rem;">Click here to watch!</a>
    `
}

tournamentCount.innerText = `Number of playlists available: ${dgData.length - 1}`