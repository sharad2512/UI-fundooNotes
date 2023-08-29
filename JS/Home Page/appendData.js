window.onload = function () {
    const Token2 = localStorage.getItem("token")
    $.ajax({
        url: "http://127.0.0.1:8000/api/note/get", // Update the URL to the endpoint that retrieves notes
        type: "GET",
        headers: {
            "Authorization": `Bearer ${Token2}`,
        },
        success: function (notes) {
            console.log(notes)
            for (let i of notes.Notes) {
                console.log(i)
                let getAllNote = `<div class="showNote">
                <div id="updiv">
             <h2 id="upDivH">${i.title}</h2>
         </div>
         <div id="midDiv">
             <h2 id="midDivH">${i.content}</h2>
         </div>
        
         <div id="botDiv" >
             <img id="showNoteArcIcon" onclick ="archiveNote(${i.id})" src="../Assets/home page/archive.jfif" alt="">
             <img id="showNoteDelIcon" onclick ="deleteNote(${i.id})"   src="../Assets/home page/delete.jfif" alt="">

      
         </div> 
         </div>`
         $("#newShowNote").append(getAllNote)
            }


        }
    });

}

