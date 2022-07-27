const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const vyska = input.value;
  alert(`tvoje vyska je: ${vyska}`);
});
