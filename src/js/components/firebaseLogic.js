export default function firebaseLogic() {
    const config = {
        openClass: 'is-open'
    }

    const id = location.search.split('?=')[1];

    const invitation = document.querySelector('.js-invitation');
    const confirmation = invitation.querySelector('[data-invitation-confirmation]');
    const buttons = confirmation.querySelectorAll('[data-btn-going]');
    const form = invitation.querySelector('[data-invitation-form]');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.btnGoing === 'true') {
                db.collection('users').doc(id).update({
                    Coming: true
                })

                confirmation.classList.remove(config.openClass);
                form.classList.add(config.openClass);
            } else if (btn.dataset.btnGoing === 'false') {
                db.collection('users').doc(id).update({
                    Coming: false
                })
                invitation.classList.remove(config.openClass);
            }
        })
    })

    const headerText = document.querySelector('[data-header-invitation-text]');

    db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            if (doc.id === id) {

                let data = doc.data();
                headerText.innerText = `${data.Name}, вы приглашены на свадьбу`;

                !data.Coming ? invitation.classList.add(config.openClass) : null;
            }
        })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('users').doc(id).update({
            Persons: form.persons.value
        })
        invitation.classList.remove(config.openClass);
    })
}
