export const API_BASE_URL = 'http://localhost:8000/api';
const apiRoutes = {
    doctors: {
      index: `/api/doctors`,
      show: (id) => `/api/doctors/${id}`,
      create: '/api/doctors',
      update: (id) => `/api/doctors/${id}`,
      delete: (id) => `/api/doctors/${id}`
    },
    patients: {
      index: '/api/patients',
      show: (id) => `/api/patients/${id}`,
      login :`/api/patients/login`,
      create: '/api/patients',
      update: (id) => `/api/patients/${id}`,
      delete: (id) => `/api/patients/${id}`
    },
    appointments: {
      index: '/api/appointments',
      show: (id) => `/api/appointments/${id}`,
      create: '/api/appointments',
      update: (id) => `/api/appointments/${id}`,
      delete: (id) => `/api/appointments/${id}`
    },
    cities: {
      index: '/api/cities',
      show: (id) => `/api/cities/${id}`,
      create: '/api/cities',
      update: (id) => `/api/cities/${id}`,
      delete: (id) => `/api/cities/${id}`
    },
    specialities: {
      index: '/api/specialities',
      show: (id) => `/api/specialities/${id}`,
      create: '/api/specialities',
      update: (id) => `/api/specialities/${id}`,
      delete: (id) => `/api/specialities/${id}`
    },
    schedules: {
      index: '/api/schedules',
      show: (id) => `/api/schedules/${id}`,
      create: '/api/schedules',
      update: (id) => `/api/schedules/${id}`,
      delete: (id) => `/api/schedules/${id}`
    },
    insurances: {
      index: '/api/insurances',
      show: (id) => `/api/insurances/${id}`,
      create: '/api/insurances',
      update: (id) => `/api/insurances/${id}`,
      delete: (id) => `/api/insurances/${id}`
    },
    availabilities: {
      index: '/api/availabilities',
      show: (id) => `/api/availabilities/${id}`,
      create: '/api/availabilities',
      update: (id) => `/api/availabilities/${id}`,
      delete: (id) => `/api/availabilities/${id}`
    },
    certifications: {
      index: '/api/certifications',
      show: (id) => `/api/certifications/${id}`,
      create: '/api/certifications',
      update: (id) => `/api/certifications/${id}`,
      delete: (id) => `/api/certifications/${id}`
    }
  }
  
  export default apiRoutes;

  
  