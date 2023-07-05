import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { ReactComponent as PetBonz } from "@media/images/Isolation_Mode.svg";
import { Typography } from "@mui/material";
import { ReactComponent as PhoneIcon } from '@media/images/phone.svg';

import { ReactComponent as FBIcon } from "@media/images/icon fb.svg";
import { ReactComponent as InstaIcon } from "@media/images/icon insta.svg";
import { ReactComponent as TwitterIcon } from "@media/images/icon twitter.svg";
import { ReactComponent as WhatsAppIcon } from "@media/images/icon whatsapp.svg";
import Input from "@components/input";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Index() {
  return (
    <Grid container spacing={6} paddingY={4} minHeight="400px">
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{
        maxWidth: '287px'
      }}>
        <PetBonz />
        <Typography component="p" fontSize={16} >
          Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
        </Typography>
        <Box display="flex" paddingY={2} gap={1}>
          <PhoneIcon />
          <Box>
            <Typography variant="h6" component="h6">(913) 756-3126</Typography>
            <Typography component="p" fontSize={16}>Got Questions? Call us 24/7</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Typography variant="h6" component="h6" color="primary.main">Working Hours</Typography>
        <Box display="flex" justifyContent="space-between" marginBottom={1} paddingTop={3}>
          <Typography component="p">Mon - Fri:</Typography>
          <Typography component="p" fontWeight={700}>7am – 6pm</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography component="p">Saturday:</Typography>
          <Typography component="p" fontWeight={700}>9am – 4pm</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography component="p">Sunday:</Typography>
          <Typography component="p" fontWeight={700}>Closed</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Typography variant="h6" component="h6" color="primary.main">Useful Links</Typography>
        <Box display="flex" columnGap={4}>
          <ul style={{ padding: 0 }}>
            <li><Typography component="p">Home</Typography></li>
            <li><Typography component="p">About</Typography></li>
            <li><Typography component="p">Services</Typography></li>
            <li><Typography component="p">Shop</Typography></li>
          </ul>
          <ul style={{ padding: 0 }}>
            <li><Typography component="p">FAQ</Typography></li>
            <li><Typography component="p">Gallery</Typography></li>
            <li><Typography component="p">Delivery</Typography></li>
            <li><Typography component="p">Sales</Typography></li>
          </ul>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <Typography variant="h6" component="h6" color="primary.main">Newsletter</Typography>
        <Typography component="p">Be first in the queue! Get our latest news straight to your inbox.</Typography>
        <Box display="flex" columnGap={2} marginY={2}>
          <Input placeholder="Enter" sx={{
            height: '50px',
            borderRadius: '8px',
            backgroundColor: 'white',
            border: '1px solid #CDCCCE'
          }} />
          <Button sx={{ bgcolor: 'primary.main', height: '50px', width: '50px', borderRadius: '8px' }}>
            <ArrowForwardIcon sx={{ color: 'white' }} />
          </Button>
        </Box>
        <Box display="flex" columnGap={3}>
          <FBIcon />
          <InstaIcon />
          <TwitterIcon />
          <WhatsAppIcon />
        </Box>
      </Grid>
    </Grid>
  )
}
