var btnCont = document.getElementById("#nav");
var btns = document.querySelectorAll(".btn");

for (let index = 0; index < btns.length; index++) {
    btns[i].addEventListener('click', function() {
        var curr = document.getElementsByClassName("active");
        curr[0].className=curr[0].className.replace(" active");
        this.className += " active";
    })
}


////////////////////////////////////////////////////
const angles = document.querySelectorAll('.angle-input');
const iTBtn = document.querySelector('#btn');
const iTOutput = document.querySelector('#is-triangle-output');
console.log("Hello");

function calculateSumOfAngles() {
	const sumAngles =
		Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	console.log(sumAngles);
	return sumAngles;
}

function isTriangle() {
	if (calculateSumOfAngles() === 180) {
		console.log('Yayy, the angles form a triangle');
		iTOutput.innerText = 'Yayy, the angles form a triangle';
	} else {
		console.log('Oh Oh!, the angles do not form a triangle');
		iTOutput.innerText = 'Oh Oh!, the angles do not form a triangle';
	}
}
iTBtn.addEventListener('click', isTriangle);

//////////////////////////////////////////////////////////////

const quizForm = document.querySelector('.quiz-form');
const sBtn = document.querySelector('#btn');
const sDiv = document.querySelector('.output');

const correctAnswers = ['90°', 'right angled'];
console.log("quiz");
function calculateScore(e) {
	e.preventDefault();
	const data = new FormData(quizForm);
	let index = 0,
		score = 0;
	for (let entry of data.values()) {
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
	sDiv.innerText = `Your score is ${score}`;
}

sBtn.addEventListener('click', calculateScore);
////////////////////////////////////////////////////////
const sides = document.querySelectorAll('.side-input');
const hBtn = document.querySelector('#btn');
const hOutput = document.querySelector('#output');
function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

function calculateHypotenuse() {
	const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
	console.log(sumOfSquares);
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	console.log(lengthOfHypotenuse);
	hOutput.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}

hBtn.addEventListener('click', calculateHypotenuse);
////////////////////////////////////////////////////////
const inputs = document.querySelectorAll('input');
const areaBtn = document.querySelector('#btn');
const areaOutput = document.querySelector('#outputii');
function multiplyBaseAndHeight(base, height) {
	const multipliedOutput = base * height;
	return multipliedOutput;
}

function calculateArea() {
	//area = (base * height)/2
	const basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
	const area = basexheight / 2;
	console.log({ area });
	areaOutput.innerText = `The area of the triangle is ${area} cm²`;
}

areaBtn.addEventListener('click', calculateArea);
