import { useState, useEffect } from 'react'
import './App.css'
import { ListItem, ListItemText, Typography } from '@mui/material';
import List from '@mui/icons-material/List';

function App() {
  const title= "Welcome to Reactivities";
  const [activities,setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5188/api/activities')
      .then(response => setActivities(response.data))
      
  }, []);
  return (
    <>
    <div>
      <Typography variant="h1" >
        {title}
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
     </div>
    </>
  )
}

export default App
