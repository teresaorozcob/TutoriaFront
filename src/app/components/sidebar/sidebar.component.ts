import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/datos-personales', title: 'Datos Personales',  icon: 'person', class: '' },
    // { path: '/profesores', title: 'Profesores',  icon: 'person', class: '' },
    { path: '/profesor-perfil', title: 'Datos Profesor',  icon: 'person', class: '' },
    { path: '/academico', title: 'Registrar',  icon: 'library_add', class: '' },
    { path: '/academico-grados', title: 'Grados Académicos',  icon: 'book', class: '' },
    { path: '/lista-documentos', title: 'Documentos',  icon: 'assignment', class: '' },
    { path: '/upload', title: 'Upload',  icon: 'backup', class: '' },

    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
