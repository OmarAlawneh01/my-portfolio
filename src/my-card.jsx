import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import mypic from './assets/images/mypic.jpg'; 
const ContactCard = () => {


  return (
    <div className="contact-card">
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 6, }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, maxWidth: 800, boxShadow: 6 }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', md: 300 }, height: 'auto' }}
          image={mypic} 
          alt="Omar Alawneh"
        />
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            Omar Alawneh
          </Typography>
          <Typography variant="body1"><strong>Email:</strong> omaralawneh01@gmail.com</Typography>
          <Typography variant="body1"><strong>Phone:</strong> +962-792545136</Typography>
          <Typography variant="body1"><strong>Location:</strong>Amman-Jordan</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            href="https://docs.google.com/document/d/11YUUf3KDXD3HevVijZSrK_AXP5m4P5P5fKeii5bT40o/edit?usp=sharing"
            download
          >
            Download Resume
          </Button>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
};

export default ContactCard;
