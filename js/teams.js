const teams = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
import teamDescriptions from "./page_content/teamDescriptions.js"

const getFlagURL = (name) => {
    let flag_name = name;
    let link = "";
    if (name === "Costa Rica") {
        flag_name = "Costa-Rica";
    }
    if (name === "South Korea") {
        flag_name = "Korea-South";
    }
    if (name === "Saudi Arabia") {
        flag_name = "Saudi-Arabia";
    }
    if (name === "United States") {
        flag_name = "United-States-of-America";
    }
    if (name === "England") {
        link = "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png";
    } else if (name === "Wales"){
        link = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/2560px-Flag_of_Wales.svg.png";
    } else {
        link = "https://www.countries-ofthe-world.com/flags-normal/flag-of-"+flag_name+".png";
    }
    return link;
}
window.country = function(name) {
    document.getElementById('cname').textContent = name;
    document.getElementById('flag').src = getFlagURL(name);
    document.getElementById('description').textContent = teamDescriptions[name];
}