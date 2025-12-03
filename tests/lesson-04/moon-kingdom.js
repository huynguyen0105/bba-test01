/*
Tạo hàm createCharacters:
● Khai báo mảng các object: characters có các thuộc tính: name, level, health.
● Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
○ thuộc tính name: UPPERCASE của name gốc
○ level: x2 của level gốc
○ health: x3 của health gốc
● Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên
mảng mới lọc được này là “possibleWinners”
*/
function createCharacters() {
  const characters = [
    { name: "Mario", level: 10, health: 888 },
    { name: "Mario1", level: 7, health: 3409 },
    { name: "Mario2", level: 12, health: 999 },
    { name: "Mario3", level: 20, health: 1050 },
  ];
  const charactersPowerUp = characters.map((character) => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3,
  }));
  console.log("charactersPowerUp ",charactersPowerUp);

  const possibleWinners = characters.filter(
    (character) => character.health > 1000
  );
  console.log("possibleWinners ",possibleWinners);
}
createCharacters();

/**
 * Tạo hàm printLeaderboard:
● Nhận vào tham số: players là mảng các object: [{name: "Mario", score:
1000}, ...]
● Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
● In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía
trước (🥇, 🥈, 🥉)
 */
function printLeaderboard(players) {
  players.sort((a, b) => b.score - a.score);
  //   console.log(players);
  const medals = ["🥇", "🥈", "🥉"];
  //   console.log(medals);
  players.forEach((player, index) => {
    const rank = index + 1;
    const trophy = medals[index] || ""; // Chỉ 3 vị trí đầu mới có huy chương

    console.log(`${trophy} ${rank}. ${player.name} - ${player.score} pts`);
  });
}
const players = [
  { name: "Mario", score: 500 },
  { name: "Mario1", score: 900 },
  { name: "Mario2", score: 850 },
  { name: "Mario3", score: 800 },
  { name: "Mario4", score: 1000 },
];
printLeaderboard(players);
