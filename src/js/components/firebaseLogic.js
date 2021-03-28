export default function firebaseLogic() {
    const classes = {
        success: 'is-success'
    }

   /* const containerQuizForm = document.querySelector('[data-quiz-section]');
    const quizForm = containerQuizForm.querySelector('[data-quiz-form]');*/
    const containerRegisterForm = document.querySelector('[data-register-section]');
    const registerForm = containerRegisterForm.querySelector('[data-register-form]');
   /* db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    })*/



    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('users').add({
            Name: registerForm.Name.value,
            Phone: registerForm.Phone.value,
            email: registerForm.email.value
        })
        containerRegisterForm.classList.add(classes.success);
    })
}