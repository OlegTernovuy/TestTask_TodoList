import axios, { AxiosResponse } from "axios";

import { ITodoList } from "../types";

const BASE_URL = "http://localhost:4200";

export const getTodoList = async (): Promise<ITodoList[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/todo`);
    if (res.status !== 200) {
      throw new Error("Something went wrong");
    }

    return res.data as ITodoList[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const addTodo = async (
  title: string,
  status: string
): Promise<AxiosResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/todo`, {
      title: title,
      status: status,
    });

    if (res.status !== 201) {
      throw new Error("Something went wrong");
    }
    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const updateTodo = async (
  id: number,
  status: string
): Promise<AxiosResponse> => {
  try {
    const res = await axios.patch(`${BASE_URL}/todo/${id}`, {
      status: status,
    });

    if (res.status !== 200) {
      throw new Error("Something went wrong");
    }

    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteTodo = async (id: number): Promise<AxiosResponse> => {
  try {
    const res = await axios.delete(`${BASE_URL}/todo/${id}`);

    if (res.status !== 200) {
      throw new Error("Something went wrong");
    }

    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
