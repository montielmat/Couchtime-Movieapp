import {useState} from 'react'

export const useForm = (initialState={}) => {

const [values, setValue] = useState(initialState)

const handleOnChange = ({target})=>{
setValue({
    ...values,
    [target.name]:target.value
})
}

return [values,handleOnChange]
}
