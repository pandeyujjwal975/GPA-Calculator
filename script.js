function addSubject() {
  const subjects = document.getElementById("subjects");

  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = `
    <input type="number" class="grade" placeholder="Grade Point">
    <input type="number" class="credit" placeholder="Credit">
  `;

  subjects.appendChild(row);
}

function calculateGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const g = parseFloat(grades[i].value);
    const c = parseFloat(credits[i].value);

    if (!isNaN(g) && !isNaN(c)) {
      totalPoints += g * c;
      totalCredits += c;
    }
  }

  const result = document.getElementById("result");

  if (totalCredits === 0) {
    result.textContent = "Please enter valid values.";
    return;
  }

  result.textContent =
    "Your GPA is: " + (totalPoints / totalCredits).toFixed(2);
}