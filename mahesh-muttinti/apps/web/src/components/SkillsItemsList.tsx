import * as React from 'react'
import BlurryColorFulAnimation from './BlurryColorFulAnimation'

const items = [
  {
    title: 'HTML5',
    imgUrl:
      'https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png',
    text: 'Hyper Text Markup Language',
  },
  {
    title: 'CSS3',
    imgUrl: 'https://logonoid.com/images/css3-logo.png',
    text: 'Cascaded Style Sheet',
  },
  {
    title: 'JS',
    imgUrl:
      'https://www.pinpng.com/pngs/m/304-3046108_css3-logo-logos-css3-hd-png-download.png',
    text: 'JavasScript',
  },
  {
    title: 'REACT-JS',
    imgUrl:
      'https://www.pinpng.com/pngs/m/304-3046108_css3-logo-logos-css3-hd-png-download.png',
    text: 'React JS',
  },
  {
    title: 'REACT-NATIVE',
    imgUrl:
      'https://www.pinpng.com/pngs/m/304-3046108_css3-logo-logos-css3-hd-png-download.png',
    text: 'React Native',
  },
  {
    title: 'NODE-JS',
    imgUrl:
      'https://www.pinpng.com/pngs/m/304-3046108_css3-logo-logos-css3-hd-png-download.png',
    text: 'Node JS',
  },
]

export default function SkillsItemsList(): React.ReactElement {
  return (
    <div style={{}}>
      {items.map((item, index) => (
        <BlurryColorFulAnimation
          key={index}
          title={item.title ? item.title : ''}
          text={item.text ? item.text : ''}
          imgUrl={item.imgUrl ? item.imgUrl : ''}
        />
      ))}
    </div>
  )
}
