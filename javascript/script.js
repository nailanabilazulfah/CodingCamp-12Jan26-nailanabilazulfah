// Welcome name
const userName = prompt("Masukkan nama kamu");
if (userName) {
  document.getElementById("welcomeText").innerText =
    "Hi " + userName + ", Welcome To Website";
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
