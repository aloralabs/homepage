import "bootstrap.native/dist/bootstrap-native.esm.min.js";
import "instant.page";
import "autotrack";

const togglers = document.getElementsByClassName("hamburger");
for (const toggle of togglers) {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("is-active");
    });
}
