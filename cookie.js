const http = require("http");

// 쿠키를 서베에서 가져 올 수 있음
const cookie = require("cookie");
const port = 8888;

http.createServer((req, res) => {
    console.log(req.headers.cookie);
    let cookies = {};
    if (req.headers.cookie !== undefined) {
        cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    res.writeHead(200, {
        // 쿠키를 지정하는 법
        "Set-Cookie": [
            // 휘발성 쿠키를 Session cookie
            // 키 = 값
            "yummy_cookie=choco",
            "tasty_cookie=strawberry",
            // 웹브라우저를 꺼도 사라지지 않는 쿠키를 Permanent 쿠키
            `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
            // Secure : 웹브라우저와 웹서버가 https로 통신하는 경우만 웹브라우저가 쿠키를 서버로 전송.
            "Secure=Secure; Secure",
            // HttpOnly : 자바스크립트의 document.cookie를 이용해서 쿠키에 접속하는 것을 막는 옵션.
            //            쿠키를 훔쳐가는 행위를 막기 위한 방법
            "HttpOnly=HttpOnly; HttpOnly",
            // 쿠키의 유효 범위 지정
            // 지정된 경로부터 하위만 쿠키 사용 가능
            "Path=Path; Path=/cookie",
            // 지정된 도메인 전체에서 쿠키 사용 가능
            "Doamin=Domain; Domain=test.o2.org",
        ],
    });
    res.end("Cookie!!");
}).listen(port, () => {
    console.log(`start server >>>`);
    console.log(`http://localhost:${port}`);
});
