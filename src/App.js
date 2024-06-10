/* eslint-disable */

//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, titleChange] = useState(['남자 코트 추천', '맛집 추천', '리액트독학']);

  let [logo, setLogo] = useState('ReactBlog');
  
  // STATE 쓰는 이유
  // 일반 변수는 갑자기 변경되면 HTML에 자동으로 반영 안됨
  // STATE는 갑자기 변경되면 HTML이 자동 랜더링 됨

  // let num = [1, 2];  
  // Destructuring 문법
  // let [a, c] = [1, 2];

  //let a = num[0];
  //let c = num[1];
  let [좋아요, 좋아요변경] = useState(0);

  function plusLike() {
    좋아요변경(좋아요+1);
  }

  function changeTitle() {
    // ... 은 array 또는 object를 새로 만들라는 문법
    // 가르키는 화살표의 위치가 바뀜 
    let copy = [...글제목];
    copy[0] = '여자코트 추천';
    titleChange(copy);
  }

  function sort() {
    let copy = [...글제목].sort();
    titleChange(copy);
  }

  return (
    <div className="App">

      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>{logo}</h4>
      </div>
      <button type="button" onClick={sort}>가나다순 정렬</button>
      <button type='button' onClick={changeTitle}>제목 변경</button>
      
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={plusLike}>❤️</span> {좋아요} </h4>
        <p>5월 7일</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 7일</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>5월 7일</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

// const 에러가 날 시 에러 메세지 보여줌
// const Modal = () => {}

function Modal() {
  return (
    <div ckassName="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
