// Detect scroll event
window.addEventListener("scroll", function() {
    // Get scroll position as a percentage of total scrollable height
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / windowHeight) * 100;
  
    // Move the circle slightly based on scroll
    const backgroundX = 50 + scrollPercent * 1.5; // Adjust X position slightly
    const backgroundY = 50 + scrollPercent; // Adjust Y position slightly
  
    document.body.style.background = `radial-gradient(circle at ${backgroundX}% ${backgroundY}%, 
      #ff7a7a, #ffca85, #8fd3f4, #83e9db)`;
  
    // Rotate hues based on scroll to create a dynamic color effect
    document.body.style.filter = `hue-rotate(${scrollPercent * 3.6}deg)`;
  
    // Scale the circle dynamically
    const scale = 1 + scrollPercent / 50; // Scale based on scroll
    document.body.style.transform = `scale(${scale})`;
  });
  
  