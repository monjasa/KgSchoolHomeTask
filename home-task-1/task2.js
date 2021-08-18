const CHESSBOARD_SIZE = 8;

const WHITE_TOKEN = 'w';
const BLACK_TOKEN = 'b';

function drawChessboard() {
  for (let i = 1; i <= CHESSBOARD_SIZE; i++) {
    const token = i % 2 !== 0
      ? WHITE_TOKEN + BLACK_TOKEN
      : BLACK_TOKEN + WHITE_TOKEN;
    console.log(token.repeat(CHESSBOARD_SIZE / 2));
  }
}

drawChessboard();
