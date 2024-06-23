import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const SearchHistory = ({ history, onSelect }) => {
  return (
    <List>
      {history.map((city, index) => (
        <ListItem button key={index} onClick={() => onSelect(city)}>
          <ListItemText primary={city} />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchHistory;
