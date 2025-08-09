import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 align-center justify-center items-center mt-20 sm:mt-30 lg:mt-35">
        <h2 className="font-bold text-4xl">This is as a short note on <span className="text-green-600">React-state-management</span> </h2>
        <div className="grid grid-cols-2 gap-4 sm:w-[40rem]">
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-state')}
        
        >UseState </button>

        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-reducer')}
        >UseReducer </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-memo')}
        >UseMemo </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-callback')}
        >UseCallback </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-effect')}   
        >UseEffect </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-ref')}   
        >UseRef </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-context')}   
        >UseContext </button>
        <button className="border p-2 bg-blue-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate('./use-reactquery')}   
        >UseReactQuery </button>
        </div>
        <div>
            <h3>please look at github code for clarification</h3>
        </div>
    </div>
  )
}

export default Home