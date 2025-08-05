import Hero from '@/pages/Home/components/Hero'
import IntroGrid from '@/pages/Home/components/IntroGrid'
import EventsPreview from '@/pages/Home/components/EventsPreview'
import ClubsPreview from '@/pages/Home/components/ClubsPreview'
import Staffs from '@/pages/Home/components/Staffs'
import InviteWidget from '@/pages/Home/components/InviteWidget'

function Home() {
    return (
        <>
            <Hero />
            <IntroGrid />
            <EventsPreview />
            <ClubsPreview />
            <Staffs />
            <InviteWidget />
        </>
    )
}

export default Home