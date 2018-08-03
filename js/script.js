//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

  })
})
