const parent = document.querySelector("#parentbox");
console.log(parent);


window.addEventListener("load", () => {

    console.log("ON.LOAD");
    // Step-1 Creating the Object
    let xhr = new XMLHttpRequest();

    // Step-2 calling data from server
    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

            let sjson = JSON.parse(xhr.responseText);

            console.log(sjson.data);

            postlogic(sjson.data);

        }
    };

    xhr.send();

});


let postlogic = function (list) {
    const parent = document.querySelector("#parentbox");
    //console.log("INSIDE.LOAD", parent);

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);
    };
}