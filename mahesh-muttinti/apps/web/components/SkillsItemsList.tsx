import * as React from 'react'
import BlurryColorFulAnimation from './BlurryColorFulAnimation'

export default function SkillsItemsList(): React.ReactElement {
  const itemStyle = {
    gap: 10,
  }
  return (
    <div
      style={{
        borderRadius: 12,
        boxShadow:
          '0 10px 15px green inset, 0 0 70px 30px lime, 0 300px 200px 30px gold inset',
        overflow: 'scroll',
        paddingBottom: 36,
      }}
    >
      <div className="flex space-between flex-wrap" style={{ ...itemStyle }}>
        <BlurryColorFulAnimation title={'HTML5'} />
        <BlurryColorFulAnimation title={'CSS3'} />
      </div>
      <div className="flex space-between flex-wrap" style={{ ...itemStyle }}>
        <BlurryColorFulAnimation title={'JS'} />
        <BlurryColorFulAnimation title={'REACT JS'} />
      </div>
      <div className="flex space-between flex-wrap" style={{ ...itemStyle }}>
        <BlurryColorFulAnimation title={'REACT NATIVE'} />
        <BlurryColorFulAnimation title={'NODE JS'} />
      </div>
    </div>
  )
}
