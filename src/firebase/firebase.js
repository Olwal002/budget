import * as firebase from 'firebase';

const  config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DORMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

  firebase.initializeApp(config);
  const database = firebase.database();

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

//   database.ref().set({
//       name: 'Isaac',
//       age: 29,
//       stressLevel: 6,
//       job: {
//       title: 'Software developer',
//       company: 'Facebook'
//       },
//       location: {
//           city: 'Kisumu',
//           country: 'Spain'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed', e)
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company':'Amazon',
//       'location/city':'Barcelona'
//   });

//   database.ref('name').set('John');
//   database.ref('location/city').set('Los Angelos');
//   database.ref('attributes').set({
//       height: 73,
//       weight: 150
//   }).then(() => {
//       console.log("Attributes was saved")
//   }).catch((e) => {
//       console.log('Things didnt work')
//   })

// database.ref()
//         .remove()
//         .then(() => {
//             console.log('Data was removed')
//         }).catch((e) => {
//             console.log('Did not remove data')
//         });

//database.ref().push(['perfume','jeans','t-shirt']);

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount:109500,
//     createdAt: 9756566464
// }
// )

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount:5000,
//     createdAt: 767465757
// }
// );

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount:1200,
//     createdAt: 9783434434
// }
// );

//read data from firebase
//on uses a callback
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// })

// //once uses promises
// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
        
//     });

//     console.log(expenses);
// });

export { firebase, database as default}