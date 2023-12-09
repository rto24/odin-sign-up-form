const password = document.querySelector('#user-password');
const confirmPassword = document.querySelector('#user-password-confirm');
const createAccountBtn = document.querySelector('.create-account-btn');
let passwordInput = '';

createAccountBtn.addEventListener('click', () => {
  if (password.value == confirmPassword.value) {
    console.log('Match') 
  } else if (password.value !== confirmPassword.value) {
    console.log('No Match')
  }
});

