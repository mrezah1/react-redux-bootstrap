import Swal from "sweetalert2";
const sweetAlertMaker = (options = { confirmButtonText: "Ok" }) =>
  Swal.fire({
    ...options,
  });
export default sweetAlertMaker;
