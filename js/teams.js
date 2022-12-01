import teamDescriptions from "./page_content/teamDescriptions.js"
import getFlagURL from "./modules/getFlagURL.js"
import generateSide from "./modules/generateSide.js"

const teams = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];


window.displayItem = function(name) {
    document.getElementById('cname').textContent = name;
    document.getElementById('flag').src = getFlagURL(name);
    document.getElementById('description').textContent = teamDescriptions[name];
}

generateSide(teams);