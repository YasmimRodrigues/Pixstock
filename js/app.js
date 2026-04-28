/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { client } from "./api_configure.js";

/**
 * Render curated photos in home page
 */

const /** {NodeElement} */ $photoGrid = document.querySelector("[data-photo-grid]");

$photoGrid.innerHTML = `<div class="skeleton"></div>`.repeat(18);

client.photos.curated({ page: 1, per_page: 20}, data => {
    console.log(data);
    $photoGrid.innerHTML = "";

    data.photos.forEach(photo => {
        const /** {NodeElement} */ $photoCard = photoCard(photo);
    });

});