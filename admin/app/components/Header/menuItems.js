import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/tours">
      <ListItemIcon>
        <AcUnitIcon />
      </ListItemIcon>
      <ListItemText primary="Tours" />
    </ListItem>

    <ListItem button component={Link} to="/contacts">
      <ListItemIcon>
        <AcUnitIcon />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
    <ListItem button component={Link} to="/chatRoom">
      <ListItemIcon>
        <AcUnitIcon />
      </ListItemIcon>
      <ListItemText primary="Chat Room" />
    </ListItem>
  </div>
);
