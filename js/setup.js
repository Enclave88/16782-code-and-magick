'use strict';

// Menu
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');

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

// Constants
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var getSetupOpenButtonAriaPressed = function () {
  return setupOpenIcon.setAttribute('aria-pressed', 'false');
};
var setSetupOpenButtonAriaPressed = function () {
  return setupOpenIcon.setAttribute('aria-pressed', 'true');
};

var getSetupCloseButtonAriaPressed = function () {
  return setupClose.setAttribute('aria-pressed', 'false');
};
var setSetupCloseButtonAriaPressed = function () {
  return setupClose.setAttribute('aria-pressed', 'true');
};

var getSetupSubmitButtonAriaPressed = function () {
  return setupSubmit.setAttribute('aria-pressed', 'false');
};
var setSetupSubmitButtonAriaPressed = function () {
  return setupSubmit.setAttribute('aria-pressed', 'true');
};

var getInvisibleClass = function () {
  setup.classList.remove('invisible');
  setSetupOpenButtonAriaPressed();
  getSetupCloseButtonAriaPressed();
  getSetupSubmitButtonAriaPressed();
};

var setInvisibleClass = function () {
  setup.classList.add('invisible');
  getSetupOpenButtonAriaPressed();
  setSetupCloseButtonAriaPressed();
};

// Menu events
setupOpen.addEventListener('click', getInvisibleClass);

setupOpenIcon.addEventListener('keydown', function (e) {
  if (e.keyCode && e.keyCode === ENTER_KEY_CODE) {
    getInvisibleClass();
    document.addEventListener('keydown', function (e) {
      if (e.keyCode && e.keyCode === ESCAPE_KEY_CODE) {
        setInvisibleClass();
      }
    });
  }
});

setupClose.addEventListener('click', setInvisibleClass);

setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode && e.keyCode === ENTER_KEY_CODE) {
    setInvisibleClass();
  }
});

setupSubmit.addEventListener('keydown', function (e) {
  if (e.keyCode && e.keyCode === ENTER_KEY_CODE) {
    getInvisibleClass();
    setSetupSubmitButtonAriaPressed();
  }
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
  // ARIA roles and other attr
  setup.setAttribute('role', 'dialog');
  setupOpenIcon.setAttribute('role', 'button');
  getSetupOpenButtonAriaPressed();
  setupOpenIcon.setAttribute('tabindex', '0');
  setupClose.setAttribute('role', 'button');
  getSetupCloseButtonAriaPressed();
  setupClose.setAttribute('tabindex', '0');
  setupSubmit.setAttribute('role', 'button');
  getSetupSubmitButtonAriaPressed();
  setupSubmit.setAttribute('tabindex', '1');
}

setHtmlValues();
