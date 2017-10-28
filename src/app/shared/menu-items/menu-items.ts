import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'DASHBOARD',
    type: 'link',
    icon: 'ecommerce-graph3'
  },
  {
    state: 'supplier',
    name: 'SUPPLIER',
    type: 'sub',
    icon: 'ecommerce-cart-plus',
    children: [
      {
        state: 'create',
        name: 'CREATE'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
  {
    state: 'user',
    name: 'USER',
    type: 'sub',
    icon: 'basic-paperplane',
    children: [
      {
        state: 'create',
        name: 'CREATE'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
  {
    state: 'fooditem',
    name: 'FOODITEM',
    type: 'sub',
    icon: 'ecommerce-basket',
    children: [
      {
        state: 'create',
        name: 'CREATE'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
  {
    state: 'caterer',
    name: 'CATERER',
    type: 'sub',
    icon: 'software-paintbucket',
    children: [
      {
        state: 'create',
        name: 'CREATE'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
  {
    state: 'zone',
    name: 'ZONE',
    type: 'sub',
    icon: 'basic-signs',
    children: [
      {
        state: 'create',
        name: 'CREATE'
      },
      {
        state: 'match',
        name: 'MATCH'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
