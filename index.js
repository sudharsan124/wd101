const form = document.getElementById("application-form-for-registration");
const entriesTable = document.getElementById("body-of-the-applicant-entries");
const entries = JSON.parse(localStorage.getItem("entries")) || [];
for (const entry of entries) {
  const Row = entriesTable.insertRow();
  const nameCell = Row.insertCell();
  const emailCell = Row.insertCell();
  const passwordCell = Row.insertCell();
  const dobCell = Row.insertCell();
  const acceptedTermsCell = Row.insertCell();
  nameCell.textContent = entry.name;
  emailCell.textContent = entry.email;
  passwordCell.textContent = entry.password;
  dobCell.textContent = entry.dob;
  acceptedTermsCell.textContent = entry.acceptedTerms;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTerms = document.getElementById("accepted-terms").checked;

  if (!name || !email || !password || !dob || !acceptedTerms) {
    alert("Please fill in all the fields.");
    return false;
  }

  const dobDate = new Date(dob);
  const dobYear = dobDate.getFullYear();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - dobYear;
  if (age < 18 || age > 55) {
    alert(
      "You are not allowed because your age must betwwen 18 to 55"
    );
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("You are not supposed to enter the wrong E-mail address");
    return false;
  }

  const entry = { name, email, password, dob, acceptedTerms };
  const Row = entriesTable.insertRow();
  const nameCell = Row.insertCell();
  const emailCell = Row.insertCell();
  const passwordCell = Row.insertCell();
  const dobCell = Row.insertCell();
  const acceptedTermsCell = Row.insertCell();
  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob;
  acceptedTermsCell.textContent = acceptedTerms;
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));

  form.reset();

  return false;
});