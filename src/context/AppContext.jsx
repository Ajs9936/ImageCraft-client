/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate();

    const loadCreditData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers: {token}})
            if(data.success){
                setCredit(data.credit)
                setUser(data.user)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message || "Failed to fetch user data")
        }
    }

    const generateImage = async (prompt) => {
        try {
            
            const {data} = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})

            if(data.success){
                loadCreditData()
                return data.resultImage
            } else {
                toast.error(data.message)
                loadCreditData()
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }

        } catch (error) {
            // If the server returned a non-2xx response, axios throws and the response
            // is available on error.response. Inspect it so we can show the server
            // message, refresh credit data and redirect when the balance is zero.
            const respData = error?.response?.data
            if (respData) {
                toast.error(respData.message || error.message || "Request failed")
                // refresh credit and user data in the UI
                loadCreditData()
                // redirect to buy page when server indicates credit balance is zero
                if (respData.creditBalance === 0) {
                    navigate('/buy')
                }
            } else {
                // Fallback for network/other errors without a server response
                toast.error(error.message || "Failed to fetch user data")
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    useEffect(() => {
        if(token){
            loadCreditData()
        }
    },[token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditData, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider