
/*******************************************/
/* Animation for buttons */
/*******************************************/
var animateButton = function (e) {
  console.log('in')

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate-btn');

  e.target.classList.add('animate-btn');
  setTimeout(function () {
    e.target.classList.remove('animate-btn');
  }, 700);
};

var bubblyButtons = document.querySelectorAll(".btn-color-1, .btn-outline-color-1");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

/*******************************************/
/* Creating parallax on buttons */
// source : https://codepen.io/electerious/pen/rroqdL
/*******************************************/

const docStyle = document.documentElement.style
const aElem = document.querySelector('.floating-btn')
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function (e) {

  const x = e.clientX - boundingClientRect.left
  const y = e.clientY - boundingClientRect.top

  const xc = boundingClientRect.width / 2
  const yc = boundingClientRect.height / 2

  const dx = x - xc
  const dy = y - yc

  docStyle.setProperty('--rx', `${ dy/-1 }deg`)
  docStyle.setProperty('--ry', `${ dx/10 }deg`)

}

aElem.onmouseleave = function (e) {

  docStyle.setProperty('--ty', '0')
  docStyle.setProperty('--rx', '0')
  docStyle.setProperty('--ry', '0')

}

aElem.onmousedown = function (e) {

  docStyle.setProperty('--tz', '-25px')

}

document.body.onmouseup = function (e) {

  docStyle.setProperty('--tz', '-12px')

}

/*******************************************/
/* Animation on scroll for titles */
// source : https://codepen.io/bfintal/pen/Ejvgrp
/*******************************************/
function isInView(el) {

  var scroll = window.scrollY || window.pageYOffset;
  var boundsTop = el.getBoundingClientRect().top + scroll;
  var viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight
  };
  var bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight
  };
  return bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom || bounds.top <= viewport.bottom && bounds.top >= viewport.top;

};


document.addEventListener('DOMContentLoaded', function () {
  var tester = document.querySelectorAll('.title-push');

  var handler = function handler() {
    tester.forEach(el => {
      return raf(function () {
        if (isInView(el)) {
          el.classList.add('title-push-show')
        } else {
          el.classList.remove('title-push-show')
        }
      });
    });

  };

  handler();
  window.addEventListener('scroll', handler);
});

var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};