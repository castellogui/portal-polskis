import Swal from "sweetalert2";

export function showMessage(title, icon, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonColor: "#ff5757"
    })
}