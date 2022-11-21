

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })


// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://localhost:8443/CarEvaluation/GetManufacturers");
xhttp.responseType = 'json';
//xhttp.overrideMimeType("application/json");
//xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//xhttp.withCredentials = true;


// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
  var a = this.response;
}

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
};

// Send a request
xhttp.send(null);