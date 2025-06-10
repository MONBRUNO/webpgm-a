# Web Programming 요약 (HTML/CSS & React Hooks)

## 📘 HTML & CSS 기초 요약

### ✅ HTML
- **정의**: 웹 페이지 구조를 구성하는 마크업 언어
- **태그 기반** 문서 구조화
- **메타데이터**: `<meta>` 태그 등, 문서의 정보를 설명

### ✅ HTML 표준 참고 자료
- W3C: https://www.w3.org/TR/html52/
- WHATWG: https://html.spec.whatwg.org/multipage/
- MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

### ✅ Emmet
- HTML/CSS 코드 자동 완성 도구
- 공식 문서: https://emmet.io/

### ✅ MPA vs SPA
- **MPA**: 여러 HTML 파일을 사용한 전통적인 웹 앱
- **SPA**: 하나의 HTML에서 JavaScript로 라우팅 제어

### ✅ CSS
- **역할**: 디자인(색상, 레이아웃, 폰트 등) 지정
- **예시 사이트**: https://csszengarden.com/

---

## ⚛ React Hook 요약

### ✅ 훅(Hook)이란?
- 함수형 컴포넌트에서도 상태와 생명주기 기능을 사용 가능하게 하는 함수
- 이름은 `use`로 시작 (예: `useState`, `useEffect`)

### ✅ useState
```jsx
const [count, setCount] = useState(0);
```
- 컴포넌트 내부 상태 선언 및 업데이트
- 객체, 배열 상태도 관리 가능

### ✅ useEffect
```jsx
useEffect(() => {
  console.log("렌더링 됨");
  return () => console.log("언마운트 됨");
}, [count]);
```
- 부수 효과 처리 (데이터 요청, 타이머 등)
- 생명주기 대체: mount, update, unmount

### ✅ useMemo
```jsx
const expensiveValue = useMemo(() => computeExpensive(), [deps]);
```
- 고비용 연산 결과를 메모이제이션
- 값이 바뀌지 않으면 이전 계산값 재사용

### ✅ useCallback
```jsx
const memoizedFn = useCallback(() => doSomething(), [deps]);
```
- 함수를 메모이제이션하여 불필요한 재생성 방지
- 자식 컴포넌트에 콜백을 props로 넘길 때 유용

### ✅ useRef
```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
```
- DOM 요소에 직접 접근하거나 렌더링 사이 값 유지
- `.current` 프로퍼티를 통해 접근

---

## 🛠 Custom Hook
- `use`로 시작하는 이름의 함수
- 반복되는 로직을 재사용 가능
```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increase: () => setCount(c => c + 1) };
}
```

---

## 📌 Hook 사용 규칙
1. 최상위 레벨에서만 사용
2. React 함수형 컴포넌트 혹은 다른 커스텀 훅 내부에서만 사용

---

## 📚 참고 링크
- [React 공식 문서](https://react.dev/)
- [MDN HTML 문서](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Emmet 문서](https://emmet.io/documentation/)

