document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const name = document.getElementByID("name").value;
    const email = document.getElementByID("name").value;
    const message = document.getElementByID("message").value;

    document.getElementByID("status").innerText = 'Thanks, ${name}! I'll get back to you soon.';
    this.requestFullscreen();
});