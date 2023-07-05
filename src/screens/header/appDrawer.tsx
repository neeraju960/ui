import { IconButton, List, ListItemText } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItem } from '@mui/material';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  open: boolean,
  toggleDrawer: (flag: boolean) => void;
  links: { title: string, path: string }[]
}

export default function AppDrawer({ open, links, toggleDrawer }: Props) {
  const closeDrawer = useCallback(() => { toggleDrawer(false) }, [toggleDrawer]);
  const renderLinks = useMemo(() => links.map(item => (
    <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
      <ListItem sx={{
        bgcolor: 'primary.light'
      }}>
        <ListItemButton>
          <ListItemText color="primary.main" primary={item.title} sx={{
            fontSize: '18px'
          }} />
        </ListItemButton>
      </ListItem>
    </Link>
  )), [links])
  return (
    <Drawer variant="temporary" open={open} onClose={closeDrawer}>
      <IconButton
        sx={{ alignSelf: 'end' }}
        aria-label="close"
        onClick={closeDrawer}>
        <CloseIcon color="primary" />
      </IconButton>
      <List sx={{ width: '90vw' }}>
        {renderLinks}
      </List>
    </Drawer>
  )
}
