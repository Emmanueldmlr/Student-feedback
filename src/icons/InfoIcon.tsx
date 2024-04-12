import { createIcon } from "@gluestack-ui/themed";
import { Path, Mask, G } from "react-native-svg";

export const InfoIcon = createIcon({
  // createIcon function is imported from '@gluestack-ui/themed'
  viewBox: "0 0 36 36",
  path: (
    <>
      <Mask
        id="mask0_99_1432"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="1"
        width="38"
        height="34"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 3.75L1.5 32.25H34.5L18 3.75Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <Path
          d="M18 26.25V27M18 14.25L18.006 21.75"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
        />
      </Mask>
      <G mask="url(#mask0_99_1432)">
        <Path d="M0 0H36V36H0V0Z" fill="#D12E34" />
      </G>
    </>
  ),
});

