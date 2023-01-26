Template.viewanimals.helpers({
    animals() {
        return farmdb.find()
    }
})

Template.viewanimals.events({
    'click .js-edit'(){
        console.warn("Your are editing", this)
        document.querySelector(".editAnimalType").value = this.type
        document.querySelector(".editAnimalLegs").value = this.numLegs
        document.querySelector(".editID").value = this._id

        $('#editModal').modal('show')


    },
    'click .js-delete'(){
        console.log('deleting',this._id)
        farmdb.remove({"_id":this._id})
    }
})