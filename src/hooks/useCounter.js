import {useState,useMemo} from "react";

export const useCounter = (initialState=1) => {

const [page, setPage] = useState(initialState)

const memoVal=useMemo(() => page, [page,setPage])



const nextPage = ()=>{
setPage(...page,page+1)
}

const prevPage = ()=>{
setPage(...page,page-1)
}

return{page,prevPage,nextPage}
}
