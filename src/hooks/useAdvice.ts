import { useMemo, useState } from "react";
import type { Advice } from "../types/types";
import axios from "axios";
import { AdviceSchema } from "../schema/advice-schema";

const initialState:Advice = {
    slip: {
        id: 0,
        advice: '',
    }
}

const useAdvice = () => {

    const [advice, setAdvice] = useState<Advice>(initialState);
    const [spinner, setSpinner] = useState(false);
    const [notFound, setNotFound] = useState(false);

    // consulta la api para obtener consejo
    const getAdvice = async() => {
        setAdvice(initialState);
        setSpinner(true);
        setNotFound(false);
        try {
            const url = 'https://api.adviceslip.com/advice';
            
            const response = await axios(url);
            if(response.status !== 200){
                setNotFound(true);
                return;
            }
            const data = response.data;

            const result = AdviceSchema.safeParse(data);
            console.log(result)
            if(result.success){
                setAdvice(result.data)
            }
            
            console.log(advice)
        } catch (error) {
            console.log(error)
        } finally{
            setSpinner(false)
        }
    }
    const hasAdvice = useMemo(() => advice.slip.advice ? true : false, [advice])


    return {
        getAdvice,
        advice,
        spinner,
        hasAdvice,
        notFound
    }

}

export default useAdvice;