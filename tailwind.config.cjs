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
      draftsBg: "rgba(247,207,162,255)",
      sentThru: "rgba(3,40,28,255)",
      textDefaultColor: "rgba(102,122,115,255)",
      announcement: "rgba(3,31,21,255)",
      headerTextColor: "rgba(219,219,219,255)",
      userName: "rgba(48,101,117,255)",
      placeholder: "rgba(80,80,80,255)",
    },
  },
  plugins: [],
};
