import { Divider, Grid } from "@mui/material";
import RatingCard from "./ratingCard";
import { Box } from "@mui/material";
import Dog1 from "@media/images/products/dog1.png";
import Dog2 from "@media/images/products/dog2.png";
import Dog3 from "@media/images/products/dog3.png";
import { Typography } from "@mui/material";

export default function Index() {

  const featureProducts = [
    { Image: Dog1, title: 'Detachable Gravity Bowl Food Feeder', ratings: 2, price: '$30.12' },
    { Image: Dog2, title: 'Dog Collar for Small, Medium, Large Dogs', ratings: 2, price: '$16.88' },
    { Image: Dog3, title: 'Pink Embossed Spiked Collar', ratings: 2, price: '$34.98' }
  ]

  return (
    <Grid container spacing={3} paddingY={4}>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Typography variant="h6" component="h6" marginBottom={2}>Featured Products</Typography>
        <Box display="flex" flexDirection="column" rowGap={2} >
          {
            featureProducts.map((item, index) => (
              <>
                <RatingCard {...item} />
                {
                  index > -1 && index < featureProducts.length-1 && (
                    <Divider orientation="horizontal" flexItem />
                  )
                }
              </>
            ))
          }
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Typography variant="h6" component="h6" marginBottom={2}>On Sale Products</Typography>
        <Box display="flex" flexDirection="column" rowGap={2} >
        {
            featureProducts.map((item, index) => (
              <>
                <RatingCard {...item} />
                {
                  index > -1 && index < featureProducts.length-1 && (
                    <Divider orientation="horizontal" flexItem />
                  )
                }
              </>
            ))
          }
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Typography variant="h6" component="h6" marginBottom={2}>Top Rated Products</Typography>
        <Box display="flex" flexDirection="column" rowGap={2} >
        {
            featureProducts.map((item, index) => (
              <>
                <RatingCard {...item} />
                {
                  index > -1 && index < featureProducts.length-1 && (
                    <Divider orientation="horizontal" flexItem />
                  )
                }
              </>
            ))
          }
        </Box>
      </Grid>
    </Grid>
  )
}
