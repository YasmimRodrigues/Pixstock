/**
 * @copyright yasmimrbm25 2026
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { urlEncode } from "./utils/urlEncode.js";

const /** {String} */ API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const /** {Object} */ headers = new Headers();
headers.append("Authorization", API_KEY);

const /** {Object} */ requestOptions = { headers };

/**
 * Fetch data from Pexels
 * @param {string} url Fetch Url
 * @param {Function} sucessCallback Sucess callback function
 */

const fetchData = async function (url, sucessCallback) {
    const /** {Object} */ response = await fetch(url, requestOptions);

    if(response.ok) {
        const /**Object */ data = await response.json();
        sucessCallback(data);
    }
}

let /** {String} */ requestUrl = "";

const /** {Object} */ root = {
    default: "https://api.pexels.com/v1/",
    videos: "https://api.pexels.com/videos/"
}

export const /** {Object} */ client = {

    photos: {

        /**
         * Search photos
         * @param {Object} parameters Url Object
         * @param {Function} callback Callback function
         */

        search(parameters, callback) {
            requestUrl = `${root.default}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        /**
         * Curated photos
         * @param {Object} parameters Url Object
         * @param {Function} callback Callback function
         */
        curated(parameters, callback) {
            fetchData(`${root.default}curated?${urlEncode(parameters)}`, callback);
        },

        /**
         * Get single photo detail
         * @param {String} id Photo ID
         * @param {Function} callback Callback function
         */

        detail(id, callback) {
            fetchData(`${root.default}photos/${id}`, callback);
        }
    }

}