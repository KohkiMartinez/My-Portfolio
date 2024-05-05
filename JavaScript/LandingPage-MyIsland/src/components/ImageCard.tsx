import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";

type Place = {
  title: string;
  description: string;
  imageUrl: string;
  time: number;
};
const ImageCard: React.FC<{ place: Place; checked: boolean }> = ({
  place,
  checked,
}) => {
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card
        sx={{ maxWidth: 645, background: "rgba(0,0,0,0.5)", margin: "20px" }}
      >
        <CardMedia
          sx={{ height: 440 }}
          // image="/assets/island1.jpg"
          image={place.imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "white",
            }}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Nunito",
              fontSize: "1.1rem",
              color: "#ddd",
            }}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ImageCard;
