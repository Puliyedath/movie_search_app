# Movie Search App
  
### Project Movie Search App Setup (script)
  * run the script 'launch_movie_search_app.sh' from the project root folder
    * bash launch_movie.search_app.sh

### Project Movie Search App SetUp (Manual)
  * run 'npm run build:dev' - this will generate the resources in the dist folder
  * run 'npm start:dev:server' - this will launch a server listening on port 8080 on your local host


#### Details about the app
  * On the intial launch the app would start with a black page with a search input and box with dashed border which says "No Results Available"
  * Searching for a movie title in the search field (the search only begins if you press Enter or hit the search icon - the is deliberately done so that we dont end up issuing expensive queries on each key press.) will populate the movie cards in place of the the box
  * The next and prev links lets the user paginate back and forth

 
  