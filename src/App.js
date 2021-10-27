import logo from './logo.svg';
import './App.css';
import { Button, Grid, Box, Container } from '@mui/material';

function App() {
  return (
    <Container fixed>
      <Box className="header" component="header" sx={{
        backgroundColor: 'red',
        borderRadius: '10px'
      }}>
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
      </Box>
    </Container>
  );
}

export default App;
