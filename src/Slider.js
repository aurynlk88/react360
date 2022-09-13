import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [number, setNumber] = React.useState(1);

  const handleChange = (event, newValue) => {
      let newData = (newValue * (36/101)).toFixed(0)
      if (newData == 0) {
          newData = 1
      }
setNumber(newData)
    setValue(newValue);
  };

  return (
    <Grid alignContent='center' className={classes.root}
    >
      <Box maxWidth={300}  container spacing={2}>
      <img src={require(`./images/img${number}.png`).default} width="300" height="auto" />
          <Slider color="secondary" value={value} onChange={handleChange} aria-labelledby="input-slide" />
      </Box>
      
    </Grid>
  );
}