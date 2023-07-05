import { Box, Rating } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';
import Dog1 from "@media/images/products/dog1.png";
import UseBreakpoint from '@shared/useBreakpoint';

type Props = {
  title: string,
  Image: string,
  ratings: number,
  price: string
}

export default function RatingCard(props: Props) {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box sx={{
      backgroundColor: "white",
      height: '140px',
      width: {
        xs: '100%',
        sm: '100%',
        md: '380px',
        lg: '380px',
        xl: '380px',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px',
      gap: 5,
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: '#eeeeee'
      },
      border: '1px solid #f0f0f0c1',
    }}>
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <img src={props.Image} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: '5px' }}>
        <Typography variant="h6" component="h6" lineHeight={1.2}>{props.title}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          disabled
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="h6" component="h6" color="primary.main">{props.price}</Typography>
      </Box>
    </Box>
  )
}
