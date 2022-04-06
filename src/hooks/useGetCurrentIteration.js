import { useGetCurrentSongQuery } from "../app/services/worlds";

function useGetCurrentIteration(id) {

    const { data, isLoading } = useGetCurrentSongQuery(id)

    function currentIteration(){
        if(isLoading){
            return false
        }else{
            return data.iterations.find(iteration => iteration.current)
        }
    }
    
    return currentIteration() 
}

export default useGetCurrentIteration;