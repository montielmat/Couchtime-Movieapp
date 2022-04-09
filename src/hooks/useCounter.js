import {useState} from "react";

export const useCounter = (initialCount=1) => {

const [count, setCount] = useState(initialCount)

const nextPage = ()=>{
setCount(count+1)
window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });

}

const prevPage = ()=>{
setCount(count-1)
window.scrollTo({
    top: 0, 
    behavior: 'smooth'
});
}

return{count,prevPage,nextPage}
}
