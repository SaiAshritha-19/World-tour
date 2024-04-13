import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// 1. define the props

const Slider = ({ children, options }) => {
  // 2. initialize EmblaCarousel using the custom hook
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });
  console.log(children)
  return (
    // 3. set ref as emblaRef.
    // make sure we have overflow-hidden and flex so that it displays properly
    <div style={{overflow:"hidden"}} ref={emblaRef}>
      <div   style={{display:"flex",gap:"20px"}} >{children}</div>
    </div>
  );
};
export default Slider;