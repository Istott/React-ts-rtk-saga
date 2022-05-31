import {useEffect,} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Box, FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import './App.css';

import { getCatsFetch } from './components/catSlice';

function App() {
  const dispatch = useDispatch();

  const cats = useSelector((state: any) => state.cats.cats);

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])
  console.log(cats);

  return (
    <div className="App">
      <h1>CATS SPECIES GALLERY</h1>
      <p>Images of different species of cats. lots of cats for your viewing pleasure.</p>
      <hr />
      <Paper>
        {cats.map((cats: any) => {
          return(
          <Box key={cats.id} display='flex' flexDirection='row' justifyContent='center' sx={{p: '5px', margin:'10px', border:'2px #ccc solid', borderRadius:'5px', backgroundColor: 'lightblue'}} >
            <Grid flex={4}>
              <img alt={cats.name} src={cats.image.url} width='200' height='200'/>
            </Grid>
            <Grid flex={6}>
              <h2>{cats.name}</h2>
              <h5>{cats.temperament}</h5>
              <p>{cats.description}</p>
            </Grid>
          </Box>
          )
        })}
      </Paper>
      <button>VIEW MORE CATS</button>
    </div>
  );
}

export default App;
