import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'Joon Soo 의 리액트 맛보기';
  // posts라는 변수를 선언하기
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* React에서 class를 선언하려면 class가 아닌 className을 사용해야한다. */}
        <div>JoonSoo Blog</div>
      </div>
      <img src={logo}/>
      <h4>{ posts }</h4>
      {/* 리액트에서 데이터 바인딩을 할라믄 변수명을 써주면 된다.
          또한 함수명도 가능하다
          또한 이미지도 가능하다 (19번 라인의 코드)*/}
    </div>
  );
}

export default App;
