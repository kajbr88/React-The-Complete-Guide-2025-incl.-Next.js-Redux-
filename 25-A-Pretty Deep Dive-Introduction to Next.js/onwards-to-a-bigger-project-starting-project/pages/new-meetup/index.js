import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {

    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: { // add this header to make it clear that we're sending JSON data.
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }
    return (
        <Fragment>
            <Head>
                <title>A New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking oppurtunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetupPage;

// our-domain.com/new-meetup
// import NewMeetupForm from '../../components/meetups/NewMeetupForm';

// function NewMeetupPage() {
//   function addMeetupHandler(enteredMeetupData) {
//     console.log(enteredMeetupData);
//   }

//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />
// }

// export default NewMeetupPage;