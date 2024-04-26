import React from "react";
import { Grid } from "@chakra-ui/react";
import RoomSkeleton from "../components/RoomSkeleton";
import { useQuery } from "@tanstack/react-query";
import Room from "../components/Room";
import { getRooms } from "../api";
import { IRoomList } from "../types";

export default function Home() {
    const { isLoading, data } = useQuery<IRoomList[]>({
        queryKey: ["rooms"],
        queryFn: getRooms,
    });
    return (
        <Grid
            mt={10}
            px={{
                base: 10,
                md: 20,
                lg: 40,
            }}
            rowGap={8}
            columnGap={4}
            templateColumns={{
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
                "2xl": "repeat(5, 1fr)", // 숫자를 넣으려면 string형으로 넣어야 함
            }}
        >
            {/* {[1, 2, 3, 4, 5].map(index => (
        <Room key={index} />
      ))} */}
            {isLoading ? (
                <>
                    <RoomSkeleton />
                </>
            ) : null}
            {data?.map((room) => (
                <Room
                    key={room.pk}
                    pk={room.pk}
                    imageUrl={room.photos[0].file}
                    name={room.name}
                    rating={room.rating}
                    city={room.city}
                    country={room.country}
                    price={room.price}
                />
            ))}
        </Grid>
    );
}
