import React from 'react';
import { Box, Button, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Root() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Box>
      <HStack justifyContent={"space-between"} px={5} py={10} borderBottomWidth={1}>
        <Box color="red.500">
          <FaAirbnb size={"38"} />
        </Box>
        <HStack spacing={2}>
          <IconButton variant={"ghost"} aria-label='Toggle dark mode ' icon={<FaMoon />} />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </HStack>
    <Outlet />
    </Box>
  )
}