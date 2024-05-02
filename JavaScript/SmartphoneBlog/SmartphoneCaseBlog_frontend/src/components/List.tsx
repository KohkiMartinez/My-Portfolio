// List.tsx

import * as React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { BlogData } from "../types/BlogData";

const StyledTG = styled(Typography)({
  fontWeight: 800,
  paddingBottom: "30px",
});

const List: React.FC<{
  list: BlogData[];
}> = React.memo(({ list }) => {
  return (
    <>
      <StyledTG variant="h4">Blogs</StyledTG>
      <Grid container spacing={3}>
        {list.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Link to={`/item/${item.id}&${item.imageId}`}>
              <CardActionArea>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={item.thunbnailImageUrl}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim. Donec pede
                      justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default List;
