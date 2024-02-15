function postComments() {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-central1-assignment5-aa3b5.cloudfunctions.net/postcomments');
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function () {
        let DONE = 4;
        let OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                document.getElementById('handle').value = '';
                document.getElementById('commentArea').value = '';
                getComments();
            } else {
                console.log('Error: ' + xhr.status);
            } }
    };



   xhr.send(JSON.stringify( {
       // "handle": document.getElementById('handle').value,
        "comment": document.getElementById('commentArea').value}
    ));

}