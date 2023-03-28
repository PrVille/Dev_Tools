export const DRAWER_WIDTH = 300

export const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz"
export const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export const NUMBERS = "0123456789"
export const SYMBOLS = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/'

export const REGEX_INTEGER = /^\d+$/
export const REGEX_HEX_LENGTH_6 = /^[0-9A-F\b]{0,6}$/
export const REGEX_0_TO_255 =
  /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
export const REGEX_0_TO_999 = /^[1-9][0-9]{1,2}$|^\d$/
export const REGEX_DECIMAL = /^-?\d+\.?\d*$/
export const REGEX_NO_DOUBLE_DECIMAL = /\d\.\d*\./

export const TOOLS = [
  { name: "Stopwatch", href: "stopwatch", type: "time" },
  { name: "RGB/HEX Converter", href: "rgbhexconverter", type: "converter" },
  { name: "Timer", href: "timer", type: "time" },
  {
    name: "Number Base Converter",
    href: "numberbaseconverter",
    type: "converter",
  },
  {
    name: "Password Generator",
    href: "passwordgenerator",
    type: "generator",
  },
  {
    name: "Lorem Ipsum Generator",
    href: "loremipsumgenerator",
    type: "generator",
    isNew: true,
  },

  { name: "Snippets", href: "snippets", type: "resource", isNew: true },
  { name: "Useful Websites", href: "websites", type: "resource", isNew: true },
  { name: "Dictionary", href: "dictionary", type: "resource" },
  { name: "Length Converter", href: "lengthconverter", type: "converter" },
  { name: "Weight Converter", href: "weightconverter", type: "converter" },
  {
    name: "Volume Converter",
    href: "volumeconverter",
    type: "converter",
  },
  { name: "Time Converter", href: "timeconverter", type: "converter" },
  {
    name: "Temperature Converter",
    href: "temperatureconverter",
    type: "converter",
  },
  { name: "Area Converter", href: "areaconverter", type: "converter" },
  {
    name: "Bits & Bytes Converter",
    href: "bitsandbytesconverter",
    type: "converter",
  },
]

export const UPCOMING_TOOLS = [
  "Speed Converter",
  "Angle Converter",
  "Pressure Converter",
  "Energy Converter",
  "Power Converter",
  "Regular Expression Tester",
  "Hash Generators",
  "Regular Expression Builder",
  "Currency Converter",
  "Color Picker",
  "Task Manager",
  "File Format Converter",
  "Browser Compatibility Tester",
  "JSON Formatter",
  "URL Encoder & Decoder",
  "Timezone Converter",
  "Readme Generator",
  "Mock Data Generator",
  "String Utilities",
  "API Testing Tool",
]

export const UPCOMING_FEATURES = [
  "Option to choose precision for converters",
  "Info & examples for tools",
  "More snippets",
  "More useful websites",
  "Timer end notification with sound",
  "More units for some converters",
  "Sign in and add favourite tools to dashboard",
  "Sign in and add your own useful websites and snippets",
  "Sorting and filtering for searchable items"
]
