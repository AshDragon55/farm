Template.editAnimal.events({
    'click .js-editAnimal'(){
        
        let editID=document.querySelector(".editID").value
        console.info("saving edits",editID)
        // farmdb.update(
        //     {_id:editId},
        //     {$set:{
        //         type: this.type,
        //         legs: this.legs
        //     }}
        // )
        
    }
})
