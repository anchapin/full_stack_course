const movies = [
    {
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "director": "Frank Darabont",
        "releaseYear": 1994,
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "cast": ["Tim Robbins", "Morgan Freeman"],
        "image": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
    },
    {
        "title": "The Godfather",
        "genre": "Crime",
        "director": "Francis Ford Coppola",
        "releaseYear": 1972,
        "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "cast": ["Marlon Brando", "Al Pacino"],
        "image": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
    },
    {
        "title": "The Pursuit of Happyness",
        "genre": "Family Drama",
        "director": "Gabriele Muccino",
        "releaseYear": 2006,
        "plot": "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
        "cast": ["Will Smith", "Jaden Smith"],
        "image": "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"
    },
    {
        "title": "Forrest Gump",
        "genre": "Drama",
        "director": "Robert Zemeckis",
        "releaseYear": 1994,
        "plot": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        "cast": ["Tom Hanks", "Robin Wright"],
        "image": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },
    {
        "title": "Inception",
        "genre": "Sci-Fi",
        "director": "Christopher Nolan",
        "releaseYear": 2010,
        "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
        "title": "The Dark Knight",
        "genre": "Action",
        "director": "Christopher Nolan",
        "releaseYear": 2008,
        "plot": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "cast": ["Christian Bale", "Heath Ledger"],
        "image" : "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
        "title": "Schindler's List",
        "genre": "Biography",
        "director": "Steven Spielberg",
        "releaseYear": 1993,
        "plot": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "cast": ["Liam Neeson", "Ralph Fiennes"],
        "image": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
    },
    {
        "title": "The Matrix",
        "genre": "Sci-Fi",
        "director": "The Wachowskis",
        "releaseYear": 1999,
        "plot": "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity.",
        "cast": ["Keanu Reeves", "Laurence Fishburne"],
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "genre": "Fantasy",
        "director": "Peter Jackson",
        "releaseYear": 2001,
        "plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "cast": ["Elijah Wood", "Ian McKellen"],
        "image": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "genre": "Crime",
        "director": "Jonathan Demme",
        "releaseYear": 1991,
        "plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "cast": ["Jodie Foster", "Anthony Hopkins"],
        "image": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"
    },
    {
        "title": "Avatar",
        "genre": "Adventure",
        "director": "James Cameron",
        "releaseYear": 2009,
        "plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home.",
        "cast": ["Sam Worthington", "Zoe Saldana"],
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
    },
    {
        "title": "Gladiator",
        "genre": "Action",
        "director": "Ridley Scott",
        "releaseYear": 2000,
        "plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "cast": ["Russell Crowe", "Joaquin Phoenix"],
        "image": "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
    },
    {
        "title": "The Departed",
        "genre": "Crime",
        "director": "Martin Scorsese",
        "releaseYear": 2006,
        "plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "cast": ["Leonardo DiCaprio", "Matt Damon"],
        "image": "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg"
    },
    {
        "title": "Interstellar",
        "genre": "Sci-Fi",
        "director": "Christopher Nolan",
        "releaseYear": 2014,
        "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "cast": ["Matthew McConaughey", "Anne Hathaway"],
        "image": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    {
        "title": "The Green Mile",
        "genre": "Crime",
        "director": "Frank Darabont",
        "releaseYear": 1999,
        "plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "cast": ["Tom Hanks", "Michael Clarke Duncan"],
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg"
    },
    {
        "title": "Fight Club",
        "genre": "Drama",
        "director": "David Fincher",
        "releaseYear": 1999,
        "plot": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into an anarchist organization.",
        "cast": ["Edward Norton", "Brad Pitt"],
        "image": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"
    },
    {
        "title": "The Prestige",
        "genre": "Drama",
        "director": "Christopher Nolan",
        "releaseYear": 2006,
        "plot": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "cast": ["Christian Bale", "Hugh Jackman"],
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg"
    },
    {
        "title": "Little Miss Sunshine",
        "genre": "Family Drama",
        "director": "Jonathan Dayton, Valerie Faris",
        "releaseYear": 2006,
        "plot": "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
        "cast": ["Greg Kinnear", "Abigail Breslin"],
        "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Little_miss_sunshine_poster.jpg"
    },
    {
        "title": "The Sound of Music",
        "genre": "Family Drama",
        "director": "Robert Wise",
        "releaseYear": 1965,
        "plot": "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
        "cast": ["Julie Andrews", "Christopher Plummer"],
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/Musical1959-SoundOfMusic-OriginalPoster.png"
    }
]
