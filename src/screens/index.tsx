import { Box } from "@mui/material";
import Header from "@screens/header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "@shared/loader";
import backgroundShape from "@media/images/bg.svg";
import UseBreakpoint from "@shared/useBreakpoint";
import Footer from '@screens/footer/index';
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { useGet } from "@shared/useApi";

const RouteLoader = () => (
  <Box height="100%" marginY={4} width="100%" display="flex" justifyContent="center" alignItems="center">
    <Loader />
  </Box>
)

export default function Index() {
  const { isSmallScreen, isMediumScreen } = UseBreakpoint();
  const { isLoading, data } = useGet({
    url: "products/"
  })
  console.log(data);
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url('${backgroundShape}')`,
        backgroundPosition: isSmallScreen ? '-15vw -32vh' : isMediumScreen ? '18vw -12vh' : '26vw -32vh',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      <Box width="100" paddingX={isSmallScreen ? 2 : 10}>
        <Header />
        <Suspense fallback={<RouteLoader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Box padding={4} bgcolor="#F8F8F8" height="max-content" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Footer />
        <Divider orientation="horizontal" flexItem />
        <Typography paddingTop={4} component="p" textAlign="center">NOOT ©  All rights reserved Copyrights 2023</Typography>
      </Box>
    </Box>
  )
}


