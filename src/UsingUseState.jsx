import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10);

    const addOne = (n) => {
        setCount(count + n);
    }
  return (
    <div className='flex gap-2  mt-10 ml-2 sm:ml-5'> 
        <div className='flex flex-col w-sm'>
        <button>count : {count}</button>
        <button onClick={() => addOne(5)} className='border bg-blue-200 p-2'> increment </button>
        </div>
        <div className='align-center self-center'>
          <p>Separate instances used to show useState's behaviour</p>
        </div>
    </div>
  )
}

const NameList = () => {
    const [list, setList] = useState(['Alice', 'Bob', 'Charlie']);
    const [name, setName] = useState('');
    
    const addName = () => {
        setList([...list, name]);
        setName('');
    }

    return (
        <div className='flex flex-col gap-2 ml-2 sm:ml-5 mt-8'>
            <h3 className='font-bold'>Names List</h3>
            <ul>
                {list.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
                <li className='text-gray-500'>Mounted Name: {name}</li>
            </ul>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a name" 
                className='border p-1 max-w-sm'  
            />
            <button className='bg-blue-300 max-w-sm' onClick={addName}> Add Name</button>
          
        </div>
    );
}

const UsingUseState = () => {
    
  return (
    <div className='flex flex-col gap-2'> 
      <Counter /> 
        <Counter /> 
        <Counter /> 
        <NameList />
    </div>

  )
}

export default UsingUseState