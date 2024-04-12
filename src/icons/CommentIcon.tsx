import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

export const CommentIcon = createIcon({
  // createIcon function is imported from '@gluestack-ui/themed'
  viewBox: "0 0 28 28",
  path: (
    <>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.902 24.098L3.5 27.5V21.2645C1.625 19.0745 0.5 16.286 0.5 13.25C0.5 6.209 6.545 0.5 14 0.5C21.455 0.5 27.5 6.209 27.5 13.25C27.5 20.291 21.455 26 14 26C11.507 26.008 9.05696 25.3514 6.902 24.098Z"
          fill="#584000"
        />
    </>
  ),
});
