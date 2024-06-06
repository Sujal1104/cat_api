import React, { useState, useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@mui/material';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { fetchCatImages } from './api';

const App = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCatImages();
        setImages(data);
        setFilteredImages(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setFilteredImages(
      images.filter(image =>
        image.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, images]);

  return (
    <>
      <Header />
      <Container>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <ImageList images={filteredImages} />
        )}
      </Container>
    </>
  );
};

export default App;
