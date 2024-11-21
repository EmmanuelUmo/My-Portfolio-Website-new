function toggleMenu(){
    const navLinks = document.getElementById ("navLinks");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";

     // Add click listeners to all navigation links to hide the navbar
     const links = navLinks.querySelectorAll("a"); // Assumes links are inside navLinks
     links.forEach(link => {
         link.addEventListener("click", () => {
             navLinks.style.display = "none";
         });
     });

}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect data from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // WhatsApp URL (Replace `8182356559` with your WhatsApp number, and format the message)
    const whatsappURL = `https://wa.me/8182356559?text=Hello!%0AMy Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
}); 

