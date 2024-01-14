"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { removeTodo } from "@/redux/features/todo.slice";
import { addTodoLoading } from "@/redux/actions/todo.action";
import Image from "next/image";
import twitterIcon from "../../public/next.svg";
const App = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todoSlice.todos);

  const AddTodo = () => {
    // dispatch(addTodo({ name: "aman", description: "Hello" }));
    dispatch(addTodoLoading());
  };

  return (
    <>
      <div onClick={AddTodo}>Add todos</div>
      {todos?.map((item) => {
        return (
          <div
            onClick={() => dispatch(removeTodo(item.id))}
            key={Math.random()}
          >
            <p>{item.name}</p>
            <div>{item.description}</div>
            <div>{item.id}</div>
            <Image
              src={twitterIcon}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        );
      })}
    </>
  );
};

export default App;
