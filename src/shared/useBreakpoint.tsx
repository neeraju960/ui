import { useMediaQuery } from '@mui/material';

export default function UseBreakpoint() {
  const isSmallScreen = useMediaQuery('(max-width: 780px)');
  const isMediumScreen = useMediaQuery('(max-width: 1000px)');
  const isLargeScreen = useMediaQuery('(min-width: 1300px)');
  return ({
    isSmallScreen,
    isMediumScreen,
    isLargeScreen
  });
}
