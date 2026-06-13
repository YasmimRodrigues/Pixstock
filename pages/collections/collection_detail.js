/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { client } from "../../js/api_configure.js";
import { gridInit, updateGrid } from "../../js/utils/masonry_grid.js";
import { photoCard } from "../../js/photo_card.js";
import { videoCard } from "../../js/video_card.js";
import { urlDecode } from "../../js/utils/urlDecode.js";

/**
 * Render collection medias
 */

const /** {NodeElement} */ $collectionGrid = document.querySelector("[data-collection-grid]");
const /** {NodeElement} */ $title = document.querySelector("[data-title]");
const /** {Object} */ collectionGrid = gridInit($collectionGrid);
const /** {Number} */ perPage = 30;
let /** {Number} */ currentPage = 1;
let /** {Number} */ totalPage = 0;
const /** {Object} */ collectionObj = urlDecode(window.location.search.slice(1));