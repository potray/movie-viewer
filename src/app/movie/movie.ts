export class Movie {
  title: string;
  imageURL: string;
  overview: string;
  popularity: number;

  constructor (title: string, imageURL: string, overview: string, popularity: number) {
    this.title = title;
    this.imageURL = imageURL;
    this.overview = overview;
    this.popularity = popularity;
  }
}
