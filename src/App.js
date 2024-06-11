/* eslint-disable */
//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, titleChange] = useState(['남자 코트 추천', '맛집 추천', '리액트독학']);
  
  let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [text, setText] = useState("");
  
  // STATE 쓰는 이유
  // 일반 변수는 갑자기 변경되면 HTML에 자동으로 반영 안됨
  // STATE는 갑자기 변경되면 HTML이 자동 랜더링 됨

  // let num = [1, 2];  
  // Destructuring 문법
  // let [a, c] = [1, 2];

  //let a = num[0];
  //let c = num[1];

  function plusLike(i) {
    let copy = [...좋아요]; 
    copy[i] += 1;
    좋아요변경(copy);
  }

  function changeTitle() {
    // ... 은 array 또는 object를 새로 만들라는 문법
    // 가르키는 화살표의 위치가 바뀜 
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    titleChange(copy);
  }

  function sort() {
    let copy = [...글제목].sort();
    titleChange(copy);
  }

  function addText(text) {
    let copy = [...글제목];
    copy.unshift(text);
    titleChange(copy);
  }

  function onRemove(i) {
    let copy = [...글제목];
    copy.splice(i,1);
    titleChange(copy);
  }

  return (
    <div className="App">

      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>{logo}</h4>
      </div>
      <button type="button" onClick={sort}>가나다순 정렬</button>
      <button type='button' onClick={changeTitle}>제목 변경</button>
      
      {/* <div className="list">
        <h4 onClick={() => {setModal(!modal)}}>{ 글제목[0] } <span onClick={plusLike}>❤️</span> {좋아요} </h4>
        {
          modal == true ? <Modal></Modal> : null
        } 
        <p>5월 7일</p>
      </div>

      <div className="list">
        <h4 onClick={() => {setModal(!modal)}}>{ 글제목[1] }</h4>
        {
          modal == true ? <Modal></Modal> : null
        } 
        <p>5월 7일</p>
      </div>

      <div className="list">
        <h4 onClick={() => {setModal(!modal)}}>{ 글제목[2] }</h4>
        {
          modal == true ? <Modal></Modal> : null
        } 
        <p>5월 7일</p>
      </div> */}
      
      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setTitle(i);}}>
                { 글제목[i] } 
                <span onClick={(e) => {e.stopPropagation(); plusLike(i)}}>❤️</span>{좋아요[i]} 
              </h4>
              <p>6월 11일 발행</p>
              <button type="button" onClick={() => {onRemove(i)}}>삭제</button>
            </div>
          );
        })
      }

      <input type="text" onChange={(e) => { setText(e.target.value) }}/>
      <button type="button" onClick={() => { addText(text) }}>추가</button>

      {
        modal == true ? <Modal 글제목={글제목} title={title}></Modal> : null
      } 
      {/* <Modal2></Modal2> */}
    </div>
  )
}

// class문법(옛날 문법)
// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : "kim",
//       age : 20
//     }
//   }
//   render() {
//     return(
//       <div>안녕 {this.state.name}
//         <button type="button" onClick={() => {
//           this.setState({age : 22})}}>버튼</button>
//       </div>
//     )
//   }
// }

// const 에러가 날 시 에러 메세지 보여줌
// const Modal = () => {}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  );
}

export default App;
