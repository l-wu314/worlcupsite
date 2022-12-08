import generateSide from "./modules/generateSide.js"
import getFlagURL from "./modules/getFlagURL.js"

const groups = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G", "Group H"];
const groupData = {
    "header":["Team","MP","W","D","L","GF","GA","GD","PTS"],
    "Group A":[["Netherlands","3","2","1","0","5","1","4","7"],["Senegal","3","2","0","1","5","4","1","6"],["Ecuador","3","1","1","1","4","3","1","4"],["Qatar","3","0","0","3","1","7","-6","0"]],
    "Group B":[["England","3","2","1","0","9","2","7","7"],["United States","3","1","2","0","2","1","1","5"],["Iran","3","1","0","2","4","7","-3","3"],["Wales","3","0","1","2","1","6","-5","1"]],
    "Group C":[["Argentina","3","2","0","1","5","2","3","6"],["Poland","3","1","1","1","2","2","0","4"],["Mexico","3","1","1","1","2","3","-1","4"],["Saudi Arabia","3","1","0","2","3","5","-2","3"]],
    "Group D":[["France","3","2","0","1","6","3","3","6"],["Australia","3","2","0","1","3","4","-1","6"],["Tunisia","3","1","1","1","1","1","0","4"],["Denmark","3","0","1","2","1","3","-2","1"]],
    "Group E":[["Japan","3","2","0","1","4","3","1","6"],["Spain","3","1","1","1","9","3","6","4"],["Germany","3","1","1","1","6","5","1","4"],["Costa Rica","3","1","0","2","3","11","-8","3"]],
    "Group F":[["Morocco","3","2","1","0","4","1","3","7"],["Croatia","3","1","2","0","4","1","3","5"],["Belgium","3","1","1","1","1","2","-1","4"],["Canada","3","0","0","3","2","7","-5","0"]],
    "Group G":[["Brazil", "3","2","0","1","3","1","2","6"],["Switzerland","3","2","0","1","4","3","1","6"],["Cameroon","3","1","1","1","4","4","0","4"],["Serbia","3","0","1","2","5","8","-3","1"]],
    "Group H":[["Portugal","3","2","0","1","6","4","2","6"],["South Korea","3","1","1","1","4","4","0","4"],["Uruguay","3","1","1","1","2","2","0","4"],["Ghana","3","1","0","2","5","7","-2","3"]],
    };

const groupMatches = {
    "Group A":[["Qatar", "0", "Ecuador", "2"],["Senegal", "0", "Netherlands", "2"],["Qatar", "1", "Senegal", "3"],["Netherlands", "1", "Ecuador", "1"],["Ecuador", "1", "Senegal", "2"],["Netherlands", "2", "Qatar", "0"]],
}

generateSide(groups);

window.displayItem = function(name) {
    document.getElementById('cname').textContent = name;



    const tableHTML = `
    <table>
    <thead id="thead">

    </thead>
    <tbody id="tbody">

    </tbody>
  </table>
    `;
    document.getElementById('main_table').innerHTML = tableHTML;

    const thead = document.getElementById('thead');
    let newContent = '';
    let list = groupData["header"];
    for (let i = 0; i < list.length; i++) {
        newContent = document.createElement("th");
        newContent.textContent = list[i];
        //newContent.onclick = function() {displayItem(list[i]);}; 
        thead.appendChild(newContent);
    }

    const tbody = document.getElementById('tbody');
    list = groupData[name];
    for (let i = 0; i < list.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < list[i].length; j++) {
            if (j===0){
                let td = document.createElement("td");
                td.classList.add("first")
                let span = document.createElement("span")
                span.textContent = (i+1).toString() + " ";
                let img = document.createElement("img");
                img.src = getFlagURL(list[i][j]);
                let span2 = document.createElement("span")
                span2.textContent = list[i][j];
                span2.classList.add("hover");
                span2.onclick = function() {
                    let win = window.open('teams.html?country='+list[i][j], '_self');
                }
                td.appendChild(span);
                td.appendChild(img);
                td.appendChild(span2);
                tr.appendChild(td);
            } else{
                let td = document.createElement("td");
                //let span = document.createElement("span");
                td.textContent = list[i][j];
                //td.appendChild(span);
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }

    document.getElementById('matchesContainer').innerHTML = `<div class="container vertical" id="round1">
        
    </div>
    <div class="container vertical" id="round2">
        
    </div>
    <div class="container vertical" id="round3">
        
    </div>`

    for (let i = 0; i < 6; i++) {
        let data = groupMatches[name][i];
        let roundnum = (Math.floor(i/2)+1).toString();
        let rounddiv = document.createElement("div");
        rounddiv.classList.add("round");
        rounddiv.classList.add("container");
        rounddiv.appendChild(generateMatch(data, 0));
        rounddiv.appendChild(generateMatch(data, 1));
        document.getElementById('round'+roundnum).appendChild(rounddiv);
    }
}

const generateMatch = (data, n) => {
    let matchbox = document.createElement("div");
    matchbox.classList.add("matchbox");
    matchbox.classList.add("container");
    matchbox.classList.add("reverse");
    let span1 = document.createElement("span");
    span1.textContent = data[2*n];
    span1.onclick = function() {
        let win = window.open('teams.html?country='+data[2*n], '_self');
    }
    span1.classList.add("hover")
    let img = document.createElement("img");
    img.src = getFlagURL(data[2*n]);
    img.onclick = function() {
        let win = window.open('teams.html?country='+data[2*n], '_self');
    }
    let span = document.createElement("span");
    span.class = "score";
    span.textContent = data[2*n+1];
    matchbox.appendChild(span);
    matchbox.appendChild(img);
    matchbox.appendChild(span1);
    return matchbox
}