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
