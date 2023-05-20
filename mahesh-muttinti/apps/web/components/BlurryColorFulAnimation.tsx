import * as React from 'react'

interface BlurryColorFulAnimationProps {
  title?: string
  imgUrl?: string
  text?: string
}

export default function BlurryColorFulAnimation(
  props: BlurryColorFulAnimationProps
): React.ReactElement {
  const { title, text } = props
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
          backgroundImage: `url(/fire.gif)`,
        }}
      />
      <div style={{}}>
        <h2
          style={{
            fontSize: 40,
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
