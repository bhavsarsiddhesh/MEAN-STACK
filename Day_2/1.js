let callajax = function () {

    //Creating Object 
    var xhr = new XMLHttpRequest();

    // Get the data from Server

    url = "https://reqres.in/api/users?page=2"
    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        postlogic(refjson);
    }

    xhr.send();
}

let postlogic = function (refjson) {

    var parent = document.querySelector("#parentbox1");

    for (let i = 0; i < refjson.data.length; i++) {
        let item = refjson.data[i];

        var newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.first_name;

        parent.insertBefore(newElement, parent.firstChild);
    }

}