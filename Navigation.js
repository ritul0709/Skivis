function handleGridAction(type) {
    if(type === 'Prescription') {
        document.getElementById('file-input').click();
    } else if(type === 'Appointment') {
        window.open("https://calendar.google.com/", "_blank");
    } else if(type === 'Consultation') {
        window.open("https://meet.google.com/", "_blank");
    }
}
