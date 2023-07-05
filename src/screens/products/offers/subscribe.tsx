import { Box, Typography } from "@mui/material";
import BG1 from "@media/images/bg (1).svg";
import BG2 from "@media/images/Path.svg";
import rabbit from "@media/images/Layer_1.svg";
import dog from "@media/images/Layer_1 (1).svg";
import UseBreakpoint from "@shared/useBreakpoint";
import { Button } from "@mui/material";
import Input from "@components/input";
export default function Subscribe() {
  const { isSmallScreen, isMediumScreen } = UseBreakpoint();
  const flag = (isSmallScreen || isMediumScreen);
  return (
    <Box padding={4} sx={{
      minhHight: '500px',
      width: '100%',
      backgroundImage: !flag ? `url('${BG1}'), url('${BG2}')` : '',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 100%,100% 100%',
      backgroundColor: 'primary.main',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px'
    }}>
      {
        !flag && (
          <>
            <img src={rabbit} alt="" style={{ position: 'absolute', bottom: "0px", left: "-70px" }} />
            <img src={dog} alt="" style={{ position: 'absolute', bottom: "10px", right: "12px" }} />
          </>
        )
      }
      <Box sx={{ zIndex: 10, color: 'white' }}>
        <Typography variant={isSmallScreen ? 'h5' : 'h3'} component={isSmallScreen ? 'h5' : 'h3'} textAlign="center">Get 20% Off Your First Purchase <br /> When You Use Petco Credit Card </Typography>
        <br />
        <Typography variant="caption" component="p" textAlign="center" fontSize={18}>Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula <br /> ullamcorper malesuada proin libero nunc consequat interdum varius sit.</Typography>
        <Box paddingX={flag ? 2 : 0} marginTop={2} display="flex" gap={2} flexDirection={flag ? 'column' : 'row'} justifyContent="center" alignItems="center">
          <Input
            placeholder="Type your Email"
            sx={{
              height: '70px',
              width: flag ? '100%' : '319px',
              borderRadius: '8px',
              border: '1px solid #CDCCCE',
              '& input': {
                position: 'relative',
                bottom: '-11%',
                color: 'white'
              },
              '& input::placeholder': {
                color: 'white',
                fontSize: '16px'
              },
            }}
          />
          <Button
            sx={{
              '&:hover': {
                bgcolor: 'secondary.main'
              },
              bgcolor: 'secondary.main',
              height: '70px',
              width: flag ? '100%' : '133px',
              borderRadius: '8px',
              color: 'black',
              fontWeight: 800,
              fontSize: '20px'
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box >
  )
}
