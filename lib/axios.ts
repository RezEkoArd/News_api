import axios from "axios"
import { error } from "console";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
    baseURL : baseUrl,
    headers : {
        'Content-Type' : "application/json"
    }
});

//Func ambil access Token yang di cookies

export function setupInterceptor() {
    const router = useRouter();

    axiosInstance.interceptors.request.use(
        async (config:any) => {
            if (typeof window !== 'undefined'){
                const token = getCookie('accessToken');

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            }
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                deleteCookie('accessToken');

                router.push('/login');
            }

            return Promise.reject(error);
        }
    );
}

export default axiosInstance;