const userFormElement = document.querySelector("#userForm");
const deleteBtn = document.querySelector("#deleteBtn");

function addToLocalStorage(userData, key) {
  localStorage.setItem(key, JSON.stringify(userData));
}

function removeAllFromLocalStorage() {
  localStorage.clear();
  alert("clear.");
}

userFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const phone = document.getElementById("phoneInput").value;

  if (!email.endsWith("@gmail.com") && !email.endsWith("@Ukr.net")) {
    alert("gmail only @gmail.com or @Ukr.net");
    return;
  }

  if (!phone.startsWith("+38")) {
    alert("phone only with +38");
    return;
  }

  const userData = {
    name: document.getElementById("firstNameInput").value,
    lastname: document.getElementById("lastNameInput").value,
    phone: phone,
    mail: email,
  };

  addToLocalStorage(userData, "userData");
  alert("save");
});

deleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  removeAllFromLocalStorage();
});
