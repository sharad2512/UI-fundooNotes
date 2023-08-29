function deleteNote(id){
    const Token3 = localStorage.getItem("token")
        $.ajax({
            url: `http://127.0.0.1:8000/api/note/delete/${id}`,
            type: "DELETE",
            headers: {
                "Authorization": `Bearer ${Token3}`,
              },
            // data: noteData,
            success: function (result) {
                alert("Note deleted Successfully")
                console.log(result);
                window.location.reload()
                // let token = result.data;
                // localStorage.setItem('token',token);
                // window.location.href = 'http://127.0.0.1:5500/pages/dashboard.html'
            }
        })
}