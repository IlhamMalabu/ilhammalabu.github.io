// Fixing bugs and improving mobile responsiveness

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu-button");
    
    // if (menuButton && navbar) {
    //     menuButton.addEventListener("click", () => {
    //         navbar.classList.toggle("hidden");
    //         navbar.classList.toggle("flex");
    //     });
    // }

    // // Ensure images and containers resize properly
    // document.querySelectorAll("img").forEach(img => {
    //     img.classList.add("max-w-full", "h-auto");
    // });

    // document.querySelectorAll(".responsive-container").forEach(container => {
    //     container.classList.add("w-full", "px-4", "md:px-8", "lg:px-12");
    // });

    // Fix getRandom function to load quotes correctly
    function getRandom() {
        fetch("https://motivational-quotes-api.onrender.com/quotes/random")
            .then(response => response.json())
            .then(data => {
                document.getElementById("quote").innerHTML = data.quote;
                document.getElementById("person").innerHTML = data.person;
            })
            .catch(err => console.log("Error fetching quote:", err));
    }

    document.getElementById("quote-button")?.addEventListener("click", getRandom);
    getRandom(); // Fetch a quote on page load

    // Improve color change function
    function changeColor() {
        let colors = ["#E8D7FF", "#FFD3E8", "#F39C91", "#A5C694"];
        let index = 0;
        setInterval(() => {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        }, 2000);
    }

    //changeColor(); // Start background color change on load
});