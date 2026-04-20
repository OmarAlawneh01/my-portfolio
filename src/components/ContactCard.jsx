import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import mypic from '../assets/images/mypic.jpg';
import { useTheme } from '../contexts/ThemeContext';

const ContactCard = () => {
  const { isDarkMode, theme } = useTheme();

  const cardBg = isDarkMode ? '#1e1e1e' : '#ffffff';
  const borderStyle = isDarkMode ? '1px solid #333333' : 'none';

  return (
    <div className="contact-card">
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: 800,
            boxShadow: isDarkMode ? '0 8px 32px rgba(0,0,0,0.5)' : 6,
            backgroundColor: cardBg,
            border: borderStyle,
            borderRadius: '16px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: '100%', md: 300 }, height: 'auto', objectFit: 'cover' }}
            image={mypic}
            alt="Omar Alawneh"
          />
          <CardContent sx={{ p: 3, backgroundColor: cardBg, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0.5 }}>
            <Typography variant="h5" sx={{ color: theme.primary, fontWeight: 700, mb: 1 }}>
              Omar Alawneh
            </Typography>
            <Typography variant="body1" sx={{ color: theme.text }}>
              <strong>Email:</strong> omaralawneh01@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ color: theme.text }}>
              <strong>Phone:</strong> +962-792545136
            </Typography>
            <Typography variant="body1" sx={{ color: theme.text }}>
              <strong>Location:</strong> Amman, Jordan
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                alignSelf: 'flex-start',
                background: `linear-gradient(135deg, ${theme.primary}, ${isDarkMode ? '#b3d9ff' : '#0099ff'})`,
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(0,102,204,0.35)',
                  transform: 'translateY(-2px)',
                },
              }}
              href="https://docs.google.com/document/d/11YUUf3KDXD3HevVijZSrK_AXP5m4P5P5fKeii5bT40o/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
