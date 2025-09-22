async function login(role) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://153.92.221.140:3001/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  });

  const result = await response.json();

  if (result.success) {
    localStorage.setItem('token', result.token);
    localStorage.setItem('role', result.role);
    alert(`${role} login başarılı!`);
    window.location.href = `${role}-panel.html`;
  } else {
    alert('Hatalı giriş!');
  }
}