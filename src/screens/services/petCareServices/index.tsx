import PetCareCard from "./petCareCard"
import { ReactComponent as Service1 } from "@media/images/Service-1.svg";
import { ReactComponent as Service2 } from "@media/images/Service-2.svg";
import { ReactComponent as Service3 } from "@media/images/Service-4.svg";
import { ReactComponent as Service4 } from "@media/images/Service-6.svg";
import { ReactComponent as Service5 } from "@media/images/Service-1 (1).svg";
import { ReactComponent as Service6 } from "@media/images/Service-5.svg";
import { useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Index() {
  const services = [
    { title: 'Walking & Sitting', Icon: Service1, description: 'Ut tortor pretium viverra suspendisse potenti <br /> nullam ac tortor vitae eget dolor morbi ', price: 'From $15 / hour', path: '#' },
    { title: 'Pet Grooming', Icon: Service2, description: 'Et odio pellentesque diam volutpat commodo <br> sed egestas egestas  pellentesque nec nam ', price: 'From $39 / complex', path: '#' },
    { title: 'Pet Training', Icon: Service3, description: 'Aliquam ut porttitor leo a diam sollicitudin <br> tempor  sit amet est placerat ', price: 'From $27 / hour', path: '#' },
    { title: 'Pet Taxi', Icon: Service4, description: 'Maecenas ultricies mi eget mauris pharetra <br> et ultrices consectetur adipiscing elit', price: 'From $22  / trip', path: '#' },
    { title: 'Health & Wellness', Icon: Service5, description: 'Amet porttitor eget dolor morbi non arcu <br> risus quis varius blandit aliquam etiam', price: 'From $39/ visit', path: '#' },
    { title: 'Pet Hotel', Icon: Service6, description: 'Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n', price: 'From $15 / night', path: '#' },
  ]

  const renderServices = useMemo(() => services.map(item => (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
      <PetCareCard
        {...item} />
    </Grid>
  )), [services])


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }} paddingY={4}>
      <Typography variant="caption" color="primary.main" component="p" textTransform="uppercase" textAlign="center">We care for your pets</Typography>
      <Typography variant="h3" component="h3" textAlign="center" >All Pet Care Services</Typography>
      <Grid container spacing={3} paddingY={4}>
        {renderServices}
      </Grid>
    </Box>
  )
}
