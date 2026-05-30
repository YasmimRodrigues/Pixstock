/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */


import { ripple } from "../../js/utils/ripple.js";
import { gridInit, updateGrid } from "../../js/utils/masonry_grid.js";
import { photoCard } from "../../js/photo_card.js";
import { menu } from "../../js/menu.js";
import { favorite } from "../../js/favorite.js";

/**
 * Add ripple effect
 */

const /** {NodeList} */ $rippleElems = document.querySelectorAll("[data-ripple]");

$rippleElems.forEach($rippleElem => ripple($rippleElem));

/**
 * Page transition
 */

window.addEventListener("loadstart", function () {
    document.body.style.opacity = "0";
});

window.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});

/**
 * Menu toggle
 */

const /** {NodeList} */ $menuWrappers = document.querySelectorAll("[data-menu-wrapper]");

$menuWrappers.forEach($menuWrapper => {
    menu($menuWrapper);
});

/**
 * Add to favorite
 */

const /** {Object} */ favoritePhotos = JSON.parse(window.localStorage.getItem("favorite")).photos;
const /** {NodeElement} */ $favoriteBtn = document.querySelector("[data-add-favorite]");
const /** {String} */ photoId = window.location.search.split("=")[1];

$favoriteBtn.classList[favoritePhotos[photoId] ? "add" :"remove"]("active");

favorite($favoriteBtn, "photos", photoId);
