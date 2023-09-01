let leaderboard = [];
let luckLevel = 1;
let points = 0;
let upgradeCost = 10;

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function updateLeaderboard() {
    const leaderboardList = document.getElementById("leaderboardList");
    leaderboardList.innerHTML = "";

    // Sort leaderboard in descending order
    leaderboard.sort((a, b) => b - a);

    // Display up to the top 10 places
    for (let i = 0; i < Math.min(10, leaderboard.length); i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>#${i + 1}</span>
            <span>${leaderboard[i]}</span>
        `;
        leaderboardList.appendChild(listItem);
    }
}

function updateUI() {
    document.getElementById("luckLevel").textContent = luckLevel;
    document.getElementById("points").textContent = points;
    document.getElementById("upgradeCost").textContent = upgradeCost;
}

function generateRandomNumber() {
    const baseRandom = Math.random();
    const modifiedRandom = baseRandom * luckLevel * 1000; // Adjust for luck level
    const randomNumber = Math.floor(modifiedRandom) + 1;
    document.getElementById("randomNumber").textContent = randomNumber;
    
    // Earn a point each time you generate a random number
    points += 1;
    updateUI();

    // Add to the leaderboard
    leaderboard.push(randomNumber);
    updateLeaderboard();

    // Create a cookie with the random number
    setCookie("lastRandomNumber", randomNumber, 7); // "lastRandomNumber" is the name of the cookie
}

function upgradeLuck() {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        luckLevel++;
        upgradeCost = Math.ceil(upgradeCost * 1.5); // Increase the upgrade cost
        updateUI();
    } else {
        alert("Not enough points to upgrade luck!");
    }
}

// Attach event listeners to buttons
document.getElementById("generateButton").addEventListener("click", generateRandomNumber);
document.getElementById("upgradeButton").addEventListener("click", upgradeLuck);

// Initialize UI
updateUI();
updateLeaderboard();
