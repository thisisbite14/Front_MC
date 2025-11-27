// src/api.js

// 1. ดึง URL จาก Vercel (ถ้าไม่มีให้ใช้ localhost)
// *สำคัญ* ไม่ต้องใส่ /api ต่อท้ายตรงนี้ เพราะในหน้าอื่นคุณใส่ /api ไว้แล้ว
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// 2. ส่งออกในรูปแบบ Object เหมือนเดิม เพื่อให้ Navbar.jsx และ Login.jsx ใช้งานได้
export default {
  BASE: BACKEND_URL,
  withCreds: {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  },
};