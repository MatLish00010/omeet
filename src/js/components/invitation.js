export default function invitation(invitation) {

    const selectors = {
        control: 'data-btn-going',
    }


    const model = {
        control: invitation.querySelector(`[${selectors.control}]`)
    }
    model.control.addEventListener('click', (event) => {
        event.preventDefault();
        showModal();
    })

    function showModal() {

    }
}