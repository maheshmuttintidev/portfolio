import * as React from 'react'

interface BlurryColorFulAnimationProps {
  title?: string
}

export default function BlurryColorFulAnimation(
  props: BlurryColorFulAnimationProps
): React.ReactElement {
  const { title } = props
  return (
    <div
      style={{ position: 'relative', width: '260px', transform: 'scale(0.5)' }}
    >
      <div
        className="flex rotate-type-1  scale-type-1 flex-wrap bg-red"
        style={{
          transform: 'rotate(-45deg)',
          border: '15px solid white',
          filter: 'blur(3px)',
          zIndex: -1,
          boxShadow: '0 40px 20px rgba(34,34, 124, 0.5)',
        }}
      >
        <div className="rotate-45-up ml-10 mt-10-up flex flex-wrap">
          {'.'
            .repeat(6)
            .split('')
            .map((_, i) => (
              <div key={i} className="circle bg-blue" />
            ))}
        </div>
        <div className="rotate-45-down ml-10 mt-10-up flex flex-wrap">
          {'.'
            .repeat(6)
            .split('')
            .map((_, i) => (
              <div key={i} className="circle bg-orange" />
            ))}
        </div>
        <div className="rotate-45-down ml-10 mt-10-up flex flex-wrap">
          {'.'
            .repeat(6)
            .split('')
            .map((_, i) => (
              <div key={i} className="circle bg-lime" />
            ))}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '125%',
          marginInline: 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h2 style={{ fontSize: 40 }}>{title}</h2>
      </div>
    </div>
  )
}
