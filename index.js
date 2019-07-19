const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000000FF';

ctx.fillRect(0, 0, 800, 600);

const veh = {};

{ // Generating the vehicles attributes.
  veh.height = 100 + Math.floor(Math.random() * 51);
  veh.length = 200 + Math.floor(Math.random() * 101);
  veh.width = 100 + Math.floor(Math.random() * 51);
}

{ // Draw the body.

  // Draw the near side.
  ctx.fillStyle = '#FFFFFFFF';
  ctx.fillRect(400 - Math.floor(veh.length / 2), 300 - Math.floor(veh.height / 2), veh.length, veh.height);

  // Draw the front and top.
  for (let i = 0; i < veh.width; i++) {
    ctx.fillStyle = '#CCCCCCFF';
    ctx.fillRect(399 - Math.floor(veh.length / 2) - i, 300 - Math.floor(veh.height / 2) - Math.ceil(i / 2), 1, veh.height);
    ctx.fillStyle = '#AAAAAAFF';
    ctx.fillRect(399 - Math.floor(veh.length / 2) - i, 299 - Math.floor(veh.height / 2) - Math.ceil(i / 2), veh.length, 1);
  }

}