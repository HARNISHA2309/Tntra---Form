
function validateForm() {

    var fname = document.getElementById('fname').value;
       var fnameRGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
       var fnameResult = fnameRGEX.test(fname);
       if (fnameResult == false) {
           alert('Please enter correct First name');
           // return false;
       }
   
   
   var phoneNumber = document.getElementById('phone').value;
   var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
   var phoneResult = phoneRGEX.test(phoneNumber);
   if (phoneResult == false) {
       alert('Please enter a valid phone number');
       // return false;
   }
   
   var lname = document.getElementById('lname').value;
   var lnameRGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
   var lnameResult = lnameRGEX.test(lname);
   if (lnameResult == false) {
       alert('Please enter correct Last name');
       // return false;
   }
   
   var address = document.getElementById('address').value;
   var addressRGEX = /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/;
   var addressResult = addressRGEX.test(address);
   if (addressResult == false) {
       alert('Please enter correct address');
       // return false;
   }
   
   var postal = document.getElementById('postal').value;
   var postalRGEX = /^[0-9]{5}(?:-[0-9]{4})?$/;
   var postalResult = postalRGEX.test(postal);
   if (postalResult == false) {
       alert('Please enter correct postal');
       // return false;
   }
   
    var email = document.getElementById('email').value;
   var email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"/;
   var emailResult = emailRGEX.test(email);
   if (emailResult == false) {
       alert('Please enter correct email');
       // return false;
   }
   
   }


   