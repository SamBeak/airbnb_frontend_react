import React from 'react';
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function RoomSkeleton() {
  return (
    <Box>
        <Skeleton height={280} rounded={"2xl"} mb={6} />
        <SkeletonText w={"70%"} noOfLines={3} />
    </Box>
  )
}
