import {useState} from "react";

export const useCounter = (initialCount=1) => {

const [count, setCount] = useState(initialCount)

const nextPage = ()=>{
setCount(count+1)
}

const prevPage = ()=>{
setCount(count-1)
}

return{count,prevPage,nextPage}
}
