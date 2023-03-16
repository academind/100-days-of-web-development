const drawerBtnElement = document.getElementById('drawer-btn');
const mobileDarwerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
  mobileDarwerElement.classList.toggle('open');
}

drawerBtnElement.addEventListener('click', toggleDrawer);