const keys = {
  ru: [
    [
      {
        key: "ё", shiftKey: "Ё", code: "Backquote", capsLockKey: "Ё", keyClass: "key-tilda",
      },
      { key: "1", shiftKey: "!", code: "Digit1" },
      { key: "2", shiftKey: "\"", code: "Digit2" },
      { key: "3", shiftKey: "№", code: "Digit3" },
      { key: "4", shiftKey: ";", code: "Digit4" },
      { key: "5", shiftKey: "%", code: "Digit5" },
      { key: "6", shiftKey: ":", code: "Digit6" },
      { key: "7", shiftKey: "?", code: "Digit7" },
      { key: "8", shiftKey: "*", code: "Digit8" },
      { key: "9", shiftKey: "(", code: "Digit9" },
      { key: "0", shiftKey: ")", code: "Digit0" },
      { key: "-", shiftKey: "_", code: "Minus" },
      { key: "=", shiftKey: "+", code: "Equal" },
      { key: "Backspace", code: "Backspace", keyClass: "key-backspace" },
    ],
    [
      { key: "Tab", code: "Tab", keyClass: "key-tab" },
      {
        key: "й", shiftKey: "Й", code: "KeyQ", capsLockKey: "Й",
      },
      {
        key: "ц", shiftKey: "Ц", code: "KeyW", capsLockKey: "Ц",
      },
      {
        key: "у", shiftKey: "У", code: "KeyE", capsLockKey: "У",
      },
      {
        key: "к", shiftKey: "К", code: "KeyR", capsLockKey: "К",
      },
      {
        key: "е", shiftKey: "Е", code: "KeyT", capsLockKey: "Е",
      },
      {
        key: "н", shiftKey: "Н", code: "KeyY", capsLockKey: "Н",
      },
      {
        key: "г", shiftKey: "Г", code: "KeyU", capsLockKey: "Г",
      },
      {
        key: "ш", shiftKey: "Ш", code: "KeyI", capsLockKey: "Ш",
      },
      {
        key: "щ", shiftKey: "Щ", code: "KeyO", capsLockKey: "Щ",
      },
      {
        key: "з", shiftKey: "З", code: "KeyP", capsLockKey: "З",
      },
      {
        key: "х", shiftKey: "Х", code: "BracketLeft", capsLockKey: "Х",
      },
      {
        key: "ъ", shiftKey: "Ъ", code: "BracketRight", capsLockKey: "Ъ",
      },
      {
        key: "\\", shiftKey: "/", code: "Backslash", keyClass: "key-backslash",
      },
      { key: "DEL", code: "Delete", keyClass: "key-delete" },
    ],
    [
      { key: "CapsLock", code: "CapsLock", keyClass: "key-caps" },
      {
        key: "ф", shiftKey: "Ф", code: "KeyA", capsLockKey: "Ф",
      },
      {
        key: "ы", shiftKey: "Ы", code: "KeyS", capsLockKey: "Ы",
      },
      {
        key: "в", shiftKey: "В", code: "KeyD", capsLockKey: "В",
      },
      {
        key: "а", shiftKey: "А", code: "KeyF", capsLockKey: "А",
      },
      {
        key: "п", shiftKey: "П", code: "KeyG", capsLockKey: "П",
      },
      {
        key: "р", shiftKey: "Р", code: "KeyH", capsLockKey: "Р",
      },
      {
        key: "о", shiftKey: "О", code: "KeyJ", capsLockKey: "О",
      },
      {
        key: "л", shiftKey: "Л", code: "KeyK", capsLockKey: "Л",
      },
      {
        key: "д", shiftKey: "Д", code: "KeyL", capsLockKey: "Д",
      },
      {
        key: "ж", shiftKey: "Ж", code: "Semicolon", capsLockKey: "Ж",
      },
      {
        key: "э", shiftKey: "Э", code: "Quote", capsLockKey: "Э",
      },
      { key: "Enter", code: "Enter", keyClass: "key-enter" },
    ],
    [
      { key: "Shift", code: "ShiftLeft", keyClass: "key-shift" },
      {
        key: "я", shiftKey: "Я", code: "KeyZ", capsLockKey: "Я",
      },
      {
        key: "ч", shiftKey: "Ч", code: "KeyX", capsLockKey: "Ч",
      },
      {
        key: "с", shiftKey: "С", code: "KeyC", capsLockKey: "С",
      },
      {
        key: "м", shiftKey: "М", code: "KeyV", capsLockKey: "М",
      },
      {
        key: "и", shiftKey: "И", code: "KeyB", capsLockKey: "И",
      },
      {
        key: "т", shiftKey: "Т", code: "KeyN", capsLockKey: "Т",
      },
      {
        key: "ь", shiftKey: "Ь", code: "KeyM", capsLockKey: "Ь",
      },
      {
        key: "б", shiftKey: "Б", code: "Comma", capsLockKey: "Б",
      },
      {
        key: "ю", shiftKey: "Ю", code: "Period", capsLockKey: "Ю",
      },
      { key: ".", shiftKey: ",", code: "Slash" },
      { key: "▲", code: "ArrowUp", keyClass: "key-arrow-up" },
      { key: "Shift", code: "ShiftRight", keyClass: "key-shift" },
    ],
    [
      { key: "Ctrl", code: "ControlLeft", keyClass: "key-ctrl" },
      { key: "RU", code: "KeyboardLayout" },
      { key: "Win", code: "MetaLeft", keyClass: "key-win" },
      { key: "Alt", code: "AltLeft", keyClass: "key-alt" },
      { key: " ", code: "Space", keyClass: "key-space" },
      { key: "Alt", code: "AltRight", keyClass: "key-alt" },
      { key: "Ctrl", code: "ControlRight", keyClass: "key-ctrl" },
      { key: "◄", code: "ArrowLeft", keyClass: "key-arrow-left" },
      { key: "▼", code: "ArrowDown", keyClass: "key-arrow-down" },
      { key: "►", code: "ArrowRight", keyClass: "key-arrow-right" },
    ],
  ],
  en: [
    [
      {
        key: "`", shiftKey: "~", code: "Backquote", keyClass: "key-tilda",
      },
      { key: "1", shiftKey: "!", code: "Digit1" },
      { key: "2", shiftKey: "@", code: "Digit2" },
      { key: "3", shiftKey: "#", code: "Digit3" },
      { key: "4", shiftKey: "$", code: "Digit4" },
      { key: "5", shiftKey: "%", code: "Digit5" },
      { key: "6", shiftKey: "^", code: "Digit6" },
      { key: "7", shiftKey: "&", code: "Digit7" },
      { key: "8", shiftKey: "*", code: "Digit8" },
      { key: "9", shiftKey: "(", code: "Digit9" },
      { key: "0", shiftKey: ")", code: "Digit0" },
      { key: "-", shiftKey: "_", code: "Minus" },
      { key: "=", shiftKey: "+", code: "Equal" },
      { key: "Backspace", code: "Backspace", keyClass: "key-backspace" },
    ],
    [
      { key: "Tab", code: "Tab", keyClass: "key-tab" },
      {
        key: "q", shiftKey: "Q", code: "KeyQ", capsLockKey: "Q",
      },
      {
        key: "w", shiftKey: "W", code: "KeyW", capsLockKey: "W",
      },
      {
        key: "e", shiftKey: "E", code: "KeyE", capsLockKey: "E",
      },
      {
        key: "r", shiftKey: "R", code: "KeyR", capsLockKey: "R",
      },
      {
        key: "t", shiftKey: "T", code: "KeyT", capsLockKey: "T",
      },
      {
        key: "y", shiftKey: "Y", code: "KeyY", capsLockKey: "Y",
      },
      {
        key: "u", shiftKey: "U", code: "KeyU", capsLockKey: "U",
      },
      {
        key: "i", shiftKey: "I", code: "KeyI", capsLockKey: "I",
      },
      {
        key: "o", shiftKey: "O", code: "KeyO", capsLockKey: "O",
      },
      {
        key: "p", shiftKey: "P", code: "KeyP", capsLockKey: "P",
      },
      { key: "[", shiftKey: "{", code: "BracketLeft" },
      { key: "]", shiftKey: "}", code: "BracketRight" },
      {
        key: "\\", shiftKey: "|", code: "Backslash", keyClass: "key-backslash",
      },
      { key: "DEL", code: "Delete", keyClass: "key-delete" },
    ],
    [
      { key: "CapsLock", code: "CapsLock", keyClass: "key-caps" },
      {
        key: "a", shiftKey: "A", code: "KeyA", capsLockKey: "A",
      },
      {
        key: "s", shiftKey: "S", code: "KeyS", capsLockKey: "S",
      },
      {
        key: "d", shiftKey: "D", code: "KeyD", capsLockKey: "D",
      },
      {
        key: "f", shiftKey: "F", code: "KeyF", capsLockKey: "F",
      },
      {
        key: "g", shiftKey: "G", code: "KeyG", capsLockKey: "G",
      },
      {
        key: "h", shiftKey: "H", code: "KeyH", capsLockKey: "H",
      },
      {
        key: "j", shiftKey: "J", code: "KeyJ", capsLockKey: "J",
      },
      {
        key: "k", shiftKey: "K", code: "KeyK", capsLockKey: "K",
      },
      {
        key: "l", shiftKey: "L", code: "KeyL", capsLockKey: "L",
      },
      { key: ";", shiftKey: ":", code: "Semicolon" },
      { key: "'", shiftKey: "\"", code: "Quote" },
      { key: "Enter", code: "Enter", keyClass: "key-enter" },
    ],
    [
      { key: "Shift", code: "ShiftLeft", keyClass: "key-shift" },
      {
        key: "z", shiftKey: "Z", code: "KeyZ", capsLockKey: "Z",
      },
      {
        key: "x", shiftKey: "X", code: "KeyX", capsLockKey: "X",
      },
      {
        key: "c", shiftKey: "C", code: "KeyC", capsLockKey: "C",
      },
      {
        key: "v", shiftKey: "V", code: "KeyV", capsLockKey: "V",
      },
      {
        key: "b", shiftKey: "B", code: "KeyB", capsLockKey: "B",
      },
      {
        key: "n", shiftKey: "N", code: "KeyN", capsLockKey: "N",
      },
      {
        key: "m", shiftKey: "M", code: "KeyM", capsLockKey: "M",
      },
      { key: ",", shiftKey: "<", code: "Comma" },
      { key: ".", shiftKey: ">", code: "Period" },
      { key: "/", shiftKey: "?", code: "Slash" },
      { key: "▲", code: "ArrowUp", keyClass: "key-arrow-up" },
      { key: "Shift", code: "ShiftRight", keyClass: "key-shift" },
    ],
    [
      { key: "Ctrl", code: "ControlLeft", keyClass: "key-ctrl" },
      { key: "EN", code: "KeyboardLayout" },
      { key: "Win", code: "MetaLeft", keyClass: "key-win" },
      { key: "Alt", code: "AltLeft", keyClass: "key-alt" },
      { key: " ", code: "Space", keyClass: "key-space" },
      { key: "Alt", code: "AltRight", keyClass: "key-alt" },
      { key: "Ctrl", code: "ControlRight", keyClass: "key-ctrl" },
      { key: "◄", code: "ArrowLeft", keyClass: "key-arrow-left" },
      { key: "▼", code: "ArrowDown", keyClass: "key-arrow-down" },
      { key: "►", code: "ArrowRight", keyClass: "key-arrow-right" },
    ],
  ],
};

export default keys;
