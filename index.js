function shrinkImg() {
    const asteroid = document.getElementById("asteroid");

    asteroid.style.transform = "scale(0.9)";

    setTimeout(function () {
        asteroid.style.transform = "scale(1)";
    }, 100);
}

let counterValue = parseInt(localStorage.getItem("counterValue")) || 0;

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = `Clicks: ${counterValue} (x${clickMultiplier})`;

    const clicksCostElement = document.getElementById("clicksCost");
    clicksCostElement.textContent = `Clicks Upgrade Cost: ${clicksCost} Asteroids`;
    const drillCostElement = document.getElementById("drillCost");
    drillCostElement.textContent = `Drill Upgrade Cost: ${drillCost} Asteroids`;
    const dynamiteCostElement = document.getElementById("dynamiteCost");
    dynamiteCostElement.textContent = `Dynamite Upgrade Cost: ${dynamiteCost} Asteroids`;
    const telescopeCostElement = document.getElementById("telescopeCost");
    telescopeCostElement.textContent = `Telescope Upgrade Cost: ${telescopeCost} Asteroids`;

    localStorage.setItem("counterValue", counterValue);
    localStorage.setItem("clickMultiplier", clickMultiplier);
    localStorage.setItem("clicksCost", clicksCost);
    localStorage.setItem("drillCost", drillCost);
    localStorage.setItem("dynamiteCost", dynamiteCost);
    localStorage.setItem("telescopeCost", telescopeCost);
}

let clickMultiplier = 1;

function increase() {
    counterValue += clickMultiplier;
    updateCounter();
}

let clicksCost = 100; // Initial cost
const clicksCostIncreasePercentage = 100;

function purchaseClicks() {

    if (counterValue >= clicksCost) {

        counterValue -= clicksCost;

        clickMultiplier += 0.5;

        clicksCost = Math.round(clicksCost * (1 + clicksCostIncreasePercentage / 100));

        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}

let drillCost = 200;
const drillCostIncreasePercentage = 100;

function purchaseDrill() {

    if (counterValue >= drillCost) {

        counterValue -= drillCost;

        clickMultiplier += 0.5;

        drillCost = Math.round(drillCost * (1 + drillCostIncreasePercentage / 100));

        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}

let dynamiteCost = 500;
const dynamiteCostIncreasePercentage = 100;

function purchaseDynamite() {

    if (counterValue >= dynamiteCost) {

        counterValue -= dynamiteCost;

        clickMultiplier += 1;
        dynamiteCost = Math.round(dynamiteCost * (1 + dynamiteCostIncreasePercentage / 100));

        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}

let telescopeCost = 1000;
const telescopeCostIncreasePercentage = 100;

function purchaseTelescope() {

    if (counterValue >= telescopeCost) {

        counterValue -= telescopeCost;

        clickMultiplier += 1.5;
        telescopeCost = Math.round(telescopeCost * (1 + telescopeCostIncreasePercentage / 100));

        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}



// Use window.onload to run code after the page has fully loaded
window.onload = function() {
    counterValue = parseInt(localStorage.getItem("counterValue")) || 0;
    clickMultiplier = parseInt(localStorage.getItem("clickMultiplier")) || 1;
    clicksCost = parseInt(localStorage.getItem("clicksCost")) || 100;
    drillCost = parseInt(localStorage.getItem("drillCost")) || 200;
    dynamiteCost = parseInt(localStorage.getItem("dynamiteCost")) || 500;
    telescopeCost = parseInt(localStorage.getItem("telescopeCost")) || 1000;
    updateCounter();
};