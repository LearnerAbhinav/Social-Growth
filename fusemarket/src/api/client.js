import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export default apiClient;

// ── Typed helpers ──────────────────────────────────────────
export const fetchStats = () => apiClient.get('/stats/').then(r => r.data);
export const fetchServices = () => apiClient.get('/services/').then(r => r.data);
export const fetchTestimonials = () => apiClient.get('/testimonials/').then(r => r.data);
export const fetchFAQs = () => apiClient.get('/faqs/').then(r => r.data);
export const fetchIndustries = () => apiClient.get('/industries/').then(r => r.data);
export const submitLead = (data) => apiClient.post('/leads/', data).then(r => r.data);
