export default function firebaseLogic() {
    const form = document.querySelector('.js-form');
    db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('users').add({
            Name: form.Name.value,
            Phone: form.Phone.value,
            email: form.email.value
        })
    })
}