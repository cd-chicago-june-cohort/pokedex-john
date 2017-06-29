$(document).ready(function() {

    var $pics = $("#pics");
    for (var i = 1; i < 152; i++) {
        var url = "http://pokeapi.co/media/img/";
        url += i;
        url += ".png";
        var str = "<img alt='pokemon' src='";
        str += url;
        str += "' id='" + i + "'/>";
        if (i % 3 === 0) {
            str += "<br>";
        }
        $pics.append(str);
    }
    var $img = $("img");
    var $pokedex = $("#pokedex");



    $img.click(function() {

        var num = $(this).attr("id");

        var url = "http://pokeapi.co/api/v2/pokemon/" + num + "/";


        $.get(url, function(info) {

            var pokName = info.name;
            pokName = pokName.charAt(0).toUpperCase() + pokName.slice(1);
            var imgUrl = "http://pokeapi.co/media/img/" + num + ".png";
            var pokTypes = [];
            for (var i = 0; i < info.types.length; i++) {
                var myType = info.types[i].type.name;
                pokTypes.push(myType);
            };
            var pokHeight = info.height;
            var pokWeight = info.weight;
            //console.log(pokName, imgUrl, pokTypes, pokHeight, pokWeight);

            var htmlStr = "<h1>" + pokName + "</h1><img src='" + imgUrl + "'/><h3>Types</h3><ul>";

            for (var i = 0; i < pokTypes.length; i++) {
                htmlStr += "<li>" + pokTypes[i] + "</li>";
            }

            htmlStr += "</ul><h3>Height</h3><p>" + pokHeight + "</p><h3>Weight</h3><p>" + pokWeight + "</p>";


            $pokedex.html(htmlStr);


        }, "json");



       
        

    });

});