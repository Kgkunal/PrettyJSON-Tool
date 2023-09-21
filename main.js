const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls--button--format");
const btnMinify = document.querySelector(".controls--button--minify");
const btnCopy = document.querySelector(".controls--button--copyresult");

btnFormat.addEventListener("click", ()=>{
    const formatted = JSON.stringify(JSON.parse(inputArea.value) , null , 4);
    outputArea.value = formatted;
});

btnMinify.addEventListener("click", ()=>{
    const minified = JSON.stringify(JSON.parse(inputArea.value) );
    outputArea.value = minified;
});

btnCopy.addEventListener("click",()=>{
    navigator.clipboard.writeText(`${outputArea.value}`);
})

