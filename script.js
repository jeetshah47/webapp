let c = 0;
const no = () => {
	alert("Scroll Down");
	c++;
	const element = document.createElement('p');
	element.textContent = "You have pressed the button "+ c + " times";
	document.body.appendChild(element);
}