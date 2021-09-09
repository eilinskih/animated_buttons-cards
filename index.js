const btn = document.getElementById("btn");
const popUp = document.getElementById("pop");
const btnDel = document.getElementById("btn-delete");
const btnBack = document.getElementById("btn-back");

function popupOpen(e) {
    e.target.classList.add("hide");
    popUp.classList.add("active");
};
function popupClose(e) {
    btn.classList.remove("hide");
    btn.classList.add("active");
    popUp.classList.remove("active");
}
btn.addEventListener("click", popupOpen);
btnBack.addEventListener("click", popupClose);
btnDel.addEventListener("click", popupClose);
