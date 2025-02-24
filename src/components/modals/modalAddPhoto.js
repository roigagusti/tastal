import React from "react";
import "./modal.css";

export const ModalAddPhoto = () => {
    return (
        <div class="panel-body">
            <div class="center modalAddPhoto">
                <ul class="modalAddPhoto">
                    <li class="selecPhoto">Seleccionar foto</li>
                    <li class="disabled">Escoger de Instagram</li>
                </ul>
            </div>
        </div>
    )
}

export default ModalAddPhoto;