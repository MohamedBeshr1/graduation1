// ده كود خاص بصفحة الأدمن فقط
document.addEventListener('DOMContentLoaded', function() {
    console.log("Admin ViewModel Loaded...");

    // مثال: دالة لإضافة دكتور جديد (Logic بتاع الباك الجاي)
    window.addNewInstructor = function() {
        alert("سيتم فتح نافذة إضافة دكتور جديد قريباً");
    };

    // مثال: دالة لحفظ المواعيد النهائية
    window.saveDeadlines = function() {
        const dateInput = document.querySelector('input[type="date"]');
        console.log("Saving new date: " + dateInput.value);
        alert("تم حفظ المواعيد الجديدة بنجاح");
    };
});
