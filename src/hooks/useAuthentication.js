import { useEffect } from "react";
import { loginSuccess, loginFailure } from "../redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            loginSuccess(token);
        } else {
            loginFailure();
            navigate('/login');
        }
    }, [navigate]);
};
