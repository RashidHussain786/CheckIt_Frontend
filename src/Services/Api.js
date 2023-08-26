import axios from "axios";

const baseUrl="http://localhost:8080";

const api = axios.create({
 baseURL:baseUrl,
 headers:{
    'Content-Type':'application/json',
 },
});

// Add an interceptor to include the token in the headers of every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  const authService={
    signup: async(User)=>{
        try{
            const response=await api.post("/user/register",User);
            return response.data;
        }catch(error) {
          throw error;
        }
    },

    login: async(loginRequest)=>{
        try{
           const response = await api.post("/user/login",loginRequest);
           return response.data;
        }catch(error){
           throw error;
        }
    },
  };

  const taskManagerService={
    getTask: async()=>{
        try{
           const response= await api.get("/tasks/");
           return response.data;
        }catch(error){
            throw error;
        }
    },
    getTaskById :async(id)=>{
       try{
          const response= await api.get(`/tasks/${id}`);
          return response.data;
       }catch(error){
        throw error;
       }
    },
    createTask :async(task)=>{
        try{
          const response= await api.post("/tasks/createTask",task);
          return response.data;
        }catch(error){
            throw error;
        }
    },
    deleteTask:async(id)=>{
        try{
           const response = await api.delete( `/tasks/deleteTask${id}`);
           return response.data;
        }catch(error){
            throw error;
        }
    },
    updateTask:async(id, task)=>{
        try{
          const response= await api.put(`/tasks/updateTask${id}`,task);
          return response.data;
        }catch(error){
            throw error;
        }
    },
  };
  export {authService,taskManagerService};