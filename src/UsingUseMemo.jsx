import { useState } from "react";
import { useMemo } from "react"; // Import useMemo from React   
//memoization is a technique to optimize performance by caching the result of a function call and returning the cached result when the same inputs occur again, instead of recalculating the result. This is useful for expensive calculations that don't change often.

const UsingUseMemo = () => {

    const [numbers] = useState([10, 20, 30]);

    const sum = useMemo(() => numbers.reduce((accumulator, current) => accumulator + current, 0), [numbers]); // useMemo to memoize the sum of numbers, [numbers] is the dependency array, it will only recompute the sum if numbers change

    const [names] = useState(['John', 'Jane', 'Doe']);

    const sortedNames = useMemo(() => [...names].sort()) //had this been names.sort() it would have mutated the original array, so we create a new array with the spread operator and sort it

    return (
        <div >
            <p className="text-lg mb-6">{sum}</p>
            <div className="flex gap-4 text-lg">
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <ul>
                    {sortedNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
               </div>
                 <div className="mt-[10rem]"><h2 className="text-lg">Simple calculation and sorting using useMemo, <span>Visit the code linked below to see code</span></h2></div>
           
        </div>
    )
}

export default UsingUseMemo