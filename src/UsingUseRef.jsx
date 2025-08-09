import {useRef, useState} from 'react'
const UsingUseRef = () => {
    const inputRef = useRef(null)
    const idRef = useRef(1)

    const [names, setNames] = useState([
        {id: idRef.current++, name:"john"},
        {id: idRef.current++, name:"jane"},
    ]);


    
    const onAddName = () =>{
        setNames([...names, {
            id:idRef.current++,
            name:inputRef.current.value}]);
        inputRef.current.value= '';
    }

  return (
    <div>
        <input 
        className='border mr-2 p-1'
        type="text"
        placeholder='name'
        ref={inputRef}
        />
        <button className='bg-blue-200 p-1' onClick={onAddName}>addName</button>
        <div className='mt-5'>
            <ul>
              {names.map((name) => (
                        <li key={name.id}>{name.id}-{name.name}</li>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default UsingUseRef