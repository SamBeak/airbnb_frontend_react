import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import {
    Box,
    Grid,
    Heading,
    Skeleton,
    Image,
    GridItem,
    HStack,
    VStack,
    Text,
    Avatar,
    Container,
    SkeletonCircle,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
    const { roomPk } = useParams(); // useParams는 url에 있는 모든 파라미터를 가져다 준다.
    const { isLoading, data } = useQuery<IRoomDetail>({
        queryKey: [`rooms`, roomPk], // 쿼리 키는 배열로 넘겨준다. 첫번째 요소는 쿼리 이름, 두번째 요소는 쿼리 파라미터
        queryFn: getRoom,
    });
    const { isLoading: isReviewLoading, data: reviewsData } = useQuery<IReview[]>({
        queryKey: [`rooms`, roomPk, `reviews`],
        queryFn: getRoomReviews,
    });
    return (
        <Box
            mt={10}
            px={{
                base: 10,
                md: 20,
                lg: 40,
            }}
        >
            <Skeleton width={"25%"} height={"43px"} isLoaded={!isLoading}>
                <Heading>{data?.name}</Heading>
            </Skeleton>
            <Grid
                mt={5}
                rounded={"xl"}
                overflow={"hidden"}
                gap={3}
                height="60vh"
                templateRows={"1fr 1fr"}
                templateColumns={"repeat(4, 1fr)"}
            >
                {[0, 1, 2, 3, 4].map((index) => (
                    <GridItem
                        colSpan={index === 0 ? 2 : 1}
                        rowSpan={index === 0 ? 2 : 1}
                        overflow={"hidden"}
                        key={index}
                    >
                        <Skeleton isLoaded={!isLoading} w="100%" h="100%">
                            <Image w="100%" h="100%" objectFit={"cover"} src={data?.photos[index].file} />
                        </Skeleton>
                    </GridItem>
                ))}
            </Grid>
            <HStack width={"45%"} mt={10} justifyContent={"space-between"}>
                <VStack alignItems={"flex-start"}>
                    <Skeleton height={"30px"} isLoaded={!isLoading}>
                        <Heading fontSize={"2xl"}>House hosted by {data?.owner.name}</Heading>
                    </Skeleton>
                    <Skeleton height={"30px"} isLoaded={!isLoading}>
                        <HStack justifyContent={"flex-start"} w="100%">
                            <Text>
                                {data?.toilets} toilet{data?.toilets === 1 ? "" : "s"}
                            </Text>
                            <Text>•</Text>
                            <Text>
                                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
                            </Text>
                        </HStack>
                    </Skeleton>
                </VStack>
                <Avatar size={"lg"} name={data?.owner.name} src={data?.owner.avatar} />
            </HStack>
            <Box mt={10}>
                <Skeleton mb={"5"} width={"15%"} height={"30px"} isLoaded={!isReviewLoading}>
                    <Heading fontSize={"2xl"} mb={"5"}>
                        <HStack>
                            <FaStar />
                            <Text>{data?.rating}</Text>
                            <Text>•</Text>
                            <Text>
                                {reviewsData?.length} review{reviewsData?.length === 1 ? "" : "s"}
                            </Text>
                        </HStack>
                    </Heading>
                </Skeleton>
                <Container mt={16} maxW={"container.lg"} marginX="none">
                    <Grid gap={10} templateColumns={"1fr 1fr"}>
                        {isReviewLoading ? (
                            <VStack alignItems={"flex-start"}>
                                <HStack>
                                    <SkeletonCircle size={"12"} isLoaded={!isReviewLoading}></SkeletonCircle>
                                    <VStack spacing={0} alignItems={"flex-start"}>
                                        <Skeleton w={40} height={"30px"} mb={1} isLoaded={!isReviewLoading}></Skeleton>
                                        <Skeleton w={10} height={"30px"} isLoaded={!isReviewLoading}>
                                            <HStack spacing={1}>
                                                <FaStar size={"12px"} />
                                                <Text></Text>
                                            </HStack>
                                        </Skeleton>
                                    </VStack>
                                </HStack>
                                <Skeleton w={"50%"} height={"30px"} isLoaded={!isReviewLoading}></Skeleton>
                            </VStack>
                        ) : null}
                        {reviewsData?.map((review, index) => (
                            <VStack alignItems={"flex-start"} key={index}>
                                <HStack>
                                    <Avatar size={"md"} name={review.user.name} src={review.user.avatar} />
                                    <VStack spacing={0} alignItems={"flex-start"}>
                                        <Heading fontSize={"md"}>{review.user.name}</Heading>
                                        <HStack spacing={1}>
                                            <FaStar size={"12px"} />
                                            <Text>{review.rating}</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <Text>{review.payload}</Text>
                            </VStack>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
