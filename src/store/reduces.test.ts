import { Movie } from "../components/MovieCard";
import { Action, ACTION_TYPES } from "./actions";
import { State } from "./initialState";
import { rootReducer } from "./reducers";

const mockedApiMovies = [
  {
    id: 284053,
    title: "Thor: Ragnarok",
    tagline: "No Hammer. No Problem.",
    vote_average: 7.4,
    vote_count: 5349,
    release_date: "2017-10-25",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    overview:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    budget: 180000000,
    revenue: 854229371,
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 130,
  },
  {
    id: 76341,
    title: "Mad Max: Fury Road",
    tagline: "What a Lovely Day.",
    vote_average: 7.3,
    vote_count: 11290,
    release_date: "2015-05-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    overview:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
    budget: 150000000,
    revenue: 378858340,
    genres: ["Action", "Adventure", "Science Fiction", "Thriller"],
    runtime: 120,
  },
  {
    id: 150540,
    title: "Inside Out",
    tagline: "Meet the little voices inside your head.",
    vote_average: 8,
    vote_count: 8731,
    release_date: "2015-06-09",
    poster_path:
      "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    overview:
      "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
    budget: 175000000,
    revenue: 857611174,
    genres: ["Drama", "Comedy", "Animation", "Family"],
    runtime: 94,
  },
  {
    id: 10195,
    title: "Thor",
    tagline: "Two worlds. One hero.",
    vote_average: 6.6,
    vote_count: 8530,
    release_date: "2011-04-21",
    poster_path:
      "https://image.tmdb.org/t/p/w500/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg",
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    budget: 150000000,
    revenue: 449326618,
    genres: ["Adventure", "Fantasy", "Action"],
    runtime: 115,
  },
];

describe("rootReducer", () => {
  const reducer: Function = rootReducer;
  let initialState: State;

  beforeEach(() => {
    initialState = {
      movieList: [],
      filteredMovies: [],
      searchText: "",
      genreFilter: "",
      sortingValue: null,
    };
  });

  test("DEFAULT_ACTION", () => {
    const action: Action = {
      type: "DEFAULT_ACTION" as any,
      payload: null,
    };

    const resultState = rootReducer(initialState, action);
    expect(resultState).toEqual(initialState);
  });

  test("SET_MOVIES", () => {
    const expectResult: Movie[] = [new Movie(mockedApiMovies[0])];

    const action: Action = {
      type: ACTION_TYPES.SET_MOVIES,
      payload: expectResult,
    };

    const resultState = rootReducer(initialState, action);
    expect(resultState.movieList).toEqual(expectResult);
  });

  test("DELETE_MOVIE", () => {
    initialState.movieList = mockedApiMovies.map((m) => new Movie(m));
    const id = 76341;
    const expectResult: Movie[] = mockedApiMovies
      .filter((m) => m.id !== id)
      .map((m) => new Movie(m));

    const action: Action = {
      type: ACTION_TYPES.DELETE_MOVIE,
      payload: id,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.movieList).toEqual(expectResult);
  });

  test("SET_GENRE_FILTER", () => {
    const expectResult: string = "Documentary";
    const action: Action = {
      type: ACTION_TYPES.SET_GENRE_FILTER,
      payload: expectResult,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.genreFilter).toEqual(expectResult);
  });

  test("SET_SEARCH_TEXT", () => {
    const expectResult: string = "Star";
    const action: Action = {
      type: ACTION_TYPES.SET_SEARCH_TEXT,
      payload: expectResult,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.searchText).toEqual(expectResult);
  });

  test("SET_SORTING_VALUE", () => {
    const expectResult: string = "Rating";
    const action: Action = {
      type: ACTION_TYPES.SET_SORTING_VALUE,
      payload: expectResult,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.sortingValue).toEqual(expectResult);
  });

  test("ADD_MOVIE", () => {
    const expectResult: Movie = new Movie(mockedApiMovies[0]);
    const action: Action = {
      type: ACTION_TYPES.ADD_MOVIE,
      payload: expectResult,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.movieList).toEqual([expectResult]);
  });

  test("UPDATE_MOVIE", () => {
    initialState.movieList = mockedApiMovies.map((m) => new Movie(m));

    const expectedList: Movie[] = mockedApiMovies.map((m) => new Movie(m));
    const editedMovie = expectedList[0];

    editedMovie.title = "test_title";
    editedMovie.runtime = 100;

    const action: Action = {
      type: ACTION_TYPES.UPDATE_MOVIE,
      payload: editedMovie,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.movieList).toEqual(expectedList);
  });

  test("INIT_SORT_FILTER_MOVIES", () => {
    initialState.movieList = mockedApiMovies.map((m) => new Movie(m));
    initialState.searchText = "Thor";
    initialState.genreFilter = "Action";
    initialState.sortingValue = "rating";

    const expectedResult = [...initialState.movieList]
      .filter((movie) =>
        movie.genres.some((genre) => genre === initialState.genreFilter)
      )
      .filter((e: Movie) =>
        e.title.toLocaleLowerCase().match(initialState.searchText.toLowerCase())
      )
      .sort((a, b) => b.rating - a.rating);

    const action: Action = {
      type: ACTION_TYPES.INIT_SORT_FILTER_MOVIES,
    };
    const resultState = rootReducer(initialState, action);
    expect(resultState.filteredMovies).toEqual(expectedResult);
  });
});
