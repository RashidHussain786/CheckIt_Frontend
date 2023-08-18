import { Avatar, Typography, Box, Stack, Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const Profile = ({ name, username, description, followers, following ,pic}) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '2rem' }}>
      <Avatar
        src={pic} // Replace with your image URL
        alt="Profile Avatar"
        sx={{ width: 250, height: 250, borderRadius: '50%', mb: '20px' }}
      />
      <Typography variant="h5" sx={{ marginBottom: '5px' }}>
        {name}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '5px' }}>
        {username}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '5px' }}>
        {description}
      </Typography>
      <Button variant="outlined" color="inherit" sx={{my:2}}>Edit Profile</Button>
      <Stack direction="row" alignItems="center" sx={{mb:1,mt:2}}>
      <PeopleIcon sx={{mr:'5px'}}/>
      <Typography variant="body2" sx={{ marginBottom: '5px' }}> 
        {followers} follower · {following} following
      </Typography>
      </Stack>
      
      <Stack direction="row" alignItems="center">
        <AccessTimeIcon sx={{ mr: '5px' }} />
        <Typography variant="body2">
          {currentTime} (UTC +05:30)
        </Typography>
      </Stack>
    </Box>
  );
};

export default Profile;
