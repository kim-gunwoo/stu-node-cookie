module.exports = {
    HTML: (login = "nob") => {
        let html = `<!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>`;
        if (login === "loginIsTrue") {
            html += `<a href= "/logout" > LOGOUT </a>`;
        } else {
            html += `<a href= "/login" > LOGIN </a>`;
        }
        html += `<h1><a href="/" >WEB</a></h1>
            <h1><a href="/list" >LIST</a></h1>
            <h1><a href="/body" >BODY</a></h1>
            <h1><a href="/" >---</a></h1>
        </body>
        </html>`;
        return html;
    },
    LOGIN: () => {
        return `<a href= "/login" > LOGIN </a> 
                <h1><a href="/" >WEB</a></h1>`;
    },
    LIST: () => {
        return `<h1><a href="/" >LIST</a></h1> this is list `;
    },
    BODY: () => {
        return `<h1><a href="/" >BODY</a></h1> this is body`;
    },
};
