import Head from 'next/head';
import { MongoClient } from 'mongodb';

import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';


// // function HomePage(props) {
// //   return (
// //     <Fragment>
// //       <Head>
// //         <title>React Meetups</title>
// //         <meta
// //           name="description"
// //           content="Browse a list of highly active React meetups!" />
// //       </Head>
// //       <MeetupList meetups={props.meetups} />;
// //     </Fragment>
// //   );
// // }

// function HomePage(props) {
//   return <MeetupList meetups={props.meetups} />;
// }

// // export async function getServerSideProps(context) {
// //   const req = context.req;
// //   const res = context.res;

// //   return {
// //     props: {
// //       meetups: DUMMY_MEETUPS
// //     },
// //   }; 
// // }

// export async function getStaticProps() {
//   // fetch data from an API

//   const client = await MongoClient.connect('mongodb+srv://abhijeet:GfJVVLfDWZ9Lpu0A@cluster0.dxe49ry.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'            
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection('meetups'); // collection means table in nosql. Document are entries in collection.

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups

//       // meetups: meetups.map(meetup => ({
//       //   title: meetup.title,
//       //   address: meetup.address,
//       //   image: meetup.image,
//       //   id: meetup._id.toString()
//       // }))
//     },
//     revalidate: 60
//   };
// }

// export default HomePage;



// import MeetupList from '../components/meetups/MeetupList';
   


  function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect('mongodb+srv://abhijeet:GfJVVLfDWZ9Lpu0A@cluster0.dxe49ry.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'            
      );
      const db = client.db();
    
      const meetupsCollection = db.collection('meetups'); // collection means table in nosql. Document are entries in collection.
    
      const meetups = await meetupsCollection.find().toArray();
    
      client.close();

  return {
    props: {
      meetups:  meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
    }))
  },
    revalidate: 1
  }; 
}

export default HomePage;
