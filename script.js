document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
        item.classList.toggle("change");
    });
});

document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".target").forEach((item) => {
            item.classList.remove("change");
        });
    });
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
