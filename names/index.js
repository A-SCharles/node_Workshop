let names = ["James", "May", "Jeremy", "Clarkson", "Samat", "Salamangreat"];

const display = document.getElementById("lol");
names.forEach((item, index) => {
  if (
    names.charAt(0) == "S" &&
    names.charAt( names.length - 1) == "t"
  ) {
    display.innerHTML += `<li>${item}</li>`;
  }
});
