import { Box, Grid, Typography } from "@mui/material";
import Card from "./card";

type Props = {
  title: string,
  subTitle: string,
  posts: { tag: string, image: string, createdBy: string, createdAt: string, title: string, description: string }[]
}

export default function Index(props: Props) {
  return (
    <Box>
      <Typography textTransform="uppercase" color="primary.main" component="p" fontWeight={700} fontSize="16px" textAlign="center">{props.subTitle}</Typography>
      <Typography variant="h3" component="h3" textAlign="center">{props.title}</Typography>
      <Grid container spacing={3} paddingY={4}>
        {
          props.posts.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card {...item} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
