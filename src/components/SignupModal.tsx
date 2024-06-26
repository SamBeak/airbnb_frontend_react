import React from 'react';
import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from '@chakra-ui/react';
import { FaLock, FaUserAlt, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import SocialLogin from './SocialLogin';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({isOpen, onClose}: SignupModalProps) {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <VStack spacing={4}>
                <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.500">
                            <FaUserAlt />
                        </Box>
                    } />
                    <Input variant={"filled"} placeholder="Name" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.500">
                            <FaEnvelope />
                        </Box>
                    } />
                    <Input variant={"filled"} placeholder="Email" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.500">
                            <FaUserCircle />
                        </Box>
                    } />
                    <Input variant={"filled"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.500">
                            <FaLock />
                        </Box>
                    } />
                    <Input variant={"filled"} placeholder="Password" />
                </InputGroup>
            </VStack>
            <Button mt={4} colorScheme={"red"} w="100%">Log in</Button>
            <SocialLogin />
        </ModalBody>
        </ModalContent>
    </Modal>
  )
}
