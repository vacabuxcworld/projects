document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = {
    "vacabuxc": "admin123",
    "IRINA": "english11",
    "biology": "biology",
    "thistory": "history"
  };

  if (users[username] && users[username] === password) {
    
    window.location.href = "pages/welcome.html"; 
  } else {
    alert("Неверный логин или пароль!");
  }
});
