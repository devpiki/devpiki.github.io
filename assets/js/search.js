(function () {
    var SEARCH_BOX_ID = "search-box";
    var NO_RESULTS_MESSAGE_ID = "not-found";
    var SEARCH_RESULTS_CONTAINER_ID = "search-results";
    var QUERY_VARIABLE_URL_STRING = "query";

    function getQueryVariable(queryParam) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var param = pair[0];
            var value = pair[1];

            if (param === queryParam) {
                return decodeURIComponent(value.replace(/\+/g, "%20"));
            }
        }
    }

    function getSearchTerm() {
        return getQueryVariable(QUERY_VARIABLE_URL_STRING);
    }

    function setSearchBoxValue(searchBoxValue) {
        document.getElementById(SEARCH_BOX_ID).setAttribute("value", searchBoxValue);
    }

    function showNoResultsMessage() {
        document.getElementById(NO_RESULTS_MESSAGE_ID).style.display = "block";
    }

    function setSearchResultsHTML(innerHTML) {
        var searchResults = document.getElementById(SEARCH_RESULTS_CONTAINER_ID);
        searchResults.innerHTML = innerHTML;
    }

    function createPostListingHTML(postItem) {
        var metaHTML = "<div class='post-meta'>" + postItem.date + "</div>";
        var headingHTML = "<h2><a  class='post-link' href='" + postItem.url + "''>" + postItem.title + "</a></h2>";
        var descriptionHTML = "<p>" + postItem.content.substring(0, 150) + "</p>";
        return  '<li>' + metaHTML + headingHTML + descriptionHTML + '</li>';
    }

    function displaySearchResults(results, store) {
        if (results.length) {
            var postsListingHTML = "";
            for (var i = 0; i < results.length; i++) {
                var postItem = store[results[i].ref];
                postsListingHTML += createPostListingHTML(postItem);
            }
            setSearchResultsHTML(postsListingHTML);
        } else {
            var arr = ['fa-frown-o','fa-meh-o', 'fa-question-circle-o', 'fa-smile-o', 'fa-user-times'];
            var x = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
            
            document.querySelector('#not-found i').classList.add(arr[x]);
            showNoResultsMessage();
        }
    }

    function addPostToSearchIndex(lunrIndex, key, postJSON) {
        lunrIndex.add({
            "id": key,
            "title": postJSON.title,
            "author": postJSON.author,
            "categories": postJSON.categories,
            "content": postJSON.content
        });
    }

    function search(searchTerm) {
        setSearchBoxValue(searchTerm);

       /* var lunrIndex = lunr(function () {
            this.field("id");
            this.field("title", {
                boost: 10
            });
            this.field("author");
            this.field("categories");
            this.field("content");
        });*/

        var lunrIndex = new lunr.Index;
        lunrIndex.field('id');
        lunrIndex.field('title', { boost: 10 });
        lunrIndex.field('author');
        lunrIndex.field('categories');
        lunrIndex.field('content');

        for (var key in window.store) {
            addPostToSearchIndex(lunrIndex, key, window.store[key])
        }

        var results = lunrIndex.search(searchTerm);
        displaySearchResults(results, window.store);
    }

    var searchTerm = getSearchTerm();
    if (searchTerm) {
        search(searchTerm);
    }
})();