import { Box, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

type Props = {
  tag?: string,
  image: string;
  createdBy: string;
  createdAt: string;
  title: string;
  description: string
}

export default function Card(props: Props) {
  return (
    <Box marginY={2} sx={{
      width: "100%",
      backgroundColor: 'white',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: '8px',
      border: '1px solid #e9e9e9'
    }}>
      {
        props?.tag && (
          <Typography component="p" borderRadius="8px" fontWeight={700} fontSize={16} textTransform="uppercase" padding="10px" display="inline-block" bgcolor="secondary.main" position="absolute" top="-22px" right="10px">{props.tag}</Typography>
        )
      }
      <Box sx={{ height: '100%', width: '100%' }}>
        <img src={props.image} alt="" style={{ height: 'auto', width: '100%', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
      </Box>
      <Box padding="5px">

        <Box sx={{
          display: 'flex', gap: 1, flexDirection: {
            xs: "column",
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ color: 'primary.main' }} />
            <Typography component="p" fontWeight={700} fontSize={16}>{props.createdBy}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EventIcon sx={{ color: 'primary.main' }} />
            <Typography component="p" fontWeight={700} fontSize={16}>{props.createdAt}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" component="h6" paddingTop={1}>{props.title}</Typography>
        <Typography component="p" fontSize={18}>{props.description}</Typography>
      </Box>
    </Box>
  )
}
