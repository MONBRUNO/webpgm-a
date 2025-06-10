# React Todo List 프로젝트 요약

## 📦 프로젝트 초기 설정
```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add styled-components react-icons
```

## 🧱 주요 컴포넌트 구조

- **TodoTemplate**: 중앙 정렬된 흰 박스 레이아웃
- **TodoHead**: 오늘 날짜 + 남은 할 일 개수 표시
- **TodoList**: 할 일 목록을 `map()`으로 렌더링
- **TodoItem**: 체크/삭제 기능 포함한 개별 항목
- **TodoCreate**: 새 할 일 추가 폼 및 버튼

---

## 🎨 글로벌 스타일 적용

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

---

## 🧩 상태 관리 (Context + useReducer)

### ✅ 초기 상태
```js
const initialTodos = [
  { id: 1, text: '프로젝트 생성하기', done: true },
  { id: 2, text: '컴포넌트 스타일링하기', done: true },
  { id: 3, text: 'Context 만들기', done: false },
  { id: 4, text: '기능 구현하기', done: false },
];
```

### ✅ 리듀서 함수
```js
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE': return state.concat(action.todo);
    case 'TOGGLE': return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
    case 'REMOVE': return state.filter(todo => todo.id !== action.id);
    default: throw new Error('Unhandled action');
  }
}
```

---

## 🧠 Context API

```js
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
```

---

## 🧪 커스텀 Hook

```js
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('TodoProvider 없음');
  return context;
}
```

다른 Hook: `useTodoDispatch()`, `useTodoNextId()`

---

## ⚙️ 기능 구현

- **TodoHead**: `todos.filter(todo => !todo.done)`로 미완료 항목 수 표시
- **TodoList**: `todos.map()`으로 TodoItem 렌더링
- **TodoItem**: `onClick`으로 dispatch `TOGGLE`, `REMOVE`
- **TodoCreate**: 입력값 관리, `onSubmit` 시 dispatch `CREATE`

---

## 🧾 참고자료
- https://react.vlpt.us/mashup-todolist/01-create-components.html
- https://styled-components.com

