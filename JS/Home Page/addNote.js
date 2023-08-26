// window.onload  = function(){
function addNote(){
    const Token1 = localStorage.getItem("token")
        console.log(Token1)
    let title = document.getElementById('titel1').value
        let dec = document.getElementById('desc').value

        let noteData = {
            title: title,
            content: dec
        }
        console.log(noteData)
        $.ajax({
            url: "http://127.0.0.1:8000/api/note/create",
            type: "POST",
            headers: {
                "Authorization": `Bearer ${Token1}`,
              },
            data: noteData,
            success: function (result) {
                alert("Note Created Successfully")
                console.log(result);
                // let token = result.data;
                // localStorage.setItem('token',token);
                // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
            }
        })
}
// }
