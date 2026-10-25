// FIX: In MUI v7+ / v9, `Grid2` was renamed back to `Grid` (and still supports the `size` prop)

import ActivityList from "./ActivityList";
import ActivityDetail from "./ActivityDetail";
import Grid from "@mui/material/Grid";

type Props = {
  activities: Activity[];
};

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid container>
      <Grid size={7}>
       <ActivityList activities={activities} />
      </Grid>
       <Grid size={5}>
      {activities[0] && <ActivityDetail activity={activities[0]} />}
      </Grid>
    </Grid>
  );
}