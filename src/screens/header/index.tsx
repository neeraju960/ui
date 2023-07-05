import { Box, Typography, styled, IconButton } from "@mui/material";
import Logo from "@media/images/logo.svg";
import { ReactComponent as ShoppingCart } from "@media/images/shopping-cart.svg";
import { Button } from "@mui/material";
import UseBreakpoint from "@shared/useBreakpoint";
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback, useEffect, useState } from "react";
import AppDrawer from "./appDrawer";
import HorizontalLinks from "./horizontalLinks";

const NavigationFromTop = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 10,
  '& img': {
    transform: 'scale(0.8)'
  }
}));

const links = [
  { title: 'Home', path: '/home' },
  { title: 'Services', path: '/home' },
  { title: 'Shop', path: '/home' },
  { title: 'Blog', path: '/home' },
  { title: 'Pages', path: '/home' }
]

export default function Index() {
  const [open, setOpen] = useState<boolean>(false);
  const { isSmallScreen } = UseBreakpoint()
  const toggleDrawer = useCallback((flag: boolean) => setOpen(flag), [])
  useEffect(() => {
    if (!isSmallScreen) {
      toggleDrawer(false);
    }
  }, [isSmallScreen, toggleDrawer])
  return (
    <>
      <AppDrawer {...{ toggleDrawer, open, links }} />
      <NavigationFromTop paddingY="5px">
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
          {
            isSmallScreen && (
              <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon color="primary" />
              </IconButton>
            )
          }
          <Box height="100%" width="100%" paddingX="5px">
            <img src={Logo} alt="logo" height="100%" width="100%" />
          </Box>
          <Typography variant="h6" component="h6" fontWeight={800} color="primary">
            Petopia
          </Typography>
        </Box>
        {
          !isSmallScreen && (
            <HorizontalLinks links={links} />
          )
        }
        <Button
          variant="contained" 
          sx={{ 
            color: 'black', 
            '&:hover': {
              backgroundColor: 'white'
            },
            fontSize: '16px', 
            fontWeight: 700, 
            backgroundColor: 'white', 
            height: '49px', 
            width: '120px' 
          }} size="small" startIcon={<ShoppingCart />}>
          Cart
        </Button>
      </NavigationFromTop>
    </>
  )
}
