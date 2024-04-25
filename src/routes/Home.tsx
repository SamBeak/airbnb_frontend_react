import React from 'react';
import { Box, Grid, Skeleton, SkeletonText } from '@chakra-ui/react';
import Room from '../components/Room';

export default function Home() {
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
      <Box>
        <Skeleton height={280} rounded={"2xl"} mb={6} />
        <SkeletonText w={"70%"} noOfLines={3} />
      </Box>
    </Grid>
  )
}
