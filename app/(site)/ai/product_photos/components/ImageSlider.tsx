"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
interface Props {
  first_image_url: string;
  second_image_url: string;
}
const Slider: React.FC<Props> = ({ first_image_url, second_image_url }) => {
  return (
    <div className="max-w-fit rounded-2xl overflow-hidden">
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={<ReactCompareSliderImage alt="Image one" src={first_image_url} height={1000} width={1000} />}
        itemTwo={
          <ReactCompareSliderImage
            alt="Image two"
            src={second_image_url}
            height={1000}
            width={1000}
            style={{
              backgroundColor: "white",
              backgroundImage:
                "\n linear-gradient(45deg, #ccc 25%, transparent 25%),\n linear-gradient(-45deg, #ccc 25%, transparent 25%),\n linear-gradient(45deg, transparent 75%, #ccc 75%),\n linear-gradient(-45deg, transparent 75%, #ccc 75%)",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              backgroundSize: "20px 20px",
            }}
          />
        }
        keyboardIncrement="5%"
        position={50}
        style={{
          height: "600px",
          width: "100%",
          maxWidth: "500px",
        }}
      />
    </div>
  );
};

export default Slider;
