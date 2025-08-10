import Hero from '@/pages/Home/components/Hero'
import IntroBento from '@/pages/Home/components/IntroBento'
import ClubsPreview from '@/pages/Home/components/ClubsPreview'
import EventsPreview from '@/pages/Home/components/EventsPreview'
import InviteWidget from '@/pages/Home/components/InviteWidget'

export default function Home() {
    return (
        <>
            <Hero />
            <IntroBento />
            <ClubsPreview />
            <EventsPreview />
            <InviteWidget />
        </>
    )
}