



user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "te damos la bienvenida," + user_name;

function addRoom()
{
    room_name = document.getElementById("roomname").value;

    firebase.database().ref("/").child(room_name).uptade({
        purpose : "colocando el nombre"
    });

    localStorage.setItem("roomname", room_name);
    window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}
function getdata()
{
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";snapshot.forEach(function(childsnapshot){childsnapshot.key;})
        Room_names = childKey;
        console.log("Nombre de la sala :" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>"
    document.getElementById("output").innerHTML += row;
    });
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}