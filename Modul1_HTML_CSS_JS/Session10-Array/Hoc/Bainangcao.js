alert("CHÀO MỪNG BẠN ĐẾN VỚI PHẦN MỀM QUẢN LÝ SINH VIÊN");
let DSSV = [["Lại Hồ Phước Lộc", 2001, "0794506592"], ["Phạm Thị Xuyên", 1999, "0379292921"]];
let check = 0;
while (check == 0) {
    let choice = Number(prompt("Hãy nhập lựa chọn của bạn: \n1. Thêm mới sinh viên\n2. Cập nhật thông tin sinh viên\n3. Xem danh sách sinh viên\n4. Xóa sinh viên\n5. Thoát chương trình"));
    switch (choice) {
        case 1: {
            console.log("Danh sách sinh viên hiện tại là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }
            console.log("Hãy nhập thông tin sinh viên muốn thêm vào:");
            let arr = [];
            let hoTen = String(prompt("Hãy nhập họ tên: "));
            let namSinh = Number(prompt("Hãy nhập năm sinh: "));
            let soDienThoai = String(prompt("Hãy nhập số điện thoại: "));
            arr.push(hoTen);
            arr.push(namSinh);
            arr.push(soDienThoai)
            DSSV.push(arr);
            console.log("Danh sách sinh viên hiện tại sau khi thêm là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }            break;
        }
        case 2: {
            let indexUpdate = Number(prompt("Hãy chọn sinh viên bạn muốn cập nhật"));
            let indexUpdate1 = Number(prompt("Hãy nhập vị trí bạn muốn cập nhật: "));
            let listUpdate = prompt("Hãy nhập thông tin bạn muốn cập nhật: ")
            DSSV[indexUpdate - 1][indexUpdate1 - 1] = listUpdate;
            console.log("Danh sách sinh viên hiện tại sau khi cập nhật là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }
            break;
        }
        case 3: {
            console.log("Danh sách sinh viên hiện tại là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }
            break;
        }
        case 4: {
            console.log("Danh sách sinh viên hiện tại là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }
            let indexDelete = Number(prompt("Hãy nhập vị trí sinh viên bạn muốn xóa: "));
            DSSV.splice(indexDelete - 1, 1);
            console.log("Danh sách sinh viên sau khi xóa là: ");
            for (let i = 0; i < DSSV.length; i++) {
                console.log(`${i + 1}. `);
                console.log("Họ và tên: ", DSSV[i][0]);
                console.log("Tuổi: ", DSSV[i][1]);
                console.log("SĐT: ", DSSV[i][2]);
            }
            break;
        }
        case 5: {
            check = 1;
            alert("Cảm ơn bạn đã sử dụng chương trình");
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!!");
            break;
        }
    }
}