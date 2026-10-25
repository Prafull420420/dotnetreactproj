import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activity: Activity;
};
export default function ActivityList({ activity }: Props) {
  return (
   <Card sx={{borderRadius: 3}}>
<CardMedia>
    component="img"
    src={'images/categoryImages/${activity.category}.jpg'}
</CardMedia>
<CardContent>
<Typography variant="h5">
    {activity.title}
</Typography>
 <Typography variant="subtitle1">
    {activity.date}
</Typography>
 
  <Typography variant="h5" >
    {activity.description}
</Typography>

</CardContent>
<CardActions>
 <Button color="primary">
Edit
 </Button>
  <Button color="primary">
Cancel </Button>
</CardActions>
   </Card>
  );
}