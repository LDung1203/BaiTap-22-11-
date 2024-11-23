function hienthongtin() {
    var person = [
        {Tên :" Dinh Duc ", sex: " male ", address: " HN "},
        {Tên :"Luu Dung", sex: "male", address: "HD"},
        {Tên :"Van Duong", sex: "male", address: "HN"},
        {Tên :"Hai Anh", sex: "male", address: "HN"},
        {Tên :"Khuong Khai", sex: "male", address: "HN"},
        {Tên :"Nguyen Linh", sex: "male", address: "HN"},
        {Tên :"Tuan Phong", sex: "male", address: "HN"}
    ];

    let table =  document.getElementById("thanhvien");

    table.innerHTML = `
        <tr>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
        </tr>
    `;
        
    for (let tv of person){
        table.innerHTML += `
            <tr>
                <td>${tv.Tên}</td>
                <td>${tv.sex}</td>
                <td>${tv.address}</td>
            </tr>
        `;
    };
}