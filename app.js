const form = document.querySelector("[data-form]");
const template = document.querySelector("[data-template]");
const wrapper = document.querySelector("[data-wrapper]");

function handleSubmit(event) {
    event.preventDefault();

    const stars = new FormData(event.target).get("stars");

    if (stars) {
        wrapper.style.height = wrapper.offsetHeight + "px";
        wrapper.innerHTML = template.innerHTML.replace(/{{ stars }}/, stars);
    }
}

form.addEventListener("submit", handleSubmit);