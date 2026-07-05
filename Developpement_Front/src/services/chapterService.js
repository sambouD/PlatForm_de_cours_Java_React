import api from "./api";

export const getAllChapters = () => api.get('/chapters') 
export const getChapterById = (id) => api.get(`/chapters/${id}`)
export const createChapter = (data) => api.post('/chapters', data)
export const updateChapter = (id, data) => api.put(`/chapters/${id}`, data)
export const deleteChapter = (id) => api.delete(`/chapters/${id}`)
