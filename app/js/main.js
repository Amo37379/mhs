// Num counting up
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let valueDisplays = document.querySelectorAll(".num");
            let interval = 2000;
            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function() {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    });

});
observer.observe(document.querySelector('.num'));

//donation Card
const donationCard = document.querySelectorAll(".donation-card");
donationCard.forEach((card) => {
    // Progress bar
    const progressBars = card.querySelectorAll(".progress-bar");
    progressBars.forEach((progressBar) => {
        dataRaised = parseInt(progressBar.getAttribute("data-raised"));
        dataGoal = parseInt(progressBar.getAttribute("data-goal"));
        let ProgressBarWidth = dataRaised / dataGoal * 100;
        progressBar.style.width = ProgressBarWidth + "%";
    });
    const amountRaised = card.querySelectorAll(".raised");
    amountRaised.forEach((amount) => {
        incomeText = amount.querySelectorAll(".income-text");
        incomeText.forEach(text => {
            text.innerHTML = "$" + dataRaised;
        });
        goalText = amount.querySelectorAll(".goal-text");
        goalText.forEach(text => {
            text.innerHTML = "$" + dataGoal;
        });
    });

});

// Open Close Mobile Nav
const openNav = document.getElementById("openNav")
const mobileNav = document.getElementById("mobileNav");
openNav.addEventListener("click", function() {
    mobileNav.classList.remove("hide");
});
const closeNav = document.getElementById("closeNav");
closeNav.addEventListener("click", function() {
    mobileNav.classList.add("hide");
});