
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const button = document.getElementById("time");

button.addEventListener("click", () => {

    const now = new Date();

    const CurrentHours = now.getHours();
    const CurrentMinutes = now.getMinutes();

    const CurrentTime = `${CurrentHours} : ${CurrentMinutes}`;

    clock.textContent = CurrentTime;

    button.style.display = "none";
});
