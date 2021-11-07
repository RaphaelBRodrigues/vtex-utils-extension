/**
 * 
 * @param loaderClassName The main class of the loader 
 * @description Handle the visibility of a loader
 */
function toggleLoader(loaderClassName: string) {
  const $loader = document.querySelector(loaderClassName);
  
  $loader?.classList.remove("active");
}

export default toggleLoader;