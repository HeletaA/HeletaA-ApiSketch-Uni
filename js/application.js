$(document).ready(function () {

    //need NMA API Key
    //https://www.nma.gov.au/about/our-collection/our-apis
    //docs: https://github.com/NationalMuseumAustralia/Collection-API/wiki/Getting-started

    //my API key

    var key = 'aGyOTzAchbsscZt7OnZQ4hSvgSsiW0hW'

    var objectid = '71110'

    //api call 
    //api call is made to all the objects in the NMA of the Aboriginal Collection
    var url = 'https://data.nma.gov.au/object/' + objectid + '&apikey=' + key;
    //api call is made to search the objects in the NMA that contain Aboriginal
    var searchQuery = 'aboriginal';
    var searchUrl = 'https://data.nma.gov.au/object?text=' + searchQuery;
    // var searchfifity = 'object?text=aboriginal&offset=50' + searchQuery;

    $.getJSON(searchUrl, function (apiData) {
        console.log('in search query');
        console.log(apiData);

        // let's loop through the data
        for (i = 0; i < apiData.data.length; i++) {
            //variable to hold single record
            var r = apiData.data[i]
            // output the title to the console so we know it works.
            console.log(r.title);

            //showing the data as html
            // create an item
            var item = $('<div class="item">');
            item.append('<h2>' + r.title + '</h2>');
                      
            item.append('<p>' + r.physicalDescription + '</p>');
            item.append('<p>' + r.additionalType + '</p>');
            item.append('<p>' + r.collection.title + '</p>');
            if (r.significanceStatement != undefined) {
                item.append('<p>' + r.significanceStatement + '</p>');
            };
            $('.item-container').append(item);
        }
    });
});



