// sidebar.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  toggleSidenav() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }

  toggleMenuItem(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const parentLi = target.closest('li'); 

    if (parentLi) {
      // Remove active class from siblings
      const siblings = Array.from(parentLi.parentElement!.children).filter(el => el !== parentLi);
      siblings.forEach(sibling => sibling.classList.remove('active'));

      // Toggle active class on clicked item
      parentLi.classList.toggle('active');

      // Toggle submenu
      const subMenu = parentLi.querySelector('ul');
      if (subMenu) {
        if (subMenu.style.display === 'none' || subMenu.style.display === '') {
          subMenu.style.display = 'block';
        } else {
          subMenu.style.display = 'none';
        }
      }

      // Close other submenus and remove active class from their children
      siblings.forEach(sibling => {
        const siblingSubMenu = sibling.querySelector('ul');
        if (siblingSubMenu) {
          siblingSubMenu.style.display = 'none';
          const siblingSubMenuItems = Array.from(siblingSubMenu.querySelectorAll('li'));
          siblingSubMenuItems.forEach(item => item.classList.remove('active'));
        }
      });
    }
  }
}