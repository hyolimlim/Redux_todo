import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailTodo } from "../redux/module/todos.js";

const Detail = () => {

  //dispatch 선언
  const dispatch = useDispatch();

  //useSlector 조회
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailTodo(id));}, [dispatch, id])


    return (
        <Warp>
            <button onClick={()=>{ navigate('/') }}>뒤로</button>
           <div>ID :{todo.id}</div>
            <h1>{todo.title}</h1>
            <h2>{todo.content}</h2>
        </Warp>
    );
};

const Warp = styled.div`
width:300px;
padding:3px;
background-color:#fffaf2;
border-radius:10px;
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
text-align:center;
`;

export default Detail;