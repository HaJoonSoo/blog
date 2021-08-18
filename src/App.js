/* eslint-disable */

import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['State  예제', 'State 과제']);
  // State는 변수대신 쓰는 데이터 저장공간
  // useState()를 이용해서 만들어야한다.
  // 문자, 숫자, Array, object 전부 사용 가능.

  // 왜 State에 저장해 놓는가?
  // ㄴ> 웹이 App처럼 동작하게 만들고 싶어서.
  // ㄴ> State는 변경되면 HTML이 자동으로 렌더링 된다.
  //    ㄴ> 새로고침 없이 스무스한 웹 페이지를 만들 수 있다.

  let [ex, ex1, ex2] = useState(['State() 연습1','State() 연습2','State() 연습3']);

  let posts = 'Joon Soo 의 리액트 맛보기';
  // posts라는 변수를 선언하기

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = 'State 과제'
    글제목변경( newArray );
  }

  let [하트, 하트변경] = useState(0);

  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* React에서 class를 선언하려면 class가 아닌 className을 사용해야한다. */}
        <div style={ {color : '#165574' , 
                      fontSize : '30px'} }
                      >JoonSoo Blog</div>
      </div>

    <button onClick={ 제목바꾸기 }>과제</button>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 하트변경(하트 + 1) } }>♥</span> {하트} </h3>
        <p>8월 18일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { ex[0] } </h3>
        <p>8월 18일 연습</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { ex[1] } </h3>
        <p>8월 18일 연습</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { ex[2] } </h3>
        <p>8월 18일 연습</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
