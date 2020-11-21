const texts = ["Helloooo.......!!","Welcome to....","Tumpa's  Portfolio","I...Am.....","A MCA Student","A Learner","A Competitive Coder","A Problem Solver","Willing to Become SDE","Thank You"];
let count = 0;
let index = 0;
let currentTest = "";
let letter = "";

(function type() {

	if ( count === texts.length){
		count = 0;
	}
	currentTest = texts[count];
	letter = currentTest.slice(0, ++index);

	document.querySelector(".typing").textContent = letter;
	if ( letter.length === currentTest.length) {
		count++;
		index = 0;
	}

	setTimeout(type, 150);

})();