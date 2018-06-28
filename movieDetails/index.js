$(document).ready(() => {

 $('#getDataByMovie').click(()=>{
    let fname = document.getElementById("fname").value;
    let year =  document.getElementById("year").value;
    let movieUrl = 'http://www.omdbapi.com/?t='+fname+'&y='+year+'&apikey=f2d72e97';
          getAllData(movieUrl); 
})

$('#getDataById').click(()=>{
    let movieId = document.getElementById("movieID").value;
    let movieUrl = 'http://www.omdbapi.com/?i='+movieId+'&apikey=f2d72e97';
          getAllData(movieUrl); 
})


}); // end document.ready function

let getAllData = (movieUrl) => {
    

    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url:movieUrl,
        timeout:10000, // 10 seconds

        success: (response) => {
            alert("Movie Details Found!!!")
            $('body').css('background-color','black');
            $('#accordionExample').css('display', 'none');

            $('#dataSection').css('display', 'block');

            $('#head').css('display', 'none');
            $('footer').css('display', 'none');

            console.log(response);


            console.log(response.Director);
            console.log(response.Plot);
            console.log('Hiiiiiiiiiiiii   '+response.Poster);

            $('#movie').append(response.Title);
            $('#director').append(response.Director);
            $('#release').append(response.Released);
            $('#runtime').append(response.Runtime);
            $('#boxoffice').append(response.BoxOffice);
            $('#plot').append(response.Plot);
            $('#award').append(response.Awards);
            $('#imdb').append(response.imdbRating);
            $('#production').append(response.Production);

            let img = 'movie-poster-coming-soon.png';
            let noImage = response.Poster;
            if(noImage=='N/A'){
                console.log('Inside if');
                $('#poster').html('<img src="' + img + '" class="img-fluid posterWidth"/>');
            }else{
                console.log('inside else')
                $('#poster').html('<img src="' + response.Poster + '" class="img-fluid posterWidth"/>');
            }
            let actors = response.Actors
            var actorsList  = actors.split(",")
            for(actor of actorsList){
                console.log(actor)

                 let tempRow = ` <div class="row">
                                     <div class="col">${actor}</div>
                                </div>`

                 $("#actor").append(tempRow); 
            }
            let obj = response.Ratings
            let len =obj.length;
            console.log('length is'+len)
            if(len==0){
                 $("#rating").append('No Ratings found'); 
             }
             else{

            for(i=0;i<len;i++){

                 let tempRow = ` <div class="row">
                                     <div class="col-8">${response.Ratings[i].Source}</div>
                                     <div class="col-4">${response.Ratings[i].Value}</div>
                                </div>`

                 $("#rating").append(tempRow); 
            }
            }


        }, error: (err,textStatus) => {

            if(textStatus === "timeout"){
                alert('Cannot fetch details')
            }

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}