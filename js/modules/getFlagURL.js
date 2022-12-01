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

export default getFlagURL;