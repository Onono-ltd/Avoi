document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("header"); // Get all headers
    let currentIndex = 0; // Track the current header

    function switchHeader() {
        // Remove 'active' class from the current header
        headers[currentIndex].classList.remove("active");

        // Move to the next header (loop back if at the end)
        currentIndex = (currentIndex + 1) % headers.length;

        // Add 'active' class to the new header
        headers[currentIndex].classList.add("active");
    }

    // Set interval to change headers every 5 seconds
    setInterval(switchHeader, 5000);

    // Initially, show only the first header
    headers.forEach((header, index) => {
        if (index !== 0) header.classList.remove("active");
    });
});
