# React 핵심 개념 요약 (Event, Hooks, State 등)

## 📌 1. React 이벤트 핸들링
- JSX에서는 `onClick={함수}` 와 같이 이벤트 핸들러 작성
- 카멜 케이스 사용 (e.g. `onClick`, `onChange`)
- 일반 HTML 이벤트와 달리 문자열이 아닌 **함수**를 직접 전달

```jsx
<button onClick={handleClick}>클릭</button>
```

## 📌 2. useState 훅
- 함수형 컴포넌트에서 상태 관리를 가능하게 하는 Hook
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```
- 상태를 변경하면 컴포넌트는 자동으로 리렌더링됨
- 객체/배열 상태 변경 시 기존 값을 복사한 후 새 객체/배열로 대체해야 함

## 📌 3. useEffect 훅
- 컴포넌트의 생명주기 처리를 위한 Hook (mount, update, unmount)
```jsx
useEffect(() => {
  console.log('렌더링 후 실행');
  return () => {
    console.log('언마운트 시 실행');
  };
}, [count]);  // count가 바뀔 때만 실행
```

## 📌 4. useMemo / useCallback
- `useMemo`: 계산 결과를 메모이제이션 (연산 비용 절감)
- `useCallback`: 함수를 메모이제이션 (불필요한 재렌더링 방지)

## 📌 5. useRef
- DOM 접근 또는 렌더링 사이에 값 저장 (변경되어도 렌더링되지 않음)
```jsx
const inputRef = useRef(null);
inputRef.current.focus();
```

## 📌 6. 커스텀 훅 (Custom Hook)
- `use`로 시작하는 이름 필수
- 로직 재사용을 위해 다른 훅을 포함한 사용자 정의 함수

```js
function useMyHook() {
  const [val, setVal] = useState(0);
  return [val, setVal];
}
```

## 📌 7. Hooks 사용 규칙
- 최상위 수준에서만 사용 (조건문, 루프 내 금지)
- React 함수형 컴포넌트 또는 커스텀 훅 내부에서만 호출

## 📌 8. state vs 일반 변수
| 항목 | 일반 변수 | state |
|------|-----------|-------|
| 화면 갱신 | X | O |
| 선언 방식 | let, const | useState |
| 사용 목적 | 일시적 값 | 렌더링에 반영되는 값 |

## 📌 9. 상태 초기화 최적화
- 렌더링 시 반복되는 무거운 초기화를 피하려면 `useState(() => 함수)`로 전달

## 📌 10. 컴포넌트 생명주기 (클래스형 기준)
- `constructor` → `componentDidMount` → `componentDidUpdate` → `componentWillUnmount`
- 함수형에서는 `useEffect`로 동일한 동작 처리 가능

---

### 참고 링크
- [React 공식 문서](https://react.dev/)
- [리액트 생명주기 설명](https://react-ko.dev/)

