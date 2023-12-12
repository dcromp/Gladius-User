import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--basebody-work-sans: 'Work Sans';
--lexend-deca-semi-bold-14: 'Lexend Deca';
--text-large: Inter;
--caption-space-mono: 'Space Mono';

/* font sizes */
--text-large-size: 16px;
--h4-work-sans-size: 28px;
--lexend-deca-semi-bold-14-size: 14px;
--font-size-4xs: 9px;
--caption-space-mono-size: 12px;
--h5-work-sans-size: 22px;

/* Colors */
--caption-label-text: #858584;
--color-gray-100: #2b2b2b;
--text: #fff;
--color-darkslategray: #3b3b3b;
--call-to-action: #a259ff;

/* Gaps */
--gap-3xs: 10px;
--gap-lg: 18px;
--gap-xs: 12px;
--gap-5xs: 8px;

/* Paddings */
--padding-lgi: 19px;
--padding-4xl: 23px;
--padding-xl: 20px;
--padding-xs: 12px;
--padding-3xs: 10px;
--padding-2xl: 21px;
--padding-11xl: 30px;

/* Border radiuses */
--br-mini: 15px;
--br-7xs: 6px;
--br-xl: 20px;
--br-101xl: 120px;
--br-81xl: 100px;

}
`;
