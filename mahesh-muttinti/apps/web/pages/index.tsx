import { Button } from 'ui'
import SkillsItemsList from '../components/SkillsItemsList'

export default function Web() {
  return (
    <>
      <main className="content">
        <div className="container">
          <h1 className="pt-5" style={{ borderBottom: '7px solid white' }}>
            Mahesh Muttinti Dev
          </h1>
          <SkillsItemsList />
        </div>
      </main>

      <footer
        className="container justify-center flex"
        style={{ zIndex: 10, marginTop: 60, paddingBottom: 14 }}
      >
        <p>Developed by Mahesh Muttinti</p>
      </footer>
    </>
  )
}
