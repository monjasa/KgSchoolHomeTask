const TOKEN = '#';

function drawTriangle(height) {
  for (let i = 1; i <= height; i++) {
    console.log(TOKEN.repeat(i));
  }
}

drawTriangle(3);
