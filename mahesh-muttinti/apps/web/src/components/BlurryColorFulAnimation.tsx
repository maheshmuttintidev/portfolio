import * as React from "react";

interface BlurryColorFulAnimationProps {
  title?: string;
  imgUrl?: string;
  text?: string;
}

export default function BlurryColorFulAnimation(
  props: BlurryColorFulAnimationProps
): React.ReactElement {
  const { title, text, imgUrl } = props;
  return (
    <div className="">
      <div className="">
        <h2 className="text-xl font-semibold pb-3" title={text}>
          <span>{title}</span> - <span className="underline text-white">{text}</span>
        </h2>
      </div>
    </div>
  );
}
