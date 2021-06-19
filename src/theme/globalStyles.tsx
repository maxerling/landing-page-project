import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {

  margin: 0

}
html {font-size: 100%;

} /*16px*/

body {
  background: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 2.488rem;
}

h2 {font-size: 2.074rem;}

h3 {font-size: 1.728rem;}

h4 {font-size: 1.44rem;}

h5 {font-size: 1.2rem;}

small, .text_small {font-size: 0.833rem;}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

`;

export { GlobalStyles };
