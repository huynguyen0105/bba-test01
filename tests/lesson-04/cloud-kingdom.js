let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;
const tongCoin = coinLevel1 + coinLevel2 + coinLevel3;
// Gia tri trung binh coin cua 3 level
console.log("Gia tri trung binh coin cua 3 level la " + (tongCoin / 3));
// So coin du khi chia cho 3
console.log("So du cua tong 3 coins chia 3 la " + (tongCoin % 3));
