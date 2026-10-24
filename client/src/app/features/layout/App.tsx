import { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, CssBaseline, List, ListItem, ListItemText, Typography } from '@mui/material';
import Navbar from './Navbar';
import ActivityDashboard from '../Dashboard/ActivityDashboard';

function App() {
  const title= "Welcome to Reactivities";
  const [activities,setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5188/api/activities')
      .then(response => setActivities(response.data))
      
  }, []);
  return (
    <>
    <CssBaseline />
    <Navbar />
   
      <Typography variant="h1" >
        {title}
      </Typography>
  <Container maxWidth='xl' sx ={{ mt: 3}}>
    <ActivityDashboard activities={activities} />
    </Container>
    </>
  )
}

export default App
