let len = 0;
let isCaps;
let isLower;
let isSpecial;
let isNumbers;
let temp = '';
let password = '';

const alpha = 'abcdefghijklmnopqrstuvwyz';
const num = '1234567890';
const spChar = '!@$#%&_-';

function genPass() {
  
  len = parseInt(prompt('How long is the password (8-128)'));
  isLower = confirm('Will the password contain lowercase letters?' );
  isCaps = confirm('Would password have caps?');
  isSpecial = confirm('Will the password contain any special characters?');
  isNumbers = confirm('Will the password contain numbers?');

  if(isLower) {
    temp += alpha;
  };

  if(isCaps) {
    temp += alpha.toLocaleUpperCase();
  };

  if(isSpecial) {
    temp += spChar;
  }

  if(isNumbers) {
    temp += num;
  }

  for (let i = 0; i < len; i++) {
    password += temp[Math.floor(Math.random() * temp.length)];
  }

  document.getElementById('password').innerText = password;
}

document.getElementById('generate').addEventListener('click',genPass)
