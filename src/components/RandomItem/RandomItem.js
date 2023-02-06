import React, { useEffect, useState } from "react";

const RandomItem = () => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight;
    console.log(window.innerHeight);
    var ctx = canvas.getContext("2d");
    var circles = [];
    var col = ["red", "blue", "green", "yellow", "magenta"],
      bounce = -1;

    function Circle(x, y, sx, sy) {
      this.x = x;
      this.y = y;
      this.sx = sx;
      this.sy = sy;
      this.r = 10;
      this.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#2d1950";
        ctx.fill();
      };
      this.moveCircle = function () {
        this.x += this.sx;
        this.y += this.sy;
        if (this.x + this.r > canvas.width) {
          this.x = canvas.width - this.r;
          this.sx *= bounce;
        } else if (this.x - this.r < 0) {
          this.x = this.r;
          this.sx *= bounce;
        }
        if (this.y + this.r > canvas.height) {
          this.y = canvas.height - this.r;
          this.sy *= bounce;
        } else if (this.y - this.r < 0) {
          this.y = this.r;
          this.sy *= bounce;
        }
      };
    }
    for (var i = 0; i < 100; i++) {
      var _x = Math.floor(Math.random() * (canvas.width - 15)) + 15,
        _y = Math.floor(Math.random() * (canvas.height - 15)) + 15,
        xspd = Math.floor(Math.random() * (5 - 0.5)) + 0.5,
        yspd = Math.floor(Math.random() * (5 - 0.5)) + 0.5,
        c = new Circle(_x, _y, xspd, yspd);
      circles.push(c);
    }
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < 15; i++) {
        circles[i].drawCircle();
        circles[i].moveCircle();
      }
      requestAnimationFrame(update);
    }
    update();
  }, []);

  return (
    <div>
      {/* <div
        style={{
          position: "absolute",
          top: Position.y,
          left: Position.x,
          borderRadius: 100,
          height: "400px",
          width: "400px",
          backgroundColor: "red",
          zIndex: 1000,
        }}
      /> */}
      <canvas id="canvas" style={{ position: "fixed ", left: 0 }}></canvas>
    </div>
  );
};

export default RandomItem;
