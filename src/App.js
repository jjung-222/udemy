import ExpenseItem from "./components/ExpenseItem.js"; //이렇게 임포트 하면 이 파일을 이제 html 요소처럼 사용 가능

function App() { 
  //App.js는 루트 컴포넌트로서 모든 컴포넌트들은 이 안에서 중첩되어서 사용된다.
  //리액트는 컴포넌트 트리로 구성되어져 있다. 맨 위에 App.js 컴포넌트 존재

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
