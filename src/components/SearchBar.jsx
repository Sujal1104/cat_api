import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search by ID"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        margin: '30px 0',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray', 
          },
          '&:hover fieldset': {
            borderColor: 'green', 
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black', 
          },
          '& input': {
            color: 'dark-gray', 
          }, 
        },
        '& .MuiInputLabel-root': {
          color: 'sky-blue', // Label text color
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'sky', // Label color when focused
        },
      }}
    />
  );
};

export default SearchBar;
