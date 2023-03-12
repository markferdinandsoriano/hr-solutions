/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      headerBg: "rgba(52,52,52,255)",
      postAnnouncemntBg: "rgba(20,174,69,255)",
      allNumberBg: "rgba(19,173,73,255)",
      allBg: "rgba(229,254,236,255)",
      drafts: "rgba(229,254,236,255)",
      draftsBg: "#FF8B13",
      sentThru: "#2979ff",
      textDefaultColor: "#506860",
      announcement: "#000000",
      headerTextColor: "rgba(219,219,219,255)",
      userName: "rgba(48,101,117,255)",
      placeholder: "rgba(80,80,80,255)",
      white: "#FFFFFF",
      lightGreen: "#CFFDE1",
      lightgray: "#E8E2E2",
    },
  },
  plugins: [],
};
