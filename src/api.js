import axios from 'axios';

// สร้าง Base URL โดยเช็คว่ามี Env Var หรือไม่
// ถ้ามี (บน Vercel): ใช้ค่าจาก VITE_API_BASE_URL แล้วเติม /api ต่อท้าย
// ถ้าไม่มี (ในเครื่อง): ใช้ http://localhost:3000/api
const baseURL = import.meta.env.VITE_API_BASE_URL 
  ? `${import.meta.env.VITE_API_BASE_URL}/api`
  : 'http://localhost:3000/api';

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true, // สำคัญมาก! เพื่อให้ส่ง Cookie/Session ได้
});

export default api;