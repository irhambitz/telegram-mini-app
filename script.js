let balance = 0;
let remainingClicks = 2100;
let period = 3;

// Fungsi untuk memperbarui UI
function updateUI() {
    document.getElementById("balance").innerText = balance.toLocaleString();
    document.getElementById("clicks-left").innerText = `${remainingClicks}/${period}`;
}

// Fungsi untuk mengganti menu
function switchMenu(menu) {
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });
    document.getElementById(menu).classList.add("active");

    if (menu === "home") {
        document.getElementById("balance").style.display = "block";
        document.getElementById("bitcoin").style.display = "block";
        document.getElementById("coin").style.display = "block";
        document.getElementById("clicks-left").style.display = "block";
        document.getElementById("upgrade").style.display = "block";
        document.querySelector(".coming-soon")?.remove();

        document.getElementById("coin").classList.remove("disabled");
        document.getElementById("coin").style.pointerEvents = "auto";
    } else if (menu === "friends") {
        document.getElementById("balance").style.display = "none";
        document.getElementById("bitcoin").style.display = "none";
        document.getElementById("coin").style.display = "none";
        document.getElementById("clicks-left").style.display = "none";
        document.getElementById("upgrade").style.display = "none";

        document.querySelector(".coming-soon")?.remove();
        let comingSoon = document.createElement("div");
        comingSoon.innerText = "COMING SOON !!!";
        comingSoon.classList.add("coming-soon");
        document.body.appendChild(comingSoon);

        document.getElementById("coin").classList.add("disabled");
        document.getElementById("coin").style.pointerEvents = "none";
    }
}

// Event klik pada koin
document.body.addEventListener("pointerdown", function (event) {
    if (!document.getElementById("coin").classList.contains("disabled") &&
        !event.target.closest(".menu-bar") &&
        !event.target.classList.contains("menu-item")) {
        balance++;
        remainingClicks--;
        if (remainingClicks === 0 && period > 1) {
            period--;
            remainingClicks = 21;
        }
        updateUI();

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        let floatingText = document.createElement("div");
        floatingText.innerText = "+1";
        floatingText.classList.add("floating-text");
        floatingText.style.left = `${event.clientX}px`;
        floatingText.style.top = `${event.clientY}px`;
        document.body.appendChild(floatingText);
        setTimeout(() => floatingText.classList.add("fade-out"), 50);
        setTimeout(() => floatingText.remove(), 1000);
    }
});

// Event klik pada menu
document.getElementById("home").addEventListener("click", function () {
    switchMenu("home");
});

document.getElementById("leaderboards").addEventListener("click", function () {
    switchMenu("leaderboards");
});

document.getElementById("friends").addEventListener("click", function () {
    switchMenu("friends");
});
