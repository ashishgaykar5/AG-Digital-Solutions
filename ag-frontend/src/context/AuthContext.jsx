import React, {
    useEffect,
    useState
} from "react";

import { getCurrentUser } from "../services/api";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [loading, setLoading] = useState(true);


    // Check logged-in user when app starts

    useEffect(() => {

        const checkAuth = async () => {

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const data = await getCurrentUser();

                setUser(data.user);

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

            } catch (error) {

                console.log(
                    "Authentication failed:",
                    error.message
                );

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                setToken(null);
                setUser(null);

            } finally {

                setLoading(false);

            }
        };

        checkAuth();

    }, [token]);


    const login = (userData, jwtToken) => {

        localStorage.setItem(
            "token",
            jwtToken
        );

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setToken(jwtToken);
        setUser(userData);
    };


    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                loading,
                isAuthenticated: !!token && !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};