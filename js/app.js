document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.getElementById("btn").addEventListener("click", () => {
	window.location.href = "../portfolio";
});


// for popup
toast = document.querySelector(".toast")
closeIcon = document.querySelector(".close"),
	progress = document.querySelector(".progress");

let timer1, timer2;
document.addEventListener('DOMContentLoaded', function () {
	toast.classList.add("active");
	progress.classList.add("active");

	timer1 = setTimeout(() => {
		toast.classList.remove("active");
	}, 5000); //1s = 1000 milliseconds

	timer2 = setTimeout(() => {
		progress.classList.remove("active");
	}, 5300);
});

closeIcon.addEventListener("click", () => {
	toast.classList.remove("active");

	setTimeout(() => {
		progress.classList.remove("active");
	}, 300);

	clearTimeout(timer1);
	clearTimeout(timer2);
});