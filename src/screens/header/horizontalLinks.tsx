import { Box, Typography } from "@mui/material"
import { useMemo } from "react"
import { Link, NavLink } from "react-router-dom"

type Props = {
  links: { title: string, path: string }[]
}
export default function HorizontalLinks({ links }: Props) {
  const renderLinks = useMemo(() => links.map(item => (
    <NavLink to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
      {({ isActive }) => (
        <Box>
          <Typography sx={{
            width: 'max-content',
            paddingX: '3px',
            fontSize: '18px'
          }}>
            {item.title}
          </Typography>
        </Box>
      )}

    </NavLink>
  )), [links])
  return <Box display="flex" columnGap="15px" >
    {renderLinks}
  </Box>;
}
