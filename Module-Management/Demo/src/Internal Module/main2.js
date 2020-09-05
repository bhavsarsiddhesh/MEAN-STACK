let Ajjaxcall = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5500/Internal%20Module/main1.js");
    xhr.onload = () => {
        const responses = JSON.parse(xhr.responseText);
        console.log(responses)
        domlogic(responses);
    }
    xhr.send();
};

let domlogic = (responses) => {
    //const City = response.list.city;
    const parent = document.querySelector("#parent");
    newElement = parent.children[0].cloneNode("true");
    newElement.innerHTML = responses[0].city + " " + responses[0].maxTemp;
    parent.insertBefore(newElement, parent.firstChild);

};

