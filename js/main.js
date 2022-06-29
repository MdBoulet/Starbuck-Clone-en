 const btn = document.getElementById("menu-btn");
 const nav = document.getElementById("menu");

 function navToggle() {
	 btn.classList.toggle('open');

	 nav.classList.toggle('cache');
 }

 btn.addEventListener('click', navToggle);