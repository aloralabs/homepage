require("bootstrap.native");
require("instant.page");

const togglers = document.getElementsByClassName('hamburger');
for (const toggle of togglers) {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('is-active');
    });
}
