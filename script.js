window.onload = function() {

    var api_key = config.API_KEY;

    let games = [];

    const options = {
        method: 'GET',
        url: 'https://baseballapi.p.rapidapi.com/api/baseball/matches/live',
        headers: {
          'X-RapidAPI-Key': api_key,
          'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        for(var i = 0; i<response.data.events.length; i++){
            const game = {
                home_score: response.data.events[i].awayScore.current,
                away_score: response.data.events[i].homeScore.current,
                home_team: response.data.events[i].homeTeam.name,
                away_team: response.data.events[i].awayTeam.name,
                home_slug: response.data.events[i].homeTeam.slug,
                away_slug: response.data.events[i].awayTeam.slug,
                home_short: response.data.events[i].homeTeam.shortName,
                away_short: response.data.events[i].awayTeam.shortName,
                current_inning: response.data.events[i].status.description,
            };
            games.push(game);
        }
        for(var i=0; i<games.length; i++){
            var container = document.createElement("div");
            container.className = "w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700";
            var container2 = document.createElement("div");
            container2.className = "mb-4";
            var gameTitle = document.createElement("h5");
            gameTitle.innerHTML = games[i].away_short + " at " + games[i].home_short;
            gameTitle.className = "text-xl font-bold leading-none text-gray-900 dark:text-white pb-1";
            container2.appendChild(gameTitle);
            var gameInning = document.createElement("h5");
            gameInning.innerHTML = games[i].current_inning;
            gameInning.className = "text-l leading-none text-gray-700 dark:text-white pt-0.5";
            container2.appendChild(gameInning);
            container.appendChild(container2);
            var container3 = document.createElement("div");
            container3.className = "flow-root";
            var list = document.createElement("ul");
            list.className = "divide-y divide-gray-200 dark:divide-gray-700";
            list.role = "list";
            var awayTeam = document.createElement("li");
            awayTeam.className = "py-3 sm:py-4";
            var container7 = document.createElement("div");
            container7.className = "flex items-center space-x-4";
            var awayImgCont = document.createElement("div");
            awayImgCont.className = "flex-shrink-0";
            var awayImg = document.createElement("img");
            awayImg.className = "w-8 h-8 rounded-full";
            awayImg.src = "https://loodibee.com/wp-content/uploads/mlb-"+  games[i].away_slug +"-logo-300x300.png";;
            awayImg.alt = "Away Team Logo";
            awayImgCont.appendChild(awayImg);
            container7.appendChild(awayImgCont);
            var container8 = document.createElement("div");
            container8.className = "flex-1 min-w-0";
            var teamName = document.createElement("p");
            teamName.innerHTML = games[i].away_team;
            teamName.className = "text-sm font-medium text-gray-900 truncate dark:text-white";
            container8.appendChild(teamName);
            container7.appendChild(container8);
            var container9 = document.createElement("div");
            container9.className = "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white";
            var score = document.createElement("p");
            score.innerHTML = games[i].away_score;
            container9.appendChild(score);
            container7.appendChild(container9);
            awayTeam.appendChild(container7);
            list.appendChild(awayTeam);
            var homeTeam = document.createElement("li");
            homeTeam.className = "py-3 sm:py-4";
            var container4 = document.createElement("div");
            container4.className = "flex items-center space-x-4";
            var homeImgCont = document.createElement("div");
            homeImgCont.className = "flex-shrink-0";
            var homeImg = document.createElement("img");
            homeImg.className = "w-8 h-8 rounded-full";
            homeImg.src = "https://loodibee.com/wp-content/uploads/mlb-"+ games[i].home_slug +"-logo-300x300.png";
            homeImg.alt = "Home Team Logo";
            homeImgCont.appendChild(homeImg);
            container4.appendChild(homeImgCont);
            var container5 = document.createElement("div");
            container5.className = "flex-1 min-w-0";
            var teamName = document.createElement("p");
            teamName.innerHTML = games[i].home_team;
            teamName.className = "text-sm font-medium text-gray-900 truncate dark:text-white";
            container5.appendChild(teamName);
            container4.appendChild(container5);
            var container6 = document.createElement("div");
            container6.className = "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white";
            var score = document.createElement("p");
            score.innerHTML = games[i].home_score;
            container6.appendChild(score);
            container4.appendChild(container6);
            homeTeam.appendChild(container4);
            list.appendChild(homeTeam);
            container3.appendChild(list);
            container.appendChild(container3);
            document.getElementById("content").appendChild(container);
        }

      }).catch(function (error) {
          console.error(error);
      });

}


function display_data(){

}
