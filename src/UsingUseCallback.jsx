import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveList = ({ items, onRemove }) => {
  console.log("🔁 ExpensiveList rendered");

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item}
          <button onClick={() => onRemove(item)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

const UsingUseCallback  = () => {
  const [todos, setTodos] = useState(['Learn React', 'Master useCallback', 'Build awesome apps']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos((prev) => [...prev, newTodo]);
      setNewTodo('');
    }
  }, [newTodo]); //we dont use useMemo here because we are not calculating a value, we are just creating a function that will be passed to a child component, the child component in this case is ExpensiveList, we want to avoid creating a new function on every render, so we use useCallback to memoize the function, it will only change if newTodo changes

  const removeTodo = useCallback((todoToRemove) => {
    setTodos((prev) => prev.filter((t) => t !== todoToRemove));
  }, []);

  const totalTodos = useMemo(() => {
    console.log("⚙️ Calculating total todos...");
    return todos.length;
  }, [todos]); //usememo because it is an expensive calculation, we only want to recalculate when todos change we dont use useCallback here because we are not passing a function to a child component, we are just calculating a value

  return (
    <div className='mt-10 flex gap-4 sm:gap-[8rem]'>
      <div className='text-lg'>
      <h2>Total Todos: {totalTodos}</h2>
      <input 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>➕ Add</button>
      <ExpensiveList items={todos} onRemove={removeTodo} />
    </div>
      <div>
        <h2 className='mt-[1rem] text-lg'>A simple todo app using <span className='text-green-600'>useCallback </span> </h2>
      </div>
    </div>

  );
};

export default UsingUseCallback ;
