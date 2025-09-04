// 넘겨진 프로퍼티는 () 내에 적어 주면 됩니다.
function App({ greeting, welcome }) { 
    // console.log('샘플');
    // App() 안에 중괄호{}를 꼭 적어둘 것
    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
}

export default App;