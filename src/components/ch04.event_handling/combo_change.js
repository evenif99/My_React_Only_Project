function App() {
    const ChangeEvent = (event) => {
        const target_id = event.target.id;
        const target_value = event.target.value;

        console.log(`요소 아이디 : ${target_id}`);

        if (target_id === "input_box") {
            console.log(`입력 상자 내용 : ${target_value}`);

        } else if (target_id === "menu_select") {
            console.log(`선택된 콤보 상자 값 : ${target_value}`);
            // alert 함수는 사용자에게 메시지를 일방적으로 보여 주는 창입니다.
            // confirm 함수와 prompt 함수도 공부하세요.
            if (target_value === '-') {
                document.getElementById('image01').src = '';
                alert('보여줄 이미지를 선택해 주셔야 합니다.');
            } else {
                const image_url = target_value;
                document.getElementById('image01').src = image_url;
                document.getElementById('image01').width = 200;
                document.getElementById('image01').height = 200;
            }
        } else {

        }
    }

    return (
        <div className="App">
            <h2>빵과 음료</h2>
            <input id="input_box" onChange={ChangeEvent} />
            <br />
            <select id="menu_select" onChange={ChangeEvent}>
                <option value="-">항목을 선택해 주세요.</option>
                <option>빵</option>
                <option>음료</option>
            </select>
            <br />
            {/* alt 속성은 해당 이미지가 없을 때 보여주는 글자를 지정하는 속성입니다. */}
            <img id="image01" src="" alt="NoImage" />
        </div>
    );
}

export default App;