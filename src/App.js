import logo from './logo.svg';
import './App.css';
import { Button, Grid, Box, Container } from '@mui/material';

function App() {
  return (
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
  );
}

export default App;
