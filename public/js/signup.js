$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.register-button");
  // var emailInput = $("input#email-input");
  var registerName = $("input#name-register");
  var emailRegister = $("input#email-register");
  var passwRegister = $("input#password-register");
  var ageVerify = $("input#21-age-verify-register");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      user_name: registerName.val().trim(),
      email: emailRegister.val().trim(),
      password: passwRegister.val().trim(),
      age_greater_21: ageVerify
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailRegister.val("");
    passwRegister.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/register", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
