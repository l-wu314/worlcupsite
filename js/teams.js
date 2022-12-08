import {teamDescriptions, coaches, rosters} from "./page_content/teamDescriptions.js"
import getFlagURL from "./modules/getFlagURL.js"
import generateSide from "./modules/generateSide.js"

const teams = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];


window.displayItem = function(name) {
    document.getElementById('cname').textContent = name;
    document.getElementById('flag').src = getFlagURL(name);
    document.getElementById('description').textContent = teamDescriptions[name];
    document.getElementById('rosterHead').textContent = "Roster";
    document.getElementById('coach').textContent = "Head coach: " + coaches[name];
    let table = document.getElementById('roster');
    let list = rosters[name];
    for (let i = 0; i < list.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = list[i];
        tr.appendChild(td)
        table.appendChild(tr)
    }
}

generateSide(teams);