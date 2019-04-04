const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const address = document.querySelectorAll('#address h4')
const dob = document.querySelector('#date_of_birth')
const phone = document.querySelector('#phone')
const cell = document.querySelector('#cell')

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

document.addEventListener('click', function(e) {
  if (e.target.className.includes('btn')) {
    getData()
  }
});

function getData () {
  fetch('https://randomuser.me/api/')
    .then (res => res.json())
    .then (json => json.results[0])
    .then (user => presentData(user))
}

function presentData(user) {
  fullname.innerText = user.name.title + ' ' + user.name.first + ' ' + user.name.last
  email.innerText = user.email;
  address.forEach (function(el) {
	   el.innerText = user.location[el.id]
  })
  phone.innerText = user.phone;
  dob.innerText = user.dob.date;
  cell.innerText = 'N/a';
  // console.log(user)
}
