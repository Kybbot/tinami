document.querySelectorAll('.cocoen').forEach(function(element){
  new Cocoen(element);
});

const scrollToTop = () => {
	// Let's set a variable for the number of pixels we are from the top of the document.
	const c = document.documentElement.scrollTop || document.body.scrollTop;

	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		// ScrollTo takes an x and a y coordinate.
		// Increase the '20' value to get a smoother/slower scroll!
		window.scrollTo(0, c - c / 20);
	}
};

document
	.querySelector('#top-btn')
	.addEventListener('click', function(event) {
		event.preventDefault();
		scrollToTop()
	});

let questions = document.getElementsByClassName('question')

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
		var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
} 

$('.aboutBtn').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 500);
});

$('#arrowBtn').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.about').offset().top
	}, 500);
});

$('.presetBtn').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.product').offset().top
	}, 500);
});

document.querySelector('#buy1').addEventListener('click', function() {
	document.querySelector('.main-modal').style.display = 'block'
})
document.querySelector('#buy2').addEventListener('click', function() {
	document.querySelector('.main-modal').style.display = 'block'
})
document.querySelector('.modal-close').addEventListener('click', function(){
	document.querySelector('.main-modal').style.display = 'none'
})
document.querySelector('.modal-close-2').addEventListener('click', function(){
	document.querySelector('.secondary-modal').style.display = 'none'
})

document
	.querySelector('.modal-form')
	.addEventListener('submit', function(event){

		event.preventDefault()

		let clickedForm = $(this);

		if ( !clickedForm.find("input[name=name]").val() || !clickedForm.find("input[name=phone]").val() || !clickedForm.find("input[name=email]").val() ) {
			alert("Заполните пожалуйста поля!")
		} else {
			fetch('mail.php', {
			method: 'POST',
			mode: 'cors',
			headers: {
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new FormData(this) // body data type must match "Content-Type" header
			})
			.then(response => {
				if (response.status === 200) {
					document.querySelector('.main-modal').style.display = 'none'
					document.querySelector('.secondary-modal').style.display = 'block'
				}
			})

		}

	})