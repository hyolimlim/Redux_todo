import React, { useState } from 'react';
import nextId from 'react-id-generator';
import Todolist from './Todolist.js';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/module/todos.js';
import styled from 'styled-components';

const Home = () => {
  //dispatch선언
  const dispatch = useDispatch();

  //id만들기
  const id = nextId();

  //todo입력된거 담을 변수
  const [inputs, setInputs] = useState({
    id: 0,
    title: '',
    content: '',
    isDone: false,
  });

  //비구조화 할당
  const { title, content } = inputs;

  //------핸들러들------

  //입력된 걸로->todo변수 수정
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: [value],
    });
  };

  //todo변수 dispatch 통해 전송 & input 초기화
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({ ...inputs, id }));

    setInputs({
      id: 0,
      title: '',
      content: '',
      isDone: false,
    });
  };

  return (
    <Warp>
      <Container>
        <Title>My Todolist</Title>
        <InputBox>
          <input
            placeholder="제목"
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
          <input
            placeholder="내용"
            type="text"
            name="content"
            value={content}
            onChange={onChange}
          />
          <button onClick={onSubmit}>입력</button>
        </InputBox>
        <Todolist></Todolist>
      </Container>
    </Warp>
  );
};

const Warp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1200px;
`;

const Title = styled.div`
  color: #b080e8;
  font-size: 50px;
  font-weight: bold;
`;

const InputBox = styled.div`
  background-color: #fffaf2;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 30px;
`;

const input = styled.input``;

export default Home;
