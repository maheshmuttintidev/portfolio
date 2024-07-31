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
    <Card sx={{ backgroundColor: "transparent", marginTop: 6 }}>
      <CardMedia
        component="img"
        // height="200"
        sx={{ objectFit: "contain", height: 200, width: '100%', textAlign: 'center' }}
        image={`${
          bannerImage
            ? bannerImage
            : "https://via.placeholder.com/500x200.png?text=Post+Sample+Banner"
        }`}
        alt={title}
      />
      <CardHeader
        title={<span className="theme-text">{title}</span>}
        subheader=""
      />
      <CardContent>
        <Typography variant="body1">
          <span className="theme-text">{description}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
