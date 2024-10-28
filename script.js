//Code for navigation
let hamburger = document.querySelector(".hamburger");
let navLinks = document.getElementById("nav-links");
let links = document.querySelectorAll(".links");

hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("hide");
        hamburger.classList.toggle("lines-rotate");
});

for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", () => {
        navLinks.classList.toggle("hide");
    });
}

//Code for section snapping




function showSkills(evt, skill) {
  let skillButtons = document.getElementsByClassName("skill-btn"); 
  let tabContent = document.getElementsByClassName("skill-container"); 

  // Hide all skill containers
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove "active" class from all skill buttons
  for (let i = 0; i < skillButtons.length; i++) {
    skillButtons[i].classList.remove("active");
  }
  // Display the selected skill content
  const selectedSkill = document.getElementById(skill);
  if (selectedSkill) {
    selectedSkill.style.display = "block";
  } else {
    console.error(`Element with ID '${skill}' not found.`);
  }

  // Set the clicked button to active
  evt.currentTarget.classList.add("active");
  
  document.getElementById("defaultOpen").click();

}