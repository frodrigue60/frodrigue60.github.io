const codeContainer = document.querySelector('#pre-container');
const previewContainer = document.querySelector('#preview-container');

/* const colorPickerText = document.querySelector('#select-color-text');
const colorPickerBg = document.querySelector('#select-color-bg');

colorPickerBg.addEventListener('change', () => {
    console.log("BgColor Selected");
    colorPickerBg.blur(); 
});
colorPickerText.addEventListener('change', () => {
    console.log("BgColor Selected");
    colorPickerText.blur();
}); */

function generateButton() {
    let linkToFile = document.querySelector("#link-to-file");
    let displayTitle = document.querySelector("#display-title");
    let bgColorSelector = document.querySelector("#select-color-bg");
    let textColorSelector = document.querySelector("#select-color-text");

    let a = document.createElement("a");

    a.setAttribute("href", linkToFile.value);
    a.innerText = displayTitle.value;

    a.style.textDecoration = "none";
    a.style.color = "#FFFFFF";
    a.style.border = "solid 1px #22222230";
    a.style.padding = "3px 5px";
    a.style.margin = "2px 3px";
    a.style.borderRadius = "3px";
    a.style.backgroundColor = bgColorSelector.value;
    a.style.color = textColorSelector.value;
    a.style.display = "inline";

    previewContainer.innerHTML = "";
    previewContainer.appendChild(a);

    codeContainer.innerHTML = escapeHTML(a.outerHTML);
}

function escapeHTML(text) {
    return text.replace(/[<>"'&]/g, function (match) {
        return {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '&': '&amp;'
        }[match];
    });
}

function copyCode() {
    let previewContainer = document.querySelector('#preview-container');
    copyElementToClipboard(previewContainer);
}

function copyElementToClipboard(element) {
    const tempInput = document.createElement('input');
    tempInput.value = element.innerHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert("Code copied");
}



