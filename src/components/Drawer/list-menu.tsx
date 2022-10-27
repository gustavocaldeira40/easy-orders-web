import React, { useState } from 'react'

import ClientsIcon from 'assets/icons/clients.png'
import OrdersIcon from 'assets/icons/orders.png'
import ProductsIcon from 'assets/icons/products.png'
import { DrawerItemProps } from 'interfaces/drawer-item'
import { IconMenu } from './style'

export const listMenu: DrawerItemProps[] = [
  {
    name: 'Clients',
    icon: <IconMenu src={ClientsIcon} />,
    subMenu: ['New', 'List'],
  },
  {
    name: 'Orders',
    icon: <IconMenu src={OrdersIcon} />,
    subMenu: ['New', 'List'],
  },
  {
    name: 'Products',
    icon: <IconMenu src={ProductsIcon} />,
    subMenu: ['New', 'List'],
  },
]
