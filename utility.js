function openModal() {
  let modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  document.getElementsByTagName("header")[0].classList.add("hidden");
  document.getElementsByTagName("main")[0].classList.add("hidden");
  document.getElementById("continueBtn").addEventListener("click", function () {
    modal.classList.add("hidden");
    document.getElementsByTagName("header")[0].classList.remove("hidden");
    document.getElementsByTagName("main")[0].classList.remove("hidden");
  });
  modal.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.classList.add("hidden");
      document.getElementsByTagName("header")[0].classList.remove("hidden");
      document.getElementsByTagName("main")[0].classList.remove("hidden");
    }
  });
  phone.value = "";
}
