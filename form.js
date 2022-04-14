document.getElementsByTagName("form")[0].onsubmit = function validate(e) {
  e.preventDefault()


}


document.getElementById('phone').onchange = () => {
  var phoneNumber = document.getElementById('phone').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  if (phoneResult == false) {
    alert('Please enter a valid phone number');
    // return false;

  }
}

document.getElementById('fname').onchange = () => {
  var fullname = document.getElementById('fname').value;
  var fnameRGEX = /^[A-Za-z]{3,30}$/;
  var fnameResult = fnameRGEX.test(fullname);
  if (fnameResult == false) {
    alert('Please enter correct firstname');
    // return false;
  }

}

document.getElementById('lname').onchange = () => {
  var lastname = document.getElementById('lname').value;
  var lnameRGEX = /^[A-Za-z]{3,30}$/;
  var lnameResult = lnameRGEX.test(lastname);
  if (lnameResult == false) {
    alert('Please enter correct lastname');
    // return false;
  }

}
document.getElementById('add_1').onchange = () => {
  var address = document.getElementById('add_1').value;
  var addRGEX = /^[a-zA-Z0-9\s,.'-]{3,}$/;
  var addResult = addRGEX.test(address);
  if (addResult == false) {
    alert('Please enter correct address');
    // return false;
  }

}

document.getElementById('add_2').onchange = () => {
  var address_2 = document.getElementById('add_2').value;
  var add2RGEX = /^[a-zA-Z0-9\s,.'-]{3,}$/;
  var add2Result = add2RGEX.test(address_2);
  if (add2Result == false) {
    alert('Please enter correct street address');
    // return false;
  }

}


document.getElementById('city').onchange = () => {
  var city = document.getElementById('city').value;
  var cityRGEX = /^[a-zA-Z]{3,20}$/;
  var cityResult = add2RGEX.test(city);
  if (cityResult == false) {
    alert('Enter a valid city name');
    // return false;
  }

}

document.getElementById('city_1').onchange = () => {
  var city_1 = document.getElementById('city_1').value;
  var city_1RGEX = /^[a-zA-Z]{3,20}$/;
  var city_1Result = city_1RGEX.test(city_1);
  if (city_1Result == false) {
    alert('Enter a valid state or province');
    // return false;
  }

}

document.getElementById('postal').onchange = () => {
  var postal = document.getElementById('postal').value;
  var postalRGEX = /^[0-9]{3,20}$/;
  var postalResult = postalRGEX.test(postal);
  if (postalResult == false) {
    alert('Enter a valid zip or postal code');
    // return false;
  }

}

document.getElementById('email').onchange = () => {
  var email_area = document.getElementById('email').value;
  var email_areaRGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var email_areaResult = email_areaRGEX.test(email_area);
  if (email_areaResult == false) {
    alert('Enter a valid email');
    // return false;
  }

}

document.getElementById('feedback').onchange = () => {
  var feedback = document.getElementById('feedback').value;
  var feedbackRGEX = /^[a-zA-Z]{3,200}$/;
  var feedbackResult = feedbackRGEX.test(feedback);
  if (feedbackResult == false) {
    alert('feedback invalid');
    // return false;
  }

}

//document.getElementById('suggestions').onchange = () => {
//var suggestions = document.getElementById('suggestions').value;
//  var suggestionsRGEX = /^[a-zA-Z]{3,200}$/;
//  var suggestionsResult = suggestionsRGEX.test(suggestions);
//  if (suggestionsResult == false) {
//    alert('suggestion invalid');
// return false;
//  }

//}

function ddvalidate() {
  var e = document.getElementById("how");
  var optionSelIndex = e.options[e.selectedIndex].value;
  var optionSelectedText = e.options[e.selectedIndex].text;
  if (optionSelIndex == 0) {
    alert("Please select a field");
  }
  if (!document.getElementById("Yes").checked == true) {
    alert("please check the field");
  }
  if (!document.getElementById("Maybe").checked == true) {
    alert("please check the field");
  }
  if (!document.getElementById("No").checked == true) {
    alert("please check the field");
  }
}

document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var first = row.insertCell(0);
  var last = row.insertCell(1);
  var address = row.insertCell(2);
  var address_2 = row.insertCell(3);
  var city = row.insertCell(4);
  var state = row.insertCell(5);
  var phone = row.insertCell(6);
  var feedback = row.insertCell(7);
  var email = row.insertCell(8);
  var suggestions = row.insertCell(9);
  var gen = row.insertCell(10);
  var checkvalue = row.insertCell(11);
  var dlt = row.insertCell(12);
  var edit = row.insertCell(13);


  first.innerHTML = document.getElementById("fname").value;
  last.innerHTML = document.getElementById("lname").value;
  address.innerHTML = document.getElementById("add_1").value;
  address_2.innerHTML = document.getElementById("add_2").value;
  city.innerHTML = document.getElementById("city").value;
  state.innerHTML = document.getElementById("city_1").value;
  phone.innerHTML = document.getElementById("phone").value;
  feedback.innerHTML = document.getElementById("feedback").value;
  email.innerHTML = document.getElementById("email").value;
  suggestions.innerHTML = document.getElementById("suggestions").value;
  if( document.querySelector("input[type=radio]:checked"))
  {gen.innerHTML = document.querySelector("input[type=radio]:checked").value;}
  dlt.innerHTML = "<button onClick='myDeletefunction(this)' class ='delete' id = 'del'>Delete</button>";
  edit.innerHTML = "<button onClick ='onedit(this)' class = 'edit' id = 'edit'>Edit</button>";


  var markedCheckbox = document.getElementsByName('checktry');
  for (let checkbox of markedCheckbox) {
    if (checkbox.checked) {
      checkvalue.innerHTML += checkbox.value + '  ';
    }

  }

  if (document.getElementById("male").checked) {
    gen.innerHTML = document.getElementById("male").value

  }
  else if (document.getElementById("female").checked) {
    gen.innerHTML = document.getElementById("female").value

  }
  else if (document.getElementById("others").checked) {
    gen.innerHTML = document.getElementById("others").value

  }

}

function myDeletefunction(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}

function onedit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("add_1").value = selectedRow.cells[2].innerHTML;
 document.getElementById("add_2").value = selectedRow.cells[3].innerHTML;
 document.getElementById("city").value = selectedRow.cells[4].innerHTML;
 document.getElementById("city_1").value = selectedRow.cells[5].innerHTML;
 document.getElementById("phone").value = selectedRow.cells[6].innerHTML;
 document.getElementById("feedback").value = selectedRow.cells[7].innerHTML;
 document.getElementById("email").value = selectedRow.cells[8].innerHTML;
 document.getElementById("suggestions").value = selectedRow.cells[9].innerHTML;
 document.getElementById("gen").value = selectedRow.cells[10].innerHTML;
 document.getElementById("checkvalue").value = selectedRow.cells[11].innerHTML;

}



