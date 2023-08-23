// 언제어디서든 가져가 사용하고자 하는 컬러 테마 값 세팅
// theme : 스타일 컴포넌트 활용 전역 컴포넌트 모두 사용할 수 있도록 themeProvider 컴포넌트의 props로 사용.
// props의 기본타입은 any
// 따라서 오타발생할 경우 디버깅이 안됨.
// => 그렇기 때문에 타입정의가 필요한 것 (default Theme를 사용해서 타입 정의함.)

import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  red: "#e51013",
  black: {
    veryDark: "#141414",
    darker: "#181818",
    lighter: "#2f2f2f",
  },
  white: {
    lighter: "#fff",
    darker: "#e5e5e5",
  },
};
