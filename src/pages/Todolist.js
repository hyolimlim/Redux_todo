import React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo,toggleTodo } from "../redux/module/todos.js";
import { Link } from "react-router-dom";

function Todolist() {

  //dispatch 선언
  const dispatch = useDispatch();

  //useSlector 조회
  const todos = useSelector((state) => state.todos.todos);

  //delete
  const onRemove = (id) => {
    dispatch(removeTodo(id));
  };

  //toggle
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };


  return (
    <div>

      <h1>진행 중</h1>
      {todos.map((todo) => {
        if(todo.isDone===false)
        return (
          <Nodone>
          <div className='완료' key={todo.id}>
            <h2>{todo.title}</h2> <p>{todo.content}</p>
            <Link to={`/${todo.id}`} key={todo.id}>
              <div>상세보기</div>
            </Link>
            <button className='삭제버튼' onClick={() => onRemove(todo.id)}>삭제</button>
            <button className='완료버튼' onClick={() => onToggle(todo.id)}>완료</button>
          </div>
          </Nodone>
        );})}


      <h1>완료</h1>
      {todos.map((todo) => {
        if(todo.isDone===true)
        return (
          <Done>
          <div key={todo.id}>
            <h2>{todo.title}</h2> <p>{todo.content}</p>
            <Link to={`/${todo.id}`} key={todo.id}>
              <div>상세보기</div>
            </Link>
            <button className='삭제버튼' onClick={() => onRemove(todo.id)}>삭제</button>
            <button className='취소버튼' onClick={() => onToggle(todo.id)}>취소</button>
            </div>
          </Done>
        );})}

    </div>)
    
}


const Done = styled.div`
background-color:#fffaf2;
border-radius:10px;
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
width:300px;
height:200px;
display:flex;
justify-content:center;
align-items:center;
padding:5px;
margin:10px;
`;

const Nodone = styled.div`
background-color:#fffaf2;
border-radius:10px;
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
width:300px;
height:200px;
display:flex;
justify-content:center;
align-items:center;
padding:5px;
margin:10px;
`;


export default Todolist