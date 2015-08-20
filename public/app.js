$(document).ready(function() {
  $('#new-option-form').on("submit", function(event) {
    event.preventDefault();
    var newOption = $('#new-option-field').val();

    if (newOption.length > 0) {
      // Do submit it!
      submitNewOption(newOption)
    } else {
      // don't submit it
      alert("Hey! Fill out the darn form!")
    }
  });

  var submitNewOption = function(myNewOption) {
    var request = $.ajax({
      method: "post",
      url: "/new_option",
      data: { option: myNewOption }
    })

    request.success(function() {
      $('#new-vote-form').prepend('<label for="choice">'
        + '<input type="radio" name="choice" value="' + myNewOption + '"> '
        + myNewOption
        + '</label><br />'
      )
    });
  }

});
