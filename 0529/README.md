# React Router 요약 정리

## 📌 라우팅이란?
- 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 기능
- SPA(Single Page Application)에서 주로 사용
- 여러 페이지처럼 보이지만 실제로는 하나의 HTML에서 라우팅됨

## 🚀 프로젝트 시작
```bash
npx create-react-app router-tutorial
cd router-tutorial
yarn add react-router-dom
```

## 🧩 기본 라우터 설정
```jsx
// src/index.js
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## 🧱 페이지 컴포넌트 생성
```jsx
// src/pages/Home.js
const Home = () => (
  <div>
    <h1>홈</h1>
    <p>가장 먼저 보여지는 페이지입니다.</p>
  </div>
);
```

## 📍 Route 설정
```jsx
// App.js
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 🔗 Link 컴포넌트
```jsx
<Link to="/about">소개</Link>
```

## 🧾 URL 파라미터
- 경로: `/profiles/:username`
- 접근: `useParams()`

## ❓ 쿼리스트링 처리
- `useLocation()` 또는 `useSearchParams()` 사용
- 주소: `/about?detail=true&mode=1`

## 🧬 중첩 라우팅
- `<Outlet />`을 사용하여 중첩된 컴포넌트 렌더링
```jsx
<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>
```

## 📄 공통 레이아웃
- 공통 UI (헤더 등)를 가진 `Layout` 컴포넌트 생성
- `Route element={<Layout />} >` 내부에 다른 라우트 중첩

## ↩️ useNavigate
```jsx
const navigate = useNavigate();
navigate('/articles');         // 이동
navigate(-1);                  // 뒤로
navigate('/login', { replace: true }); // replace 옵션
```

## 🧭 NavLink 스타일링
- `NavLink`의 `isActive`로 현재 페이지 스타일 지정
```jsx
<NavLink to="/articles/1" style={({ isActive }) => isActive ? activeStyle : undefined} />
```

## ❌ NotFound 페이지
- 존재하지 않는 경로 처리: `path="*"` 라우트
```jsx
<Route path="*" element={<NotFound />} />
```

## 🔁 Navigate 컴포넌트
- 조건에 따라 다른 페이지로 리다이렉트
```jsx
if (!isLoggedIn) return <Navigate to="/login" replace={true} />;
```

---

## 🔗 참고 자료
- [React Router 공식 문서](https://reactrouter.com/en/6.23.1)
- [벨로퍼트 라우터 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)
- [위키북 React Router](https://wikibook.github.io/react/router.html)

