const Btn = document.querySelector('.Btns');
console.log(Btn);
const handleClick = event => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("target: ", event.target);
}

Btn.addEventListener("click", handleClick);

document.addEventListener("keydown", e => {
    console.log("keydown:", e);
    console.log("key:", e.key);
    console.log("code:", e.code);
})

document.addEventListener("keydown", event => {
    event.preventDefault();
  
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
      console.log("«Ctrl + s» or «Command + s» combo");
    }
  });

  