/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { client } from "../../js/api_configure.js";
import { collectionCard } from "../../js/collection_card.js";

/**
 * Render featured collections
 */

const /** {NodeElement} */ $collectionGrid = document.querySelector("[data-collection-grid]");
const /** {Number} */ perPage = 36;
let /** {Number} */ currentPage = 1;
let /** {Number} */ totalPage = 0;

/**
 * 
 * @param {Number} page Page number
 */

const loadCollections = function (page) {
    
    client.collections.featured({ per_page: perPage, page: page }, data => {

        totalPage = Math.ceil(data.total_results / perPage);

        data.collections.forEach(collection => {

            const /** {NodeElement} */ $collectionCard = collectionCard(collection);

            $collectionGrid.appendChild($collectionCard);

        });

    });

}