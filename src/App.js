import { Box, Typography, Paper } from '@mui/material/';
import AppBar from '@mui/material/AppBar';
import Image from './piv1.jpg'


const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

function App() {
  return (
    <>
    <Box>
      <AppBar>
        <Typography variant='h3' backgroundColor="red">Logo</Typography>
      </AppBar>
    </Box>
    
    <Paper style={styles.paperContainer}>
    Some text to fill the Paper Component
    </Paper>
      <Typography>Check out our database today</Typography>
  
    </>
  );
}

export default App;
