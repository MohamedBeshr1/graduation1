// features/dashboard/viewmodels/dashboard_viewmodel.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. جلب بيانات المستخدم (User Data) ---
    // محاكاة للي هيحصل لما تربط بالباك إند
    const loggedInUser = "د. محمد بشر"; 
    const userNameEl = document.getElementById('userName');
    if (userNameEl) {
        userNameEl.textContent = loggedInUser;
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

    // وظيفة القفل عند الضغط على الطبقة المظلمة
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // --- 3. تشغيل وتقوية التقويم (FullCalendar) ---
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

            // هنا مستقبلاً هنضيف الـ Events اللي جاية من الداتابيز
            events: [
                // مثال: { title: 'مناقشة مشروع تخرج', start: '2026-03-31' }
            ]
        });
        calendar.render();
    }
});