# Web Programming Ⅱ 요약 정리

## 📁 1. HTML & CSS 기초

### 📌 마크업 언어 & 메타데이터
- **HTML**: 웹 페이지의 구조 정의 (Hyper Text Markup Language)
- **메타데이터**: 데이터를 설명하는 데이터 (ex: `<meta>`, EXIF, JSON-LD)

### 📌 HTML 표준 자료
- [W3C](https://www.w3.org/TR/html52/), [WHATWG](https://html.spec.whatwg.org/multipage/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### 📌 Emmet
- HTML/CSS 코드 자동완성 및 확장 도구 ([https://emmet.io](https://emmet.io))

### 📌 MPA vs SPA
- **MPA**: Multi Page Application - 각 페이지마다 HTML 로드
- **SPA**: Single Page Application - JS로 화면 전환, 빠른 사용자 경험 제공

---

## 🎨 2. CSS 기초
- **역할**: 웹 페이지의 스타일 지정 (색상, 폰트, 레이아웃 등)
- **참고**: [CSS Zen Garden](https://csszengarden.com/)

---

## 🖥 3. 개발 도구 및 개념

### Node.js
- JS 런타임 환경, 서버 개발 가능
- `node`, `npm`, `npx` 사용
- **Platform/Environment/Runtime/Framework** 차이 설명

### IDE & Code Editor
- 대표 IDE: VS Code, IntelliJ, Eclipse, PyCharm
- VS Code 장점: 오픈소스, 확장성, 경량

---

## ⚛ 4. React 기초 (CRA & Vite)

### 📁 프로젝트 시작
- **CRA**: `npx create-react-app my-app`
- **Vite**: `npm create vite@latest my-app --template react`

### 📌 npm vs npx
| 항목 | npm | npx |
|------|-----|-----|
| 역할 | 패키지 설치 | 패키지 실행 |
| 예시 | `npm install axios` | `npx create-react-app my-app` |

---

## 🧩 5. JSX 문법

- HTML 유사 문법을 JS 안에서 사용
- Babel을 통해 JS로 변환됨
- `class` → `className`, `for` → `htmlFor`

### JSX 주요 기능
- 조건부 렌더링: `{condition ? ... : ...}`
- 반복 렌더링: `{items.map(item => ...)}` (key 필수)
- 이벤트 핸들링: `onClick`, `onChange` 등
- 스타일: `style={{ color: 'blue' }}`

---

## 📚 6. JSX 실습 예시

```jsx
function Book(props) {
  return (
    <div>
      <h1>{`책 이름: ${props.name}`}</h1>
      <h2>{`페이지 수: ${props.numOfPage}`}</h2>
    </div>
  );
}

function Library() {
  return (
    <div>
      <Book name="처음 만난 React" numOfPage={500} />
    </div>
  );
}
```

---

## 🐧 7. 리눅스 시스템 명령어 요약

### 기본 디렉토리
- `/`, `/home`, `/etc`, `/usr`, `/var`, `/boot`, `/proc`, `/dev`, `/mnt`

### 주요 명령어
- 파일: `ls`, `cd`, `pwd`, `cat`, `touch`, `cp`, `mv`, `rm`
- 보기: `more`, `less`, `head`, `tail`
- 링크: `ln -s`, `ln`
- 권한: `chmod`, `chown`, `chgrp`
- 검색: `find`, `grep`, `egrep`
- 압축: `tar`, `gzip`, `bzip2`, `compress`
- 사용자: `adduser`, `passwd`, `userdel`, `groupadd`, `usermod`
- 시스템: `top`, `ps`, `kill`, `cron`, `df`, `du`, `mount`, `free`, `uptime`

### 네트워크
- `ping`, `traceroute`, `route`, `netstat`, `ifconfig`, `whois`

### 설정 관련
- `vi`, `bashrc`, `PATH`, `alias`, `env`
- `xinetd`, `/etc/services`, `/etc/protocols`, `chkconfig`

---

## 🧠 참고 링크
- [React 공식 문서](https://react.dev/)
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Node.js 공식](https://nodejs.org/)
- [Emmet 문서](https://emmet.io/documentation/)
- [리눅스 명령어 참고](https://ko.linuxcommand.org/)


