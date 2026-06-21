function showSection(id, element){

    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");

    let items = document.querySelectorAll(".menu li");
    items.forEach(li => li.classList.remove("active"));

    element.classList.add("active");
}
