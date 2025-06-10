# React 기초 요약 - 엘리먼트, 컴포넌트, Props, State, 생명주기

## 📌 1. 엘리먼트(Element)
- React 앱의 가장 작은 구성 요소 (HTML 요소 유사)
- `JSX` 또는 `React.createElement()`를 통해 생성
- **불변성**을 가지며, 변경 시 새로 생성하여 교체해야 함

```jsx
const element = <h1>Hello</h1>;
const element = React.createElement("h1", null, "Hello");
```

## 📌 2. 엘리먼트 렌더링(Rendering)
- Virtual DOM에서 실제 DOM으로 렌더링
- `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`
- 변경된 엘리먼트만 비교(diff) 후 갱신하여 효율적

## 📌 3. 컴포넌트(Component)
- 재사용 가능한 독립적인 UI 단위
- **함수형 컴포넌트**와 **클래스형 컴포넌트** 두 가지 방식 존재
- 보통 함수형 + Hooks 조합이 현재 표준

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 컴포넌트 이름 규칙
- 반드시 대문자로 시작 (`<Welcome />`)
- 소문자 시작 시 HTML 태그로 인식

## 📌 4. Props
- 컴포넌트 속성으로 부모 → 자식 전달
- 자바스크립트 객체이며, **읽기 전용 (Read-only)**
- 문자열 외에 값은 `{}`로 감싸 전달

```jsx
<Welcome name="Mike" />
```

### props.children
- 포함된 태그나 내용 전달 시 사용

```jsx
function Wrapper(props) {
  return <div>{props.children}</div>;
}
```

## 📌 5. 컴포넌트 합성(Composition)
- 여러 컴포넌트를 조합하여 복잡한 UI 구성
- **컴포넌트 추출**을 통해 재사용성과 유지보수 향상

```jsx
function Comment(props) {
  return (
    <div>
      <Avatar user={props.author} />
      <UserInfo user={props.author} />
      <p>{props.text}</p>
    </div>
  );
}
```

## 📌 6. State & 생명주기

### State
- 컴포넌트의 **변경 가능한 데이터**
- 반드시 `setState()` (class) 또는 `useState()` (function)으로 갱신
- 렌더링과 데이터 흐름에 중요한 값만 포함해야 함

### 생명주기
- 컴포넌트 생성/갱신/소멸 과정을 정의
- 클래스 컴포넌트의 경우 `componentDidMount`, `componentDidUpdate` 등 사용
- 함수형에서는 `useEffect()`로 대체

---

## 🔗 참고
- [React 공식 문서](https://react.dev/)
- 소플의 처음 만난 리액트 강의자료

