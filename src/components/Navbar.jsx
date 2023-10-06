import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton ,MenuList ,MenuItem ,Image } from '@chakra-ui/react';



function Navbar() {
  return (
    <header>
        
        <Menu>
        {({ isOpen }) => (
            <>
            <MenuButton bg="#d4cfa5" className='btn-header'>
                Negocios
            </MenuButton>
            <MenuList>
                <MenuItem>Negocios 1</MenuItem>
                <MenuItem>Negocios 2</MenuItem>
                <MenuItem>Negocios 3</MenuItem>
            </MenuList>
            </>
        )}
        </Menu>
        <CartWidget menu></CartWidget>
    </header>
  );
}

export default Navbar;