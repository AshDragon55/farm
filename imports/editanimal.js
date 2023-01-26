Template.editAnimal.events({
    'click .js-editAnimal'(){
        
        let eID=document.querySelector(".editID").value
        let type=document.querySelector(".editAnimalType").value
        let legs=document.querySelector(".editAnimalLegs").value
        console.info("saving edits", eID)
        farmdb.update(
            {_id:eID},
            {$set:{
                'type': type,
                'numLegs': legs
            }}
        )
        
    }
})
