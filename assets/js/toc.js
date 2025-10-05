document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll('.toc a');
  const sections = Array.from(tocLinks).map(link => {
    if (link) {
      return document.querySelector(link.getAttribute('href'));
    }
    return null;
  }).filter(Boolean); // Filter out any null/broken links

  if (sections.length === 0) {
    return;
  }

  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: '-120px 0px -50% 0px', // Defines the "active" zone at the top of the screen
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If a section is intersecting the active zone...
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // ...remove the active class from all links...
        tocLinks.forEach(link => link.classList.remove('active'));

        // ...and add it only to the link that corresponds to the intersecting section.
        const activeLink = document.querySelector(`.toc a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Start observing all the section elements
  sections.forEach(section => {
    observer.observe(section);
  });
});