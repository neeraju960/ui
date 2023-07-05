import { Box, Typography } from '@mui/material'
import BannerImage from "@media/images/dog1 1.png";
import Ovals from '@media/images/Ovals.svg';
import UseBreakpoint from '@shared/useBreakpoint';

export default function Banner() {
  const { isSmallScreen } = UseBreakpoint();
  return (
    <Box sx={{
      width: '100%',
      minHeight: '80vh',
      position: 'relative',
      display: 'flex'
    }}>
      <img src={Ovals} alt="" style={{
        position: 'absolute',
        transform: 'scaleX(-1) scaleY(-1)'
      }} />
      <Box width="40%" paddingTop={5} height="100%" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" position="relative" zIndex={10}>
        <Typography variant="caption" color="primary.main" component="p" sx={{ textTransform: 'uppercase' }}>We care for your pets</Typography>
        <Typography variant={isSmallScreen ? 'h4' : 'h3'} component={isSmallScreen ? 'h4' : 'h3'}>We Help You Care for Animals with Nutrition</Typography>
        <Typography variant="caption" component="p">All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</Typography>
      </Box>
      <img src={BannerImage} alt="" style={{
        position: 'relative',
        right: "100px",
        aspectRatio: '9/1'
      }} />
    </Box>
  )
}
