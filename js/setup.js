'use strict';

// Menu
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');

// Wizard
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

// Colors
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizardFireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Menu events
setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

// Colors events
wizardCoat.addEventListener('click', function () {
  var coatColor = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[coatColor];
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = Math.floor(Math.random() * wizardEyesColor.length);
  wizardEyes.style.fill = wizardEyesColor[eyesColor];
});

fireball.addEventListener('click', function () {
  var fireballColor = Math.floor(Math.random() * wizardFireballColor.length);
  fireball.style.background = wizardFireballColor[fireballColor];
});

function setHtmlValues() {
  // ARIA roles
  setup.setAttribute('role', 'dialog');
  setupOpenIcon.setAttribute('role', 'button');
  setupOpenIcon.setAttribute('tabindex', '0');
  setupClose.setAttribute('role', 'button');
  setupClose.setAttribute('tabindex', '0');
}

setHtmlValues();
