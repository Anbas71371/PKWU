/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
    "./node_module/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite')
  ],
}

