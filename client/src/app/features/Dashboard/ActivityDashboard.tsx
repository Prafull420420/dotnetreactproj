// FIX: In MUI v7+ / v9, `Grid2` was renamed back to `Grid` (and still supports the `size` prop)
import { Grid, List, ListItem, ListItemText } from "@mui/material";

type Props = {
  activities: Activity[];
};

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid container>
      <Grid size={3}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText primary={activity.title} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}