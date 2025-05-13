    
  <!-- JavaScript for WhatsApp Booking -->
  function bookEvent(eventDetails) {
    const phone = "7904201971";
    const message = `Hello, I want to book a spot for the following event:\n\n${eventDetails}\n\nPlease share further details.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/91${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }




  // ✅ Submit Package Booking via WhatsApp
  function sendToWhatsApp() {
    const name = document.getElementById("userName").value;
    const date = document.getElementById("userDate").value;
    const message = document.getElementById("userMessage").value;
    const packageName = document.getElementById("packageTitle").innerText;
  
    const text = `Hello, I would like to book the *${packageName}* package.%0A%0AName: ${name}%0AEvent Date: ${date}%0AMessage: ${message}`;
    const url = `https://wa.me/917904201971?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }
  
  // ✅ Single Service Booking (food, materials, etc.)
  function bookOnWhatsApp(serviceName) {
    const message = `Hello, I'm interested in booking the *${serviceName}* service. Please share more details.`;
    const whatsappURL = `https://wa.me/918940985978?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
  
  // ✅ Footer Contact Form – Send to WhatsApp
  document.getElementById("footerContactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#footerContactForm input[name='user_name']").value;
    const email = document.querySelector("#footerContactForm input[name='user_email']").value;
    const message = document.querySelector("#footerContactForm textarea[name='message']").value;
  
    const text = `New contact message from website:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/917904201971?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  });
  
  // ✅ Image Slider (Swiper)
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 }
    }
  });
  
