import * as React from "react";

interface BlurryColorFulAnimationProps {
  title?: string;
  imgUrl?: string;
  text?: string;
}

export default function BlurryColorFulAnimation(
  props: BlurryColorFulAnimationProps
): React.ReactElement {
  const { title, text } = props;
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
