const btnStaff = document.getElementById("btnStaff");
const btnSubjects = document.getElementById("btnSubjects");
const btnClear = document.getElementById("btnClear");
const result = document.getElementById("result");

btnStaff.addEventListener("click", function () {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      let output = "<h2>Staff</h2>";

      data.forEach(item => {
        output += `
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Position:</strong> ${item.position}</p>
          <hr>
        `;
      });

      result.innerHTML = output;
    }
  };

  xhttp.open("GET", "Data/staff.json", true);
  xhttp.send();
});

btnSubjects.addEventListener("click", function () {
  fetch("Data/subjects.json")
    .then(response => response.json())
    .then(data => {
      let output = `
        <h2>Subjects</h2>
        <table class="data-table">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
      `;

      data.forEach(item => {
        output += `
          <tr>
            <td>${item.name}</td>
            <td>${item.description}</td>
          </tr>
        `;
      });

      output += `</table>`;

      result.innerHTML = output;
    })
    .catch(() => {
      result.innerHTML = "<p>Could not load subjects data.</p>";
    });
});

btnClear.addEventListener("click", function () {
  result.innerHTML = "Please select an option above";
});