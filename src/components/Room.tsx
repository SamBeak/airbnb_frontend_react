import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps {
    pk: number;
    imageUrl: string;
    name: string;
    rating: number;
    city: string;
    country: string;
    price: number;
}

export default function Room({ pk, imageUrl, name, rating, city, country, price }: IRoomProps) {
    const gray = useColorModeValue("gray.600", "gray.300");
    return (
        <Link to={`/rooms/${pk}`}>
            <VStack alignItems={"flex-start"}>
                <Box position={"relative"} overflow={"hidden"} rounded={"2xl"} mb={3}>
                    <Image minH={280} src={imageUrl} />
                    <Button
                        variant={"unstyled"}
                        cursor={"pointer"}
                        position={"absolute"}
                        top={0}
                        right={0}
                        color={"white"}
                    >
                        <FaRegHeart size={"20px"} />
                    </Button>
                </Box>
                <Box>
                    <Grid gap={2} templateColumns={"6fr 1fr"}>
                        <Text as={"b"} noOfLines={1} fontSize={"md"}>
                            {name}
                        </Text>
                        <HStack
                            _hover={{
                                color: "red.400",
                            }}
                            spacing={1}
                            justifyContent={"flex-end"}
                        >
                            <FaStar size={15} />
                            <Text>{rating}</Text>
                        </HStack>
                    </Grid>
                    <Text fontSize={"sm"} color={gray}>
                        {city}, {country}
                    </Text>
                </Box>
                <Text fontSize={"sm"} color={gray}>
                    <Text as="b">{price}</Text> / night
                </Text>
            </VStack>
        </Link>
    );
}
