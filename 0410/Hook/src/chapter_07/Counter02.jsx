import React, { useState } from "react";
function Counter02(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>총{count} 번클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
export default Counter02;