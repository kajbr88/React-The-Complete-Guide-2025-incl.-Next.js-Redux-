import { json, useRouteLoaderData, redirect, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';;

function EventsDetailPage() {
    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {(LoadedEvent) => <EventItem event={LoadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {(LoadedEvents) => <EventsList events={LoadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

export default EventsDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {

        throw json(
            { message: 'Could not fetch details for selected event.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events' }
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }),
        //   {
        //     status: 500,
        //   });
        return json(
            { message: 'Could not fetch events.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({ request, params }) {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    });
}

export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event.' },
            {
                status: 500,
            }
        );
    }
    return redirect('/events');
}
