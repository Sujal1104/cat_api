import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const StyledCard = styled(Card)(({ isVisible, direction }) => ({
  width: '100%',
  transition: 'transform 1.0s ease-in-out, opacity 1.0s ease-in-out',
  transform: isVisible ? 'translateX(0)' : (direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)'),
  opacity: isVisible ? 1 : 0,
}));

const StyledCardMedia = styled(CardMedia)({
  height: 500,
  width: '100%',
});

const ImageList = ({ images }) => {
  return (
    <Grid container spacing={4}>
      {images.map((image, index) => (
        <ImageCard key={image.id} image={image} direction={index % 2 === 0 ? 'left' : 'right'} />
      ))}
    </Grid>
  );
};

const ImageCard = ({ image, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} ref={ref}>
      <StyledCard isVisible={inView} direction={direction}>
        <StyledCardMedia
          component="img"
          image={image.url}
          alt="Cat"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            ID: {image.id}
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default ImageList;
