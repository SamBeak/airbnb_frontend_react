import React from 'react';
import { HStack, Box, IconButton, Button, useDisclosure, useColorMode, LightMode, useColorModeValue, Stack } from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function Header() {
    const { isOpen:isLoginOpen, onOpen:onLoginOepn, onClose:onLoginClose} = useDisclosure();
    const { isOpen:isSignupOpen, onOpen:onSignupOepn, onClose:onSignupClose} = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200"); // 첫 번째 인자는 light 모드일 때의 값, 두 번째 인자는 dark 모드일 때의 값
    

  return (
    <Stack 
        justifyContent={"space-between"} 
        px={40} 
        py={5} 
        alignItems={"center"} 
        direction={{
            sm: "column",
            md: "row",  
        }}
        spacing={{
            sm: 3,
            md: 0,
        }}
        borderBottomWidth={1}>
        <Box color={logoColor}>
            <FaAirbnb size={"38"} />
        </Box>
        <HStack spacing={2}>
            <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label='Toggle dark mode ' icon={colorMode === "light" ? <FaMoon /> : <FaSun />} />
            <Button onClick={onLoginOepn}>Log in</Button>
            <LightMode>
                <Button onClick={onSignupOepn} colorScheme={"red"}>Sign up</Button>
            </LightMode>
        </HStack>
        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </Stack>
  )
}
