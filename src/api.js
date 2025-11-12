import axios from 'axios';

const api = axios.create({
  // 1. เปลี่ยนจาก 'localhost' มาใช้ Environment Variable
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  
  // 2. (สำคัญมาก) เพิ่มบรรทัดนี้เข้าไป
  withCredentials: true, 
});

export default api;