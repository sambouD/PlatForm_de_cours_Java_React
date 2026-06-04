import api from "./api";


export const getAllEnrollments = () => api.get('/enrollments')
export const getEnrollmentById = (id) => api.get(`/enrollments/${id}`)
export const createEnrollment = (data) => api.post('/enrollments', data)
export const getEnrollmentsByStudent = (id) => api.get(`/enrollments/student/${id}`)
export const getEnrollmentsByCourse = (id) => api.get(`/enrollments/course/${id}`)