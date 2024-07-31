document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-btn');
    const navbarCollapse = document.getElementById('navbarTogglerDemo02');
    
    closeButton.addEventListener('click', function () {
      // Bootstrap’s collapse method to hide the menu
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
  