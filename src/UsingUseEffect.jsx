import { useEffect, useState} from 'react';


const StopWatch = () =>{
    const [time, setTime] = useState(0);
    useEffect(()=>{
        
        const interval = setInterval(() => {
         setTime((time) => time+1)

    }, 1000);
    return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts
    }, [])
   

    return(
        <div className='mt-5'>{time}</div>

    )

}



const UsingUseEffect = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {

    fetch("/names.json")
    .then(response => response.json())
    .then(data => setNames(data))
    }, []); // Empty dependency array means this effect runs once when the component mounts
    console.log(names);

    
    const [selectedNameDetails, setSelectedNameDetails] = useState(null)

     const onSelectedNameChange = (name) =>{
           fetch(`/${name}.json`)
    .then(response => response.json())
    .then(data => setSelectedNameDetails(data))
    
    }
 

  return (
    <div>
        <div className='text-lg mt-10 ml-2 sm:ml-5'>
            {names.map((name, index) => (
                
                <button
                 onClick={() => onSelectedNameChange(name)} 
                 key={index} className="border p-2 m-2 mb-4">
                    {name}
                </button>
                
            ))}

            <ul>{JSON.stringify(selectedNameDetails)}</ul>
            <StopWatch />
        </div>
        <div className='mt-10 ml-2 sm:ml-5 text-lg'>
            <h2>Fetches names using <span className='text-green-600 font-bold'>useEffect</span> once by having an empty dependency.</h2>
            <h2>Stop watch also created using <span className='text-green-600 font-bold'>useEffect</span> with an empty dependency and updating the number each second </h2>
        </div>
    </div>
  )
}

export default UsingUseEffect