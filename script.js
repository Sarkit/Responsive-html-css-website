
const navbarbtn=document.getElementById('navbar-toggle-btn');
const navbarlinks=document.getElementById('navbar-items-links');

	navbarbtn.addEventListener('click', ()=> {
		navbarlinks.classList.toggle('active')
	})