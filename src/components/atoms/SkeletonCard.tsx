import { Card, CardContent, Skeleton } from "@mui/material";
import { JSX } from "react";

const SkeletonCard = (): JSX.Element => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="rectangular" height={100} />
    </CardContent>
  </Card>
);

export default SkeletonCard;
