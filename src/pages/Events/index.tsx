import LeagueDetails from '@/pages/Events/components/LeagueDetails'
import ActiveEvents from '@/pages/Events/components/ActiveEvents'
import FinishedEvents from '@/pages/Events/components/FinishedEvents'

function Events() {
    return (
        <>
            <LeagueDetails />
            <ActiveEvents />
            <FinishedEvents />
        </>
    )
}

export default Events