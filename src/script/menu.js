document.querySelectorAll('.navbar > li').forEach(function(item) {
  item.addEventListener('click', function() {
    // Find the submenu within the clicked menu item
    const dropdownmenu = this.querySelector('.dropdown-menu');
    // Hide other open submenus
    document.querySelectorAll('.dropdown-menu').forEach(function(openMenu) {
      if (openMenu !== dropdownmenu) {
        openMenu.classList.add('hidden');
      }
    });
    // Toggle the visibility of the current submenu
    if (dropdownmenu) {
      dropdownmenu.classList.toggle('hidden');
    }
  });
});
const mobileBtn = document.querySelector('.fa-bars');

mobileBtn.addEventListener('click',function(){
  const navMenu = document.querySelector('.navbar');
  navMenu.classList.toggle('show');
})
