type Activity = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string; // or Date if parsed into a JS Date object
  city: string;
  venue: string;
  isCanceled: boolean;
  longitude: number;
  latitude: number;
}