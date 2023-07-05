import { Box } from "@mui/material";
import PetCareService from '@screens/services/petCareServices/index';
import Banner from "./banner";
import Stats from "./stats";
import Offers from "../products/offers/index";
import Ratings from "@screens/products/ratings/index";
import Subscribe from "../products/offers/subscribe";
import Posts from "@screens/posts/index";
import Dog1 from "@media/images/crop-groomer-trimming.png";
import Dog2 from "@media/images/crop-groomer-trimming-1.png";
import Dog3 from "@media/images/crop-groomer-trimming-3.png";
import ContactCardList from "@screens/socials/contactCardList";
import Input from "@components/input";

const latestPosts = [
  { tag: 'training', image: Dog1, createdBy: 'by Corabelle Durrad', createdAt: '02.01.2022', title: '5 Crazy Things Dogs Do When Left Alone At Home', description: 'Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.' },
  { tag: 'pet health', image: Dog2, createdBy: 'by Corabelle Durrad', createdAt: '02.01.2022', title: 'Your Dog Desperately Needs From You', description: 'Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ' },
  { tag: 'pet food', image: Dog3, createdBy: 'by Corabelle Durrad', createdAt: '02.01.2022', title: 'Top Cat Foods to Consider If You Are a First Time Owner', description: 'Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis' }
]

export default function Index() {

  return (
    <Box
      sx={{
        height: '100%',
        // bgcolor: 'red'
      }}
    >
      <Banner />
      <Stats />
      <PetCareService />
      {/* <Offers /> */}
      <Ratings />
      <Subscribe />
      <Posts posts={latestPosts} title="Latest Posts" subTitle="our blogs"/>
      <ContactCardList />
      <Input />
    </Box>
  )
}
