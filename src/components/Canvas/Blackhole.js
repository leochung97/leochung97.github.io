import $ from "jquery";

export default function Blackhole(element) {
  var h = $(element).height(),
    w = $(element).width(),
    cw = w,
    ch = h,
    maxorbit = 200, // distance from center
    centery = ch / 2,
    centerx = cw / 2;

  var startTime = new Date().getTime();
  var currentTime = 0;

  var stars = [],
    collapse = false, // if hovered
    expanse = false; // if clicked

  let canvas = document.getElementById("blackhole-canvas");
  let context = canvas.getContext("2d");
  context.globalCompositeOperation = "multiply";
  context.fillStyle = "rgba(14, 14, 14, 1)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  window.addEventListener("resize", function () {
    h = $(element).height();
    w = $(element).width();
    cw = w;
    ch = h;
    maxorbit = Math.max(w, h) / 5;
    canvas.width = cw;
    canvas.height = ch;
    centery = ch / 2;
    centerx = cw / 2;
    context.fillStyle = "rgba(14, 14, 14, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  });

  function rotate(cx, cy, x, y, angle) {
    var radians = angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = cos * (x - cx) + sin * (y - cy) + cx,
      ny = cos * (y - cy) - sin * (x - cx) + cy;
    return [nx, ny];
  }

  var star = function () {
    var rands = [];
    rands.push(Math.random() * (maxorbit / 2) + 1);
    rands.push(Math.random() * (maxorbit / 2) + maxorbit);

    this.orbital =
      rands.reduce(function (p, c) {
        return p + c;
      }, 0) / rands.length;

    this.x = centerx;
    this.y = centery + this.orbital;
    this.yOrigin = centery + this.orbital;
    this.speed = ((Math.floor(Math.random() * 2.5) + 1.5) * Math.PI) / 180; // The rate at which this star will orbit
    this.rotation = 0;
    this.startRotation =
      ((Math.floor(Math.random() * 360) + 1) * Math.PI) / 180;
    this.id = stars.length;

    this.collapseBonus = this.orbital - maxorbit * 0.7;
    if (this.collapseBonus < 0) {
      this.collapseBonus = 0;
    }

    stars.push(this);
    this.color = "rgba(255, 255, 255, " + (1 - this.orbital / 255) + ")";
    // this.color =
    //   "rgba(" +
    //   Math.floor(Math.random() * 255) +
    //   ", " +
    //   Math.floor(Math.random() * 255) +
    //   ", " +
    //   Math.floor(Math.random() * 255) +
    //   ", " +
    //   (1 - this.orbital / 255) +
    //   ")";
    this.hoverPos = centery + maxorbit / 2 + this.collapseBonus;
    this.expansePos =
      centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
    this.prevR = this.startRotation;
    this.prevX = this.x;
    this.prevY = this.y;
  };

  star.prototype.draw = function () {
    if (!expanse) {
      this.rotation = this.startRotation + currentTime * this.speed;
      if (!collapse) {
        // not hovered
        if (this.y > this.yOrigin) {
          this.y -= 2.5;
        }
        if (this.y < this.yOrigin - 4) {
          this.y += (this.yOrigin - this.y) / 10;
        }
      } else {
        // on hover
        this.trail = 1;
        if (this.y > this.hoverPos) {
          this.y -= (this.hoverPos - this.y) / -5;
        }
        if (this.y < this.hoverPos - 4) {
          this.y += 2.5;
        }
      }
    } else {
      this.rotation = this.startRotation + currentTime * (this.speed / 2);
      if (this.y > this.expansePos) {
        this.y -= Math.floor(this.expansePos - this.y) / -140;
      }
    }

    context.save();
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    var oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
    context.moveTo(oldPos[0], oldPos[1]);
    context.translate(centerx, centery);
    context.rotate(this.rotation);
    context.translate(-centerx, -centery);
    context.lineTo(this.x, this.y);
    context.stroke();
    context.restore();

    this.prevR = this.rotation;
    this.prevX = this.x;
    this.prevY = this.y;
  };

  $(".centerHover").on("click", function () {
    collapse = false;
    if (expanse) {
      expanse = false;
    } else {
      expanse = true;
    }

    $(this).addClass("open");
  });

  $(".centerHover").on("mouseover", function () {
    if (expanse === false) {
      collapse = true;
    }
  });

  $(".centerHover").on("mouseout", function () {
    if (expanse === false) {
      collapse = false;
    }
  });

  window.requestFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  function loop() {
    var now = new Date().getTime();
    currentTime = (now - startTime) / 50;

    context.fillStyle = "rgba(13, 13, 13, 0.1)";
    context.fillRect(0, 0, cw, ch);

    for (var i = 0; i < stars.length; i++) {
      if (stars[i] !== stars) {
        stars[i].draw();
      }
    }

    window.requestFrame(loop);
  }

  function init() {
    canvas.width = cw;
    canvas.height = ch;
    context.fillStyle = "rgba(14, 14, 14, 1)";
    context.fillRect(0, 0, cw, ch);

    for (var i = 0; i < 3000; i++) {
      new star();
    }

    loop();
  }

  init();
}
