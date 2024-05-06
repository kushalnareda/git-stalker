import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const styles = (theme) => ({
  input: {
    '&:hover': {
      backgroundColor: '',
    },
  },
});

const SearchBox = ({ classes, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //  getting the user data nad storing it in localstorage
  const getData = async (value) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${value}`);
      console.log(response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error.response.data.message);
      navigate('/user404');
      return null;
    }
  };

  //  getting the repo data nad storing it in localstorage
  const getRepoData = async (value) => {
    let allRepos = [];
    let page = 1;
    try {
      while (true) {
        const response = await axios.get(
          `https://api.github.com/users/${value}/repos?page=${page}&per_page=10`
        );
        if (response.data.length === 0) {
          break;
        }
        allRepos = [...allRepos, ...response.data];
        page++;
      }

      localStorage.setItem('repoData', JSON.stringify(allRepos));
      return allRepos;
    } catch (error) {
      console.error('Error fetching repo data:', error.response.data.message);
      navigate('/user404');
      return null;
    }
  };

  const handleChange = async (value) => {
    setInput(value);
    setIsLoading(false);
  };

  const handleEnter = async (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      if (input) {
        setIsLoading(true);
        setTimeout(async() => {
          const userData = await getData(input);
          const repoData = await getRepoData(input);
          setIsLoading(false);
          if (userData && repoData) {
            navigate('/user');
          } else {
            navigate('/user404');
          }
        }, 500);
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="20vh"
      backgroundColor={currentTheme.palette.background.paper}
    >
      <Box
        border={1}
        borderColor={currentTheme.palette.divider}
        borderRadius={16}
        p={2}
        display="flex"
        alignItems="center"
        style={{ marginTop: 20, transition: 'width 0.5s', color: currentTheme.palette.text.primary }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width={isHovered ? '17%' : '15%'}
      >
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ color: currentTheme.palette.text.secondary }} />
        </IconButton>
        <InputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          style={{ flex: 1, color: currentTheme.palette.text.primary }}
          className={classes.input}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleEnter}
        />
        {isLoading && <CircularProgress size={25} style={{ color: currentTheme.palette.text.primary, marginRight: 10 }} />}
      </Box>
    </Box>
  );
};

export default withStyles(styles)(SearchBox);
