import { signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase-config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import toast from "react-hot-toast";
import { validatedToken } from "../services/auth";

interface IAuthData {
    token: string|null;
    customer_id: string|null;
    displayName: string;
    email:string;
}

interface IAuthContext {
    isLoggedIn: boolean;
    authData: IAuthData|null;
    loading: boolean;
    loginWithGoogle: () => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext|undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [authData, setAuthData] = useState<IAuthData|null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadExistingData()
    },[])

    const loadExistingData = () => {
        setLoading(true)
        const savedAuthData = localStorage.getItem('authData');
        if(savedAuthData) {
            setAuthData(JSON.parse(savedAuthData));
            setIsLoggedIn(true);
        }
        setLoading(false)

    }

    const loginWithGoogle = async () => {
        try {
            setLoading(true)
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const user = result.user;
            const accessToken = await credential?.accessToken!;
            const token = credential?.idToken;

            const validatedTokenRes = await validatedToken({token}, accessToken)
            if(validatedTokenRes.success) {
                localStorage.setItem('authData', JSON.stringify({
                    token: validatedTokenRes.data[0].token,
                    customer_id:validatedTokenRes.data[0].customer_id,
                    displayName: user.displayName,
                    email:user.email
                }));
                setIsLoggedIn(true);
                setLoading(false)
                loadExistingData()
                toast.success('Login berhasil')
            } else {
                console.error(validatedTokenRes.error)
                toast.error('Login gagal')
            }
        } catch (error) {
            console.error("Login gagal ", error)
            setLoading(false)
            toast.error("Login gagal")
        }
    }

    const logout = async () => {
        try {
            setLoading(true)
            await signOut(auth);
            localStorage.removeItem('authData')
            setLoading(false)
            setIsLoggedIn(false)
            toast.success('Logout berhasil');
        } catch (error) {
            console.error("Logout gagal: ", error);
            toast.error('Logout gagal');
        }
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, authData, loading,loginWithGoogle, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};