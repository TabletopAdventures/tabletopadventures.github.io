document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('homeSearch');
  const gmGroups = document.querySelectorAll('.gm-group');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Loop through each GM group
    gmGroups.forEach(group => {
      const gmNameElement = group.querySelector('h3 > span:last-child');
      const gmName = gmNameElement ? gmNameElement.textContent.toLowerCase() : '';
      const isNoneGroup = group.querySelector('h3').textContent === 'None';

      let groupHasVisibleCard = false;

      // Find all campaign cards within this group
      const campaignCards = group.querySelectorAll('.campaign-card');

      // Loop through the cards in the current group
      campaignCards.forEach(card => {
        const cardTitleElement = card.querySelector('h2');
        const cardTitle = cardTitleElement ? cardTitleElement.textContent.toLowerCase() : '';

        // A card is a match if its title OR its GM's name matches the search term
        const isMatch = cardTitle.includes(searchTerm) || gmName.includes(searchTerm);

        if (isMatch) {
          card.style.display = 'flex'; // Use 'flex' to match the original style
          groupHasVisibleCard = true;
        } else {
          card.style.display = 'none';
        }
      });

      // After checking all cards, hide the entire group if it's now empty
      if (groupHasVisibleCard) {
        group.style.display = 'block';
      } else {
        // Also hide the "None" group if it has no matches
        if (isNoneGroup && searchTerm !== '') {
            group.style.display = 'none';
        } else if (!isNoneGroup) {
            group.style.display = 'none';
        }
      }
    });
  });
});