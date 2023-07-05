import { Button } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Dog1 from "@media/images/dog1.svg";
import Dog2 from "@media/images/dog2.svg";
import Dog3 from "@media/images/dog3.svg";
import UseBreakpoint from "@shared/useBreakpoint";

export default function Index() {

  const { isMediumScreen } = UseBreakpoint()

  return (
    <Grid container spacing={0} minHeight="100px">
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} >
        <Box sx={{ padding: '10px', height: '100%', width: '100%', display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row-reverse', alignItems: 'center', bgcolor: '#FCDCB5' }}>
          <img src={Dog1} style={{ maxWidth: '100%',height: 'auto', transform: 'rotateY(180deg)' }} />
          <Box>
            <Typography variant="h4" component="h6">Сheck Out Our Specials</Typography>
            <Typography component="p" fontSize={18}>Massa placerat duis ultricies lacus. <br />Aliquet bibendum enim facilisis <br /> gravida neque convallis </Typography>
            <Button variant="text" endIcon={<ArrowForwardIcon sx={{ color: "primary.main" }} />}>
              <Typography variant="h6" component="h6" position="relative" left="-10px" color="primary.main" textTransform="capitalize" fontWeight={800}>Shop Now</Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#FCDCB5' }}>
        <Box marginLeft={5} marginTop={15} sx={{
          display: 'flex',
          flexDirection: {
            sm: 'column',
            md: 'column'
          }
        }}>
          <Typography variant="h4" component="h6">Сheck Out Our Specials</Typography>
          <Typography component="p" fontSize={18}>Massa placerat duis ultricies lacus. <br />Aliquet bibendum enim facilisis <br /> gravida neque convallis </Typography>
          <Button variant="text" endIcon={<ArrowForwardIcon sx={{ color: "primary.main" }} />}>
            <Typography variant="h6" component="h6" position="relative" left="-10px" color="primary.main" textTransform="capitalize" fontWeight={800}>Shop Now</Typography>
          </Button>
        </Box>
        <img src={Dog1} style={{ transform: 'rotateY(180deg)' }} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'red' }}>
        <Box width="100%" height="100%" bgcolor="secondary.main" display="flex" padding={1}>
          <Box>
            <Typography variant="h4" component="h6">Luxury Fashion <br /> Collection</Typography>
            <Button variant="text" endIcon={<ArrowForwardIcon sx={{ color: "primary.main" }} />}>
              <Typography variant="h6" component="h6" position="relative" left="-10px" color="primary.main" textTransform="capitalize" fontWeight={800}>Shop Now</Typography>
            </Button>
          </Box>
          <img src={Dog2} />
        </Box>
        <Box width="100%" height="100%" bgcolor="secondary.main" display="flex" padding={1}>
          <Box>
            <Typography variant="h4" component="h6">Shop What’s <br /> Trending</Typography>
            <Button variant="text" endIcon={<ArrowForwardIcon sx={{ color: "primary.main" }} />}>
              <Typography variant="h6" component="h6" position="relative" left="-10px" color="primary.main" textTransform="capitalize" fontWeight={800}>Shop Now</Typography>
            </Button>
          </Box>
          <img src={Dog3} />
        </Box>
      </Grid>
    </Grid >
  )
}
