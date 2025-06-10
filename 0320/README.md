# React 엘리먼트 & 렌더링 요약

## 🔹 React Element란?

- React 앱을 구성하는 가장 작은 단위 (HTML의 요소와 유사)
- 실제 DOM이 아닌 가상 DOM(Virtual DOM)에 존재하는 JS 객체
- 불변성(Immutable): 변경 불가, 새로운 엘리먼트를 생성하여 대체

```jsx
const element = <h1>Hello, world!</h1>;
const element = React.createElement('h1', null, 'Hello, world!');
```

## 🔹 JSX와 React.createElement

- JSX: HTML 유사 문법 → Babel을 통해 `React.createElement()`로 변환
- JSX 없이 직접 `React.createElement()` 호출 가능

```jsx
// JSX
const element = <h1>Hello!</h1>;

// createElement
const element = React.createElement("h1", null, "Hello!");
```

## 🔹 Element vs Component

| 구분 | Element | Component |
|------|---------|-----------|
| 정의 | UI의 최소 단위 | Element들을 묶는 독립적 UI 블록 |
| 형태 | 변경 불가 객체 | 함수 또는 클래스 |
| 재사용 | 불가능 | 가능 |
| 업데이트 | 새로 생성 필요 | state 변화로 자동 렌더링 |

## 🔹 렌더링(Rendering)

- 초기 렌더링: JSX → 가상 DOM 생성 → 실제 DOM 적용
- 업데이트: state 또는 props 변경 → 새로운 가상 DOM 생성 → 변경 부분만 실제 DOM에 반영(Diffing)

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## 🔹 DOM 업데이트 예시: 시계 만들기

### Clock.jsx
```jsx
function Clock() {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
```

### App.js
```jsx
function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}
```

### index.js
```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(<App />);
}, 1000);
```

## 🔹 핵심 요약

- React의 엘리먼트는 변경 불가능하며, 상태 변경 시 새로운 엘리먼트를 만들어야 함
- ReactDOM은 변경된 부분만 DOM에 반영하여 성능 최적화
- JSX를 통해 직관적인 UI 개발이 가능하며, createElement()를 통해 직접 생성도 가능

---

### 📌 참고 자료
- [React 공식 문서](https://react.dev/)
- [W3Schools - HTML Elements](https://www.w3schools.com/html/html_elements.asp)
- [소플의 처음 만난 리액트 강의자료]
