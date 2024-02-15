function getComments()
{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://us-central1-assignment5-aa3b5.cloudfunctions.net/getcomments');

    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let sHTML = "";
                let data = JSON.parse(xhr.responseText);
                for(let i=0; i<data.length; i++)
                {
                  //  sHTML += "<p> Handle: " + data[i].handle+ "</p>";
                    sHTML += "<p> Comment: " + data[i].comment+ "</p>";
                   // sHTML += "<button onclick=deleteComment(" + "'" + data[i].id + "'" + ")>DeleteComment</button>";
                    comments.innerHTML = sHTML; } } else {
                console.log('Error: ' + xhr.status);
            }}};

    xhr.send(null);
}
