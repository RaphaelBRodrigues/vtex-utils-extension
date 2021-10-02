function createClickListener(selector: string, func: Function) {
  const $elements = Array.from(document.querySelectorAll(selector));


  $elements.forEach(($element) => {
    $element.addEventListener("click", (e) => {
      func(e);
    })
  })
}

export default createClickListener;