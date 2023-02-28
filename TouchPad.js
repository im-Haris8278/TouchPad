// 1

// const touchPadWidth = 200;
// const touchPadHeight = 200;
// const touchPadTop = 50;
// const touchPadLeft = 50;

// const touchPad = document.createElement("div");
// touchPad.style.position = "fixed";
// touchPad.style.width = touchPadWidth + "px";
// touchPad.style.height = touchPadHeight + "px";
// touchPad.style.top = touchPadTop + "px";
// touchPad.style.left = touchPadLeft + "px";
// touchPad.style.border = "2px solid black";
// touchPad.style.opacity = "0.8";
// touchPad.style.display = "none";

// document.body.appendChild(touchPad);

// function toggleTouchPad() {
//   touchPad.style.display = touchPad.style.display === "none" ? "block" : "none";
// }

// touchPad.addEventListener("touchstart", function (e) {
//   e.preventDefault();
//   const touch = e.touches[0];
//   const mouseEvent = new MouseEvent("mousedown", {
//     clientX: touch.clientX,
//     clientY: touch.clientY,
//   });
//   document.dispatchEvent(mouseEvent);
// });

// touchPad.addEventListener("touchmove", function (e) {
//   e.preventDefault();
//   const touch = e.touches[0];
//   const mouseEvent = new MouseEvent("mousemove", {
//     clientX: touch.clientX,
//     clientY: touch.clientY,
//   });
//   document.dispatchEvent(mouseEvent);
// });

// touchPad.addEventListener("touchend", function (e) {
//   e.preventDefault();
//   const mouseEvent = new MouseEvent("mouseup", {});
//   document.dispatchEvent(mouseEvent);
// });

// 2

// const touchPadWidth = 200;
// const touchPadHeight = 200;
// const touchPadTop = 50;
// const touchPadLeft = 50;

// const touchPad = document.createElement("div");
// touchPad.style.position = "fixed";
// touchPad.style.width = touchPadWidth + "px";
// touchPad.style.height = touchPadHeight + "px";
// touchPad.style.top = touchPadTop + "px";
// touchPad.style.left = touchPadLeft + "px";
// touchPad.style.border = "2px solid black";
// touchPad.style.opacity = "0.8";
// touchPad.style.display = "none";

// document.body.appendChild(touchPad);

// function toggleTouchPad() {
//   touchPad.style.display = touchPad.style.display === "none" ? "block" : "none";
// }

// touchPad.addEventListener("touchstart", function (e) {
//   e.preventDefault();
//   const touch = e.touches[0];
//   const mouseEvent = new MouseEvent("mousedown", {
//     clientX: touch.clientX,
//     clientY: touch.clientY,
//   });
//   document.dispatchEvent(mouseEvent);
// });

// touchPad.addEventListener("touchmove", function (e) {
//   e.preventDefault();
//   const touch = e.touches[0];
//   const mouseEvent = new MouseEvent("mousemove", {
//     clientX: touch.clientX,
//     clientY: touch.clientY,
//   });
//   document.dispatchEvent(mouseEvent);
// });

// touchPad.addEventListener("touchend", function (e) {
//   e.preventDefault();
//   const mouseEvent = new MouseEvent("mouseup", {});
//   document.dispatchEvent(mouseEvent);
// });

// touchPad.addEventListener("wheel", function (e) {
//   e.preventDefault();
//   const wheelEvent = new WheelEvent("wheel", {
//     deltaY: e.deltaY,
//   });
//   document.dispatchEvent(wheelEvent);
// });

// touchPad.addEventListener("DOMMouseScroll", function (e) {
//   e.preventDefault();
//   const wheelEvent = new WheelEvent("wheel", {
//     deltaY: -e.detail,
//   });
//   document.dispatchEvent(wheelEvent);
// });

// 3

const touchPadWidth = 200;
const touchPadHeight = 200;
const touchPadTop = 50;
const touchPadLeft = 50;

const touchPad = document.createElement("div");
touchPad.style.position = "fixed";
touchPad.style.width = touchPadWidth + "px";
touchPad.style.height = touchPadHeight + "px";
touchPad.style.top = touchPadTop + "px";
touchPad.style.left = touchPadLeft + "px";
touchPad.style.border = "2px solid black";
touchPad.style.opacity = "0.8";
touchPad.style.display = "none";

document.body.appendChild(touchPad);

function toggleTouchPad() {
  touchPad.style.display = touchPad.style.display === "none" ? "block" : "none";
}

touchPad.addEventListener("touchstart", function (e) {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  document.dispatchEvent(mouseEvent);
});

touchPad.addEventListener("touchmove", function (e) {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  document.dispatchEvent(mouseEvent);
});

touchPad.addEventListener("touchend", function (e) {
  e.preventDefault();
  const mouseEvent = new MouseEvent("mouseup", {});
  document.dispatchEvent(mouseEvent);
});

touchPad.addEventListener("mousedown", function (e) {
  e.preventDefault();
  document.dispatchEvent(e);
});

touchPad.addEventListener("mousemove", function (e) {
  e.preventDefault();
  document.dispatchEvent(e);
});

touchPad.addEventListener("mouseup", function (e) {
  e.preventDefault();
  document.dispatchEvent(e);
});
