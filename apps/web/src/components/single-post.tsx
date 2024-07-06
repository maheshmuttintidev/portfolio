import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

interface PostDetailTypes {
  title: string;
  description: string;
  bannerImage?: string;
}

export const PostDetail = ({
  title,
  description,
  bannerImage,
}: PostDetailTypes) => {
  return (
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardMedia
        component="img"
        height="200"
        image={`${
          bannerImage
            ? bannerImage
            : "https://via.placeholder.com/500x200.png?text=Post+Sample+Banner"
        }`}
        alt={title}
      />
      <CardHeader
        title={<span className="dark:text-white">{title}</span>}
        subheader=""
      />
      <CardContent>
        <Typography variant="body1">
          <span className="dark:text-white">{description}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
