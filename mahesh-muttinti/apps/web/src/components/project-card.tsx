import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";

interface ProjectCardProps {
  imageUrl: string;
  projectName: string;
  projectLiveUrl: string;
}

export default function ProjectCard({
  imageUrl,
  projectName,
  projectLiveUrl,
}: ProjectCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <Button
          size="small"
          variant="outlined"
          sx={{ backgroundColor: "black", color: "black" }}
        >
          <VisibilityRoundedIcon sx={{ color: "black", marginRight: 2 }} />
          <span>Preview</span>
        </Button>

        <a href={projectLiveUrl} target="_blank">
          <Button
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "black", color: "red" }}
          >
            <DesktopWindowsRoundedIcon sx={{ color: "red", marginRight: 2 }} />
            <span>Live</span>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
