import { React, useState } from 'react';
import {
  List, ListItem, ListItemText, IconButton, SwipeableDrawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';

function NavDrawer({ navLinks }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const navDrawerList = () => (
    <List component="nav">
      {navLinks.map(({ title, path }) => (
        <a href={path}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </a>
      ))}
    </List>
  );

  return (
    <>
      <IconButton
        aria-label="menu"
        edge="end"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <Menu color="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onKeyDown={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
      >
        {navDrawerList()}
      </SwipeableDrawer>
    </>
  );
}

NavDrawer.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavDrawer;
