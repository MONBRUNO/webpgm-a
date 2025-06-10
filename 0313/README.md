# React CRA & JSX 요약 정리

## 🔧 React 프로젝트 시작

### Create React App (CRA)
```bash
npx create-react-app my-app
cd my-app
npm start
```

### Vite
```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

## 📦 npm vs npx
| 항목 | npm | npx |
|------|-----|-----|
| 역할 | 패키지 설치 | 패키지 실행 |
| 설치 여부 | 설치 필요 | 설치 없이 실행 |
| 예시 | npm install axios | npx create-react-app my-app |

## ⚛ JSX 문법 및 특징
- JS 안에 HTML처럼 작성하는 문법 (JavaScript XML)
- Babel을 통해 JS로 변환됨
- `class → className`, `for → htmlFor` 사용

### 주요 문법
- 표현식: `{}` 안에 JS 사용
- 조건부 렌더링: `조건 ? A : B`, `조건 && A`
- 반복 렌더링: `array.map(item => <li>{item}</li>)`
- 이벤트 처리: `onClick`, `onChange`
- 스타일 적용: `style={{ color: "blue" }}`

### 예제
```jsx
function App() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
  return (
    <ul>
      {fruits.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
  );
}
```

## 📚 실습 예시 - 컴포넌트 구성

### Book.jsx
```jsx
function Book({ name, numOfPage }) {
  return (
    <div>
      <h1>이 책의 이름은 {name}입니다.</h1>
      <h2>총 {numOfPage}페이지로 이루어져 있습니다.</h2>
    </div>
  );
}
```

### Library.jsx
```jsx
function Library() {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}
```

---

### 참고 링크
- [React 공식 문서](https://react.dev/)
- [JSX 소개](https://react.dev/learn/writing-markup-with-jsx)
- [Vite 공식 가이드](https://ko.vite.dev/guide/)
