import Contactbanner from '@/components/Contactbanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import VideoPromotion from '@/components/VideoPromotion'

export default function ContactPage() {
  return (
    <div>
        <Header/>
        <main className='bg-[#101010] text-white'>
            <Contactbanner/>
            <ContactSection/>
            <VideoPromotion/>
            <Footer/>
        </main>
    </div>
  )
}