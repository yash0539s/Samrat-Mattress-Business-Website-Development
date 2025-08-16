document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item) {
        const question = item.querySelector("h3");

        // Initially hide all answers
        const answer = item.querySelector("p");
        answer.style.display = "none";

        // Add click event to toggle answer visibility
        question.addEventListener("click", function() {
            // Toggle the 'open' class on the FAQ item
            item.classList.toggle("open");

            // Show or hide the answer
            const isOpen = item.classList.contains("open");
            answer.style.display = isOpen ? "block" : "none";

            // Optional: Close other FAQ items when opening one
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("open");
                    otherItem.querySelector("p").style.display = "none";
                }
            });
        });
    });
});
