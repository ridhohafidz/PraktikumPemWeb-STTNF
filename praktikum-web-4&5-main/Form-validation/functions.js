function validate() {
    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let jam = document.getElementById("jam");
    let tujuan = document.getElementById("tujuan");
    let jumlah = document.getElementById("jumlah");
    if (nama.value !== "" && nama.value.length < 30) {
        nama.style.borderColor = "blue";
        if (email.value !== "" && email.hasAttribute("type", "email")) {
            email.style.borderColor = "blue";
            if (jam.value !== "" && email.hasAttribute("type", "time")) {
                jam.style.borderColor = "blue";
                if (tujuan.value !== "") {
                    tujuan.style.borderColor = "blue";
                    if (jumlah.value !== "" && email.hasAttribute("type", "number")) {
                        jumlah.style.borderColor = "blue";
                        isi = "Nama Pelanggan : " + nama.value + "<br/>" + "Email : " + email.value + "<br/>" +
                            "Jam Keberangkatan : " + jam.value + "<br/>" + "Tujuan : " + tujuan.value + "<br/>" +
                            "Jumlah Tiket : " + jumlah.value;
                        document.getElementById("res").innerHTML = isi;
                    } else {
                        jumlah.style.borderColor = "red";
                        jumlah.focus()
                        window.alert("Tiket tidak boleh kosong dan pastikan berformat nilai bulat");
                        return false;
                    }
                } else {
                    tujuan.style.borderColor = "red";
                    tujuan.focus()
                    window.alert("Tujuan tidak boleh kosong");
                    return false;
                }
            } else {
                jam.style.borderColor = "red";
                jam.focus()
                window.alert("Jam tidak boleh kosong dan pastikan berformat waktu");
                return false;
            }
        } else {
            email.style.borderColor = "red";
            email.focus()
            window.alert("Email tidak boleh kosong dan pastikan berformat email");
            return false;
        }
    } else {
        nama.style.borderColor = "red";
        nama.focus()
        window.alert("Nama penumpang tidak boleh kosong dan tidak lebih dari 30 karakter");
        return false;
    }
}