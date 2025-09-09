import Section from '../components/Section'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team(){
  return (
    <Section eyebrow="Team" title="Meet Our Clinicians" intro="A multi‑disciplinary team with a shared commitment to aesthetics, precision, and comfort.">
      <div className="grid cols-3">
        {team.map((m,i)=> <TeamCard key={i} {...m} />)}
      </div>
    </Section>
  )
}

