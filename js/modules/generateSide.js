const generateSide = (list) => {
    const Div = document.getElementById('menu');
    let newContent = '';
    for (let i = 0; i < list.length; i++) {
        newContent = document.createElement("li");
        newContent.textContent = list[i];
        newContent.onclick = function() {displayItem(list[i]);}; 
        Div.appendChild(newContent);
    }
}

export default generateSide;