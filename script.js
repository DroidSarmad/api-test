window.addEventListener("DOMContentLoaded", () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //   console.log(xhttp.response);
      let data = JSON.parse(xhttp.response);
      console.log(data);
      console.log(data[0]["DB_Name"]);
    }
  };
  xhttp.open("GET", "./data.json", true);
  xhttp.send();
});
