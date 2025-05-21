# React 학습 정리 - Lists, Keys, Forms

## 📋 Lists & Keys

- `map()` 함수는 배열의 각 요소를 변환해 새로운 배열을 생성하는 JavaScript 메서드로, React에서 리스트 렌더링 시 필수.
- 리스트 렌더링 시 각 항목에는 고유한 `key` 속성을 지정해야 React가 효율적으로 변경을 추적 가능.

### ✅ 예시 코드
```jsx
const names = ["Alice", "Bob", "Charlie"];
return (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li> // 비추천: index 사용
    ))}
  </ul>
);
```

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li> // 추천: 고유 id 사용
    ))}
  </ul>
);
```

---

## 📝 Forms

- Controlled Component: React state로 입력값을 제어
- 주요 요소: `onChange`, `onSubmit`, 상태(state)

### ✅ 예시 코드
```jsx
function SimpleForm() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력된 이름: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">제출</button>
    </form>
  );
}
```

- 다양한 입력 예시: `<textarea>`, `<select>`, `<input type="checkbox">`, useRef 활용한 Uncontrolled Component

---


# React 학습 정리 - Lifting State Up, Composition

## ⬆️ Lifting State Up (상태 끌어올리기)

- 여러 자식 컴포넌트가 동일한 상태를 공유할 때 부모 컴포넌트로 상태를 올려 중앙에서 관리

### ✅ 구현 방식
1. 부모 컴포넌트에 상태 정의
2. 상태 변경 함수 정의 및 자식에 전달
3. 자식 컴포넌트에서 이벤트 발생 시 부모 함수 호출
4. 부모 상태를 다시 자식에 props로 전달

### ✅ 예시 코드
```jsx
function Parent() {
  const [text, setText] = useState("");
  return (
    <div>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </div>
  );
}

function ChildA({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function ChildB({ text }) {
  return <p>입력한 값: {text}</p>;
}
```

---

## 🔗 Composition vs Inheritance (합성 vs 상속)

- 리액트는 **상속보다 합성**을 권장
- 합성은 `props.children` 또는 컴포넌트를 조합하여 유연하게 구성
- Specialization: 일부 기능을 확장하는 방식
- Higher-Order Components (HOC): 기능을 확장하는 패턴 (현재는 Custom Hook 선호)

### ✅ 예시 코드 (합성)
```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

function ProfileCard() {
  return (
    <Card title="Inje Lee">
      <p>리액트를 배우고 있어요!</p>
    </Card>
  );
}
```

---

