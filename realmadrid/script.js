const scriptURL = 'https://script.google.com/macros/s/AKfycbzMasigDijZ1HDDuyIE8oeMjoaytsGQ7Eas9Rg7tr6ZyHaaJJuHe6rC_wfD44AZAYXcmw/exec'


const form = document.forms['myForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})