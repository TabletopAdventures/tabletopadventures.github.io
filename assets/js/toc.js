document.addEventListener('DOMContentLoaded', () => {
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];

    // Don't run the script if there's no TOC on the page
    if (tocLinks.length === 0) {
        return;
    }

    tocLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            sections.push(section);
        }
    });

    const highlightTocLink = () => {
        let currentSection = null;
        const scrollPosition = window.scrollY;

        // Find the section that is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Adjust for sticky header
            if (scrollPosition >= sectionTop) {
                currentSection = section;
            }
        });

        // Highlight the corresponding link
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
                link.classList.add('active');
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', highlightTocLink);

    // Initial highlight on page load
    highlightTocLink();
});