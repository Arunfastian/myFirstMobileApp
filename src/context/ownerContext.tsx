import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect,useContext,createContext, Children } from "react";

const OwnerContext = createContext<any | null>(null);
export const useOwnerContext = () => useContext(OwnerContext);

const OwnerContextProvider = ({children}:any) => {
    const [owner,setOwner] = useState({
        name: 'Arun Jai',
        studentId: '19K-1437',
        section: '8A SMD'
    })
    const [totalAmount,setTotalAmount] = useState(200);
    const [stars,setStars] = useState(1);
    
    useEffect(()=>{
        AsyncStorage.getItem("App_Rating").then(value => {
            console.log({value});
            if(value) setStars(Number(value));
        });
    },[])

    const updateStars = (newStars:number) => {
        if(newStars){
            setStars(newStars);
            AsyncStorage.setItem("App_Rating",newStars.toString());    
        }
    }

    return (
        <OwnerContext.Provider value={{owner,stars,updateStars, totalAmount, setTotalAmount}}>
            {children}
        </OwnerContext.Provider>
    )
}

export default OwnerContextProvider;