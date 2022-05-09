import keys from './keys.js';

class VirtualKeyboard {
  constructor() {
    this.capsOn = false;
    this.shiftOn = false;
    this.shiftPressed = false;
    this.ctrlPressed = false;
    this.localStorage = window.localStorage;
    this.lang = this.getLang();

    this.langKeys = { ru: keys.ru, en: keys.en };
    
    this.main = document.createElement('section');
    this.main.classList.add("main");
    this.container = document.createElement('div');
    this.container.classList.add("container");
    this.inputContainer = document.createElement('div');
    this.inputContainer.classList.add("input__container");
    this.input = document.createElement('textarea');
    this.input.classList.add("text-input");
    this.input.rows = 5;
    this.keyboardContainer = document.createElement('div');
    this.keyboardContainer.classList.add("keyboard__container");
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add("keyboard");
    this.descriptionContainer = document.createElement('div');
    this.descriptionContainer.classList.add('description__container');
    this.descriptionSystem = document.createElement('p');
    this.descriptionSystem.classList.add('description__system');
    this.descriptionSystem.textContent = 'The keyboard was created in Windows OS';
    this.descriptionCombination = document.createElement('p');
    this.descriptionCombination.classList.add('description__combination');
    this.descriptionCombination.innerHTML = 'Hotkeys: 1. Left Ctrl + Left Alt - change language, 2. Left Ctrl + Key A - select all text'

    
    document.body.appendChild(this.main);
    this.main.appendChild(this.container);
    this.container.appendChild(this.inputContainer);
    this.container.appendChild(this.keyboardContainer);
    this.container.appendChild(this.descriptionContainer);
    this.inputContainer.appendChild(this.input);
    this.keyboardContainer.appendChild(this.keyboard);
    this.descriptionContainer.appendChild(this.descriptionSystem);
    this.descriptionContainer.appendChild(this.descriptionCombination);

    for (let i = 0; i < 5; i++) {
      const keyRow = document.createElement('div');
      keyRow.classList.add("key__row");
      this.keyboard.appendChild(keyRow);
    }
    this.keyRows = document.querySelectorAll('.key__row');

    for (let i = 0; i < this.langKeys[this.lang].length; i++) {
      this.langKeys[this.lang][i].forEach((element) => {
        const key = document.createElement('div');
        key.innerHTML = element.key;
        key.setAttribute('data', element.code);
        key.setAttribute('key', element.code);
        key.dataset.keyCode = element.code;
        key.classList.add("key");
        if (element.keyClass) key.classList.add(element.keyClass);
        this.keyRows[i].appendChild(key);
      })
    }

    /* FIRST ROW */
    this.tildaKey = document.querySelector('.key-tilda');
    this.backspaceKey = document.querySelector('.key-backspace');
    /* FIRST ROW */

    /* SECOND ROW */
    this.tabKey = document.querySelector('.key-tab');
    this.backslashKey = document.querySelector('.key-backslash');
    this.deleteKey = document.querySelector('.key-delete');
    /* SECOND ROW */

    /* THIRD ROW */
    this.capsKey = document.querySelector('.key-caps');
    this.enterKey = document.querySelector('.key-enter');
    /* THIRD ROW */

    /* FOURTH ROW */
    this.shiftLeftKey = document.querySelector('.key-shift');
    this.arrowUpKey = document.querySelector('.key-arrow-up');
    this.shiftRightKey = document.querySelector('.key-shift');
    /* FOURTH ROW */

    /* FIFTH ROW */
    this.ctrlLeftKey = document.querySelector('.key-ctrl');
    this.winKey = document.querySelector('.key-win');
    this.altLeftKey = document.querySelector('.key-alt');
    this.spaceKey = document.querySelector('.key-space');
    this.altRightKey = document.querySelector('.key-alt');
    this.arrowLeftKey = document.querySelector('.key-arrow-left');
    this.arrowDownKey = document.querySelector('.key-arrow-down');
    this.arrowRightKey = document.querySelector('.key-arrow-right');
    this.ctrlRightKey = document.querySelector('.key-ctrl');;
    /* FIFTH ROW */

    this.anyKey = document.querySelectorAll('.key');
    this.inputKeys = document.querySelectorAll('.key-input');
    this.shiftKeys = document.querySelectorAll('.key-shift');
    this.ctrlKeys = document.querySelectorAll('.key-ctrl');
    this.arrows = document.querySelectorAll('.key-arrow');
    this.init();
  }

  switchLang(lang) {
    this.localStorage.setItem('keyboardLayout', lang);
  }

  getLang() {
    if (this.localStorage.getItem('keyboardLayout')) {
      return this.localStorage.getItem('keyboardLayout');
    } else {
      return 'ru';
    }
  }

  handleCapsShiftKeys() {
    const capsLockKeys = this.langKeys[this.lang].flat(Infinity);
    const isShift = this.shiftOn;

    capsLockKeys.forEach((key) => {
      if (key.capsLockKey || key.shiftKey) {
        this.keyboard.querySelector(`[data-key-code=${key.code}]`).innerHTML = key.key;
      }
    });

    if (this.capsOn && !isShift) {
      capsLockKeys.forEach((key) => {
        if (key.capsLockKey) {
          this.keyboard.querySelector(`[data-key-code=${key.code}]`).innerHTML = key.capsLockKey;
        }
      });
    } else if (!this.capsOn && isShift) {
      capsLockKeys.forEach((key) => {
        if (key.shiftKey) {
          this.keyboard.querySelector(`[data-key-code=${key.code}]`).innerHTML = key.shiftKey;
        }
      });
    } else if (this.capsOn && isShift) {
      capsLockKeys.forEach((key) => {
        if (key.shiftKey) {
          this.keyboard.querySelector(`[data-key-code=${key.code}]`).innerHTML = key.shiftKey;
        }
        if (key.capsLockKey) {
          this.keyboard.querySelector(`[data-key-code=${key.code}]`).innerHTML = key.key;
        }
      });
    }
  }

  handleInputText(text) {
    this.input.setRangeText(text, this.input.selectionStart, this.input.selectionEnd, 'end');
    this.input.focus();
  }

  handleInputSelection(position) {
    this.input.selectionStart = position;
    this.input.selectionEnd = this.input.selectionStart;
    this.input.focus();
  }

  selectAll() {
    this.selectionEnd = this.input.value.length;
    this.input.setSelectionRange(this.selectionStart, this.selectionEnd);
  }

  handleArrowUp() {
    this.handleInputSelection(0);
  }

  handleArrowDown() {
    this.handleInputSelection(this.input.value.length);
  }

  handleArrowLeft() {
    this.handleInputSelection(this.input.selectionStart - 1);
  }

  handleArrowRight() {
    this.handleInputSelection(this.input.selectionStart + 1);
  }

  handleTabKey() {
    this.handleInputText('\t');
  }

  handleEnterKey() {
    this.handleInputText('\n');
  }

  handleBackspaceKey() {
    if (!this.input.value || 
      (this.input.selectionStart === 0 && this.input.selectionStart === this.input.selectionEnd)
    ) {
      return
    };

    const currentPosition = this.input.selectionStart;
    const endPosition = this.input.selectionEnd;
    const prevText = this.input.value;

    this.input.value = '';

    if (currentPosition === endPosition) {
      this.handleInputText(prevText.slice(0, currentPosition - 1) + prevText.slice(endPosition));
      this.handleInputSelection(currentPosition - 1);
    } else {
      this.handleInputText(prevText.slice(0, currentPosition) + prevText.slice(endPosition));
      this.handleInputSelection(currentPosition);
    }
  }

  handleDeleteKey() {
    const text = this.input;
    if (!text.value || this.input.selectionStart === this.input.value.length) return;

    const currentPosition = this.input.selectionStart;
    const endPosition = this.input.selectionEnd;
    const prevText = this.input.value;

    this.input.value = '';

    if (currentPosition === endPosition) {
      this.handleInputText(prevText.slice(0, currentPosition) + prevText.slice(currentPosition + 1));
      this.handleInputSelection(currentPosition);
    } else {
      this.handleInputText(prevText.slice(0, currentPosition) + prevText.slice(endPosition));
      this.handleInputSelection(currentPosition);
    }
  }

  handleClick = (event) => {
    if (!event.target.classList.contains('key')) return;

    const currentKey = this.keyboard.querySelector(`[data-key-code=${event.target.dataset.keyCode}]`);

    switch (event.target.dataset.keyCode) {
      case 'KeyboardLayout':
        if (this.lang === 'ru') {
          this.lang = 'en';
        } else {
          this.lang = 'ru';
        }
        this.switchLang(this.lang);

        setTimeout(() => {
          this.handleCapsShiftKeys();
          currentKey.innerHTML = this.langKeys[this.lang][4][1].key;
        }, 100);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.shiftOn = !this.shiftOn;

        if (this.shiftOn) {
          this.keyboard.querySelector('[data-key-code=ShiftLeft]').classList.add('key-pressed');
          this.keyboard.querySelector('[data-key-code=ShiftRight]').classList.add('key-pressed');
        } else {
          this.keyboard.querySelector('[data-key-code=ShiftLeft]').classList.remove('key-pressed');
          this.keyboard.querySelector('[data-key-code=ShiftRight]').classList.remove('key-pressed');
        }

        this.handleCapsShiftKeys();
        break;
      case 'CapsLock':
        this.capsOn = !this.capsOn;
        currentKey.classList.toggle('key-pressed');
        this.handleCapsShiftKeys();
        break;
      case 'Tab':
        this.handleTabKey();
        break;
      case 'Backspace':
        this.handleBackspaceKey();
        break;
      case 'Delete':
        this.handleDeleteKey();
        break;
      case 'Enter':
        this.handleEnterKey();
        break;
      case 'ControlLeft':
      case 'ControlRight':
        break;
      case 'AltLeft':
      case 'AltRight':
        break;
      case 'MetaLeft':
      case 'MetaRight':
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.handleArrowUp();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.handleArrowDown();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.handleArrowLeft();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.handleArrowRight();
        break;
      default:
        this.handleInputText(event.target.innerHTML);
        if (!this.shiftPressed && this.shiftOn) {
          this.shiftOn = false;
          this.keyboard.querySelector('[data-key-code=ShiftLeft').classList.remove('key-pressed');
          this.keyboard.querySelector('[data-key-code=ShiftRight').classList.remove('key-pressed');
          this.handleCapsShiftKeys();
        }
    }
    event.target.classList.add('key-hovered');
    event.target.classList.add('key-pressed');

    setTimeout(() => event.target.classList.remove('key-hovered', 'key-pressed'), 100);
  }

  handleKeyDown = (event) => {
    if (event.code === 'F1' || event.code === 'F2' || event.code === 'F3' || 
      event.code === 'F4' || event.code === 'F5' || event.code === 'F6' || 
      event.code === 'F7' || event.code === 'F8' || event.code === 'F9' || 
      event.code === 'F10' || event.code === 'F11' || event.code === 'F12' || 
      event.code === 'ControlRight'
    ) {
      return
    };

    const currentKey = this.keyboard.querySelector(`[data-key-code=${event.code}]`);

    if (!currentKey) return;

    currentKey.classList.add('key-hovered');
    currentKey.classList.add('key-pressed');

    if (event.ctrlKey && event.altKey) {
      if (this.lang === 'ru') {
        this.lang = 'en';
      } else {
        this.lang = 'ru';
      }
      this.switchLang(this.lang);

      setTimeout(() => {
        this.keyboard.querySelector('[data-key-code=KeyboardLayout]').innerHTML = this.langKeys[this.lang][4][1].key;
        this.handleCapsShiftKeys(event.shiftKey);
      }, 100);
    }

    if (event.ctrlKey && event.code === 'KeyA') {
      keyboard.selectAll();
      return;
    }

    if (this.ctrlPressed) {
      return;
    }

    if (event.shiftKey && event.code === 'ArrowLeft') {
      keyboard.arrowsAction('left');
    } else if (event.shiftKey && event.code === 'ArrowRight') {
      keyboard.arrowsAction('right');
    }

    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        event.preventDefault();
        this.shiftOn = true;
        this.shiftPressed = true;
        this.handleCapsShiftKeys(event.shiftKey);
        break;
      case 'CapsLock':
        event.preventDefault();
        this.capsOn = !this.capsOn;
        setTimeout(() => currentKey.classList.toggle('key-pressed'), 100);
        this.handleCapsShiftKeys(event.shiftKey);
        break;
      case 'Tab':
        event.preventDefault();
        this.handleTabKey();
        break;
      case 'Backspace':
        event.preventDefault();
        this.handleBackspaceKey();
        break;
      case 'Delete':
        event.preventDefault();
        this.handleDeleteKey();
        break;
      case 'Enter':
        event.preventDefault();
        this.handleEnterKey();
        break;
      case 'ControlLeft':
      case 'ControlRight':
        event.preventDefault();
        break;
      case 'AltLeft':
      case 'AltRight':
        event.preventDefault();
        break;
      case 'MetaLeft':
      case 'MetaRight':
        event.preventDefault();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.handleArrowUp();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.handleArrowDown();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.handleArrowLeft();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.handleArrowRight();
        break;
      default:
        event.preventDefault();
        this.handleInputText(currentKey.innerHTML);
    }
  }

  handleKeyUp = (event) => {
    if (event.code === 'F1' || event.code === 'F2' || event.code === 'F3' || 
      event.code === 'F4' || event.code === 'F5' || event.code === 'F6' || 
      event.code === 'F7' || event.code === 'F8' || event.code === 'F9' || 
      event.code === 'F10' || event.code === 'F11' || event.code === 'F12' || 
      event.code === 'ControlRight'
    ) {
      return
    };

    const currentKey = this.keyboard.querySelector(`[data-key-code=${event.code}]`);

    if (!currentKey) return;

    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        event.preventDefault();
        this.shiftOn = false;
        this.shiftPressed = false;
        if (currentKey.classList.contains('key-pressed')) {
          this.keyboard.querySelector('[data-key-code=ShiftLeft]').classList.remove('key-pressed');
          this.keyboard.querySelector('[data-key-code=ShiftRight]').classList.remove('key-pressed');
        }
        this.handleCapsShiftKeys(event.shiftKey);
        break;
      case 'CapsLock':
        event.preventDefault();
        break;
      case 'Enter':
      case 'Backspace':
      case 'Tab':
      case 'ControlLeft':
      case 'AltLeft':
      case 'AltRight':
      case 'MetaLeft':
      case 'MetaRight':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault();
        break;
      default:
        event.preventDefault();
    }

    setTimeout(() => currentKey.classList.remove('key-hovered', 'key-pressed'), 100);
  }

  init() {
    this.keyboard.addEventListener('click', this.handleClick);

    window.addEventListener('mouseover', (event) => {
      if (!event.target.classList.contains('key')) return;
      event.target.classList.add('key-hovered');
    });

    window.addEventListener('mouseout', (event) => {
      if (!event.target.classList.contains('key')) return;
      event.target.classList.remove('key-hovered');
    });

    window.addEventListener('keydown', this.handleKeyDown);

    window.addEventListener('keyup', this.handleKeyUp);

    this.input.focus();
  }
}


const keyboard = new VirtualKeyboard();