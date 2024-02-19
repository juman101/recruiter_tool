import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#3b3b3b',padding: "10px",margin: "10px" , borderRadius: '8px',}}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <p>




        </p>
          <Typography variant="h4" gutterBottom color=
        "white" fontSize="100" margin="10px">
          Taskphin
          </Typography>
          
        
          
          
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" className="link link-hover">
              About us
            </Typography>
            <Typography variant="body1" component="a" className="link link-hover">
              Contact
            </Typography>
            <Typography variant="body1" component="a" className="link link-hover">
              Jobs
            </Typography>
            <Typography variant="body1" component="a" className="link link-hover">
              Press kit
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" component="a" className="link link-hover">
              Terms of use
            </Typography>
            <Typography variant="body1" component="a" className="link link-hover">
              Privacy policy
            </Typography>
            <Typography variant="body1" component="a" className="link link-hover">
              Cookie policy
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          
          <form>
            <TextField
              label="Enter your email address"
              placeholder="username@site.com"
              backgroundColor="white"
              sx={{ width: '100%', mb: 2,color: 'white'}}
              
            
            />
            <Button variant="contained" color="primary">
             Join for waitlist
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
