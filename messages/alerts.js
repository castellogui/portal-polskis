import Swal from "sweetalert2";

export async function showMessage(title, icon, text) {
    await Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonColor: "#ff5757",
        iconColor: "#ff5757"
    })
}