import './ExpenseItem.css'

function ExpenseItem () {
    const expenseDate = new Date(2021, 8, 12); //상수추가
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    //중요한 규칙이 하나 있습니다. 반환하는 문장마다 또는 JSX코드 조각마다 반드시 한 개의 루트 요소를 갖는다
    return  (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>
    );
}

//컴포넌트를 사용하기 위해 내보내야함. 그렇지 않으면 그 파일 안에서만 사용가능
// export default 란? 이 함수를 이 파일의 기본 함수로 내보내겠다.
export default ExpenseItem;