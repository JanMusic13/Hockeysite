
// =====================================
// MS HOCKEY - MAIN JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Zapri meni" : "Odpri meni"
  );
});

// Close mobile menu after clicking a link

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// APPLICATION FORM

const applicationForm = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");
const submitButton = document.getElementById("submitButton");
const formError = document.getElementById("formError");

applicationForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  // Prevent multiple submissions
  if (submitButton.disabled) return;

  submitButton.disabled = true;
  submitButton.textContent = "Pošiljanje ...";
  formError.textContent = "";

  try {

    const formData = new FormData(applicationForm);

    const response = await fetch(applicationForm.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Pošiljanje prijave ni uspelo.");
    }

    // Show success message only after successful submission
    applicationForm.hidden = true;
    successMessage.hidden = false;

    successMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  } catch (error) {

    console.error("Form submission error:", error);

    formError.textContent =
      "Pri pošiljanju je prišlo do napake. Poskusite znova ali nas kontaktirajte prek WhatsAppa.";

    submitButton.disabled = false;
    submitButton.textContent = "Pošlji →";

  }

});


// SMOOTH SCROLL FOR INTERNAL LINKS

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


// CONSOLE MESSAGE

console.log(
  "%cMS HOCKEY",
  "color: #0284c7; font-size: 25px; font-weight: bold;"
);

console.log("Welcome to MS Hockey website!");
