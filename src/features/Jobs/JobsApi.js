import axiosInstance from "../../componet/util/axios";

export const getJobs = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};
export const postJobs = async (data) => {
  const response = await axiosInstance.post("/jobs", data);
  return response.data;
};
export const editJobs = async (id, data) => {
  const response = await axiosInstance.put(`/jobs/${id}`, data);
  return response.data;
};
export const deleteJobs = async (id) => {
  const response = await axiosInstance.delete(`/jobs/${id}`);
  return response.data;
};
