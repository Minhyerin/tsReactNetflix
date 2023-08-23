// d: declare 선언하다.
// 타입으로 정의 되어있지 않은 타입을 커스터마이징으로 타입 선언하기 위한. 확장자

import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      lighter: string;
      darker: string;
    };
  }
}
