import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
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
    <Card
      sx={{
        backgroundColor: "#eaae03",
        borderWidth: 3,
        borderColor: "tomato",
        borderRadius: 6,
      }}
    >
      <CardMedia
        component="img"
        alt="project"
        height={300}
        image={`${imageUrl}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className="theme-text md:text-2xl text-md">{projectName}</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        <a
          href={projectLiveUrl}
          target="_blank"
          rel="noopener"
          title="Live URL"
        >
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "#4e0eff", fontWeight: "600", borderColor: "#4e0eff" }}
          >
            <DesktopWindowsRoundedIcon
              sx={{ color: "#4e0eff", marginRight: 2 }}
            />
            <span>Live</span>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
