import React from 'react';
import { Grid } from '@chakra-ui/react';
import RoomSkeleton from '../components/RoomSkeleton';
import Room from '../components/Room';

interface IPhotos {
  pk: number;
  file: string;
  description: string;
}
interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhotos[];
}

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [rooms, setRooms] = React.useState<IRoom[]>([]);
  const fetchRooms = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/rooms/");
    const json = await response.json();
    setRooms(json);
    setIsLoading(false);
  };
  React.useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <Grid mt={10} px={{
      base: 10,
      md: 20,
      lg: 40,
    }} rowGap={8} columnGap={4} templateColumns={{
      sm : "1fr",
      md : "repeat(2, 1fr)",
      lg : "repeat(3, 1fr)",
      xl : "repeat(4, 1fr)",
      "2xl" : "repeat(5, 1fr)" // 숫자를 넣으려면 string형으로 넣어야 함
    }}>
      {/* {[1, 2, 3, 4, 5].map(index => (
        <Room key={index} />
      ))} */}
      { 
        isLoading ? 
        <>
          <RoomSkeleton />
        </> : 
        rooms.map(
          room => <Room
                      imageUrl={room.photos[0].file}
                      name = {room.name}
                      rating = {room.rating}
                      city = {room.city}
                      country = {room.country}
                      price = {room.price}
                  />
        ) 
      }
    </Grid>
  )
}
