$(document).ready(function () {
   $("#validateForm").click(function (event) {
      event.preventDefault();
      $(".error").text("");


      let name = $("#name").val().trim();
      let age = parseInt($("#age").val().trim());
      let address = $("#address").val().trim();
      let state = $("#state").val().trim().toLowerCase();
      let phone = $("#phone").val().trim();
      let email = $("#email").val().trim();
      let password = $("#password").val().trim();
      let cpassword = $("#Cpassword").val().trim();

      let namePattern = /^[A-Za-z ]{3,20}$/;
      let agePattern = /^[0-9]{1,3}$/;
      let addressPattern = /^[A-Za-z0-9\s\-\.,']{10,100}$/;
      let phonePattern = /^[6789]\d{9}$/;
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      var isValid = true;
      let isNameValid = true;
      let isAgeValid = true;
      let isAddressValid = true;
      let isStateValid = true;
      let isPhoneValid = true;
      let isEmailValid = true;
      let isPasswordValid = true;
      let isCpasswordValid = true;

      //name
      if (!name) {
         $("#namerror").text("Please enter the name");
         isNameValid = false;
      } else if (!namePattern.test(name)) {
         $("#namerror").text("Invalid Name");
         isNameValid = false;
      } else {
         isNameValid = true;
      }
      //age
      if (!age) {
         $("#agerror").text("Please enter your age");
         isAgeValid = false;
      } else if (isNaN(age) || age < 18 || age > 100) {
         $("#agerror").text("Enter your age in number");
         if (age < 18 || age > 100) {
            $("#agerror").text("Your are not Eligible");
         }
         isAgeValid = false;
      } else {
         isAgeValid = true;
      }
      //address

      if (!address) {
         $("#adderror").text("Please enter your Address");
         isAddressValid = false;
      } else if (!addressPattern.test(address)) {
         $("#adderror").text("Something went Wrong correct it");
         isAddressValid = false;
      } else {
         isAddressValid = true;
      }
      //state

      var validStates = [
         "andhra pradesh", "arunachal pradesh", "assam", "bihar",
         "chhattisgarh", "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka",
         "kerala", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland", "odisha", "punjab",
         "rajasthan", "sikkim", "tamil nadu", "telangana", "tripura", "uttar pradesh", "uttarakhand", "west bengal",
      ];

      if (!state) {
         $("#staerror").text("Please enter your State");
         isStateValid = false;
      } else if (!validStates.includes(state)) {
         $("#staerror").text("Check Your Spelling");
         isStateValid = false;
      } else {
         isStateValid = true;
      }

      //phone

      if (!phone) {
         $("#phoerror").text("Please enter your Phone number");
         isPhoneValid = false;
      } else if (!phonePattern.test(phone)) {
         $("#phoerror").text("Enter the correct Phone number");
         isPhoneValid = false;
      } else {
         isPhoneValid = true;
      }

      //Email
      if (!email) {
         $("#mailerror").text("Please enter your Email");
         isEmailValid = false;
      } else if (!emailPattern.test(email)) {
         $("#mailerror").text("Enter the correct Email");
         isEmailValid = false;
      } else {
         isEmailValid = true;
      }

      //password

      let len = /^.{8,}$/.test(password)
      let upp = /[A-Z]/.test(password);
      let spe = /[@#$%^&+=!]/.test(password);
      let num = /\d/.test(password);

      if (!password) {
         $("#pass1error").text("Please enter your password");
         isPasswordValid = false;
      } else if (password) {
         if (!len) {
            $("#pass1error").text("There should be at least 8 characters");
            isPasswordValid = false;
         }
         if (!upp) {
            $("#pass2error").text("There should be at least 1 uppercase letter");
            isPasswordValid = false;
         }
         if (!spe) {
            $("#pass3error").text("There should be at least 1 special character");
            isPasswordValid = false;
         }
         if (!num) {
            $("#pass4error").text("There should be at least 1 number");
            isPasswordValid = false;
         }

      } else {
         isPasswordValid = true;
      }

      //confirm Password

      if (!cpassword) {
         $("#cpasserror").text("Please enter your password");
         isCpasswordValid = false;
      } else if (cpassword != password) {
         $("#cpasserror").text("The password is not matching");
         isCpasswordValid = false;
      } else {
         isCpasswordValid = true;
      }


      if (isNameValid && isAgeValid && isAddressValid && isStateValid && isPhoneValid && isEmailValid && isPasswordValid && isCpasswordValid) {
         $("input,label").hide(1000);
         $(".card").slideUp(1000);
         $(".success").show(1500);


      } else {
         console.log("Validation failed. Form not submitted.");
      }


      $("#try").click(function () {
         $("#name").val("");
         $("#age").val("");
         $("#address").val("");
         $("#state").val("");
         $("#phone").val("");
         $("#email").val("");
         $("#password").val("");
         $("#Cpassword").val("");

         $(".success").slideUp("slow");
         $("input,label").show();
         $(".card").slideDown(1000);


      });

   });
});