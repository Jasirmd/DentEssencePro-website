import Section from '../components/Section'
import VideoHero from '../components/VideoHero'

const photos = [
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f87?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554734867-bf3c0c11add7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588771939071-2b8b4f0353d8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588771930290-a3d2b2c6d9b9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612636165120-9c1c385f98db?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery(){
  return (
    <>
      <VideoHero title="Gallery" subtitle="Our clinic and successful treatment results" />
    <Section>
      <div className="grid cols-3">
        {photos.map((src, i)=> (
          <img key={i} src={src} alt="Clinic or case" className="card" style={{padding:0, height:240, objectFit:'cover'}}/>
        ))}
      </div>
    </Section>
    </>
  )
}

