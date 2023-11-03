function generateMetaTags() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const keywords = document.getElementById("keywords").value.split(',').map(keyword => keyword.trim());
    const index = document.getElementById("index").value;
    const follow = document.getElementById("follow").value;

    const metaTitle = `<meta name="title" content="${title}">`;
    const metaDescription = `<meta name="description" content="${description}">`;
    const metaKeywords = `<meta name="keywords" content="${keywords.join(', ')}">`;
    const metaRobots = `<meta name="robots" content="${index}, ${follow}">`;
    const metaContentType = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
    const metaLanguage = '<meta name="language" content="English">';

    const output = `${metaTitle}\n${metaDescription}\n${metaKeywords}\n${metaRobots}\n${metaContentType}\n${metaLanguage}`;
    
    const metaTagOutput = document.getElementById("meta-tag-output");
    metaTagOutput.textContent = output;
}
