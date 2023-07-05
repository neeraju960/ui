import { Box, Grid, Typography } from '@mui/material'
import BackgroundImage from "@media/images/stats-bg.svg";
import Oval from "@media/images/stats-ovals.svg"
import { ReactComponent as StartImage1 } from "@media/images/pets.svg";
import { ReactComponent as StartImage2 } from "@media/images/pets2.svg";
import { ReactComponent as StartImage3 } from "@media/images/canned-food.svg";
import { ReactComponent as StartImage4 } from "@media/images/shopping-bag.svg";

import PathLeft from "@media/images/Path  Copy.svg";
import PathRight from "@media/images/Path (1).svg"
import UseBreakpoint from '@shared/useBreakpoint';

export default function Stats() {
  const { isSmallScreen } = UseBreakpoint();
  return (
    <Box
      marginTop={10}
      sx={{
        width: '100%',
        height: {
          sm: 'max-content',
          md: '220px'
        },
        backgroundImage: `url('${Oval}'),${!isSmallScreen ? `url('${PathLeft}'),url('${PathRight}')` : ''}`,
        backgroundColor: '#7C58D3',
        backgroundPosition: '100% 100%, 0% 100%, 100% 100%',
        backgroundSize: 'cover , contain, contain',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        overflow: 'hidden',
        borderRadius: '8px'
      }}
    >
      <Grid container spacing={ isSmallScreen ? 6 : 2} paddingY={4}>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage1 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isSmallScreen ? 'row' : 'column'} gap={2}>
            <Typography variant="h4" component="h6">120+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage2 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isSmallScreen ? 'row' : 'column'} gap={2}>
            <Typography variant="h4" component="h6">20+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage3 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isSmallScreen ? 'row' : 'column'} gap={2}>
            <Typography variant="h4" component="h6">70+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage4 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isSmallScreen ? 'row' : 'column'} gap={2}>
            <Typography variant="h4" component="h6">200+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid item xs={12} sm={2} md={4} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage1 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="h4" component="h6">120+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} md={4} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage1 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="h4" component="h6">120+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} md={4} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage1 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="h4" component="h6">120+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} md={4} lg={4} xl={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '40px', color: 'white' }}>
          <StartImage1 />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="h4" component="h6">120+</Typography>
            <Typography>Satisfied Clients</Typography>
          </Box>
        </Grid>
      </Grid> */}
    </Box >
  )
}
