'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 140;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = ['rgba(0,0,', (Math.random() * 255).toFixed(0), ',', (Math.random().toFixed(1)), ')'].join(' ');
    }
    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};
