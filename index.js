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
    
    // Update localStorage with the current counterValue, clickMultiplier, and upgradeCost
    localStorage.setItem("counterValue", counterValue);
    localStorage.setItem("clickMultiplier", clickMultiplier);
    localStorage.setItem("clicksCost", clicksCost);
    localStorage.setItem("drillCost", drillCost);
    localStorage.setItem("dynamiteCost", dynamiteCost);
}

let clickMultiplier = 1;

function increase() {
    counterValue += clickMultiplier;
    updateCounter();
}

let clicksCost = 100; // Initial cost
const clicksCostIncreasePercentage = 70;

function purchaseClicks() {
    // Check if the player has enough resources to purchase the upgrade
    if (counterValue >= clicksCost) {
        // Deduct the cost from the counterValue
        counterValue -= clicksCost;
        
        // Increase the click multiplier by 1 (or any other desired value)
        clickMultiplier += 0.5;
        
        // Increase the upgrade cost by 20%
        clicksCost = Math.round(clicksCost * (1 + clicksCostIncreasePercentage / 100));
        
        // Update the display
        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}

let drillCost = 200;
const drillCostIncreasePercentage = 70;

function purchaseDrill() {
    // Check if the player has enough resources to purchase the upgrade
    if (counterValue >= drillCost) {
        // Deduct the cost from the counterValue
        counterValue -= drillCost;
        
        // Increase the click multiplier by 1 (or any other desired value)
        clickMultiplier += 0.5;
        
        // Increase the upgrade cost by 20%
        drillCost = Math.round(drillCost * (1 + drillCostIncreasePercentage / 100));
        
        // Update the display
        updateCounter();
    } else {
        alert("Not enough asteroids to purchase the upgrade!");
    }
}

let dynamiteCost = 300;
const dynamiteCostIncreasePercentage = 70;

function purchaseDynamite() {
    // Check if the player has enough resources to purchase the upgrade
    if (counterValue >= dynamiteCost) {
        // Deduct the cost from the counterValue
        counterValue -= dynamiteCost;
        
        // Increase the click multiplier by 1 (or any other desired value)
        clickMultiplier += 1;
        
        // Increase the upgrade cost by 20%
        dynamiteCost = Math.round(dynamiteCost * (1 + dynamiteCostIncreasePercentage / 100));
        
        // Update the display
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
    updateCounter();
};