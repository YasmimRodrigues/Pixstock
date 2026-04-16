/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

export const updateUrl = (filterObj, searchType) => {
    setTimeout(() => {
        const /** {String} */ root = window.location.origin;
        console.log(filterObj);
        console.log(searchType);
        const /** {String} */ searchQuery = urlEncode(filterObj);
    });
}