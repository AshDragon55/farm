Template.viewanimals.helpers({
    animals() {
        return farmdb.find()
    }
})

Template.viewanimals.events({
    'click.js-edit'(){
        console.warn("Your are editing", this).value = this .type
        $('#editModal').modal('show')

    }
})