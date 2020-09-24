const http = require("http");
const url = require("url");

// 쿠키를 서베에서 가져 올 수 있음
const cookie = require("cookie");
const port = 8888;

const template = require("./template/template");

http.createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;
    let cookies = {};

    if (req.headers.cookie) {
        cookies = cookie.parse(req.headers.cookie);
        console.log(cookies);
    }

    let body = "";

    if (pathname === "/") {
        const html = template.HTML(cookies.login);
        res.end(html);
    } else if (pathname === "/login") {
        res.writeHead(302, {
            "Set-Cookie": ["login=loginIsTrue"],
            Location: "/",
        });
        res.end();
    } else if (pathname === "/logout") {
        res.writeHead(302, {
            "Set-Cookie": ["login=; Max-Age=0"],
            Location: `/`,
        });
        res.end();
    }

    if (cookies === {} || cookies.login !== "loginIsTrue") {
        const html = template.LOGIN();
        res.end(html);
    }
    if (pathname === "/list") {
        const html = template.LIST();
        res.end(html);
    } else if (pathname === "/body") {
        const html = template.BODY();
        res.end(html);
    }
}).listen(port, () => {
    console.log(`start server >>>`);
    console.log(`http://localhost:${port}`);
});
