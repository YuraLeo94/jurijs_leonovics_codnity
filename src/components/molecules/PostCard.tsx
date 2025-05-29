import { Card, CardContent, Typography } from "@mui/material";
import { postCardLabels } from "../../constants";
import { JSX } from "react";

const PostCard = ({
  title,
  body,
  authorName,
}: {
  title: string;
  body: string;
  authorName: string;
}): JSX.Element => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography className="cdnt-bold" sx={{ marginBottom: "10px" }}>
        {postCardLabels.authorLabel} {authorName}
      </Typography>
      <Typography className="cdnt-bold" sx={{ marginTop: "10px" }}>
        {postCardLabels.titleLabel}
      </Typography>
      <Typography variant="h6">{title}</Typography>
      <Typography
        className="cdnt-bold"
        sx={{ marginBottom: "10px", marginTop: "10px" }}
      >
        {postCardLabels.descriptionLabel}
      </Typography>
      <Typography>{body}</Typography>
    </CardContent>
  </Card>
);

export default PostCard;
