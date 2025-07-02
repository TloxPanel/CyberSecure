function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("login-message");

  if (user === "admin" && pass === "password123") {
    localStorage.setItem("loggedIn", "true");
    msg.style.color = "green";
    msg.innerText = "Login successful!";
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid credentials!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("You have been logged out.");
}
