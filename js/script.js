// JavaScript for the Student Performance Analyzer download page
document.addEventListener('DOMContentLoaded', function() {
    // Add download counter functionality
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // You could add analytics tracking here
            console.log('Download button clicked');
        });
    }
});
