function findPairsDivisibleBy17() {
  let count = 0;
  // 17 la so nguyen to nên muon chia het cho 17 thi chi co cac boi so cua no
  // ma a va b deu toi 100 nen tong toi 200
  for (let S = 17; S <= 200; S += 17) {
    /*
        1 <= a <= 100
        1 <= b <= 100
        dat = S = a + b
        <=> 1 <= S - a <= 100
        tach 2 dau co
        1) 1 <= S - a => a <= S - 1
        2) S - a <= 100 => a >= S -100
        <=> S - 100 <= a <= S - 1
        và 1 <= a <= 100
        <=> a nam trong 2 khoang [S-100, S-1] và [1,100]
    */
    let aMin = Math.max(1, S - 100);
    let aMax = Math.min(100, S - 1);

    for (let a = aMin; a <= aMax; a++) {
      let b = S - a;
      console.log(`(${a}, ${b}) = ${S}`);
      count++;
    }
  }

  console.log(`\nTổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();
