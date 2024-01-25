import React from "react";
import TodoItem from "./TodoItem";
import Error from "./Error";
export default function TodoList({todolist}) {
  if(todolist.length==0)
  {
    return(
      <Error/>
    )
  }
  else{

  
  return (
  
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col-2">S.No</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>

          {
          todolist.map((item, index)=>{
            return <TodoItem  todo={item} indx={index} />

          })}
          
          
        </tbody>
      </table>
    </div>
  );
        }
}