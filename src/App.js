import React , {useState , useEffect} from "react";
import Tours from './Tours'
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

function App(){
  const[loading , setLoading] = useState(true)
  const[tours, setTours] = useState("")

  const removeData = (id)=>{
    const newtours = tours.filter((tour)=> tour.id!=id)
    setTours(newtours)
  }
 const fetchData = async ()=>{
   setLoading(false);
   try{
     const response = await fetch(url)
     const tours = await data.json
     setLoading(false)
     setTours(newtour)
   }

   catch(error)
   {
     setLoading(false)
     console.log(error)

   }
 } 
useEffect = ()=>{[
 fetchData()
],[]}
  
if(Loading){
  return(
    <Loading/>
  )
}
  return(
    <main>
      <Tours tours = {tours}/>
    </main>
  )
}
export default App