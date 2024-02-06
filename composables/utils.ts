export const splitLettersInHTML = (refEl: globalThis.Ref<any>, className: string) => {
  refEl.value.focus
  refEl.value.innerHTML = refEl.value.textContent.replace(/\S/g, `<span class='${className} inline-block'>$&</span>`);
}
