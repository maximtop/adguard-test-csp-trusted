(async () => {
    const response = await fetch('src/info.json');
    const data = await response.json();
    console.log(data);
    const jsBlock = document.querySelector('.test-js .text');
    jsBlock.innerText = data.message;
})();

