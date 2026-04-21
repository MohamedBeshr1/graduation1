// ده كود خاص بصفحة الطالب فقط
document.addEventListener('DOMContentLoaded', function() {
    console.log("Student ViewModel Loaded...");

    // دالة محاكاة رفع الملفات
    window.uploadProjectFile = function() {
        const fileInput = document.getElementById('fileInput');
        if (fileInput && fileInput.files.length > 0) {
            alert("جاري رفع الملف: " + fileInput.files[0].name);
            // هنا الباك هيكتب كود الـ API بتاع الرفع
        } else {
            alert("يرجى اختيار ملف أولاً");
        }
    };
});