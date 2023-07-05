import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardPath from "@media/images/CardPath.svg";
import Paws from "@media/images/Paws.svg";
import { stringToHTML } from '@utils/index';

type Props = {
  Icon: React.ComponentType,
  title: string,
  description: string,
  price: string,
  path: string
}

export default function PetCareCard(props: Props) {
  const { Icon } = props;
  return (
    <Box sx={{
      backgroundImage: `url('${Paws}'),url('${CardPath}')`,
      backgroundColor: 'white',
      backgroundPosition: {
        xs: '97% 100%, 101% 100%',
        md: '92% 100%,101% 100%',
        lg: '94% 100%,101% 100%',
      },
      backgroundRepeat: 'no-repeat',
      width: {
        xs: '100%',
        md: '280px',
        lg: '380px',
      },
      padding: '30px',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: 'primary.main',
        'h5': {
          color: 'white'
        },
        'p': {
          color: 'white'
        }
      },
      border: '1px solid #f0f0f0c1'
    }}>
      <Box display="flex" columnGap={2} alignItems="center" marginBottom={2}>
        <Icon />
        <Typography variant="h5" component="h5">{props.title}</Typography>
      </Box>
      <Typography component="p" fontSize={18}>{stringToHTML(props.description)}</Typography>
      <Typography component="p" fontSize={18} fontWeight={700} letterSpacing={1}>{props.price} </Typography>
      <Button variant="text" endIcon={<ArrowForwardIcon sx={{ color: "secondary.main" }} />}>
        <Typography textTransform="capitalize" variant="h6" component="h6" position="relative" left="-10px" color="secondary.main" fontWeight={800}>Get Service</Typography>
      </Button>
    </Box >
  )
}