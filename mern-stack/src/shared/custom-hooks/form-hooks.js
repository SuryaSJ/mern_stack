import  { useCallback, useReducer } from 'react';


const formReducer=(state,action)=>{

    switch(action.type){

        case 'INPUT_CHANGE':
            let isFormValid=true;
            for(const inputId in state.inputs){
                if(!state.inputs[inputId]){
                    continue;
                }
                if(inputId===action.inputId){
                    isFormValid=isFormValid && action.isValid;
                }else {
                    isFormValid=isFormValid && state.inputs[action.inputId].isValid;
                }
            }
            
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]:{
                        value: action.value,
                        isValid:action.isValid
                    }
                },
                isValid:isFormValid
            }
        case 'SET_FORMDATA':
            return {
                ...state,
                inputs:action.inputs,
                isValid:action.isValid
            }

        default:
            return state;
    }
}

export const useForm=(inputState,initialFormValidity)=>{

    const [formstate, dispatch] =useReducer(formReducer, {
        inputs:inputState,
        isValid:initialFormValidity
    });
    const inputChangeHandler=useCallback((id,value,isValid)=>{ dispatch({type: 'INPUT_CHANGE',value:value,inputId:id, isValid:isValid})},[]);

    const setFormData=useCallback((inputs,vailidity)=>dispatch({type:'SET_FORMDATA',inputs:inputs,isValid:vailidity}),[]);
    return [formstate,inputChangeHandler,setFormData];
}