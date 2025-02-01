document.getElementById("contact_type").addEventListener("change", function () {
  var selectValue = this.value;

  document.getElementById("email").style.display =
    selectValue === "Email" ? "block" : "none";
  document.getElementById("phone").style.display =
    selectValue === "Phone" ? "block" : "none";
});
