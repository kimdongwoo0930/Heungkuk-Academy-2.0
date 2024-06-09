import type { CSSProp } from "styled-components";
import type { Theme } from "@src/shared/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    /*
     * 필요하다면 여기서 타입을 정의해줘도 됨
     * 하지만 "Theme"가 수정될 때마다 수정사항을 반영해줘야 하기 때문에 "extends Theme"형태로 적는 것이 좋음
     */
  }
}