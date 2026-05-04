
document.addEventListener('DOMContentLoaded', function () {
    console.log("Assistant ViewModel Loaded...");

    window.addNewInstructor = function () {
        alert("سيتم فتح نافذة إضافة دكتور جديد قريباً");
    };
    window.saveDeadlines = function () {
        const dateInput = document.querySelector('input[type="date"]');
        console.log("Saving new date: " + dateInput.value);
        alert("تم حفظ المواعيد الجديدة بنجاح");
    };
});
