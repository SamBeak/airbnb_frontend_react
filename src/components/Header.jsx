import React from 'react';
import { HStack, Box, IconButton, Button, useDisclosure } from '@chakra-ui/react';
import { FaAirbnb, FaMoon } from 'react-icons/fa';
import LoginModal from './LoginModal';

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
  )
}
