import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getRooms = () => {
    return axiosInstance.get("rooms/").then((response) => response.data);
};

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
    const [, roomPk] = queryKey;
    return axiosInstance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
    const [, roomPk] = queryKey;
    return axiosInstance.get(`rooms/${roomPk}/reviews`).then((response) => response.data);
};

export const getMe = () => {
    return axiosInstance.get(`users/me`).then((response) => response.data);
};
