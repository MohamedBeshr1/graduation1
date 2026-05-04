const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role');
const loginForm = document.getElementById('loginForm');
const roleSubtitle = document.getElementById('roleSubtitle');

if (role === 'student') {
    // لو طالب يروح لداشبورد الطالب
    loginForm.action = "../../dashboard/views/student_dashboard.html";
    roleSubtitle.innerText = "تسجيل دخول الطلاب";
} else if (role === 'instructor') {
    // لو دكتور يروح لداشبورد الدكتور
    loginForm.action = "../../dashboard/views/instructor_dashboard.html";
    roleSubtitle.innerText = "تسجيل دخول أعضاء هيئة التدريس";
} else if (role === 'assistant') {
    // لو معيد يروح لداشبورد المعيد
    loginForm.action = "../../dashboard/views/Assistant_dashboard.html";
    roleSubtitle.innerText = "تسجيل دخول المعيدين والمسؤولين";
}