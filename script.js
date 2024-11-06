document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
  
    const usernameFeedback = document.getElementById("usernameFeedback");
    const emailFeedback = document.getElementById("emailFeedback");
    const passwordFeedback = document.getElementById("passwordFeedback");
    const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");
  
    let passwordStrength = "Lemah";
  
    usernameInput.addEventListener("keyup", () => {
      const username = usernameInput.value;
      const regex = /^[a-zA-Z0-9]{5,20}$/;
      if (!regex.test(username)) {
        usernameFeedback.textContent = "Username harus 5-20 karakter alfanumerik.";
        usernameFeedback.style.color = "red";
      } else {
        usernameFeedback.textContent = "Username sudah cocok!";
        usernameFeedback.style.color = "green";
      }
    });
  
    emailInput.addEventListener("change", () => {
      const email = emailInput.value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        emailFeedback.textContent = "Format email tidak valid.";
        emailFeedback.style.color = "red";
      } else {
        emailFeedback.textContent = "Email sudah cocok!";
        emailFeedback.style.color = "green";
      }
    });
  
    passwordInput.addEventListener("keyup", () => {
      const password = passwordInput.value;
      passwordStrength = getPasswordStrength(password);
  
      if (passwordStrength === "Lemah") {
        passwordFeedback.textContent = "Keamanan Password: Lemah";
        passwordFeedback.style.color = "red";
      } else if (passwordStrength === "Sedang") {
        passwordFeedback.textContent = "Keamanan Password: Sedang";
        passwordFeedback.style.color = "orange";
      } else if (passwordStrength === "Kuat") {
        passwordFeedback.textContent = "Keamanan Password: Kuat";
        passwordFeedback.style.color = "green";
      }
    });
  
    confirmPasswordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (password !== confirmPassword) {
        confirmPasswordFeedback.textContent = "Password tidak cocok.";
        confirmPasswordFeedback.style.color = "red";
      } else {
        confirmPasswordFeedback.textContent = "Password cocok!";
        confirmPasswordFeedback.style.color = "green";
      }
    });
  
    document.getElementById("registrationForm").addEventListener("submit", (e) => {
      e.preventDefault();
      let errorMessage = "";
  
      if (usernameFeedback.textContent.includes("harus")) {
        errorMessage += "Username tidak valid.\n";
      }
  
      if (emailFeedback.textContent !== "Email sudah cocok!") {
        errorMessage += "Format email tidak valid.\n";
      }
  
      if (passwordStrength === "Lemah") {
        errorMessage += "Keamanan password terlalu lemah.\n";
      }
  
      if (confirmPasswordFeedback.textContent !== "Password cocok!") {
        errorMessage += "Password konfirmasi tidak cocok.\n";
      }
  
      if (!errorMessage) {
        alert("Pendaftaran berhasil!");
      } else {
        alert("Silakan periksa kembali formulir Anda:\n" + errorMessage);
      }
    });
  
    function getPasswordStrength(password) {
      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
        return "Kuat";
      } else if (password.length >= minLength && ((hasUpperCase && hasLowerCase) || (hasLowerCase && hasNumbers) || (hasUpperCase && hasNumbers))) {
        return "Sedang";
      } else {
        return "Lemah";
      }
    }
  });
  