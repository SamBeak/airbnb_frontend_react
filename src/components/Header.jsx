import React from 'react';
import { HStack, Box, IconButton, Button, useDisclosure } from '@chakra-ui/react';
import { FaAirbnb, FaMoon } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function Header() {
    const { isOpen:isLoginOpen, onOpen:onLoginOepn, onClose:onLoginClose} = useDisclosure();
    const { isOpen:isSignupOpen, onOpen:onSignupOepn, onClose:onSignupClose} = useDisclosure();

  return (
    <HStack justifyContent={"space-between"} px={5} py={10} borderBottomWidth={1}>
        <Box color="red.500">
            <FaAirbnb size={"38"} />
        </Box>
        <HStack spacing={2}>
            <IconButton variant={"ghost"} aria-label='Toggle dark mode ' icon={<FaMoon />} />
            <Button onClick={onLoginOepn}>Log in</Button>
            <Button onClick={onSignupOepn} colorScheme={"red"}>Sign up</Button>
        </HStack>
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </HStack>
  )
}
