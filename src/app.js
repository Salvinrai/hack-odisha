// var firebaseConfig = {
//     apiKey: "AIzaSyAetMmzyqpksGjdvXbYVAk5gWmEdH4GC1I",
//     authDomain: "unseen1-1.firebaseapp.com",
//     databaseURL: "https://unseen1-1-default-rtdb.firebaseio.com",
//     projectId: "unseen1-1",
//     storageBucket: "unseen1-1.appspot.com",
//     messagingSenderId: "336843569987",
//     appId: "1:336843569987:web:76be1bbee6a4e8098a8df6",
//     measurementId: "G-REW7MW4FZB"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// document.getElementById('file').addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     const storageRef = firebase.storage().ref(file.name);

//     storageRef.put(file).on('state_changed', (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log(progress);
//         const progressBar = document.getElementById('progress_bar');
//         progressBar.value = progress;
//     });


//     storageRef.getDownloadURL().then(function(url){
//         //const image = document.getElementById('image');
//        // document.write(url);
//         //image.src = url
// });

// });