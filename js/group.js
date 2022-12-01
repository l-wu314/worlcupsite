import generateSide from "./modules/generateSide.js"

const groups = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G", "Group H"];

generateSide(groups);

window.displayItem = function(name) {
    document.getElementById('cname').textContent = name;
    //document.getElementById('description').textContent = teamDescriptions[name];
}