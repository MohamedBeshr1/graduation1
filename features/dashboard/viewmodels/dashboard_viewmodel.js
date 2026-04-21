// features/dashboard/viewmodels/dashboard_viewmodel.js
document.addEventListener('DOMContentLoaded', function() {
    // التأكد من تحديث الاسم من المخزن
    const savedName = localStorage.getItem('userName');
    const headerName = document.getElementById('userName');
    
    if (savedName && headerName) {
        headerName.innerText = savedName;
    }

    // --- 2. التحكم في القائمة الجانبية (Sidebar Logic) ---
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('openSidebar');

    // وظيفة فتح القائمة
    if (openBtn && sidebar && overlay) {
        openBtn.addEventListener('click', function() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'ar', 
            direction: 'rtl',
            
            // ترجمة الأزرار للعربية
            buttonText: {
                today: 'اليوم',
                month: 'شهر',
                week: 'أسبوع',
                day: 'يوم'
            },
            
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },

            events: [
            ]
        });
        calendar.render();
    }
});