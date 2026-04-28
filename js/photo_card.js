/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { ripple } from "./utils/ripple.js";

/**
 * Create photo card
 */

export const photoCard = photo => {
    const /** {String} */ root = window.location.origin;
    console.log(photo);

    const {
        alt, 
        avg_color: backdropColor,
        width,
        height,
        id,
        src: { large }
    } = photo;

    const /** {NodeElement} */ $card = document.createElement("div");
    $card.classList.add("card", "grid-list");
    $card.style.backgroundColor = backdropColor;
}