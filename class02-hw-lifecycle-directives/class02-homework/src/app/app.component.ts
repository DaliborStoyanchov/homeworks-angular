import { Component, OnInit } from '@angular/core';

/*
  1. Create components MovieList and Movie. The component Movie has to be child of MovieList.  DONE

  2. In the component Movie, hardcode an object of type "Movie". The "Movie" interface should have the following properties: name, releaseDate, producerName, genre. (Feel free  to add more of your choice as well). DONE

  3. Create a button in the Movie component with the value "Show movie" and by clicking it, we have to pass the value of the hardcoded object to the parent. And print it in the parent.

  4. From the very parent component (the app-component), create title properties for the components previously created, and pass that value to those components and inside them print it. (For example movieListTitle = "Movie list component title"; movieTitle = "Movie component title"; and pass these properties to the appropriate components.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Class02 Homework Movies';

  movieListTitle = 'Movie list component title';
  movieTitle = 'Movie component title';

  ngOnInit(): void {}
}
