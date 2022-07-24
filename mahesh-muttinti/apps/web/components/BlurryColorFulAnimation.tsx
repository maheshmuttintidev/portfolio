import * as React from 'react'

interface BlurryColorFulAnimationProps {
  title?: string
  imgUrl?: string
  text?: string
}

export default function BlurryColorFulAnimation(
  props: BlurryColorFulAnimationProps
): React.ReactElement {
  const { title, imgUrl, text } = props
  return (
    <div
      style={{
        position: 'relative',
        minHeight: 200,
        marginBottom: 24,
        boxShadow: '0 10px 15px yellow inset, 0 0 10px 3px orange',
        overflow: 'scroll',
        borderRadius: 2,
        padding: 20,
      }}
    >
      <div
        style={{
          height: 30,
          width: 30,
          objectFit: 'contain',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(/images/fire.gif)`,
        }}
      />
      <div
        style={
          {
            // position: 'absolute',
            // top: '125%',
            // marginInline: 'auto',
            // left: '50%',
            // transform: 'translateX(-50%)',
          }
        }
      >
        <h2
          style={{
            // fontSize: 40,
            textShadow: '0 5px 3px rgba(255, 255, 255, 0.6)',
          }}
        >
          {title}
        </h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
