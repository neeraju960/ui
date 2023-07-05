import { Box, Grid, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import React from 'react';
import { SvgIconProps } from '@mui/material';

type Props = {
  title: string;
  Icon: React.ElementType<SvgIconProps>;
  contactDetails: string[];
}

function ContactCard(props: Props) {
  const { Icon } = props;
  return (
    <Box sx={{
      backgroundColor: 'white', position: 'relative', width: { sm: "100%",xl:"320px" }, height: '100%', border: '1px solid #7C58D3', borderRadius: '8px', paddingBottom: '10px'
    }}>
      <Box position="absolute" left="45%" top="-25px" bgcolor="primary.light" height="50px" width="50px" borderRadius="100%" display="flex" justifyContent="center" alignItems="center">
        <Icon style={{ color: '#7C58D3' }} />
      </Box>
      <Typography paddingTop={7} variant="h6" component="h6" textAlign="center" textTransform="capitalize">{props.title}</Typography>
      {
        props.contactDetails.map(num => (
          <Typography paddingTop="1px" component="p" textAlign="center" >{num}</Typography>
        ))
      }
    </Box>
  )
}

export default function ContactCardList() {

  const list = [
    { title: 'Phone', Icon: LocalPhoneIcon, contactDetails: ['(913) 756-3126', '(921) 557-1203'] },
    { title: 'Email', Icon: EmailIcon, contactDetails: ['petopia@example.com', 'petopia@email.com'] },
    { title: 'Location', Icon: LocationOnIcon, contactDetails: ['17 Parkman Place, 2122', 'United States'] },
    { title: 'Open Hours', Icon: AccessTimeFilledIcon, contactDetails: ['Mon - Fri: 7am - 6pm', 'Saturday: 9am - 4pm'] }
  ]

  return (
    <Box>
      <Typography variant="caption" color="primary.main" component="p" textTransform="uppercase" textAlign="center">We care for your pets</Typography>
      <Typography variant="h3" component="h3" textAlign="center" >Contacts</Typography>
      <Typography variant="caption" component="p" textAlign="center">Massa enim nec dui nunc mattis enim ut tellus</Typography>
      <Grid container spacing={6} paddingY={4} minHeight="250px">
        {
          list.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <ContactCard {...item} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
