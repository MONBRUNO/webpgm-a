const routes = {
    home: "<h2>Home</h2><p>홈 페이지입니다.</p>",
    about: "<h2>About</h2><p>회사 소개 페이지입니다.</p>",
    contact: "<h2>Contact</h2><p>연락처 페이지입니다.</p>"
};

function navigate(page) {
    document.getElementById("app").innerHTML = routes[page] || "<h2>404</h2><p>페이지를찾을수없습니다.</p>";
    // URL을변경하여브라우저기록에반영
    window.history.pushState({ page }, page, `#${page}`);
}
// 뒤로가기/앞으로가기 이벤트 처리
window.onpopstate = function (event) {
    if (event.state) {
        navigate(event.state.page);
    }
};