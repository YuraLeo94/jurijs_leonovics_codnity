import axios from "axios";
import { API_PATH } from "../constants";

/**
 * Generic fetch function to retrieve resources by an array of IDs.
 * @param resource - The API resource path (e.g. "albums", "users").
 * @param ids - An array of IDs to query.
 * @returns A promise resolving to an array of typed data.
 */
export const fetchByIds = async <T>(
  resource: string,
  ids: number[]
): Promise<T[]> => {
  const query = ids.map((id) => `id=${id}`).join("&");
  const response = await axios.get<T[]>(`${API_PATH}/${resource}?${query}`);
  return response.data;
};

/**
 * Generic fetch function to retrieve paginated data from a resource.
 * @param resource - The API resource path (e.g. "posts", "photos").
 * @param page - The page number for pagination.
 * @param limit - Optional limit per page (default is 20).
 * @returns A promise resolving to an array of typed data.
 */
export const fetchPaginatedData = async <T>(
  resource: string,
  page: number,
  limit = 20
): Promise<T[]> => {
  const response = await axios.get<T[]>(
    `${API_PATH}/${resource}?_limit=${limit}&_page=${page}`
  );
  return response.data;
};
