import React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { FaAirbnb } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Box>
      <HStack justifyContent={"space-between"} px={5} py={10} borderBottomWidth={1}>
        <Box color="red.500">
          <FaAirbnb size={"38"} />
        </Box>
        <HStack spacing={2}>
          <Button>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
      </HStack>
    <Outlet />
    </Box>
  )
}