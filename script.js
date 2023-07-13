const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const h1Element = document.querySelector("h1");

h1Element.addEventListener("mouseover", () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    const text = h1Element.dataset.value;
    const newText = Array.from(text)
      .map((letter, index) => {
        if (index < iteration) {
          return letter;
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    h1Element.innerText = newText;

    if (iteration >= text.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});
