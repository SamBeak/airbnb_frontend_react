import React from 'react';
import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

export default function Room() {
    const gray = useColorModeValue("gray.600", "gray.300")
  return (
    <VStack alignItems={'flex-start'}>
        <Box position={"relative"} overflow={"hidden"} rounded={"2xl"} mb={3}>
        <Image minH={280} src="https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/241a9728-36b6-4c6b-9277-e6d05745cea6.jpeg?im_w=720" />
        <Button variant={"unstyled"} cursor={"pointer"} position={"absolute"} top={0} right={0} color={"white"}>
            <FaRegHeart size={"20px"} />
        </Button>
        </Box>
        <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} noOfLines={1} fontSize={"md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <HStack 
                _hover={{
                    color: "red.400"
                }} 
                spacing={1} 
                justifyContent={'flex-end'}
            >
                <FaStar size={15} />
                <Text>5.0</Text>
            </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
            Seoul, S. Korea
        </Text>
        </Box>
        <Text fontSize={"sm"} color={gray}>
        <Text as="b">$72</Text> / night
        </Text>
    </VStack>
  )
}
