import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MultiActionAreaCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: " 10px 16px 24px rgba(134, 160, 180, 0.25)",
        borderRadius: "10px",
        backgroundColor: "#fffff9",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/android-chrome-512x512.png"
          alt="green iguana"
        />
        <CardContent >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
          >
            ሥርዓተ ቤተ ክርስቲያን
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ሥርዓት የሃይማኖት መገለጫ ነው። ጥምቀት፣ ቁርባን፣ ጾም፣ ጸሎት፣ ሥግደት፣ ወዘተ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="primary">
          ወደ ትምህርት &gt;
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          align="right"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>ሥርዓተ ቤተ ክርስቲያን</Typography>
          <Typography paragraph>
            ሥርዓት የሃይማኖት መገለጫ ነው። ጥምቀት፣ ቁርባን፣ ጾም፣ ጸሎት፣ ሥግደት፣ ወዘተ በማመን ብቻ የሚያበቁ
            ሳይሆን የአፈጻጸምና አተገባበር መንገድ /ሥርዓት/ ያስፈልጋቸዋል።
          </Typography>
          <Typography paragraph>
            ሥርዓት የሃይማኖት መገለጫ ነው። ጥምቀት፣ ቁርባን፣ ጾም፣ ጸሎት፣ ሥግደት፣ ወዘተ በማመን ብቻ የሚያበቁ
            ሳይሆን የአፈጻጸምና አተገባበር መንገድ /ሥርዓት/ ያስፈልጋቸዋል። የእነዚህ ሁሉ ዝርዝር አፈጻጸም በሥርዓት
            ውስጥ ይካተታል።
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
