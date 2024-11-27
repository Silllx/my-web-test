// เปลี่ยนข้อความ Title ด้วยเอฟเฟกต์พิมพ์ทีละตัว
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const titleText = "สวัสดีครับ! ผมนายจักรวรรดิ์ เมืองรมย์";
const descriptionText = "Portfolio คณะเทคโนโลยีสาระสนเทศ สาขาวิชาเทคโนโลยีสารสนเทศ พระจอมเหล้าเจ้าคุณทหารลาดกระบัง";
let titleIndex = 0;
let descriptionIndex = 0;

function typeEffect() {
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText[titleIndex];
        titleIndex++;
        setTimeout(typeEffect, 100);
    } else if (descriptionIndex < descriptionText.length) {
        descriptionElement.textContent += descriptionText[descriptionIndex];
        descriptionIndex++;
        setTimeout(typeEffect, 50);
    }
}

// เริ่ม Type Effect เมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", typeEffect);

// ไปหน้าถัดไปเมื่อคลิกปุ่ม
document.getElementById("nextPageBtn").addEventListener("click", () => {
    window.location.href = "next_page.html"; // เปลี่ยน URL ไปหน้าถัดไป
});
