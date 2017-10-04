import {TestBed, inject, async, getTestBed} from '@angular/core/testing';
import {BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {TheMovieDatabaseService} from './the-movie-database.service';
import {Movie} from './movie/movie';

describe('TheMovieDatabaseService', () => {
  let backend: MockBackend;
  let service: TheMovieDatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        TheMovieDatabaseService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(TheMovieDatabaseService);
  }));

  function setupConnections (backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      const responseOptions = new ResponseOptions(options);
      const response = new Response(responseOptions);
      connection.mockRespond(response);
    });
  }

  it('Should be created', inject([ TheMovieDatabaseService ], (service: TheMovieDatabaseService) => {
    expect(service).toBeTruthy();
  }));

  it('Should return a list with the most popular movies', () => {
    const responseMockUpBody = {
      'page': 1,
      'total_results': 326886,
      'total_pages': 16345,
      'results': [
        {
          'vote_count': 11263,
          'id': 293660,
          'video': false,
          'vote_average': 7.4,
          'title': 'Deadpool',
          'popularity': 785.026997,
          'poster_path': '\/inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
          'original_language': 'en',
          'original_title': 'Deadpool',
          'genre_ids': [ 28, 12, 35 ],
          'backdrop_path': '\/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg',
          'adult': false,
          'overview': 'Deadpool tells the origin story of former Special Forces operative turned mercenary ...',
          'release_date': '2016-02-09'
        }, {
          'vote_count': 1479,
          'id': 346364,
          'video': false,
          'vote_average': 7.5,
          'title': 'It',
          'popularity': 784.96766,
          'poster_path': '\/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
          'original_language': 'en',
          'original_title': 'It',
          'genre_ids': [ 12, 18, 27 ],
          'backdrop_path': '\/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
          'adult': false,
          'overview': 'In a small town in Maine, seven children known as The Losers Club come face to ...',
          'release_date': '2017-09-05'
        }, {
          'vote_count': 11903,
          'id': 19995,
          'video': false,
          'vote_average': 7.2,
          'title': 'Avatar',
          'popularity': 717.558949,
          'poster_path': '\/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
          'original_language': 'en',
          'original_title': 'Avatar',
          'genre_ids': [ 28, 12, 14, 878 ],
          'backdrop_path': '\/xSxlmtLz2NYtO07N4WexY1y53pl.jpg',
          'adult': false,
          'overview': 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a ...',
          'release_date': '2009-12-10'
        }, {
          'vote_count': 6215,
          'id': 177572,
          'video': false,
          'vote_average': 7.8,
          'title': 'Big Hero 6',
          'popularity': 640.845672,
          'poster_path': '\/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg',
          'original_language': 'en',
          'original_title': 'Big Hero 6',
          'genre_ids': [ 12, 10751, 16, 28, 35 ],
          'backdrop_path': '\/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg',
          'adult': false,
          'overview': 'The special bond that develops between plus-sized inflatable robot Baymax, ...',
          'release_date': '2014-10-24'
        }, {
          'vote_count': 12115,
          'id': 155,
          'video': false,
          'vote_average': 8.2,
          'title': 'The Dark Knight',
          'popularity': 606.043122,
          'poster_path': '\/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          'original_language': 'en',
          'original_title': 'The Dark Knight',
          'genre_ids': [ 18, 28, 80, 53 ],
          'backdrop_path': '\/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg',
          'adult': false,
          'overview': 'Batman raises the stakes in his war on crime. With the help of Lt. Jim treets...',
          'release_date': '2008-07-16'
        }, {
          'vote_count': 11856,
          'id': 24428,
          'video': false,
          'vote_average': 7.4,
          'title': 'The Avengers',
          'popularity': 572.825869,
          'poster_path': '\/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
          'original_language': 'en',
          'original_title': 'The Avengers',
          'genre_ids': [ 878, 28, 12 ],
          'backdrop_path': '\/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg',
          'adult': false,
          'overview': 'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director...',
          'release_date': '2012-04-25'
        }, {
          'vote_count': 5419,
          'id': 245891,
          'video': false,
          'vote_average': 7,
          'title': 'John Wick',
          'popularity': 516.13063,
          'poster_path': '\/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
          'original_language': 'en',
          'original_title': 'John Wick',
          'genre_ids': [ 28, 53 ],
          'backdrop_path': '\/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg',
          'adult': false,
          'overview': 'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everyth...',
          'release_date': '2014-10-22'
        }, {
          'vote_count': 11006,
          'id': 157336,
          'video': false,
          'vote_average': 8.1,
          'title': 'Interstellar',
          'popularity': 509.99166,
          'poster_path': '\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
          'original_language': 'en',
          'original_title': 'Interstellar',
          'genre_ids': [ 12, 18, 878 ],
          'backdrop_path': '\/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
          'adult': false,
          'overview': 'Interstellar chronicles the adventures of a group of explorers who make use of a newly ...',
          'release_date': '2014-11-05'
        }, {
          'vote_count': 5394,
          'id': 321612,
          'video': false,
          'vote_average': 6.8,
          'title': 'Beauty and the Beast',
          'popularity': 484.89498,
          'poster_path': '\/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
          'original_language': 'en',
          'original_title': 'Beauty and the Beast',
          'genre_ids': [ 10751, 14, 10749 ],
          'backdrop_path': '\/6aUWe0GSl69wMTSWWexsorMIvwU.jpg',
          'adult': false,
          'overview': 'A live-action adaptation of Disney\'s version of the classic \'Beauty and the Beast\' ...',
          'release_date': '2017-03-16'
        }, {
          'vote_count': 5919,
          'id': 210577,
          'video': false,
          'vote_average': 7.9,
          'title': 'Gone Girl',
          'popularity': 484.449765,
          'poster_path': '\/gdiLTof3rbPDAmPaCf4g6op46bj.jpg',
          'original_language': 'en',
          'original_title': 'Gone Girl',
          'genre_ids': [ 9648, 53, 18 ],
          'backdrop_path': '\/bt6DhdALyhf90gReozoQ0y3R3vZ.jpg',
          'adult': false,
          'overview': 'With his wife\'s disappearance having become the focus of an intense media circus, ...',
          'release_date': '2014-10-01'
        }, {
          'vote_count': 4645,
          'id': 211672,
          'video': false,
          'vote_average': 6.4,
          'title': 'Minions',
          'popularity': 481.546332,
          'poster_path': '\/q0R4crx2SehcEEQEkYObktdeFy.jpg',
          'original_language': 'en',
          'original_title': 'Minions',
          'genre_ids': [ 10751, 16, 12, 35 ],
          'backdrop_path': '\/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg',
          'adult': false,
          'overview': 'Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-vil...',
          'release_date': '2015-06-17'
        }, {
          'vote_count': 9860,
          'id': 118340,
          'video': false,
          'vote_average': 7.9,
          'title': 'Guardians of the Galaxy',
          'popularity': 476.179031,
          'poster_path': '\/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg',
          'original_language': 'en',
          'original_title': 'Guardians of the Galaxy',
          'genre_ids': [ 28, 878, 12 ],
          'backdrop_path': '\/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg',
          'adult': false,
          'overview': 'Light years from Earth, 26 years after being abducted, Peter Quill finds himself t...',
          'release_date': '2014-07-30'
        }, {
          'vote_count': 5645,
          'id': 131631,
          'video': false,
          'vote_average': 6.6,
          'title': 'The Hunger Games: Mockingjay - Part 1',
          'popularity': 475.190694,
          'poster_path': '\/gj282Pniaa78ZJfbaixyLXnXEDI.jpg',
          'original_language': 'en',
          'original_title': 'The Hunger Games: Mockingjay - Part 1',
          'genre_ids': [ 878, 12, 53 ],
          'backdrop_path': '\/4PwyB0ErucIANzW24Kori71J6gU.jpg',
          'adult': false,
          'overview': 'Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autoc...',
          'release_date': '2014-11-18'
        }, {
          'vote_count': 9554,
          'id': 550,
          'video': false,
          'vote_average': 8.3,
          'title': 'Fight Club',
          'popularity': 459.451396,
          'poster_path': '\/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
          'original_language': 'en',
          'original_title': 'Fight Club',
          'genre_ids': [ 18 ],
          'backdrop_path': '\/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg',
          'adult': false,
          'overview': 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggress...',
          'release_date': '1999-10-15'
        }, {
          'vote_count': 9527,
          'id': 76341,
          'video': false,
          'vote_average': 7.2,
          'title': 'Mad Max: Fury Road',
          'popularity': 446.186171,
          'poster_path': '\/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
          'original_language': 'en',
          'original_title': 'Mad Max: Fury Road',
          'genre_ids': [ 28, 12, 878, 53 ],
          'backdrop_path': '\/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg',
          'adult': false,
          'overview': 'An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape...',
          'release_date': '2015-05-13'
        }, {
          'vote_count': 8744,
          'id': 135397,
          'video': false,
          'vote_average': 6.5,
          'title': 'Jurassic World',
          'popularity': 435.291139,
          'poster_path': '\/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
          'original_language': 'en',
          'original_title': 'Jurassic World',
          'genre_ids': [ 28, 12, 878, 53 ],
          'backdrop_path': '\/dkMD5qlogeRMiEixC4YNPUvax2T.jpg',
          'adult': false,
          'overview': 'Twenty-two years after the events of Jurassic Park, Isla Nublar...',
          'release_date': '2015-06-09'
        }, {
          'vote_count': 4799,
          'id': 297762,
          'video': false,
          'vote_average': 7.2,
          'title': 'Wonder Woman',
          'popularity': 430.897193,
          'poster_path': '\/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
          'original_language': 'en',
          'original_title': 'Wonder Woman',
          'genre_ids': [ 28, 12, 14 ],
          'backdrop_path': '\/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg',
          'adult': false,
          'overview': 'An Amazon princess comes to the world of Man to become the greatest of the female superheroes.',
          'release_date': '2017-05-30'
        }, {
          'vote_count': 7328,
          'id': 271110,
          'video': false,
          'vote_average': 7.1,
          'title': 'Captain America: Civil War',
          'popularity': 427.469616,
          'poster_path': '\/kSBXou5Ac7vEqKd97wotJumyJvU.jpg',
          'original_language': 'en',
          'original_title': 'Captain America: Civil War',
          'genre_ids': [ 12, 28, 878 ],
          'backdrop_path': '\/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg',
          'adult': false,
          'overview': 'Following the events of Age of Ultron, the collective governments of the world...',
          'release_date': '2016-04-27'
        }, {
          'vote_count': 8517,
          'id': 680,
          'video': false,
          'vote_average': 8.3,
          'title': 'Pulp Fiction',
          'popularity': 399.212771,
          'poster_path': '\/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
          'original_language': 'en',
          'original_title': 'Pulp Fiction',
          'genre_ids': [ 53, 80 ],
          'backdrop_path': '\/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg',
          'adult': false,
          'overview': 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll...',
          'release_date': '1994-09-10'
        } ]
    };
    setupConnections(backend, {
      body: responseMockUpBody,
      status: 200
    });
    service.getMostPopularMovies().subscribe((movies: Movie[]) => {
      expect(movies.length).toBe(responseMockUpBody.results.length);
      for (let i = 0; i < responseMockUpBody.results.length; i++) {
        expect(movies[ i ].title).toBe(responseMockUpBody.results[ i ].title);
        expect(movies[ i ].overview).toBe(responseMockUpBody.results[ i ].overview);
        expect(movies[ i ].imageURL).toBe(`https://image.tmdb.org/t/p/w500${responseMockUpBody.results[ i ].poster_path}`);
        expect(movies[i].popularity).toBe(responseMockUpBody.results[i].vote_average);
      }
    });
  });
});
