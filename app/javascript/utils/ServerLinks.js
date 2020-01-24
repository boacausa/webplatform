import React from "react";

export function redirectToNgoArea() {
    window.open("/ong_area/ongs", "_blank")
}

export function redirectToLogOut() {
    window.location.href = "/users/sign_out";
}
