import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Box, Container, Paper, Stepper, Step, StepLabel } from '@mui/material';

function App() {

  const [level, setLevel] = useState(1);

  const advance = () => {
    level === 1 ? setLevel(2) : setLevel(1);
  }

  return (
    <>
      <Box className="header" component="header" sx={{
        backgroundColor: 'red'
        }}>
        <Container fixed>
          <Grid container alignItems="center" sx={{height: 75}}>
            <Grid container justifyContent="center" item xs>
              <Button variant="contained">test</Button>
            </Grid>
            <Grid container justifyContent="center" item xs>
              <Button variant="contained">test</Button>
            </Grid>
            <Grid container justifyContent="center" item xs>
              <Button variant="contained">test</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="main">
        <Container fixed>
          <Grid>
            <Grid item>
              <Paper elevation={1} sx={{textAlign: 'center', p: '1px'}}>
                <h1>Welcome</h1>
              </Paper>
              <Stepper activeStep={level} alternativeLabel sx={{mt: 5}}>
                {['One','Two', 'Three'].map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid container justifyContent="center" item sx={{p: 10}}>
              <Button variant="contained" onClick={advance}>Advance</Button>
            </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
