function isHomepage() {
    let pathName = window.location.pathname;
    if (pathName == '/' || pathName == '/index.html' || pathName == '/chatc/dist/index.html') {
      return true;
    } else {
      return false; 
    }
  }
  export default isHomepage;