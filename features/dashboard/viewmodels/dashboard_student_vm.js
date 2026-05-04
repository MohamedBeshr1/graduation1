document.addEventListener('DOMContentLoaded', function () {
    console.log("Student ViewModel Loaded... ✅");

    window.uploadProjectFile = function () {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            alert("⚠️ يرجى اختيار ملف أولاً");
            return;
        }
        const maxSize = 20 * 1024 * 1024; // 20MB
        if (file.size > maxSize) {
            alert("❌ الملف كبير جداً! الحد الأقصى 20 ميجا بايت.");
            return;
        }
        const allowedExtensions = /(\.zip|\.rar|\.pdf)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert("❌ خطأ: يرجى رفع ملفات مضغوطة (Zip/Rar) أو PDF فقط.");
            return;
        }
        console.log("جاري معالجة: " + file.name);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            console.log("تم رفع: " + progress + "%");

            if (progress >= 100) {
                clearInterval(interval);
                alert("✅ تم رفع مشروعك بنجاح يا هندسة!");
            }
        }, 300);
    };
});