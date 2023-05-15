// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the target section's ID from the href attribute
    const targetId = link.getAttribute('href');

    // Scroll to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    let mouseX = 0;
    let mouseY = 0;
    let bubbleX = 0;
    let bubbleY = 0;
    let isCursorOverBubble = false;
  
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    // Function to update the bubble position smoothly
    const updateBubblePosition = () => {
      // Calculate the distance between the current position and the target position
      const dx = mouseX - bubbleX;
      const dy = mouseY - bubbleY;
  
      // Ease the movement by updating the bubble position gradually
      bubbleX += dx * 0.1;
      bubbleY += dy * 0.1;
  
      // Update the bubble position
      bubble.style.left = `${bubbleX}px`;
      bubble.style.top = `${bubbleY}px`;
  
      // Check if the cursor is over the bubble
      const bubbleRect = bubble.getBoundingClientRect();
      isCursorOverBubble =
        mouseX >= bubbleRect.left &&
        mouseX <= bubbleRect.right &&
        mouseY >= bubbleRect.top &&
        mouseY <= bubbleRect.bottom;
  
      // Expand or shrink the bubble based on the cursor position
      bubble.style.transform = isCursorOverBubble ? 'scale(1.2)' : 'scale(1)';
  
      // Call the updateBubblePosition function on the next available frame
      requestAnimationFrame(updateBubblePosition);
    };
  
    // Call the updateBubblePosition function to start the animation
    updateBubblePosition();
  });
  

  const quoteDisplayElement = document.getElementById('quoteDisplay');
  const quoteAuthorElement = document.getElementById('quoteAuthor');
  const quoteBtn = document.getElementById('quoteBtn');
  
  quoteBtn.addEventListener('click', getQuote);
  
  getQuote()
  
  function getQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteDisplayElement.innerHTML = data.content;
        quoteAuthorElement.innerHTML = "- " + data.author;
      })
      .catch(error => console.log(error));
  }
// Function to handle the scroll event
function handleScroll() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      // Remove active class from all nav items
      navItems.forEach((navItem) => {
        navItem.classList.remove('active');
      });

      // Add active class to the corresponding nav item
      navItems[index].classList.add('active');
    }
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


// Function to handle the button click event
function handleDownloadClick() {
  // Create a download link
  const link = document.createElement('a');
  link.href = 'Resume/Resume.pdf';  // Replace with the actual path to your PDF file
  link.target = '_blank';  // Open the PDF file in a new tab/window
  link.download = 'Aniketh_Resume.pdf';  // Specify the filename for the downloaded file

  // Simulate a click event on the link to trigger the download
  link.click();
}

// Attach the click event listener to the button
const downloadButton = document.getElementById('downloadBtn');
downloadButton.addEventListener('click', handleDownloadClick);
