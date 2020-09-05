let callAjax = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);

        jsonDomOperation(refjson);
    };

    xhr.send();
};

let jsonDomOperation = function (refjson) {
    console.log(refjson);

    let parent = document.querySelector("#parent");

    for (let i = 0; i < refjson.length; i++) {
        let item = refjson[i];

        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};


let callAjaxXML = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let xmldoc = xhr.responseXML;

        xmlDomHandler(xmldoc);
    };

    xhr.send();

};   