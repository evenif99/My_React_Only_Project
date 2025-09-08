import React, { useState } from 'react';

function App() {
    // 상태: 현재 선택된 카테고리 (bread, beverage)
    const [category, setCategory] = useState('bread');
    // 상태: 선택된 이미지 경로
    const [imageSrc, setImageSrc] = useState('');

    // 빵 목록
    const breadItems = [
        { label: '치아바타', image: './images/ciabatta_01.png' },
        { label: '프렌치 바게트', image: './images/french_baguette_01.png' },
        { label: '크로아상', image: './images/croissant_01.png' },
        { label: '브리오슈', image: './images/brioche_01.png' }
    ];

    // 음료수 목록
    const beverageItems = [
        { label: '쥬스', image: './images/juice01.png' },
        { label: '우유', image: './images/milk02.jpg' },
        { label: '레드와인', image: './images/redwine01.png' },
        { label: '화이트와인', image: './images/whitewine02.png' }
    ];

    // 카테고리 버튼 클릭 이벤트
    const handleCategoryChange = (e) => {
        setCategory(e.target.id);
        setImageSrc(''); // 이미지 초기화
    };

    // 콤보박스 선택 변경 이벤트
    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (value === '-') {
            alert('보여줄 이미지를 선택해 주세요.');
            setImageSrc('');
        } else {
            setImageSrc(value);
        }
    };

    // li 클릭 이벤트 - 텍스트 alert 및 이미지 표시
    const handleItemClick = (item) => {
        alert(item.label);
        setImageSrc(item.image);
    };

    // 현재 표시할 항목 리스트와 태그 타입 결정
    const items = category === 'bread' ? breadItems : beverageItems;
    const ListTag = category === 'bread' ? 'ul' : 'ol';

    return (
        <div className="App">
            <h2>빵과 음료 선택</h2>
            <button id="bread" onClick={handleCategoryChange}>빵</button>
            <button id="beverage" onClick={handleCategoryChange}>음료수</button>

            <h3>{category === 'bread' ? '빵 목록' : '음료 목록'}</h3>

            {/* 콤보박스 */}
            <select onChange={handleSelectChange} value={imageSrc || '-'}>
                <option value="-">항목을 선택해 주세요.</option>
                {items.map((item, index) => (
                    <option key={index} value={item.image}>{item.label}</option>
                ))}
            </select>

            {/* ul 또는 ol 목록 */}
            <ListTag style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', padding: '10px' }}>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>{item.label}</li>
                ))}
            </ListTag>

            <hr />

            {/* 선택 이미지 출력 */}
            {imageSrc ? (
                <img src={imageSrc} alt="선택 이미지" width={200} height={200} />
            ) : (
                <p>선택된 이미지가 없습니다.</p>
            )}
        </div>
    );
}

export default App;