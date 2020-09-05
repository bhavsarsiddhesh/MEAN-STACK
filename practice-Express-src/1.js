let registeruser = async () => {
    const id = document.querySelector("#id").value;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#pass").value;
    const mobile = document.querySelector("#mob").value;
    if (id === "") {
        document.querySelector("#id").style.borderColor = "red";
    }

    let url = `http://localhost:3002/adduser?id=${id}&username=${username}&password=${password}&mobile=${mobile}`;

    await fetch(url);

    document.querySelector("#id").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#mob").value = "";
};