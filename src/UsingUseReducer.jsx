import { useReducer } from "react"


const UserForm = () =>{
    const [state, dispatch] = useReducer(
        (state, action) => {
            return{
                 ...state,
                ...action
            }     
        },
    {
        first: '',
        last: '',
    })

    return(
        <div className="mt-9">
            <div className="m-8 ml-0"><h2 className="text-lg">
                Sets the value of the subsequent div dynamically</h2></div>
            <input
            className="border p-2" 
            type="text"
            placeholder="first"
            value={state.first}
            onChange={(e) =>  dispatch({first: e.target.value})}
             />
            <input  
            className="ml-2 border p-2"
            type="text"
            placeholder="last"
            value={state.last}
            onChange={(e) =>  dispatch({last: e.target.value})}
             />

            <div>
                <p>{state.first}</p>
                <p>{state.last}</p>
            </div>
        </div>
    )
}

const UsingUseReducer = () => {

    //const [state, dispatch] = useReducer(reducerFunction, initialState) 

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { 
                    ...state, 
                    name: action.payload }; // update the name in the state with the payload from the action
            case 'ADD_NAME':
                return { 
                    ...state, //future proofing incase more properties are added
                    names: [...state.names, state.name],  // add the current name to the names array
                    name: '' }; // reset the name to an empty string after adding it to the list
        }
    }// Reducer function to handle actions
    , {names: [],
        name: ''});// Initial state with names array and name string


  return (
    <div className="mt-12 ml-4">
        <div className="flex gap-10 flex-wrap">
        <div className="text-lg "> <p>Demonstrates use of <span className="text-green-600 font-bold"> use reducer</span> by setting payload to target value then using an add name case to add the name to the below div </p></div>
        
        <div>
        <input 
            className="p-2 border rounded-xl mr-3"
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            placeholder="Enter a name"  
        />
        <button 
            onClick={() => dispatch({ type: 'ADD_NAME' })} 
            className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"> set name </button>
        <ul className="mb-4">
          {state.names.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
        </div>
        </div>
        <UserForm/>
    </div>
  )
}

export default UsingUseReducer