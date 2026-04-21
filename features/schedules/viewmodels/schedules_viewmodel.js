document.addEventListener('DOMContentLoaded', function() {
    // التأكد من تحديث الاسم من المخزن
    const savedName = localStorage.getItem('userName');
    const headerName = document.getElementById('userName');
    
    if (savedName && headerName) {
        headerName.innerText = savedName;
    }
});