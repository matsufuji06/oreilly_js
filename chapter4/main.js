let funds = 50; //開始時の条件

while(funds > 1 && funds < 100) funds = funds + 2;

// m以上、n以下のランダムな整数を返す。
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}

// サイコロの目のどれかひとつを表す文字列をランダムに返す。
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0,5)];
}

const bet = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
let totalBet = rand(1, funds);
if(totalBet === 7) {
  totalBet = funds;
  bet.heart = totalBet;
} else {
  // 賭け金(totalBet)をランダムに分ける
}
funds = funds - totalBet;