document.addEventListener('DOMContentLoaded', (event) => {
    function getDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;
        return today

    }
    let now = new Date();

    // Tạo chuỗi YYYY-MM-DD HH:mm theo giờ VN
    let vnFullTime = new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(now).replace(' ', 'T'); // Thay khoảng trắng bằng chữ T để input hiểu

    console.log(vnFullTime); // Kết quả: 2026-02-10T14:45

    res.render('buyGold.ejs', { currentTime: vnFullTime });
    const dateControl = document.getElementById('dateBuy');
    dateControl.value = vnFullTime;
    console.log(vnFullTime)

    console.log('DOM fully loaded and parsed');
});