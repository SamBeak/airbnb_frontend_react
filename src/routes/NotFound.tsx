import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <VStack bg={"gray.100"} justifyContent={"center"} minH={"100vh"} >
        <Heading>Page not found</Heading>
        <Text>Sorry, we couldn't find the page you were looking for.</Text>
        <Link to="/">
          <Button colorScheme={"blackAlpha"} variant={"solid"}>Go Home &rarr;</Button>
        </Link>
    </VStack>
  )
}
