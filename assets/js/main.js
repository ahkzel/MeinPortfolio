window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const entete = this.document.querySelector('.entete');
    if (window.scrollY > 50) {
        header.classList.add('minimized');
        entete.classList.add('minimized');
    } 
    else {
        header.classList.remove('minimized');
        entete.classList.remove('minimized');
    }
});

document.querySelectorAll(".toggle-button").forEach(icon => {
    icon.addEventListener("click", function() {
        var paragraph = document.getElementById(this.getAttribute('data-target'));

        if (paragraph.style.display === "none" || paragraph.style.display === "") {
            paragraph.style.display = "block";
        } else {
            paragraph.style.display = "none";
        }

        if (this.classList.contains("fa-chevron-right")) {
            this.classList.remove("fa-chevron-right");
            this.classList.add("fa-chevron-down");
        }
        else {
            this.classList.remove("fa-chevron-down");
            this.classList.add("fa-chevron-right");
        }
    });
});

function toggleMenu(){
    document.getElementById('nav').classList.toggle('show');
};


document.getElementById('toggle-nav').addEventListener('click', toggleMenu);
