// movies.js

const movies = [
    {
        "id": "2001-una-odisea-en-el-espacio",
        "title": "2001: Una odisea en el espacio",
        "originalTitle": "2001: A Space Odyssey",
        "poster": "images/2001-una-odisea-en-el-espacio.jpg",
        "director": "Stanley Kubrick",
        "cast": [
            "Keir Dullea",
            "Gary Lockwood",
            "William Sylvester"
        ],
        "year": 1968,
        "duration": 149,
        "country": "Reino Unido, Estados Unidos",
        "genres": [
            "Ciencia ficción",
            "Aventura"
        ],
        "synopsis": "Un misterioso monolito descubierto en la Luna lleva a la humanidad a emprender un viaje hacia Júpiter acompañado por el superordenador HAL 9000.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-16",
                "time": "12:00"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-18",
                "time": "21:15",
                "version": "Embajadores Río"
            }
        ]
    },
    {
        "id": "aftersun",
        "title": "Aftersun",
        "originalTitle": "Aftersun",
        "poster": "images/aftersun.jpg",
        "director": "Charlotte Wells",
        "cast": [
            "Paul Mescal",
            "Frankie Corio",
            "Celia Rowlson-Hall"
        ],
        "year": 2022,
        "duration": 101,
        "country": "Reino Unido",
        "genres": [
            "Drama"
        ],
        "synopsis": "Sophie recuerda unas vacaciones que compartió con su padre veinte años atrás, intentando reconciliar al padre que conoció con el hombre que nunca llegó a conocer del todo.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-19",
                "time": "21:15",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Sala Equis",
                "date": "2026-08-25",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "akira",
        "title": "Akira",
        "originalTitle": "Akira",
        "poster": "images/akira.jpg",
        "director": "Katsuhiro Ōtomo",
        "cast": [
            "Mitsuo Iwata",
            "Nozomu Sasaki",
            "Mami Koyama"
        ],
        "year": 1988,
        "duration": 124,
        "country": "Japón",
        "genres": [
            "Animación",
            "Ciencia ficción",
            "Acción"
        ],
        "synopsis": "En un Neo-Tokio devastado, un joven motorista desarrolla poderes telequinéticos que amenazan con desatar una catástrofe de proporciones inimaginables.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-12",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "american-beauty",
        "title": "American Beauty",
        "originalTitle": "American Beauty",
        "poster": "images/american-beauty.jpg",
        "director": "Sam Mendes",
        "cast": [
            "Kevin Spacey",
            "Annette Bening",
            "Thora Birch",
            "Mena Suvari"
        ],
        "year": 1999,
        "duration": 122,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Comedia"
        ],
        "synopsis": "Un padre de familia atrapado en una vida aparentemente perfecta atraviesa una crisis de mediana edad que le lleva a cuestionar radicalmente su matrimonio, su trabajo y su propia existencia.",
        "screenings": [
            {
                "cinema": "Kinépolis Ciudad de la Imagen",
                "date": "2026-11-19",
                "time": "19:00",
                
            }
        ]
    },
    {
        "id": "apocalypse-now",
        "title": "Apocalypse Now",
        "originalTitle": "Apocalypse Now",
        "poster": "images/apocalypse-now.jpg",
        "director": "Francis Ford Coppola",
        "cast": [
            "Martin Sheen",
            "Marlon Brando",
            "Robert Duvall",
            "Dennis Hopper"
        ],
        "year": 1979,
        "duration": 147,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Bélico"
        ],
        "synopsis": "Durante la guerra de Vietnam, un capitán estadounidense recibe la misión de adentrarse en la jungla y localizar a un coronel que ha perdido el control y actúa por su cuenta.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-23",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "beetlejuice",
        "title": "Bitelchús",
        "originalTitle": "Beetlejuice",
        "poster": "images/beetlejuice.jpg",
        "director": "Tim Burton",
        "cast": [
            "Michael Keaton",
            "Alec Baldwin",
            "Geena Davis",
            "Winona Ryder"
        ],
        "year": 1988,
        "duration": 92,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Fantasía",
            "Terror"
        ],
        "synopsis": "Una pareja de fantasmas intenta expulsar de su antigua casa a los nuevos habitantes y recurre a Beetlejuice, un excéntrico espíritu especializado en causar problemas.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-15",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "big-fish",
        "title": "Big Fish",
        "originalTitle": "Big Fish",
        "poster": "images/big-fish.jpg",
        "director": "Tim Burton",
        "cast": [
            "Ewan McGregor",
            "Albert Finney",
            "Billy Crudup",
            "Jessica Lange"
        ],
        "year": 2003,
        "duration": 125,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Fantasía",
            "Aventura"
        ],
        "synopsis": "Un hijo intenta descubrir la verdadera historia de su padre, un hombre famoso por contar extraordinarias historias sobre su propia vida.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-09-10",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "blade-runner",
        "title": "Blade Runner",
        "originalTitle": "Blade Runner",
        "poster": "images/blade-runner.jpg",
        "director": "Ridley Scott",
        "cast": [
            "Harrison Ford",
            "Rutger Hauer",
            "Sean Young",
            "Edward James Olmos"
        ],
        "year": 1982,
        "duration": 117,
        "country": "Estados Unidos, Hong Kong",
        "genres": [
            "Ciencia ficción",
            "Thriller",
            "Neo-noir"
        ],
        "synopsis": "En un futuro distópico, un antiguo policía especializado en perseguir replicantes debe localizar a un grupo de androides que ha regresado ilegalmente a la Tierra.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-16",
                "time": "20:30"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-12-03",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "blue-velvet",
        "title": "Terciopelo Azul",
        "originalTitle": "Blue Velvet",
        "poster": "images/blue-velvet.jpg",
        "director": "David Lynch",
        "cast": [
            "Isabella Rossellini",
            "Kyle MacLachlan",
            "Dennis Hopper",
            "Laura Dern"
        ],
        "year": 1986,
        "duration": 120,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Crimen",
            "Thriller",
            "Misterio"
        ],
        "synopsis": "Un joven encuentra una oreja humana en un campo y comienza a investigar un oscuro misterio relacionado con una cantante de club nocturno y un peligroso criminal.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-14",
                "time": "22:30"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-20",
                "time": "22:30"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-01",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "casablanca",
        "title": "Casablanca",
        "originalTitle": "Casablanca",
        "poster": "images/casablanca.jpg",
        "director": "Michael Curtiz",
        "cast": [
            "Humphrey Bogart",
            "Ingrid Bergman",
            "Paul Henreid",
            "Claude Rains"
        ],
        "year": 1942,
        "duration": 102,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Romance",
            "Bélico"
        ],
        "synopsis": "En la Casablanca ocupada de la Segunda Guerra Mundial, el dueño de un club nocturno debe elegir entre su amor por una mujer y ayudarla a ella y a su marido, un líder de la resistencia, a escapar de los nazis.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-09-21",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "casino",
        "title": "Casino",
        "originalTitle": "Casino",
        "poster": "images/casino.jpg",
        "director": "Martin Scorsese",
        "cast": [
            "Robert De Niro",
            "Sharon Stone",
            "Joe Pesci",
            "James Woods"
        ],
        "year": 1995,
        "duration": 178,
        "country": "Estados Unidos",
        "genres": [
            "Crimen",
            "Drama",
            "Thriller"
        ],
        "synopsis": "En el Las Vegas de los años setenta, Sam 'Ace' Rothstein dirige un casino controlado por la mafia. Su vida se complica cuando llega su viejo amigo Nicky Santoro y aparece Ginger McKenna, una mujer de la que se enamora.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-27",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "centauros-del-desierto",
        "title": "Centauros del desierto",
        "originalTitle": "The Searchers",
        "poster": "images/centauros-del-desierto.jpg",
        "director": "John Ford",
        "cast": [
            "John Wayne",
            "Jeffrey Hunter",
            "Vera Miles",
            "Natalie Wood"
        ],
        "year": 1956,
        "duration": 119,
        "country": "Estados Unidos",
        "genres": [
            "Western",
            "Aventura",
            "Drama"
        ],
        "synopsis": "Tras volver derrotado de la guerra de Secesión, Ethan Edwards emprende una larga persecución de los comanches que han raptado a su sobrina, en compañía de un joven mestizo adoptado por su familia.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-09",
                "time": "20:00"
            }
        ]
    },
{
    "id": "cinema-paradiso",
    "title": "Cinema Paradiso",
    "originalTitle": "Nuovo Cinema Paradiso",
    "poster": "images/cinema-paradiso.jpg",
    "director": "Giuseppe Tornatore",
    "cast": [
        "Philippe Noiret",
        "Salvatore Cascio",
        "Marco Leonardi",
        "Jacques Perrin"
    ],
    "year": 1988,
    "duration": 155,
    "country": "Italia, Francia",
    "genres": [
        "Drama",
        "Romance"
    ],
    "synopsis": "Un reconocido cineasta recuerda su infancia en un pueblo siciliano, donde nació su pasión por el cine gracias a Alfredo, el proyeccionista del cine local que se convirtió en su mentor y figura paterna.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-08-18",
            "time": "20:00"
        },
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-27",
            "time": "22:00",
            "version": "35 mm · Música en directo"
        }
    ]
},
    {
        "id": "ciudad-de-dios",
        "title": "Ciudad de Dios",
        "originalTitle": "Cidade de Deus",
        "poster": "images/ciudad-de-dios.jpg",
        "director": "Fernando Meirelles, Kátia Lund",
        "cast": [
            "Alexandre Rodrigues",
            "Leandro Firmino",
            "Phellipe Haagensen",
            "Seu Jorge"
        ],
        "year": 2002,
        "duration": 130,
        "country": "Brasil",
        "genres": [
            "Drama",
            "Crimen"
        ],
        "synopsis": "Basada en hechos reales, narra la evolución del crimen organizado en una favela de Río de Janeiro entre los años sesenta y ochenta, a través de los caminos opuestos de dos jóvenes: uno quiere ser fotógrafo y el otro se convierte en un temido capo.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-08-20",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "con-la-muerte-en-los-talones",
        "title": "Con la muerte en los talones",
        "originalTitle": "North by Northwest",
        "poster": "images/con-la-muerte-en-los-talones.jpg",
        "director": "Alfred Hitchcock",
        "cast": [
            "Cary Grant",
            "Eva Marie Saint",
            "James Mason",
            "Martin Landau"
        ],
        "year": 1959,
        "duration": 136,
        "country": "Estados Unidos",
        "genres": [
            "Intriga",
            "Aventura"
        ],
        "synopsis": "Por un malentendido, un ejecutivo publicitario neoyorquino es confundido con un agente del gobierno por una organización de espías, lo que lo obliga a huir a través de todo el país mientras intenta desentrañar la conspiración.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-26",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "cuenta-conmigo",
        "title": "Cuenta conmigo",
        "originalTitle": "Stand by Me",
        "poster": "images/cuenta-conmigo.jpg",
        "director": "Rob Reiner",
        "cast": [
            "Wil Wheaton",
            "River Phoenix",
            "Corey Feldman",
            "Jerry O'Connell"
        ],
        "year": 1986,
        "duration": 89,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Aventura"
        ],
        "synopsis": "Cuatro amigos de doce años emprenden una excursión por el bosque en busca del cadáver de un chico desaparecido, un viaje que fortalece su amistad y marca el final de su infancia.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-16",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "cuentos-de-tokio",
        "title": "Cuentos de Tokio",
        "originalTitle": "Tôkyô monogatari",
        "poster": "images/cuentos-de-tokio.jpg",
        "director": "Yasujirō Ozu",
        "cast": [
            "Chishū Ryū",
            "Chieko Higashiyama",
            "Setsuko Hara",
            "Sō Yamamura"
        ],
        "year": 1953,
        "duration": 136,
        "country": "Japón",
        "genres": [
            "Drama"
        ],
        "synopsis": "Un matrimonio de ancianos viaja desde su pueblo hasta Tokio para visitar a sus hijos, que apenas tienen tiempo para atenderlos, salvo Noriko, la viuda de su hijo fallecido, que les muestra el afecto que sus propios hijos ya no les dan.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-02",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "delitos-y-faltas",
        "title": "Delitos y faltas",
        "originalTitle": "Crimes and Misdemeanors",
        "poster": "images/delitos-y-faltas.jpg",
        "director": "Woody Allen",
        "cast": [
            "Martin Landau",
            "Woody Allen",
            "Mia Farrow",
            "Anjelica Huston"
        ],
        "year": 1989,
        "duration": 104,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Comedia"
        ],
        "synopsis": "Las vidas de un oftalmólogo que oculta una relación extramatrimonial y de un documentalista idealista frustrado con su matrimonio se entrelazan en una reflexión sobre la moral, la culpa y las decisiones que definen a las personas.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-26",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "dentro-del-laberinto",
        "title": "Dentro del laberinto",
        "originalTitle": "Labyrinth",
        "poster": "images/dentro-del-laberinto.jpg",
        "director": "Jim Henson",
        "cast": [
            "David Bowie",
            "Jennifer Connelly",
            "Toby Froud"
        ],
        "year": 1986,
        "duration": 101,
        "country": "Reino Unido, Estados Unidos",
        "genres": [
            "Fantástico",
            "Aventura",
            "Familiar"
        ],
        "synopsis": "Sarah debe atravesar un laberinto poblado de criaturas fantásticas para rescatar a su hermano pequeño, secuestrado por el rey de los duendes Jareth, en un lugar donde nada es lo que parece.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-09-24",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "desafio-total",
        "title": "Desafío total",
        "originalTitle": "Total Recall",
        "poster": "images/desafio-total.jpg",
        "director": "Paul Verhoeven",
        "cast": [
            "Arnold Schwarzenegger",
            "Rachel Ticotin",
            "Sharon Stone",
            "Ronny Cox",
            "Michael Ironside"
        ],
        "year": 1990,
        "duration": 113,
        "country": "Estados Unidos",
        "genres": [
            "Ciencia ficción",
            "Acción",
            "Thriller"
        ],
        "synopsis": "En 2084, Douglas Quaid acude a una empresa que implanta recuerdos para vivir unas vacaciones virtuales en Marte. El procedimiento despierta recuerdos que sugieren que su identidad y su pasado no son lo que parecen.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-09-17",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "desayuno-con-diamantes",
        "title": "Desayuno con diamantes",
        "originalTitle": "Breakfast at Tiffany's",
        "poster": "images/desayuno-con-diamantes.jpg",
        "director": "Blake Edwards",
        "cast": [
            "Audrey Hepburn",
            "George Peppard",
            "Patricia Neal",
            "Mickey Rooney"
        ],
        "year": 1961,
        "duration": 115,
        "country": "Estados Unidos",
        "genres": [
            "Romance",
            "Comedia",
            "Drama"
        ],
        "synopsis": "Holly Golightly, una joven neoyorquina de vida aparentemente despreocupada y extravagante, entabla una relación con Paul, un escritor recién mudado a su edificio, mientras ambos ocultan sus propias inseguridades y anhelos.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-23",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "dirty-dancing",
        "title": "Dirty Dancing",
        "originalTitle": "Dirty Dancing",
        "poster": "images/dirty-dancing.jpg",
        "director": "Emile Ardolino",
        "cast": [
            "Jennifer Grey",
            "Patrick Swayze",
            "Jerry Orbach",
            "Cynthia Rhodes"
        ],
        "year": 1987,
        "duration": 100,
        "country": "Estados Unidos",
        "genres": [
            "Romance",
            "Drama",
            "Musical"
        ],
        "synopsis": "En el verano de 1963, la joven e inocente Frances 'Baby' Houseman se enamora de Johnny Castle, un profesor de baile de clase trabajadora, en un balneario donde las diferencias sociales complican su romance.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-18",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "donnie-darko",
        "title": "Donnie Darko",
        "originalTitle": "Donnie Darko",
        "poster": "images/donnie-darko.jpg",
        "director": "Richard Kelly",
        "cast": [
            "Jake Gyllenhaal",
            "Jena Malone",
            "Mary McDonnell",
            "Patrick Swayze",
            "Drew Barrymore"
        ],
        "year": 2001,
        "duration": 113,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Ciencia ficción",
            "Misterio",
            "Thriller"
        ],
        "synopsis": "Después de escapar de un extraño accidente, un adolescente comienza a tener visiones de una misteriosa figura con disfraz de conejo que parece conocer el futuro y le empuja hacia una serie de acontecimientos inquietantes.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-19",
                "time": "20:00", 
                "version": "Embajadores Río"
            }
        ]
    },
    {
    "id": "et",
    "title": "E.T.",
    "originalTitle": "E.T. the Extra-Terrestrial",
    "poster": "images/et.jpg",
    "director": "Steven Spielberg",
    "cast": [
        "Henry Thomas",
        "Dee Wallace",
        "Robert MacNaughton",
        "Drew Barrymore"
    ],
    "year": 1982,
    "duration": 115,
    "country": "Estados Unidos",
    "genres": [
        "Ciencia ficción",
        "Familiar",
        "Aventura"
    ],
    "synopsis": "Un extraterrestre queda abandonado en la Tierra cuando su nave despega sin él. Escondido en casa de un niño llamado Elliott, ambos entablan una amistad mientras intentan encontrar la manera de que el pequeño ser regrese a su planeta.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-22",
            "time": "22:00",
            "version": "35 mm"
        }
    ]
},
    {
        "id": "el-agente-secreto",
        "title": "El agente secreto",
        "originalTitle": "O Agente Secreto",
        "poster": "images/el-agente-secreto.jpg",
        "director": "Kleber Mendonça Filho",
        "cast": [
            "Wagner Moura",
            "Maria Fernanda Cândido",
            "Gabriel Leone",
            "Carlos Francisco",
            "Alice Carvalho"
        ],
        "year": 2025,
        "duration": 160,
        "country": "Brasil, Francia, Alemania, Países Bajos",
        "genres": [
            "Thriller",
            "Drama"
        ],
        "synopsis": "Brasil, 1977. Marcelo, un especialista en tecnología de unos cuarenta años que está huyendo, regresa a Recife durante la semana del carnaval con la esperanza de reunirse con su hijo, pero descubre que la ciudad está lejos de ser el refugio tranquilo que esperaba.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-14",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "el-apartamento",
        "title": "El apartamento",
        "originalTitle": "The Apartment",
        "poster": "images/el-apartamento.jpg",
        "director": "Billy Wilder",
        "cast": [
            "Jack Lemmon",
            "Shirley MacLaine",
            "Fred MacMurray",
            "Ray Walston"
        ],
        "year": 1960,
        "duration": 125,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Drama",
            "Romance"
        ],
        "synopsis": "Un modesto empleado de una compañía de seguros asciende en su trabajo prestando su apartamento a sus jefes para sus citas amorosas, hasta que se enamora de la ascensorista del edificio, que resulta ser la amante de uno de ellos.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-30",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-bazar-de-las-sorpresas",
        "title": "El bazar de las sorpresas",
        "originalTitle": "The Shop Around the Corner",
        "poster": "images/el-bazar-de-las-sorpresas.jpg",
        "director": "Ernst Lubitsch",
        "cast": [
            "James Stewart",
            "Margaret Sullavan",
            "Frank Morgan",
            "Felix Bressart"
        ],
        "year": 1940,
        "duration": 99,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Romance"
        ],
        "synopsis": "Dos empleados de una tienda de regalos en Budapest apenas se soportan en el trabajo, sin saber que son, en realidad, los anónimos amantes por correspondencia de los que cada uno se ha enamorado.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-12-14",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-buscavidas",
        "title": "El buscavidas",
        "originalTitle": "The Hustler",
        "poster": "images/el-buscavidas.jpg",
        "director": "Robert Rossen",
        "cast": [
            "Paul Newman",
            "Jackie Gleason",
            "Piper Laurie",
            "George C. Scott"
        ],
        "year": 1961,
        "duration": 135,
        "country": "Estados Unidos",
        "genres": [
            "Drama"
        ],
        "synopsis": "Eddie Felson, un joven y arrogante jugador de billar, recorre las salas de juego buscando enfrentarse al legendario Gordo de Minnesota para demostrar que es el mejor, mientras su relación con una mujer solitaria pone a prueba su ambición.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-23",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-castillo-ambulante",
        "title": "El castillo ambulante",
        "originalTitle": "Hauru no Ugoku Shiro",
        "poster": "images/el-castillo-ambulante.jpg",
        "director": "Hayao Miyazaki",
        "cast": [
            "Chieko Baishō",
            "Takuya Kimura",
            "Akihiro Miwa"
        ],
        "year": 2004,
        "duration": 119,
        "country": "Japón",
        "genres": [
            "Animación",
            "Fantasía",
            "Aventura",
            "Romance"
        ],
        "synopsis": "Sophie, una joven sombrerera, es víctima de una maldición que la convierte en una anciana. En busca de una solución, acaba viviendo en el extraordinario castillo ambulante del misterioso mago Howl.",
        "screenings": [
            {
                "cinema": "Cines Verdi",
                "date": "2026-08-21",
                "time": "22:30"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-03",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-04",
                "time": "12:00"
            }, 
            {
            "cinema": "Cines Embajadores",
            "date": "2026-08-17",
            "time": "22:20"
            }
        ]
    },
    {
        "id": "el-chico-y-la-garza",
        "title": "El chico y la garza",
        "originalTitle": "Kimitachi wa Dō Ikiru ka",
        "poster": "images/el-chico-y-la-garza.jpg",
        "director": "Hayao Miyazaki",
        "cast": [
            "Soma Santoki",
            "Masaki Suda",
            "Kō Shibasaki",
            "Aimyon",
            "Yoshino Kimura"
        ],
        "year": 2023,
        "duration": 123,
        "country": "Japón",
        "genres": [
            "Animación",
            "Fantasía",
            "Aventura"
        ],
        "synopsis": "Tras la muerte de su madre, el joven Mahito se muda al campo con su padre. Allí entra en un mundo fantástico guiado por una misteriosa garza gris y comienza un viaje entre vivos y muertos.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-24",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-25",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "el-hombre-tranquilo",
        "title": "El hombre tranquilo",
        "originalTitle": "The Quiet Man",
        "poster": "images/el-hombre-tranquilo.jpg",
        "director": "John Ford",
        "cast": [
            "John Wayne",
            "Maureen O'Hara",
            "Barry Fitzgerald",
            "Ward Bond",
            "Victor McLaglen"
        ],
        "year": 1952,
        "duration": 129,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Drama",
            "Romance"
        ],
        "synopsis": "Un boxeador estadounidense retirado regresa al pueblo irlandés donde nació y se enamora de Mary Kate Danaher, una mujer de fuerte carácter cuyo hermano se opone a su relación.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-10-18",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "el-maquinista-de-la-general",
        "title": "El maquinista de la General",
        "originalTitle": "The General",
        "poster": "images/el-maquinista-de-la-general.jpg",
        "director": "Buster Keaton, Clyde Bruckman",
        "cast": [
            "Buster Keaton",
            "Marion Mack",
            "Glen Cavender"
        ],
        "year": 1926,
        "duration": 78,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Acción",
            "Aventura",
            "Drama"
        ],
        "synopsis": "Durante la Guerra Civil estadounidense, un maquinista confederado intenta recuperar su locomotora, robada por espías de la Unión, mientras trata de rescatar también a la mujer que ama.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-09-29",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-silencio-de-los-corderos",
        "title": "El silencio de los corderos",
        "originalTitle": "The Silence of the Lambs",
        "poster": "images/el-silencio-de-los-corderos.jpg",
        "director": "Jonathan Demme",
        "cast": [
            "Jodie Foster",
            "Anthony Hopkins",
            "Scott Glenn",
            "Ted Levine"
        ],
        "year": 1991,
        "duration": 118,
        "country": "Estados Unidos",
        "genres": [
            "Thriller",
            "Crimen",
            "Drama"
        ],
        "synopsis": "Una joven agente del FBI busca la ayuda del brillante y peligroso Hannibal Lecter para atrapar a un asesino en serie conocido como Buffalo Bill.",
        "screenings": [
            {
                "cinema": "Kinépolis Ciudad de la Imagen",
                "date": "2026-09-17",
                "time": "19:00",
                
            }
        ]
    },
    {
        "id": "el-septimo-sello",
        "title": "El séptimo sello",
        "originalTitle": "Det sjunde inseglet",
        "poster": "images/el-septimo-sello.jpg",
        "director": "Ingmar Bergman",
        "cast": [
            "Max von Sydow",
            "Gunnar Björnstrand",
            "Bengt Ekerot",
            "Nils Poppe",
            "Bibi Andersson"
        ],
        "year": 1957,
        "duration": 96,
        "country": "Suecia",
        "genres": [
            "Drama",
            "Fantasía",
            "Drama psicológico"
        ],
        "synopsis": "Un caballero que regresa a Suecia tras las Cruzadas se encuentra con la Muerte y consigue aplazar su destino jugando una partida de ajedrez mientras busca respuestas sobre la vida, la muerte y Dios.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-05",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-viaje-de-chihiro",
        "title": "El viaje de Chihiro",
        "originalTitle": "Sen to Chihiro no Kamikakushi",
        "poster": "images/el-viaje-de-chihiro.jpg",
        "director": "Hayao Miyazaki",
        "cast": [
            "Rumi Hiiragi",
            "Miyu Irino",
            "Mari Natsuki",
            "Takashi Naitō"
        ],
        "year": 2001,
        "duration": 125,
        "country": "Japón",
        "genres": [
            "Animación",
            "Fantasía",
            "Aventura"
        ],
        "synopsis": "Chihiro entra accidentalmente en un mundo habitado por espíritus después de que sus padres sean transformados en cerdos. Para salvarlos y regresar a casa, deberá trabajar en una misteriosa casa de baños gobernada por la bruja Yubaba.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-09-26",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-09-27",
                "time": "12:00"
            }, 
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-23",
                "time": "12:00",
                "version": "Doblada al español"
            }
        ]
    },
    {
        "id": "el-viento-se-levanta",
        "title": "El viento se levanta",
        "originalTitle": "Kaze Tachinu",
        "poster": "images/el-viento-se-levanta.jpg",
        "director": "Hayao Miyazaki",
        "cast": [
            "Hideaki Anno",
            "Miori Takimoto",
            "Hidetoshi Nishijima",
            "Masahiko Nishimura"
        ],
        "year": 2013,
        "duration": 126,
        "country": "Japón",
        "genres": [
            "Animación",
            "Drama",
            "Romance"
        ],
        "synopsis": "Jiro Horikoshi sueña con diseñar aviones y acaba convirtiéndose en uno de los ingenieros aeronáuticos más importantes de Japón, mientras vive una historia de amor marcada por la guerra y la enfermedad.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-17",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-18",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "fargo",
        "title": "Fargo",
        "originalTitle": "Fargo",
        "poster": "images/fargo.jpg",
        "director": "Joel Coen, Ethan Coen",
        "cast": [
            "Frances McDormand",
            "William H. Macy",
            "Steve Buscemi",
            "Peter Stormare"
        ],
        "year": 1996,
        "duration": 98,
        "country": "Estados Unidos, Reino Unido",
        "genres": [
            "Thriller",
            "Drama",
            "Comedia negra"
        ],
        "synopsis": "Un vendedor de coches endeudado contrata a dos delincuentes para que secuestren a su propia esposa y así sacarle dinero a su suegro, pero el plan se tuerce y desencadena una investigación liderada por una sagaz y embarazada jefa de policía de Minnesota.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-12-10",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "flores-para-antonio",
        "title": "Flores para Antonio",
        "originalTitle": "Flores para Antonio",
        "poster": "images/flores-para-antonio.jpg",
        "director": "Elena Molina, Isaki Lacuesta",
        "cast": [
            "Alba Flores",
            "Lolita Flores",
            "Rosario Flores"
        ],
        "year": 2025,
        "duration": 98,
        "country": "España",
        "genres": [
            "Documental"
        ],
        "synopsis": "La actriz Alba Flores se adentra en la memoria de su padre, el músico Antonio Flores, fallecido cuando ella tenía ocho años, a través de vídeos caseros, cintas inéditas y entrevistas a familiares y amigos para entender quién fue de verdad.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-17",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "gangs-of-new-york",
        "title": "Gangs of New York",
        "originalTitle": "Gangs of New York",
        "poster": "images/gangs-of-new-york.jpg",
        "director": "Martin Scorsese",
        "cast": [
            "Leonardo DiCaprio",
            "Daniel Day-Lewis",
            "Cameron Diaz",
            "Jim Broadbent"
        ],
        "year": 2002,
        "duration": 169,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Crimen",
            "Historia"
        ],
        "synopsis": "En el Nueva York del siglo XIX, un joven busca vengar la muerte de su padre enfrentándose al poderoso líder de una banda que controla los bajos fondos de Five Points.",
        "screenings": [
            {
                "cinema": "Cines Renoir",
                "date": "2026-09-03",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "grease",
        "title": "Grease",
        "originalTitle": "Grease",
        "poster": "images/grease.jpg",
        "director": "Randal Kleiser",
        "cast": [
            "John Travolta",
            "Olivia Newton-John",
            "Stockard Channing",
            "Jeff Conaway"
        ],
        "year": 1978,
        "duration": 110,
        "country": "Estados Unidos",
        "genres": [
            "Musical",
            "Romance",
            "Comedia"
        ],
        "synopsis": "Tras un romántico verano juntos, Sandy y Danny vuelven a encontrarse en el instituto Rydell, donde las diferencias entre sus pandillas y la presión de encajar ponen a prueba su relación entre canciones y coreografías.",
        "screenings": [
            {
                "cinema": "Cine de Verano de La Bombilla",
                "date": "2026-08-30",
                "time": "22:00"
            },
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-09-08",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "gremlins",
        "title": "Gremlins",
        "originalTitle": "Gremlins",
        "poster": "images/gremlins.jpg",
        "director": "Joe Dante",
        "cast": [
            "Zach Galligan",
            "Phoebe Cates",
            "Hoyt Axton",
            "Polly Holliday"
        ],
        "year": 1984,
        "duration": 106,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Fantástico",
            "Terror"
        ],
        "synopsis": "Un padre regala a su hijo un extraño y adorable ser llamado mogwai, adquirido en una tienda de Chinatown, sin saber que incumplir sus tres sencillas normas de cuidado desatará una plaga de criaturas monstruosas en su tranquilo pueblo durante la Navidad.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-12-17",
                "time": "20:00"
            }
        ]
    },
    {
    "id": "hamnet",
    "title": "Hamnet",
    "originalTitle": "Hamnet",
    "poster": "images/hamnet.jpg",
    "director": "Chloé Zhao",
    "cast": [
        "Jessie Buckley",
        "Paul Mescal",
        "Jacobi Jupe",
        "Joe Alwyn",
        "Emily Watson",
        "Noah Jupe",
        "David Wilmot"
    ],
    "year": 2025,
    "duration": 119,
    "country": "Reino Unido",
    "genres": [
        "Drama",
        "Biográfico"
    ],
    "synopsis": "La historia de Agnes, la esposa de William Shakespeare, en su lucha por superar la tragedia familiar que irrumpe en su vida, con el telón de fondo de la creación de una de las obras más importantes de Shakespeare.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-24",
            "time": "22:00"
        },
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-31",
            "time": "22:00"
        }
    ]
},
    {
        "id": "in-the-mood-for-love",
        "title": "Deseando amar",
        "originalTitle": "In the Mood for Love",
        "poster": "images/in-the-mood-for-love.jpg",
        "director": "Wong Kar-wai",
        "cast": [
            "Maggie Cheung",
            "Tony Leung Chiu-wai",
            "Rebecca Pan",
            "Kelly Lai Chen"
        ],
        "year": 2000,
        "duration": 98,
        "country": "Hong Kong, Francia",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "En el Hong Kong de 1962, dos vecinos descubren que sus respectivas parejas mantienen una relación y desarrollan entre ellos un vínculo íntimo que nunca llega a convertirse en una relación convencional.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-14",
                "time": "22:30"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-16",
                "time": "20:00"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-19",
                "time": "16:15"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-08-20",
                "time": "20:10"
            }
        ]
    },
    {
        "id": "isla-de-perros",
        "title": "Isla de perros",
        "originalTitle": "Isle of Dogs",
        "poster": "images/isla-de-perros.jpg",
        "director": "Wes Anderson",
        "cast": [
            "Bryan Cranston",
            "Koyu Rankin",
            "Edward Norton",
            "Bill Murray",
            "Jeff Goldblum"
        ],
        "year": 2018,
        "duration": 101,
        "country": "Estados Unidos, Alemania",
        "genres": [
            "Animación",
            "Aventura",
            "Comedia"
        ],
        "synopsis": "En un futuro Japón, todos los perros son desterrados a una isla de basura. Un niño viaja hasta allí para encontrar a su mascota y acaba contando con la ayuda de una peculiar manada de perros.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-08",
                "time": "20:00"
            }
        ]
    },
    {
    "id": "kill-bill-the-whole-bloody-affair",
    "title": "Kill Bill: The Whole Bloody Affair",
    "originalTitle": "Kill Bill: The Whole Bloody Affair",
    "poster": "images/kill-bill-the-whole-bloody-affair.jpg",
    "director": "Quentin Tarantino",
    "cast": [
        "Uma Thurman",
        "David Carradine",
        "Lucy Liu",
        "Vivica A. Fox"
    ],
    "year": 2004,
    "duration": 247,
    "country": "Estados Unidos",
    "genres": [
        "Acción",
        "Thriller",
        "Artes marciales"
    ],
    "synopsis": "Versión íntegra que fusiona los volúmenes 1 y 2 de 'Kill Bill' en una sola película, tal y como Tarantino la concibió originalmente. La Novia, dada por muerta tras una masacre en su boda, emprende una implacable venganza contra el escuadrón de asesinas y contra Bill, su antiguo jefe y amante.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-15",
            "time": "22:15",
            "version": "The Whole Bloody Affair"
        },
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-19",
            "time": "22:00",
            "version": "Parte 1"
        },
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-26",
            "time": "22:00",
            "version": "Parte 2"
        }
    ]
},
    {
        "id": "la-grazia",
        "title": "La Grazia",
        "originalTitle": "La Grazia",
        "poster": "images/la-grazia.jpg",
        "director": "Paolo Sorrentino",
        "cast": [
            "Toni Servillo",
            "Anna Ferzetti",
            "Orlando Cinque",
            "Massimo Venturiello"
        ],
        "year": 2025,
        "duration": 133,
        "country": "Italia",
        "genres": [
            "Drama"
        ],
        "synopsis": "Mariano De Santis, presidente de la República Italiana, se enfrenta al final de su mandato y a una difícil decisión política y moral relacionada con la eutanasia.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-25",
                "time": "22:00"
            }
        ]
    },
    {
    "id": "la-la-land",
    "title": "La La Land",
    "originalTitle": "La La Land",
    "poster": "images/la-la-land.jpg",
    "director": "Damien Chazelle",
    "cast": [
        "Emma Stone",
        "Ryan Gosling",
        "John Legend",
        "Rosemarie DeWitt"
    ],
    "year": 2016,
    "duration": 128,
    "country": "Estados Unidos",
    "genres": [
        "Musical",
        "Romance",
        "Drama"
    ],
    "synopsis": "Mia, una aspirante a actriz que trabaja como camarera, y Sebastian, un pianista de jazz que malvive en locales de segunda, se enamoran en Los Ángeles, pero su ambición por triunfar en sus respectivas carreras artísticas pone en riesgo su relación.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-21",
            "time": "20:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-22",
            "time": "19:55"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-23",
            "time": "12:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-24",
            "time": "22:30"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-21",
            "time": "20:00",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-21",
            "time": "21:10",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-22",
            "time": "20:00",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-22",
            "time": "21:10",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-23",
            "time": "18:00",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-23",
            "time": "20:30",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-24",
            "time": "18:00",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-24",
            "time": "20:30",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-09-10",
            "time": "22:00",
            "version": "Sing-Along"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-21",
            "time": "19:35",
            "version": "Cinesas Xanadú/Las Rozas/Méndez Álvaro sólo"
        },
        {
            "cinema": "Sala Equis",
            "date": "2026-08-18",
            "time": "19:30"
        },
        {
            "cinema": "Sala Equis",
            "date": "2026-08-20",
            "time": "22:00"
        },
        {
            "cinema": "Sala Equis",
            "date": "2026-08-22",
            "time": "18:00"
        }
    ]
},
    {
        "id": "la-naranja-mecánica",
        "title": "La naranja mecánica",
        "originalTitle": "A Clockwork Orange",
        "poster": "images/la-naranja-mecánica.jpg",
        "director": "Stanley Kubrick",
        "cast": [
            "Malcolm McDowell",
            "Patrick Magee",
            "Michael Bates",
            "Warren Clarke"
        ],
        "year": 1971,
        "duration": 136,
        "country": "Reino Unido, Estados Unidos",
        "genres": [
            "Ciencia ficción",
            "Crimen",
            "Drama"
        ],
        "synopsis": "Alex, líder de una banda de jóvenes violentos, es encarcelado y sometido a un polémico tratamiento experimental destinado a eliminar sus impulsos criminales.",
        "screenings": [
            {
                "cinema": "Cines Verdi",
                "date": "2026-09-17",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "la-novia-cadáver",
        "title": "La novia cadáver",
        "originalTitle": "Corpse Bride",
        "poster": "images/la-novia-cadáver.jpg",
        "director": "Tim Burton, Mike Johnson",
        "cast": [
            "Johnny Depp",
            "Helena Bonham Carter",
            "Emily Watson",
            "Tracey Ullman"
        ],
        "year": 2005,
        "duration": 77,
        "country": "Estados Unidos, Reino Unido",
        "genres": [
            "Animación",
            "Fantástico",
            "Musical"
        ],
        "synopsis": "En un pueblo europeo del siglo XIX, el tímido Victor ensaya sus votos de boda en el bosque y, sin querer, despierta a Emily, una misteriosa novia cadáver que lo reclama como su esposo y lo arrastra al mundo de los muertos, mientras su prometida real le espera en el mundo de los vivos.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-08-15",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "la-princesa-mononoke",
        "title": "La princesa Mononoke",
        "originalTitle": "もののけ姫",
        "poster": "images/la-princesa-mononoke.jpg",
        "director": "Hayao Miyazaki",
        "cast": [
            "Yōji Matsuda",
            "Yuriko Ishida",
            "Yūko Tanaka",
            "Billy Crudup"
        ],
        "year": 1997,
        "duration": 133,
        "country": "Japón",
        "genres": [
            "Animación",
            "Fantasía",
            "Aventura"
        ],
        "synopsis": "El joven Ashitaka viaja hacia el oeste para encontrar una cura a una maldición y queda atrapado en el conflicto entre los habitantes de una ciudad industrial y los espíritus del bosque liderados por la princesa Mononoke.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-09-19",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-09-20",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "la-princesa-prometida",
        "title": "La princesa prometida",
        "originalTitle": "The Princess Bride",
        "poster": "images/la-princesa-prometida.jpg",
        "director": "Rob Reiner",
        "cast": [
            "Cary Elwes",
            "Robin Wright",
            "Mandy Patinkin",
            "Chris Sarandon"
        ],
        "year": 1987,
        "duration": 98,
        "country": "Estados Unidos",
        "genres": [
            "Aventura",
            "Fantástico",
            "Romance",
            "Comedia"
        ],
        "synopsis": "Un abuelo le lee a su nieto enfermo el cuento de Westley y Buttercup: tras años buscando fortuna, Westley regresa para casarse con su amada, pero deberá enfrentarse a piratas, gigantes, espadachines y a un malvado príncipe para recuperarla.",
        "screenings": [
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-09-05",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "la-strada",
        "title": "La Strada",
        "originalTitle": "La Strada",
        "poster": "images/la-strada.jpg",
        "director": "Federico Fellini",
        "cast": [
            "Giulietta Masina",
            "Anthony Quinn",
            "Richard Basehart",
            "Aldo Silvani"
        ],
        "year": 1954,
        "duration": 108,
        "country": "Italia",
        "genres": [
            "Drama"
        ],
        "synopsis": "Gelsomina es vendida por su madre a Zampanò, un artista ambulante violento con quien recorre Italia. Su relación se transforma cuando conocen a un alegre equilibrista llamado El Loco.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-10-11",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "la-vida-es-bella",
        "title": "La vida es bella",
        "originalTitle": "La vita è bella",
        "poster": "images/la-vida-es-bella.jpg",
        "director": "Roberto Benigni",
        "cast": [
            "Roberto Benigni",
            "Nicoletta Braschi",
            "Giorgio Cantarini",
            "Giustino Durano"
        ],
        "year": 1997,
        "duration": 116,
        "country": "Italia",
        "genres": [
            "Comedia",
            "Drama",
            "Bélico"
        ],
        "synopsis": "Guido, un judío italiano de espíritu alegre, conquista a Dora y forma con ella una familia, pero cuando él y su pequeño hijo son deportados a un campo de concentración nazi, recurre a su imaginación para convertir el horror en un juego y así proteger al niño.",
        "screenings": [
            {
                "cinema": "Kinépolis Ciudad de la Imagen",
                "date": "2026-10-15",
                "time": "19:00",
                
            }
        ]
    },
    {
        "id": "ladrón-de-bicicletas",
        "title": "Ladrón de bicicletas",
        "originalTitle": "Ladri di biciclette",
        "poster": "images/ladrón-de-bicicletas.jpg",
        "director": "Vittorio De Sica",
        "cast": [
            "Lamberto Maggiorani",
            "Enzo Staiola",
            "Lianella Carell"
        ],
        "year": 1948,
        "duration": 93,
        "country": "Italia",
        "genres": [
            "Drama",
            "Neorrealismo"
        ],
        "synopsis": "En la Roma de posguerra, Antonio consigue un empleo pegando carteles con la condición de tener una bicicleta, pero se la roban el primer día de trabajo. Junto a su pequeño hijo Bruno, recorre la ciudad tratando de recuperarla antes de perder también su nuevo empleo.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-16",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "lady-bird",
        "title": "Lady Bird",
        "originalTitle": "Lady Bird",
        "poster": "images/lady-bird.jpg",
        "director": "Greta Gerwig",
        "cast": [
            "Saoirse Ronan",
            "Laurie Metcalf",
            "Lucas Hedges",
            "Timothée Chalamet"
        ],
        "year": 2017,
        "duration": 94,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Christine, que prefiere hacerse llamar 'Lady Bird', vive su último año de instituto en Sacramento soñando con escapar a la Costa Este, mientras lidia con una relación intensa y a menudo conflictiva con su madre.",
        "screenings": [
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-11-05",
                "time": "20:00"
            }
        ]
    },
{
    "id": "las-aventuras-del-principe-ahmed",
    "title": "Las aventuras del príncipe Ahmed",
    "originalTitle": "Die Abenteuer des Prinzen Achmed",
    "poster": "images/las-aventuras-del-principe-ahmed.jpg",
    "director": "Lotte Reiniger",
    "cast": [],
    "year": 1926,
    "duration": 65,
    "country": "Alemania",
    "genres": [
        "Animación",
        "Fantasía",
        "Aventura"
    ],
    "synopsis": "El príncipe Ahmed emprende un viaje fantástico en el que se enfrenta a un poderoso hechicero y vive aventuras extraordinarias con la ayuda de un caballo mágico, Aladino y la bruja de la Montaña de Fuego.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-20",
            "time": "22:00",
            "version": "Narración y música en directo"
        }
    ]
},
{
    "id": "lazos-ardientes",
    "title": "Lazos ardientes",
    "originalTitle": "Bound",
    "poster": "images/lazos-ardientes.jpg",
    "director": "Lana Wachowski, Lilly Wachowski",
    "cast": [
        "Jennifer Tilly",
        "Gina Gershon",
        "Joe Pantoliano"
    ],
    "year": 1996,
    "duration": 113,
    "country": "Estados Unidos",
    "genres": [
        "Crimen",
        "Thriller",
        "Romance"
    ],
    "synopsis": "Corky, una expresidiaria, y Violet, la novia de un mafioso, se enamoran y planean robar millones de dólares de dinero de la mafia.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-18",
            "time": "22:00"
        }
    ]
},
{
    "id": "le-haine",
    "title": "El odio",
    "originalTitle": "La Haine",
    "poster": "images/la-haine.jpg",
    "director": "Mathieu Kassovitz",
    "cast": [
        "Vincent Cassel",
        "Hubert Koundé",
        "Saïd Taghmaoui"
    ],
    "year": 1995,
    "duration": 98,
    "country": "Francia",
    "genres": [
        "Drama",
        "Crimen",
        "Thriller"
    ],
    "synopsis": "Durante las veinticuatro horas posteriores a un violento enfrentamiento con la policía, tres jóvenes de los suburbios de París afrontan la tensión, la frustración y la violencia de su entorno.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-17",
            "time": "20:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-22",
            "time": "22:30"
        }
    ]
},
{
    "id": "los-400-golpes",
    "title": "Los 400 golpes",
    "originalTitle": "Les quatre cents coups",
    "poster": "images/los-400-golpes.jpg",
    "director": "François Truffaut",
    "cast": [
        "Jean-Pierre Léaud",
        "Claire Maurier",
        "Albert Rémy",
        "Guy Decomble"
    ],
    "year": 1959,
    "duration": 99,
    "country": "Francia",
    "genres": [
        "Drama"
    ],
    "synopsis": "Antoine Doinel, un adolescente incomprendido, se enfrenta a los problemas familiares y escolares mientras intenta escapar de una vida que siente que no le pertenece.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-09-08",
            "time": "20:00"
        }
    ]
},
{
    "id": "los-goonies",
    "title": "Los Goonies",
    "originalTitle": "The Goonies",
    "poster": "images/los-goonies.jpg",
    "director": "Richard Donner",
    "cast": [
        "Sean Astin",
        "Josh Brolin",
        "Jeff Cohen",
        "Corey Feldman",
        "Kerri Green",
        "Martha Plimpton",
        "Ke Huy Quan"
    ],
    "year": 1985,
    "duration": 114,
    "country": "Estados Unidos",
    "genres": [
        "Aventura",
        "Comedia",
        "Familia"
    ],
    "synopsis": "Un grupo de amigos descubre un antiguo mapa del tesoro y se embarca en una aventura para encontrar el legendario tesoro del pirata Willy el Tuerto y salvar sus hogares.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-24",
            "time": "20:00"
        }
    ]
},
{
    "id": "los-otros",
    "title": "Los otros",
    "originalTitle": "The Others",
    "poster": "images/los-otros.jpg",
    "director": "Alejandro Amenábar",
    "cast": [
        "Nicole Kidman",
        "Fionnula Flanagan",
        "Christopher Eccleston",
        "Elaine Cassidy",
        "Alakina Mann"
    ],
    "year": 2001,
    "duration": 104,
    "country": "España, Estados Unidos, Francia",
    "genres": [
        "Terror",
        "Misterio",
        "Drama"
    ],
    "synopsis": "Tras la Segunda Guerra Mundial, Grace vive con sus dos hijos en una enorme casa aislada. Cuando empiezan a suceder extraños fenómenos, la familia descubre que quizá no está sola.",
    "screenings": [
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-09-03",
            "time": "22:00"
        }
    ]
},
{
    "id": "los-puentes-de-madison",
    "title": "Los puentes de Madison",
    "originalTitle": "The Bridges of Madison County",
    "poster": "images/los-puentes-de-madison.jpg",
    "director": "Clint Eastwood",
    "cast": [
        "Clint Eastwood",
        "Meryl Streep",
        "Annie Corley",
        "Victor Slezak"
    ],
    "year": 1995,
    "duration": 135,
    "country": "Estados Unidos",
    "genres": [
        "Drama",
        "Romance"
    ],
    "synopsis": "Un fotógrafo de National Geographic llega al condado de Madison para fotografiar sus famosos puentes y conoce a Francesca, una ama de casa con la que vivirá un intenso romance durante cuatro días.",
    "screenings": [
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-10-29",
            "time": "19:00",
            
        }
    ]
},
{
    "id": "los-siete-samurais",
    "title": "Los siete samuráis",
    "originalTitle": "Shichinin no samurai",
    "poster": "images/los-siete-samurais.jpg",
    "director": "Akira Kurosawa",
    "cast": [
        "Toshirō Mifune",
        "Takashi Shimura",
        "Keiko Tsushima",
        "Daisuke Katō",
        "Seiji Miyaguchi",
        "Isao Kimura",
        "Yoshio Inaba"
    ],
    "year": 1954,
    "duration": 207,
    "country": "Japón",
    "genres": [
        "Acción",
        "Drama",
        "Aventura"
    ],
    "synopsis": "Un pueblo campesino, amenazado por una banda de bandidos, contrata a siete samuráis para defenderlo. Entre ellos deberán preparar a los habitantes para resistir el inevitable ataque.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-09-20",
            "time": "12:00"
        },
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-28",
            "time": "20:00"
        }
    ]
},
{
    "id": "memories",
    "title": "Memories",
    "originalTitle": "Memorīzu",
    "poster": "images/memories.jpg",
    "director": "Kōji Morimoto, Tensai Okamura, Katsuhiro Ōtomo",
    "cast": [],
    "year": 1995,
    "duration": 113,
    "country": "Japón",
    "genres": [
        "Animación",
        "Ciencia ficción"
    ],
    "synopsis": "Antología de ciencia ficción formada por tres historias independientes que exploran recuerdos, tecnología, guerra y los aspectos más inquietantes de la imaginación humana.",
    "screenings": [
        {
            "cinema": "Cines Verdi",
            "date": "2026-09-04",
            "time": "22:30"
        }
    ]
},
{
    "id": "michael",
    "title": "Michael",
    "originalTitle": "Michael",
    "poster": "images/michael.jpg",
    "director": "Antoine Fuqua",
    "cast": [
        "Jaafar Jackson",
        "Colman Domingo",
        "Nia Long",
        "Juliano Krue Valdi",
        "Miles Teller",
        "Kendrick Sampson"
    ],
    "year": 2026,
    "duration": 127,
    "country": "Estados Unidos, Reino Unido",
    "genres": [
        "Drama",
        "Biográfico",
        "Musical"
    ],
    "synopsis": "Retrato cinematográfico de Michael Jackson que recorre su trayectoria desde sus primeros años como integrante de los Jackson Five hasta convertirse en uno de los mayores iconos de la música y el entretenimiento.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-25",
            "time": "22:00"
        },
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-09-02",
            "time": "22:00"
        }
    ]
},
{
    "id": "moulin-rouge",
    "title": "Moulin Rouge",
    "originalTitle": "Moulin Rouge!",
    "poster": "images/moulin-rouge.jpg",
    "director": "Baz Luhrmann",
    "cast": [
        "Nicole Kidman",
        "Ewan McGregor",
        "John Leguizamo",
        "Jim Broadbent",
        "Richard Roxburgh"
    ],
    "year": 2001,
    "duration": 128,
    "country": "Australia, Estados Unidos",
    "genres": [
        "Musical",
        "Drama",
        "Romance"
    ],
    "synopsis": "En el París de 1900, el joven poeta Christian se enamora de Satine, la estrella del Moulin Rouge, mientras el club se enfrenta a la amenaza de un poderoso duque.",
    "screenings": [
        {
            "cinema": "Cinesa",
            "date": "2026-08-24",
            "time": "19:35"
        }
    ]
},
{
    "id": "mulholland-drive",
    "title": "Mulholland Drive",
    "originalTitle": "Mulholland Drive",
    "poster": "images/mulholland-drive.jpg",
    "director": "David Lynch",
    "cast": [
        "Naomi Watts",
        "Laura Harring",
        "Justin Theroux",
        "Ann Miller",
        "Dan Hedaya"
    ],
    "year": 2001,
    "duration": 145,
    "country": "Estados Unidos, Francia",
    "genres": [
        "Drama",
        "Thriller",
        "Misterio"
    ],
    "synopsis": "Una aspirante a actriz llega a Los Ángeles y conoce a una mujer que ha perdido la memoria tras un accidente. Juntas intentan descubrir su identidad mientras se adentran en una misteriosa red de secretos.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-16",
            "time": "21:15"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-17",
            "time": "22:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-19",
            "time": "22:15"
        }
    ]
},
{
    "id": "mágico-el-enviado-de-los-dioses",
    "title": "Mágico, el enviado de los dioses",
    "originalTitle": "Mágico, el enviado de los dioses",
    "poster": "images/mágico-el-enviado-de-los-dioses.jpg",
    "director": "Ángel Rodríguez Vázquez",
    "cast": [
        "Roberto Cañedo",
        "Ana Luisa Peluffo",
        "Julia Patricia",
        "Norma Lee",
        "Gabriela Ríos"
    ],
    "year": 1990,
    "duration": 115,
    "country": "México",
    "genres": [
        "Fantástico",
        "Aventuras",
        "Acción",
        "Superhéroes",
        "Serie B"
    ],
    "synopsis": "Las fuerzas del mal amenazan Monterrey y sólo Mágico, un superhéroe llegado del espacio, puede enfrentarse a los supervillanos y salvar la ciudad.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-04",
            "time": "22:30",
            
        }
    ]
},
{
    "id": "origen",
    "title": "Origen",
    "originalTitle": "Inception",
    "poster": "images/origen.jpg",
    "director": "Christopher Nolan",
    "cast": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Elliot Page",
        "Tom Hardy",
        "Ken Watanabe",
        "Marion Cotillard"
    ],
    "year": 2010,
    "duration": 150,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Ciencia ficción",
        "Thriller",
        "Acción"
    ],
    "synopsis": "Dom Cobb es un experto en infiltrarse en los sueños de otras personas para robar secretos. Su última misión consiste en hacer lo contrario: implantar una idea en la mente de un objetivo.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-11-19",
            "time": "20:00"
        }
    ]
},
{
    "id": "pesadilla-en-elm-street",
    "title": "Pesadilla en Elm Street",
    "originalTitle": "A Nightmare on Elm Street",
    "poster": "images/pesadilla-en-elm-street.jpg",
    "director": "Wes Craven",
    "cast": [
        "Heather Langenkamp",
        "John Saxon",
        "Robert Englund",
        "Ronee Blakley",
        "Johnny Depp"
    ],
    "year": 1984,
    "duration": 91,
    "country": "Estados Unidos",
    "genres": [
        "Terror",
        "Slasher"
    ],
    "synopsis": "Un grupo de adolescentes comienza a ser perseguido en sus sueños por Freddy Krueger, un asesino sobrenatural capaz de convertir sus pesadillas en una amenaza mortal.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-29",
            "time": "20:00"
        }
    ]
},
{
    "id": "ponyo-en-el-acantilado",
    "title": "Ponyo en el acantilado",
    "originalTitle": "Gake no Ue no Ponyo",
    "poster": "images/ponyo-en-el-acantilado.jpg",
    "director": "Hayao Miyazaki",
    "cast": [
        "Tomoko Yamaguchi",
        "Kazushige Nagashima",
        "Nara Yuria",
        "Hiroki Doi",
        "Rumi Hiiragi"
    ],
    "year": 2008,
    "duration": 101,
    "country": "Japón",
    "genres": [
        "Animación",
        "Fantasía",
        "Aventura"
    ],
    "synopsis": "Ponyo, una pequeña criatura marina que sueña con convertirse en humana, conoce al niño Sosuke y desarrolla un fuerte vínculo con él, desencadenando una serie de acontecimientos mágicos junto al mar.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-10",
            "time": "12:00"
        },
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-11",
            "time": "12:00"
        },
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-12",
            "time": "12:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-10-22",
            "time": "16:00",
            "version": "Doblada al Español"
        }
    ]
},
{
    "id": "por-un-punado-de-dolares",
    "title": "Por un puñado de dólares",
    "originalTitle": "Per un pugno di dollari",
    "poster": "images/por-un-punado-de-dolares.jpg",
    "director": "Sergio Leone",
    "cast": [
        "Clint Eastwood",
        "Gian Maria Volontè",
        "Marianne Koch",
        "José Calvo",
        "Margarita Lozano"
    ],
    "year": 1964,
    "duration": 99,
    "country": "Italia, España, Alemania",
    "genres": [
        "Western",
        "Acción",
        "Drama"
    ],
    "synopsis": "Un pistolero sin nombre llega a un pueblo fronterizo dominado por dos familias rivales y decide enfrentar a ambas para sacar provecho de su enfrentamiento.",
    "screenings": []
},
{
    "id": "rambo-acorralado",
    "title": "Rambo, acorralado",
    "originalTitle": "First Blood",
    "poster": "images/rambo-acorralado.jpg",
    "director": "Ted Kotcheff",
    "cast": [
        "Sylvester Stallone",
        "Richard Crenna",
        "Brian Dennehy",
        "David Caruso"
    ],
    "year": 1982,
    "duration": 97,
    "country": "Estados Unidos",
    "genres": [
        "Acción",
        "Drama",
        "Thriller"
    ],
    "synopsis": "John Rambo, veterano de Vietnam, llega a un pequeño pueblo donde un enfrentamiento con el sheriff desencadena una persecución por las montañas en la que tendrá que luchar por sobrevivir.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-08-27",
            "time": "20:00"
        }
    ]
},
{
    "id": "réquiem-por-un-sueño",
    "title": "Réquiem por un sueño",
    "originalTitle": "Requiem for a Dream",
    "poster": "images/réquiem-por-un-sueño.jpg",
    "director": "Darren Aronofsky",
    "cast": [
        "Ellen Burstyn",
        "Jared Leto",
        "Jennifer Connelly",
        "Marlon Wayans"
    ],
    "year": 2000,
    "duration": 102,
    "country": "Estados Unidos",
    "genres": [
        "Drama",
        "Drama psicológico"
    ],
    "synopsis": "Cuatro personas persiguen sus propios sueños y esperanzas, pero sus adicciones y obsesiones les llevan progresivamente hacia una espiral de aislamiento y destrucción.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-09-13",
            "time": "12:00"
        }
    ]
},
{
    "id": "romeo-y-julieta",
    "title": "Romeo y Julieta",
    "originalTitle": "Romeo + Juliet",
    "poster": "images/romeo-y-julieta.jpg",
    "director": "Baz Luhrmann",
    "cast": [
        "Leonardo DiCaprio",
        "Claire Danes",
        "John Leguizamo",
        "Harold Perrineau",
        "Pete Postlethwaite",
        "Paul Sorvino"
    ],
    "year": 1996,
    "duration": 120,
    "country": "Estados Unidos, México, Australia, Canadá",
    "genres": [
        "Drama",
        "Romance",
        "Crimen"
    ],
    "synopsis": "La tragedia de Shakespeare se traslada a la moderna Verona Beach, donde Romeo y Julieta se enamoran pese a pertenecer a dos familias enfrentadas.",
    "screenings": [
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-30",
            "time": "22:00"
        }
    ]
},
{
    "id": "searching-for-sugar-man",
    "title": "Searching for Sugar Man",
    "originalTitle": "Searching for Sugar Man",
    "poster": "images/searching-for-sugar-man.jpg",
    "director": "Malik Bendjelloul",
    "cast": [
        "Sixto Rodríguez"
    ],
    "year": 2012,
    "duration": 87,
    "country": "Suecia",
    "genres": [
        "Documental",
        "Documental sobre música",
        "Biográfico"
    ],
    "synopsis": "A finales de los años 60, Sixto Rodríguez, un misterioso músico de Detroit, fue descubierto por dos productores que quedaron fascinados por sus canciones. Tras grabar dos discos sin alcanzar el éxito esperado, desapareció entre rumores sobre su muerte. Mientras tanto, su música se convirtió en un símbolo de libertad en la Sudáfrica del Apartheid. Décadas después, dos fans sudafricanos investigan qué ocurrió realmente con él y descubren una historia extraordinaria.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-09-22",
            "time": "20:00"
        }
    ]
},
{
    "id": "senderos-de-gloria",
    "title": "Senderos de gloria",
    "originalTitle": "Paths of Glory",
    "poster": "images/senderos-de-gloria.jpg",
    "director": "Stanley Kubrick",
    "cast": [
        "Kirk Douglas",
        "Ralph Meeker",
        "Adolphe Menjou",
        "George Macready"
    ],
    "year": 1957,
    "duration": 88,
    "country": "Estados Unidos",
    "genres": [
        "Drama",
        "Bélico"
    ],
    "synopsis": "Durante la Primera Guerra Mundial, tres soldados franceses son acusados injustamente de cobardía después de que un ataque contra las posiciones alemanas fracasa. Su superior intenta defenderlos frente a un consejo de guerra que busca convertirlos en chivos expiatorios.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-14",
            "time": "20:00"
        }
    ]
},
{
    "id": "ser-o-no-ser",
    "title": "Ser o no ser",
    "originalTitle": "To Be or Not to Be",
    "poster": "images/ser-o-no-ser.jpg",
    "director": "Ernst Lubitsch",
    "cast": [
        "Carole Lombard",
        "Jack Benny",
        "Robert Stack",
        "Felix Bressart"
    ],
    "year": 1942,
    "duration": 99,
    "country": "Estados Unidos",
    "genres": [
        "Comedia",
        "Guerra"
    ],
    "synopsis": "Una compañía teatral de Varsovia utiliza sus dotes para la interpretación y el disfraz para enfrentarse a los nazis durante la ocupación alemana de Polonia.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-08-25",
            "time": "20:00"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-09-06",
            "time": "12:00"
        }
    ]
},
{
    "id": "suspiria",
    "title": "Suspiria",
    "originalTitle": "Suspiria",
    "poster": "images/suspiria.jpg",
    "director": "Dario Argento",
    "cast": [
        "Jessica Harper",
        "Stefania Casini",
        "Flavio Bucci",
        "Joan Bennett",
        "Alida Valli"
    ],
    "year": 1977,
    "duration": 98,
    "country": "Italia",
    "genres": [
        "Terror",
        "Misterio"
    ],
    "synopsis": "Una joven bailarina estadounidense llega a una prestigiosa academia de danza alemana y pronto descubre que tras sus elegantes paredes se esconde una presencia sobrenatural y aterradora.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-10-01",
            "time": "20:00"
        }
    ]
},
{
    "id": "taxi-driver",
    "title": "Taxi Driver",
    "originalTitle": "Taxi Driver",
    "poster": "images/taxi-driver.jpg",
    "director": "Martin Scorsese",
    "cast": [
        "Robert De Niro",
        "Jodie Foster",
        "Cybill Shepherd",
        "Harvey Keitel",
        "Peter Boyle"
    ],
    "year": 1976,
    "duration": 114,
    "country": "Estados Unidos",
    "genres": [
        "Drama",
        "Crimen",
        "Thriller"
    ],
    "synopsis": "Travis Bickle, un veterano de Vietnam que trabaja como taxista nocturno en Nueva York, se hunde progresivamente en la soledad y la violencia mientras desarrolla una obsesión por limpiar las calles de aquello que considera corrupción.",
    "screenings": [
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-09-06",
            "time": "22:00"
        }
    ]
},
{
    "id": "the-florida-project",
    "title": "The Florida Project",
    "originalTitle": "The Florida Project",
    "poster": "images/the-florida-project.jpg",
    "director": "Sean Baker",
    "cast": [
        "Brooklynn Prince",
        "Willem Dafoe",
        "Bria Vinaite",
        "Valeria Cotto"
    ],
    "year": 2017,
    "duration": 111,
    "country": "Estados Unidos",
    "genres": [
        "Drama"
    ],
    "synopsis": "Una niña de seis años vive con su madre en un motel barato cercano a Disney World. Mientras juega y explora los alrededores con sus amigos, su madre lucha por salir adelante.",
    "screenings": [
        {
            "cinema": "Sala Equis",
            "date": "2026-08-20",
            "time": "19:45"
        },
        {
            "cinema": "Sala Equis",
            "date": "2026-08-28",
            "time": "19:30"
        }
    ]
},
{
    "id": "the-freshman",
    "title": "El estudiante novato",
    "originalTitle": "The Freshman",
    "poster": "images/the-freshman.jpg",
    "director": "Fred C. Newmeyer, Sam Taylor",
    "cast": [
        "Harold Lloyd",
        "Jobyna Ralston",
        "Babe Ruth",
        "Brooks Benedict"
    ],
    "year": 1925,
    "duration": 76,
    "country": "Estados Unidos",
    "genres": [
        "Comedia",
        "Cine mudo"
    ],
    "synopsis": "Un joven ingenuo llega a la universidad convencido de que puede convertirse rápidamente en el alumno más popular, pero sus intentos por encajar provocan una sucesión de situaciones cómicas.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-09-03",
            "time": "22:00",
            "version": "Cine mudo · Música en directo"
        }
    ]
},
{
    "id": "the-omen",
    "title": "La profecía",
    "originalTitle": "The Omen",
    "poster": "images/the-omen.jpg",
    "director": "Richard Donner",
    "cast": [
        "Gregory Peck",
        "Lee Remick",
        "David Warner",
        "Billie Whitelaw",
        "Harvey Stephens"
    ],
    "year": 1976,
    "duration": 111,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Terror",
        "Misterio"
    ],
    "synopsis": "Un diplomático estadounidense adopta a un niño después de que su propio hijo muera al nacer. Con el paso del tiempo empieza a descubrir que el pequeño Damien puede ser mucho más siniestro de lo que imaginaba.",
    "screenings": [
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-12-03",
            "time": "19:00",
            
        }
    ]
},
{
    "id": "un-poeta",
    "title": "Un poeta",
    "originalTitle": "Un poeta",
    "poster": "images/un-poeta.jpg",
    "director": "Simón Mesa Soto",
    "cast": [
        "Ubeimar Ríos",
        "Rebeca Andrade",
        "Guillermo Pérez"
    ],
    "year": 2025,
    "duration": 120,
    "country": "Colombia, Alemania, Suecia",
    "genres": [
        "Drama",
        "Comedia"
    ],
    "synopsis": "Un poeta fracasado y desencantado encuentra una nueva oportunidad cuando conoce a una joven con talento para la poesía y decide convertirse en su mentor.",
    "screenings": [
        {
            "cinema": "Sala Equis",
            "date": "2026-08-19",
            "time": "19:30"
        }
    ]
},
{
    "id": "viridiana",
    "title": "Viridiana",
    "originalTitle": "Viridiana",
    "poster": "images/viridiana.jpg",
    "director": "Luis Buñuel",
    "cast": [
        "Silvia Pinal",
        "Francisco Rabal",
        "Fernando Rey",
        "Margarita Lozano"
    ],
    "year": 1961,
    "duration": 90,
    "country": "España, México",
    "genres": [
        "Drama"
    ],
    "synopsis": "Viridiana, una joven novicia a punto de tomar los hábitos, visita a su tío antes de ingresar definitivamente en el convento. La visita desencadena una serie de acontecimientos que cambiarán por completo su vida y sus convicciones.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-12",
            "time": "20:00"
        }
    ]
},
{
    "id": "vértigo",
    "title": "Vértigo",
    "originalTitle": "Vertigo",
    "poster": "images/vértigo.jpg",
    "director": "Alfred Hitchcock",
    "cast": [
        "James Stewart",
        "Kim Novak",
        "Barbara Bel Geddes",
        "Tom Helmore",
        "Henry Jones"
    ],
    "year": 1958,
    "duration": 128,
    "country": "Estados Unidos",
    "genres": [
        "Thriller psicológico",
        "Misterio",
        "Romance"
    ],
    "synopsis": "Scottie Ferguson, un antiguo detective de la policía de San Francisco que sufre vértigo, es contratado para seguir a la misteriosa esposa de un conocido. La investigación le llevará a obsesionarse con ella y a descubrir un complejo secreto.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-30",
            "time": "20:30"
        }
    ]
},
{
    "id": "west-side-story",
    "title": "West Side Story",
    "originalTitle": "West Side Story",
    "poster": "images/west-side-story.jpg",
    "director": "Steven Spielberg",
    "cast": [
        "Ansel Elgort",
        "Rachel Zegler",
        "Ariana DeBose",
        "David Alvarez",
        "Mike Faist",
        "Rita Moreno"
    ],
    "year": 2021,
    "duration": 156,
    "country": "Estados Unidos",
    "genres": [
        "Musical",
        "Romance",
        "Drama"
    ],
    "synopsis": "En el Nueva York de los años 50, Tony y María se enamoran a pesar de pertenecer a dos bandas rivales, los Jets y los Sharks. Su relación se desarrolla en medio de la creciente tensión entre ambos grupos.",
    "screenings": [
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-11-12",
            "time": "19:00",
            
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-25",
            "time": "20:40"
        }
    ]
},
{
    "id": "a-quién-ama-gilbert-grape",
    "title": "¿A quién ama Gilbert Grape?",
    "originalTitle": "What's Eating Gilbert Grape",
    "poster": "images/a-quién-ama-gilbert-grape.jpg",
    "director": "Lasse Hallström",
    "cast": [
        "Johnny Depp",
        "Leonardo DiCaprio",
        "Juliette Lewis",
        "Mary Steenburgen",
        "Darlene Cates",
        "John C. Reilly"
    ],
    "year": 1993,
    "duration": 118,
    "country": "Estados Unidos",
    "genres": [
        "Drama",
        "Comedia"
    ],
    "synopsis": "Gilbert Grape vive en el pequeño pueblo de Endora y dedica gran parte de su vida a cuidar de su familia, especialmente de su hermano menor Arnie y de su madre. La llegada de Becky hará que Gilbert empiece a plantearse su propia vida y el futuro que quiere.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-09-01",
            "time": "20:00"
        }
    ]
},
{
    "id": "érase-una-vez-en-américa",
    "title": "Érase una vez en América",
    "originalTitle": "Once Upon a Time in America",
    "poster": "images/érase-una-vez-en-américa.jpg",
    "director": "Sergio Leone",
    "cast": [
        "Robert De Niro",
        "James Woods",
        "Elizabeth McGovern",
        "Joe Pesci",
        "Treat Williams",
        "Tuesday Weld"
    ],
    "year": 1984,
    "duration": 229,
    "country": "Italia, Estados Unidos",
    "genres": [
        "Crimen",
        "Drama",
        "Épico"
    ],
    "synopsis": "Un antiguo gánster de Nueva York regresa a la ciudad después de décadas de ausencia y se enfrenta a los recuerdos, amistades, traiciones y decisiones que marcaron su ascenso durante la época de la Ley Seca.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-10-25",
            "time": "12:00"
        }
    ]
}, 
{
    "id": "amarga-navidad",
    "title": "Amarga Navidad",
    "originalTitle": "Amarga Navidad",
    "poster": "images/amarga-navidad.jpg",
    "director": "Pedro Almodóvar",
    "cast": [
        "Bárbara Lennie",
        "Leonardo Sbaraglia",
        "Aitana Sánchez-Gijón",
        "Victoria Luengo",
        "Patrick Criado",
        "Milena Smit",
        "Quim Gutiérrez",
        "Carmen Machi",
        "Gloria Muñoz",
        "Rossy de Palma",
        "Amaia Romero"
    ],
    "year": 2026,
    "duration": 111,
    "country": "España",
    "genres": [
        "Drama"
    ],
    "synopsis": "Elsa es una directora de publicidad cuya madre muere durante un largo puente de diciembre. Se refugia en el trabajo para evitar enfrentarse al duelo, hasta que un ataque de pánico la obliga a detenerse y replantearse su vida.",
    "screenings": [
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-21",
            "time": "22:00"
        }
    ]
},
{
    "id": "a-todo-gas",
    "title": "A todo gas",
    "originalTitle": "The Fast and the Furious",
    "poster": "images/a-todo-gas.jpg",
    "director": "Rob Cohen",
    "cast": [
        "Paul Walker",
        "Vin Diesel",
        "Michelle Rodriguez",
        "Jordana Brewster",
        "Rick Yune",
        "Chad Lindberg"
    ],
    "year": 2001,
    "duration": 109,
    "country": "Estados Unidos",
    "genres": [
        "Acción",
        "Crimen",
        "Thriller"
    ],
    "synopsis": "Brian O'Conner, un policía infiltrado, se introduce en el mundo de las carreras callejeras de Los Ángeles para investigar una serie de robos de camiones. Allí conoce a Dominic Toretto, el líder de una banda de corredores, y comienza a cuestionarse dónde está realmente su lealtad.",
    "screenings": [
        {
            "cinema": "Cines Verdi",
            "date": "2026-08-21",
            "time": "22:30"
        },
        {
            "cinema": "Cines Verdi",
            "date": "2026-08-22",
            "time": "22:30"
        },
        {
            "cinema": "Cines Verdi",
            "date": "2026-08-23",
            "time": "22:30"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-21",
            "time": "22:15",
            "version": "4DX 2D · Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-22",
            "time": "21:30",
            "version": "4DX 2D · Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-23",
            "time": "21:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-28",
            "time": "22:00"
        }
    ]
},
{
    "id": "carretera-perdida",
    "title": "Carretera perdida",
    "originalTitle": "Lost Highway",
    "poster": "images/carretera-perdida.jpg",
    "director": "David Lynch",
    "cast": [
        "Bill Pullman",
        "Patricia Arquette",
        "Balthazar Getty",
        "Robert Blake",
        "Robert Loggia"
    ],
    "year": 1997,
    "duration": 134,
    "country": "Estados Unidos",
    "genres": [
        "Mystery",
        "Thriller",
        "Drama"
    ],
    "synopsis": "Fred Madison, un músico de jazz que vive con su esposa Renee, recibe unos misteriosos vídeos que muestran lo que ocurre dentro de su propia casa. Tras ser acusado del asesinato de su mujer, Fred desaparece inexplicablemente de su celda y en su lugar aparece un joven mecánico que lleva una vida completamente diferente.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-18",
            "time": "22:30"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-22",
            "time": "22:30",
            "version": "Embajadores Río"
        }
    ]
}, 
{
    "id": "la-virgen-de-agosto",
    "title": "La virgen de agosto",
    "originalTitle": "La virgen de agosto",
    "poster": "images/la-virgen-de-agosto.jpg",
    "director": "Jonás Trueba",
    "cast": [
        "Itsaso Arana",
        "Vito Sanz",
        "Joe Manjón",
        "Isabelle Stoffel",
        "Luis Heras"
    ],
    "year": 2019,
    "duration": 129,
    "country": "España",
    "genres": [
        "Drama"
    ],
    "synopsis": "Eva es una mujer de treinta y tres años que decide quedarse en Madrid durante el caluroso mes de agosto, mientras la mayoría de la gente se va de vacaciones. A lo largo de esos días de verbenas y reencuentros, irá descubriendo en la ciudad una oportunidad para reflexionar y empezar de nuevo.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-23",
            "time": "21:00"
        }
    ]
},
{
    "id": "moonrise-kingdom",
    "title": "Moonrise Kingdom",
    "originalTitle": "Moonrise Kingdom",
    "poster": "images/moonrise-kingdom.jpg",
    "director": "Wes Anderson",
    "cast": [
        "Jared Gilman",
        "Kara Hayward",
        "Bruce Willis",
        "Edward Norton",
        "Bill Murray",
        "Frances McDormand"
    ],
    "year": 2012,
    "duration": 94,
    "country": "Estados Unidos",
    "genres": [
        "Comedia",
        "Drama",
        "Romance"
    ],
    "synopsis": "Años 60. Familiares y amigos buscan a dos niños de doce años que se han enamorado y han decidido fugarse juntos de su pueblo natal en una isla de Nueva Inglaterra. Diversas autoridades intentan encontrarlos antes de que una tormenta azote la costa.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-17",
            "time": "20:30",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-20",
            "time": "22:30",
            "version": "Embajadores Río"
        },
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-21",
            "time": "22:30",
            "version": "Embajadores Río"
        }
    ]
}, 
{
    "id": "mi-vecino-totoro",
    "title": "Mi vecino Totoro",
    "originalTitle": "Tonari no Totoro",
    "poster": "images/mi-vecino-totoro.jpg",
    "director": "Hayao Miyazaki",
    "cast": [
        "Noriko Hidaka",
        "Chika Sakamoto",
        "Hitoshi Takagi",
        "Shigesato Itoi"
    ],
    "year": 1988,
    "duration": 86,
    "country": "Japón",
    "genres": [
        "Animación",
        "Fantástico",
        "Aventura"
    ],
    "synopsis": "En los años 50, una familia japonesa se traslada al campo. Las dos hijas, Satsuki y Mei, entablan amistad con Totoro, un espíritu del bosque, y viven fantásticas aventuras en un entorno natural lleno de magia.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-23",
            "time": "16:00",
            "version": "Doblada al español"
        }
    ]
},
{
    "id": "pastoris",
    "title": "Pastoris",
    "originalTitle": "Pastoris",
    "poster": "images/pastoris.jpg",
    "director": "Pablo Moreno",
    "cast": [
        "Raúl Escudero",
        "Laura Contreras",
        "Carlos Paca",
        "Sergio Cardoso"
    ],
    "year": 2024,
    "duration": 95,
    "country": "España",
    "genres": [
        "Drama"
    ],
    "synopsis": "Domingo, que ha sido dado por muerto en la guerra, regresa a su casa. Todo ha cambiado, incluso los suyos. Ahora él es la pieza que no encaja en la sociedad. Surge la posibilidad de un trabajo: pastorear un rebaño de ovejas desde Salamanca a Extremadura. Domingo inicia el viaje a través de la vía pecuaria, afrontando los peligros del camino y los de su propio interior.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-24",
            "time": "20:15",
            "version": "Coloquio con el director"
        }
    ]
},
{
    "id": "begin-again",
    "title": "Begin Again",
    "originalTitle": "Begin Again",
    "poster": "images/begin-again.jpg",
    "director": "John Carney",
    "cast": [
        "Keira Knightley",
        "Mark Ruffalo",
        "Adam Levine",
        "Hailee Steinfeld",
        "James Corden"
    ],
    "year": 2013,
    "duration": 104,
    "country": "Estados Unidos",
    "genres": [
        "Comedia",
        "Drama",
        "Musica",
        "Romance"
    ],
    "synopsis": "Gretta y su novio de toda la vida Dave viajan a Nueva York cuando él consigue un contrato con una gran discográfica. Pero las tentaciones de la fama pronto alejan a Dave. Desconsolada, Gretta conoce a Dan, un productor discográfico en horas bajas que queda cautivado por su talento mientras la escucha actuar en un bar de East Village.",
    "screenings": [
        {
            "cinema": "Cines Embajadores",
            "date": "2026-08-24",
            "time": "20:00"
        
        }
    ]
}, 
{
    "id": "fresas-salvajes",
    "title": "Fresas salvajes",
    "originalTitle": "Smultronstället",
    "poster": "images/fresas-salvajes.jpg",
    "director": "Ingmar Bergman",
    "cast": [
        "Victor Sjöström",
        "Bibi Andersson",
        "Ingrid Thulin",
        "Gunnar Björnstrand"
    ],
    "year": 1957,
    "duration": 91,
    "country": "Suecia",
    "genres": [
        "Drama"
    ],
    "synopsis": "Un anciano profesor de medicina, Isak Borg, viaja en coche desde Estocolmo hasta Lund con su nuera para recibir un homenaje académico. A lo largo del trayecto, los encuentros con diversos personajes y los vívidos recuerdos y sueños de su juventud le llevan a reflexionar sobre su vida, su egoísmo y sus relaciones personales.",
    "screenings": [
        {
            "cinema": "Cines Renoir",
            "date": "2026-09-15",
            "time": "20:00"
        }
    ]
},
{
    "id": "harry-potter-y-la-piedra-filosofal",
    "title": "Harry Potter y la piedra filosofal",
    "originalTitle": "Harry Potter and the Sorcerer's Stone",
    "poster": "images/harry-potter-y-la-piedra-filosofal.jpg",
    "director": "Chris Columbus",
    "cast": [
        "Daniel Radcliffe",
        "Rupert Grint",
        "Emma Watson",
        "Robbie Coltrane",
        "Richard Harris",
        "Alan Rickman",
        "Maggie Smith"
    ],
    "year": 2001,
    "duration": 152,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Fantástico",
        "Aventura",
        "Familiar"
    ],
    "synopsis": "El día de su undécimo cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros y que posee poderes mágicos. Tras ser invitado a estudiar en el Colegio Hogwarts de Magia y Hechicería, inicia una aventura en la que descubrirá la verdad sobre el pasado de sus padres y la amenaza del malvado Lord Voldemort.",
"screenings": [
        {
            "cinema": "Cibeles de Cine",
            "date": "2026-08-29",
            "time": "22:00"
        },
        {
            "cinema": "Cines Verdi",
            "date": "2026-09-03",
            "time": "20:30"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-28",
            "time": "15:45",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-28",
            "time": "19:15",
            "version": "VOSE · Cinesa Proyecciones"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-28",
            "time": "19:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-28",
            "time": "20:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-29",
            "time": "15:45",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-29",
            "time": "19:15",
            "version": "VOSE · Cinesa Proyecciones"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-29",
            "time": "19:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-29",
            "time": "20:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-30",
            "time": "15:45",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-30",
            "time": "19:15",
            "version": "VOSE · Cinesa Proyecciones"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-30",
            "time": "19:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Cinesa",
            "date": "2026-08-30",
            "time": "20:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-28",
            "time": "16:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-28",
            "time": "19:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-28",
            "time": "16:00",
            "version": "VOSE"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-28",
            "time": "19:15",
            "version": "VOSE"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-29",
            "time": "16:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-29",
            "time": "19:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-29",
            "time": "16:00",
            "version": "VOSE"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-29",
            "time": "19:15",
            "version": "VOSE"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-30",
            "time": "16:15",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-30",
            "time": "19:30",
            "version": "Doblada al español"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-30",
            "time": "16:00",
            "version": "VOSE"
        },
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-08-30",
            "time": "19:15",
            "version": "VOSE"
        }
    ]
},
{
    "id": "en-el-nombre-del-padre",
    "title": "En el nombre del padre",
    "originalTitle": "In the Name of the Father",
    "poster": "images/en-el-nombre-del-padre.jpg",
    "director": "Jim Sheridan",
    "cast": [
        "Daniel Day-Lewis",
        "Pete Postlethwaite",
        "Emma Thompson",
        "John Lynch"
    ],
    "year": 1993,
    "duration": 133,
    "country": "Irlanda, Reino Unido",
    "genres": [
        "Drama",
        "Biográfico",
        "Drama judicial"
    ],
    "synopsis": "Belfast, años 70. Gerry es injustamente acusado de participar en un atentado del IRA en Guildford y condenado a cadena perpetua junto a su padre Giuseppe. En prisión, Gerry descubre la fuerza interior de su padre mientras una abogada entregada a la causa lucha por demostrar su inocencia y destapar uno de los mayores errores judiciales de la historia de Reino Unido.",
    "screenings": [
        {
            "cinema": "Cine de Verano de La Bombilla",
            "date": "2026-08-29",
            "time": "22:00",
            "version": "Concierto tributo U2 a las 21:15"
        }
    ]
},
{
    "id": "mudras-bailando-los-hilos-invisibles",
    "title": "Mudras. Bailando los hilos invisibles",
    "originalTitle": "Mudras. Bailando los hilos invisibles",
    "poster": "images/mudras-bailando-los-hilos-invisibles.jpg",
    "director": "Bobby Bedi",
    "cast": [
        "Mónica de la Fuente",
        "Nazaré de la Fuente"
    ],
    "year": 2024,
    "duration": 75,
    "country": "España, India",
    "genres": [
        "Documental"
    ],
    "synopsis": "A principios de los 90, la bailarina Mónica de la Fuente viajó a la India descubriendo sus artes escénicas tradicionales. Treinta años después, su hija Nazaré, con la misma edad que tenía su madre entonces, recorre los mismos lugares. Lo que empieza como un viaje artístico se convierte en una exploración sobre la memoria, la herencia y la danza que une a dos generaciones entre España e India.",
    "screenings": [
        {
            "cinema": "Cines Verdi",
            "date": "2026-09-10",
            "time": "18:15",
            "version": "Coloquio con el equipo de la película"
        }
    ]
},
{
    "id": "bohemian-rhapsody",
    "title": "Bohemian Rhapsody",
    "originalTitle": "Bohemian Rhapsody",
    "poster": "images/bohemian-rhapsody.jpg",
    "director": "Bryan Singer",
    "cast": [
        "Rami Malek",
        "Lucy Boynton",
        "Gwilym Lee",
        "Ben Hardy",
        "Joseph Mazzello",
        "Aidan Gillen"
    ],
    "year": 2018,
    "duration": 134,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Drama",
        "Biográfico",
        "Musical"
    ],
    "synopsis": "Retrato de la banda Queen y de su carismático cantante Freddie Mercury, desde sus inicios en los años 70 hasta su mítica actuación en el concierto Live Aid de 1985 en el estadio de Wembley.",
    "screenings": [
        {
            "cinema": "Cinesa",
            "date": "2026-08-18",
            "time": "19:35"
        }
    ]
},
{
    "id": "mamma-mia",
    "title": "Mamma Mia!",
    "originalTitle": "Mamma Mia!",
    "poster": "images/mamma-mia.jpg",
    "director": "Phyllida Lloyd",
    "cast": [
        "Meryl Streep",
        "Pierce Brosnan",
        "Colin Firth",
        "Stellan Skarsgård",
        "Julie Walters",
        "Amanda Seyfried",
        "Christine Baranski"
    ],
    "year": 2008,
    "duration": 108,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Musical",
        "Comedia",
        "Romance"
    ],
    "synopsis": "Sophie, una joven a punto de casarse en una idílica isla griega, invita a la boda a tres hombres del pasado de su madre con la esperanza de averiguar quién de ellos es su verdadero padre, todo a ritmo de los grandes éxitos de ABBA.",
    "screenings": [
        {
            "cinema": "Cinesa",
            "date": "2026-08-20",
            "time": "19:35",
            "version": "Doblada al español"
        }
    ]
},
{
    "id": "el-gran-showman",
    "title": "El gran showman",
    "originalTitle": "The Greatest Showman",
    "poster": "images/el-gran-showman.jpg",
    "director": "Michael Gracey",
    "cast": [
        "Hugh Jackman",
        "Zendaya",
        "Zac Efron",
        "Michelle Williams",
        "Rebecca Ferguson"
    ],
    "year": 2017,
    "duration": 105,
    "country": "Estados Unidos",
    "genres": [
        "Musical",
        "Drama",
        "Biográfico"
    ],
    "synopsis": "Un musical fascinante e inspirador que celebra el nacimiento del negocio del espectáculo y la historia del visionario P.T. Barnum, quien partió de la nada para crear un espectáculo que se convirtió en una sensación mundial.",
    "screenings": [
        {
            "cinema": "Cinesa",
            "date": "2026-08-19",
            "time": "19:35",
            "version": "En Cinesa Equinoccio/Loranca/Oasiz sólo"
        }
    ]
},
{
    "id": "love-actually",
    "title": "Love Actually",
    "originalTitle": "Love Actually",
    "poster": "images/love-actually.jpg",
    "director": "Richard Curtis",
    "cast": [
        "Hugh Grant",
        "Liam Neeson",
        "Colin Firth",
        "Laura Linney",
        "Emma Thompson",
        "Alan Rickman",
        "Keira Knightley",
        "Bill Nighy"
    ],
    "year": 2003,
    "duration": 135,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Comedia",
        "Romance",
        "Drama"
    ],
    "synopsis": "En Londres, poco antes de las navidades, se entrelazan varias historias de amor y desamor. Desde el nuevo primer ministro hasta una vieja estrella del rock, pasando por un escritor despechado o una novia en apuros, todos se enfrentan a los altibajos del corazón en la época más mágica del año.",
    "screenings": [
        {
            "cinema": "Kinépolis Ciudad de la Imagen",
            "date": "2026-12-17",
            "time": "19:00"
        }
    ]
},
{
    "id": "parada-en-el-infierno",
    "title": "Parada en el infierno",
    "originalTitle": "Stop Over in Hell",
    "poster": "images/parada-en-el-infierno.jpg",
    "director": "Víctor Matellano",
    "cast": [
        "Tania Watson",
        "Pablo Scola",
        "Veki Velilla",
        "Denis Rafter",
        "Nadia de Santiago",
        "Manuel Bandera"
    ],
    "year": 2016,
    "duration": 91,
    "country": "España",
    "genres": [
        "Western",
        "Thriller",
        "Acción"
    ],
    "synopsis": "Ernest y Chris regentan una parada de inteligencias en un recóndito lugar del Oeste americano. Su tranquilidad se rompe de forma salvaje cuando irrumpe un despiadado grupo de facinerosos liderado por el Coronel a la espera de un cargamento de oro, convirtiendo el lugar en un sangriento juego de supervivencia.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-10",
            "time": "22:00",
            "version": "Coloquio con el equipo de la película"
        }
    ]
},
{
    "id": "gaua",
    "title": "Gaua",
    "originalTitle": "Gaua",
    "poster": "images/gaua.jpg",
    "director": "Paul Urkijo Alijo",
    "cast": [
        "Yune Nogueiras",
        "Elena Uriz"
    ],
    "year": 2024,
    "duration": 60,
    "country": "España",
    "genres": [
        "Terror",
        "Fantástico"
    ],
    "synopsis": "En una noche en la Europa del siglo XVII, una joven que camina por el bosque para huir de unos cazadores de brujas se topa con unas misteriosas ancianas que están lavando ropa al borde del río.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-12",
            "time": "22:00"
        }
    ]
},
{
    "id": "asalto-a-la-comisaria-del-distrito-13",
    "title": "Asalto a la comisaría del distrito 13",
    "originalTitle": "Assault on Precinct 13",
    "poster": "images/asalto-a-la-comisaria-del-distrito-13.jpg",
    "director": "John Carpenter",
    "cast": [
        "Austin Stoker",
        "Darwin Joston",
        "Laurie Zim",
        "Martin West"
    ],
    "year": 1976,
    "duration": 91,
    "country": "Estados Unidos",
    "genres": [
        "Acción",
        "Thriller",
        "Crimen"
    ],
    "synopsis": "Un policía en su primera noche de servicio debe unir fuerzas con los prisioneros de una comisaría a punto de cerrar para defenderse del asedio inminente de una sangrienta banda callejera.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-10-24",
            "time": "22:00"
        }
    ]
},
{
    "id": "depredador-2",
    "title": "Depredador 2",
    "originalTitle": "Predator 2",
    "poster": "images/depredador-2.jpg",
    "director": "Stephen Hopkins",
    "cast": [
        "Danny Glover",
        "Gary Busey",
        "Rubén Blades",
        "Maria Conchita Alonso",
        "Bill Paxton"
    ],
    "year": 1990,
    "duration": 108,
    "country": "Estados Unidos",
    "genres": [
        "Acción",
        "Ciencia ficción",
        "Terror"
    ],
    "synopsis": "Un extraterrestre cazador llega a una calurosa ciudad de Los Ángeles sumida en una brutal guerra entre bandas de narcotraficantes. Un veterano policía intentará atrapar a la criatura antes de convertirse en su próxima presa.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-11-21",
            "time": "22:00"
        }
    ]
},
{
    "id": "horizonte-final",
    "title": "Horizonte Final",
    "originalTitle": "Event Horizon",
    "poster": "images/horizonte-final.jpg",
    "director": "Paul W.S. Anderson",
    "cast": [
        "Laurence Fishburne",
        "Sam Neill",
        "Kathleen Quinlan",
        "Joely Richardson",
        "Jason Isaacs"
    ],
    "year": 1997,
    "duration": 96,
    "country": "Reino Unido, Estados Unidos",
    "genres": [
        "Ciencia ficción",
        "Terror"
    ],
    "synopsis": "En el año 2047, una nave de rescate es enviada a investigar la reaparición de la 'Event Horizon', una nave experimental desaparecida siete años atrás en los confines del sistema solar. Al abordar la nave, la tripulación descubrirá que algo aterrador ha regresado con ella.",
    "screenings": [
        {
            "cinema": "mk2 Cine Paz",
            "date": "2026-12-19",
            "time": "22:00"
        }
    ]
},
{
        "id": "la-iguana",
        "title": "La iguana",
        "originalTitle": "Iguana",
        "poster": "images/la-iguana.jpg",
        "director": "Monte Hellman",
        "cast": [
            "Everett McGill",
            "Michael Madsen",
            "Fabio Testi",
            "Maru Valdivielso"
        ],
        "year": 1988,
        "duration": 88,
        "country": "Estados Unidos, Italia, España",
        "genres": [
            "Drama",
            "Aventura"
        ],
        "synopsis": "Un marinero deforme y maltratado por la tripulación de su barco decide rebelarse y escapar a una isla desierta de las Galápagos, donde se proclama rey y declara la guerra al resto de la humanidad.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-18",
                "time": "18:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-08-27",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "quiz-show-el-dilema",
        "title": "Quiz Show (El dilema)",
        "originalTitle": "Quiz Show",
        "poster": "images/quiz-show-el-dilema.jpg",
        "director": "Robert Redford",
        "cast": [
            "John Turturro",
            "Ralph Fiennes",
            "Rob Morrow",
            "Paul Scofield",
            "Mira Sorvino"
        ],
        "year": 1994,
        "duration": 133,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Historia"
        ],
        "synopsis": "A finales de los años 50, el concurso de televisión 'Twenty-One' arrasa en audiencia. Cuando un modesto concursante es obligado a perder para dejar paso a un atractivo profesor universitario, se desata un escándalo de corrupción y manipulación mediática.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-18",
                "time": "20:30",
                "version": "Proyección en 35 mm"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-08-27",
                "time": "22:00",
                "version": "Proyección en 35 mm"
            }
        ]
    },
    {
        "id": "un-lugar-llamado-milagro",
        "title": "Un lugar llamado Milagro",
        "originalTitle": "The Milagro Beanfield War",
        "poster": "images/un-lugar-llamado-milagro.jpg",
        "director": "Robert Redford",
        "cast": [
            "Rubén Blades",
            "Sônia Braga",
            "Christopher Walken",
            "John Heard",
            "Melanie Griffith"
        ],
        "year": 1988,
        "duration": 117,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Drama",
            "Fantástico"
        ],
        "synopsis": "En un pequeño pueblo de Nuevo México, un agricultor decide regar ilegalmente su parcela de judías usando agua de un proyecto urbanístico, desencadenando un conflicto entre la comunidad local y los grandes especuladores.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-19",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "el-dependiente",
        "title": "El dependiente",
        "originalTitle": "El dependiente",
        "poster": "images/el-dependiente.jpg",
        "director": "Leonardo Favio",
        "cast": [
            "Walter Vidarte",
            "Graciela Borges",
            "Fernando Iglesias",
            "Nora Cullen"
        ],
        "year": 1969,
        "duration": 87,
        "country": "Argentina",
        "genres": [
            "Drama"
        ],
        "synopsis": "Fernández es el maduro dependiente de una ferretería cuyo dueño está muy enfermo. Espera con ansias la muerte del anciano para heredar el negocio, mientras entabla una extraña relación con una joven del pueblo.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-19",
                "time": "20:30",
                "version": "Proyección en 35 mm"
            }
        ]
    },
    {
        "id": "route-irish",
        "title": "Route Irish",
        "originalTitle": "Route Irish",
        "poster": "images/route-irish.jpg",
        "director": "Ken Loach",
        "cast": [
            "Mark Womack",
            "Andrea Lowe",
            "John Bishop",
            "Geoff Bell"
        ],
        "year": 2010,
        "duration": 109,
        "country": "Reino Unido, Francia",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "synopsis": "Tras la muerte de su mejor amigo en la peligrosa carretera que une el aeropuerto de Bagdad con la Zona Verde, un contratista de seguridad privada rechaza la versión oficial y emprende su propia investigación en Liverpool.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-19",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "en-un-mundo-libre",
        "title": "En un mundo libre...",
        "originalTitle": "It's a Free World...",
        "poster": "images/en-un-mundo-libre.jpg",
        "director": "Ken Loach",
        "cast": [
            "Kierston Wareing",
            "Juliet Ellis",
            "Leslaw Zurek",
            "Colin Caughlin"
        ],
        "year": 2007,
        "duration": 96,
        "country": "Reino Unido, Italia, Alemania, España",
        "genres": [
            "Drama"
        ],
        "synopsis": "Tras ser despedida de una empresa de trabajo temporal, una ambiciosa mujer decide montar su propia agencia informal de contratación de inmigrantes ilegales, entrando en una espiral de explotación moralmente cuestionable.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-20",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "kinetta",
        "title": "Kinetta",
        "originalTitle": "Kinetta",
        "poster": "images/kinetta.jpg",
        "director": "Yorgos Lanthimos",
        "cast": [
            "Evangelia Randou",
            "Aris Servetalis",
            "Costas Xikominos"
        ],
        "year": 2005,
        "duration": 95,
        "country": "Grecia",
        "genres": [
            "Drama"
        ],
        "synopsis": "En una desierta ciudad costera griega fuera de temporada, un policía obsesionado con los coches, una camarera de hotel y un fotógrafo se dedican a recrear minuciosamente violentos crímenes reales ocurridos en la zona.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-20",
                "time": "20:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-08-28",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "la-conspiracion",
        "title": "La conspiración",
        "originalTitle": "The Conspirator",
        "poster": "images/la-conspiracion.jpg",
        "director": "Robert Redford",
        "cast": [
            "James McAvoy",
            "Robin Wright",
            "Kevin Kline",
            "Evan Rachel Wood",
            "Tom Wilkinson"
        ],
        "year": 2010,
        "duration": 122,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Historia"
        ],
        "synopsis": "Tras el asesinato de Abraham Lincoln, siete hombres y una mujer son arrestados. Un joven héroe de la Guerra Civil es encargado de defender a Mary Surratt, la única mujer acusada de formar parte del complot para acabar con el presidente.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-20",
                "time": "22:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-08-28",
                "time": "21:00"
            }
        ]
    },
    {
        "id": "la-ruta-de-salina",
        "title": "La ruta de Salina",
        "originalTitle": "La route de Salina",
        "poster": "images/la-ruta-de-salina.jpg",
        "director": "Georges Lautner",
        "cast": [
            "Mimsy Farmer",
            "Robert Walker Jr.",
            "Rita Hayworth",
            "Ed Begley"
        ],
        "year": 1970,
        "duration": 96,
        "country": "Francia, Italia",
        "genres": [
            "Drama",
            "Misterio"
        ],
        "synopsis": "Un joven hippy errante llega a una gasolinera aislada en el desierto donde la dueña y su atractiva hija confunden al forastero con su hijo y hermano desaparecido años atrás, sumergiéndolo en una turbia dinámica familiar.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-21",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "sonar-sonar",
        "title": "Soñar, soñar",
        "originalTitle": "Soñar, soñar",
        "poster": "images/sonar-sonar.jpg",
        "director": "Leonardo Favio",
        "cast": [
            "Carlos Monzón",
            "Gian Franco Pagliaro",
            "Nora Cullen"
        ],
        "year": 1976,
        "duration": 85,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Carlos, un joven mecánico ingenuo y soñador, conoce a El Rulo, un buscavidas que le promete una vida de aventuras y éxito artístico. Convencidos de que pueden triunfar como artistas, ambos viajan a Buenos Aires para perseguir la fama, pero pronto descubren que sus sueños chocan con una realidad mucho más dura de lo que esperaban.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-21",
                "time": "20:30",
                "version": "Proyección en 35 mm"
            }
        ]
    },
    {
        "id": "jimmys-hall",
        "title": "Jimmy's Hall",
        "originalTitle": "Jimmy's Hall",
        "poster": "images/jimmys-hall.jpg",
        "director": "Ken Loach",
        "cast": [
            "Barry Ward",
            "Simone Kirby",
            "Jim Norton",
            "Andrew Scott"
        ],
        "year": 2014,
        "duration": 109,
        "country": "Reino Unido, Irlanda, Francia",
        "genres": [
            "Drama",
            "Historia"
        ],
        "synopsis": "En 1932, tras diez años de exilio en Estados Unidos, el activista político Jimmy Gralton regresa a su Irlanda natal para reabrir un centro comunitario y de baile, chocando frontalmente con la Iglesia y las autoridades locales.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-21",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "el-espiritu-del-45",
        "title": "El espíritu del 45",
        "originalTitle": "The Spirit of '45",
        "poster": "images/el-espiritu-del-45.jpg",
        "director": "Ken Loach",
        "cast": [
            "Documental"
        ],
        "year": 2013,
        "duration": 94,
        "country": "Reino Unido",
        "genres": [
            "Documental",
            "Historia"
        ],
        "synopsis": "Documental que examina el espíritu de unidad nacional que floreció en el Reino Unido tras la Segunda Guerra Mundial y que llevó a la creación del Estado del bienestar, la sanidad pública y la nacionalización de los servicios básicos.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-22",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "la-isla-de-la-muerte",
        "title": "La isla de la muerte",
        "originalTitle": "Island of the Doomed",
        "poster": "images/la-isla-de-la-muerte.jpg",
        "director": "Mel Welles",
        "cast": [
            "Cameron Mitchell",
            "Elisa Montés",
            "George Martin",
            "Rolf von Nauckhoff"
        ],
        "year": 1967,
        "duration": 88,
        "country": "España, Alemania del Este",
        "genres": [
            "Terror",
            "Ciencia ficción"
        ],
        "synopsis": "Un grupo de científicos e invitados llega a una remota isla del Mediterráneo donde un misterioso botánico ha creado una especie silvestre de planta carnívora mutante alimentada con sangre humana.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-22",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "pacto-de-silencio",
        "title": "Pacto de silencio",
        "originalTitle": "The Company You Keep",
        "poster": "images/pacto-de-silencio.jpg",
        "director": "Robert Redford",
        "cast": [
            "Robert Redford",
            "Shia LaBeouf",
            "Julie Christie",
            "Susan Sarandon",
            "Nick Nolte",
            "Stanley Tucci"
        ],
        "year": 2012,
        "duration": 121,
        "country": "Estados Unidos",
        "genres": [
            "Thriller",
            "Drama"
        ],
        "synopsis": "Jim Grant es un antiguo radical pacifista de los Weather Underground que lleva treinta años viviendo en secreto como abogado. Cuando un joven e inquisitivo periodista descubre su verdadera identidad, Grant se ve obligado a emprender la huida para limpiar su nombre.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-22",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "la-parte-de-los-angeles",
        "title": "La parte de los ángeles",
        "originalTitle": "The Angels' Share",
        "poster": "images/la-parte-de-los-angeles.jpg",
        "director": "Ken Loach",
        "cast": [
            "Paul Brannigan",
            "John Henshaw",
            "Gary Maitland",
            "Jasmin Riggins",
            "William Ruane"
        ],
        "year": 2012,
        "duration": 101,
        "country": "Reino Unido, Francia",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Robbie es un joven escocés de Glasgow con un pasado delictivo a punto de ser padre. Evita la cárcel al ser condenado a trabajos comunitarios, donde conoce a un educador social que les introduce a él y a sus compañeros en el apasionante mundo del whisky de malta.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-23",
                "time": "18:00"
            }
        ]
    },
    {
    "id": "juan-moreira",
    "title": "Juan Moreira",
    "originalTitle": "Juan Moreira",
    "poster": "images/juan-moreira.jpg",
    "director": "Leonardo Favio",
    "cast": [
        "Rodolfo Bebán",
        "Jorge Villalba",
        "Pablo Cumo",
        "Elcira Olivera Garcés",
        "Edgardo Suárez"
    ],
    "year": 1973,
    "duration": 98,
    "country": "Argentina",
    "genres": [
        "Drama",
        "Historia",
        "Western"
    ],
    "synopsis": "A finales del siglo XIX, Juan Moreira es un gaucho bueno, trabajador y respetado que solo busca vivir en paz con su esposa y su hijo. Su destino cambia drásticamente cuando el teniente alcalde del pueblo se niega a pagarle una deuda y, ante sus quejas, lo castiga y humilla públicamente, obligándolo a convertirse en un fuera de la ley.",
    "screenings": [
        {
            "cinema": "Cine Doré",
            "date": "2026-08-23",
            "time": "20:30"
        }
    ]
},
    {
        "id": "la-leyenda-de-bagger-vance",
        "title": "La leyenda de Bagger Vance",
        "originalTitle": "The Legend of Bagger Vance",
        "poster": "images/la-leyenda-de-bagger-vance.jpg",
        "director": "Robert Redford",
        "cast": [
            "Will Smith",
            "Matt Damon",
            "Charlize Theron",
            "Bruce McGill",
            "Jack Lemmon"
        ],
        "year": 2000,
        "duration": 126,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Deporte"
        ],
        "synopsis": "Tras regresar traumatizado de la Primera Guerra Mundial, un prometedor golfista ha perdido su swing y su pasión por la vida. Su oportunidad de redención llega con un torneo benéfico y la repentina aparición de un enigmático caddy llamado Bagger Vance.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-25",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "la-cuadrilla",
        "title": "La cuadrilla",
        "originalTitle": "The Navigators",
        "poster": "images/la-cuadrilla.jpg",
        "director": "Ken Loach",
        "cast": [
            "Dean Andrews",
            "Thomas Craig",
            "Joe Duttine",
            "Steve Huison",
            "Venn Tracey"
        ],
        "year": 2001,
        "duration": 96,
        "country": "Reino Unido, Alemania, España",
        "genres": [
            "Drama",
            "Comedia"
        ],
        "synopsis": "A mediados de los años 90, la privatización del sistema ferroviario británico afecta directamente a una cuadrilla de trabajadores en Yorkshire. Entre la incertidumbre laboral y los despidos, el grupo lucha por mantener su dignidad y sentido del compañerismo.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-25",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "el-rio-de-la-vida",
        "title": "El río de la vida",
        "originalTitle": "A River Runs Through It",
        "poster": "images/el-rio-de-la-vida.jpg",
        "director": "Robert Redford",
        "cast": [
            "Craig Sheffer",
            "Brad Pitt",
            "Tom Skerritt",
            "Brenda Blethyn",
            "Emily Lloyd"
        ],
        "year": 1992,
        "duration": 123,
        "country": "Estados Unidos",
        "genres": [
            "Drama"
        ],
        "synopsis": "En la Montana de principios del siglo XX, dos hermanos, hijos de un estricto pastor presbiteriano, crecen unidos por la pasión compartida por la pesca con mosca, aunque sus caminos vitales acaban tomando rumbos muy opuestos.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-26",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "more",
        "title": "More",
        "originalTitle": "More",
        "poster": "images/more.jpg",
        "director": "Barbet Schroeder",
        "cast": [
            "Mimsy Farmer",
            "Klaus Grünberg",
            "Heinz Engelmann",
            "Michel Chanderli"
        ],
        "year": 1969,
        "duration": 116,
        "country": "Francia, Alemania, Luxemburgo",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "Un estudiante alemán viaja a París a finales de los 60, donde conoce a una enigmática joven estadounidense. Juntos viajan a la isla de Ibiza, sumergiéndose en el movimiento hippie y en una destructiva espiral de adicción a las drogas con banda sonora de Pink Floyd.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-26",
                "time": "20:30"
            }
        ]
    },
{
    "id": "nazareno-cruz-y-el-lobo",
    "title": "Nazareno Cruz y el lobo",
    "originalTitle": "Nazareno Cruz y el lobo",
    "poster": "images/nazareno-cruz-y-el-lobo.jpg",
    "director": "Leonardo Favio",
    "cast": [
        "Juan José Camero",
        "Marina Magali",
        "Alfredo Alcón",
        "Lautaro Murúa"
    ],
    "year": 1975,
    "duration": 101,
    "country": "Argentina",
    "genres": [
        "Fantástico",
        "Drama",
        "Terror"
    ],
    "synopsis": "Nazareno Cruz es un joven campesino sobre el que pesa una antigua superstición al ser el séptimo hijo varón. Aunque crece libre de la maldición y lleva una vida tranquila, todo cambia cuando se enamora de Griselda y la leyenda del Lobizón se activa irrevocablemente.",
    "screenings": [
        {
            "cinema": "Cine Doré",
            "date": "2026-08-26",
            "time": "22:00",
            "version": "Proyección en 35 mm"
        }
    ]
},
    {
        "id": "cuando-eramos-jovenes",
        "title": "We Were Young",
        "originalTitle": "A byahme mladi (We Were Young)",
        "poster": "images/cuando-eramos-jovenes.jpg",
        "director": "Binka Zhelyazkova",
        "cast": [
            "Dimitar Buynozov",
            "Rumyana Karabelova",
            "Lyudmila Cheshmedzhieva",
            "Georgi Georgiev-Getz"
        ],
        "year": 1961,
        "duration": 110,
        "country": "Bulgaria",
        "genres": [
            "Drama",
            "Guerra"
        ],
        "synopsis": "Durante la Segunda Guerra Mundial en Sofía, un grupo de jóvenes miembros de la resistencia antifascista vive sus primeros amores, ideales e ilusiones bajo la constante sombra del peligro y la traición.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-27",
                "time": "18:00",
                "version": "VOSE"
            }
        ]
    },
{
    "id": "the-bright-and-dark-sides-of-things",
    "title": "The Bright and Dark Sides of Things",
    "originalTitle": "Lice i opako",
    "poster": "images/the-bright-and-dark-sides-of-things.jpg",
    "director": "Binka Zhelyazkova",
    "cast": [
        "Documental"
    ],
    "year": 1982,
    "duration": 129,
    "country": "Bulgaria",
    "genres": [
        "Documental"
    ],
    "synopsis": "Impactante documental sobre la vida y el sufrimiento de las mujeres en la cárcel de Sliven (Bulgaria) que dan a luz a sus hijos tras los barrotes. A través de sus desgarradores testimonios, la cineasta plantea cuestiones fundamentales sobre la culpa, el arrepentimiento y la redención. Prohibida por el régimen, no se estrenó hasta 1990.",
    "screenings": [
        {
            "cinema": "Cine Doré",
            "date": "2026-08-28",
            "time": "18:00",
            "version": "VOSE · Proyección en 35 mm"
        }
    ]
},
    {
        "id": "el-hombre-que-susurraba-a-los-caballos",
        "title": "El hombre que susurraba a los caballos",
        "originalTitle": "The Horse Whisperer",
        "poster": "images/el-hombre-que-susurraba-a-los-caballos.jpg",
        "director": "Robert Redford",
        "cast": [
            "Robert Redford",
            "Kristin Scott Thomas",
            "Scarlett Johansson",
            "Sam Neill",
            "Dianne Wiest"
        ],
        "year": 1998,
        "duration": 169,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "Tras sufrir un grave accidente a caballo junto a su mejor amiga, la joven Grace y su caballo quedan traumatizados. Su madre viaja hasta Montana en busca de Tom Booker, un conocido 'susurrador' con un don especial para curar a los caballos y a las personas.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-29",
                "time": "18:00"
            }
        ]
    },
{
    "id": "life-flows-slowly-by",
    "title": "Life Flows Slowly By...",
    "originalTitle": "Zhivotat si teche tiho...",
    "poster": "images/life-flows-slowly-by.jpg",
    "director": "Binka Zhelyazkova, Hristo Ganev",
    "cast": [
        "Apostol Karamitev",
        "Lyubomir Kabakchiev",
        "Gani Staikov"
    ],
    "year": 1957,
    "duration": 112,
    "country": "Bulgaria",
    "genres": [
        "Drama"
    ],
    "synopsis": "Años después del fin de la contienda, un grupo de antiguos partisanos antifascistas se reencuentra en la Bulgaria socialista para descubrir con amargura cómo los ideales de su juventud han dado paso al distanciamiento, la burocracia y el desencanto.",
    "screenings": [
        {
            "cinema": "Cine Doré",
            "date": "2026-08-29",
            "time": "21:30",
            "version": "VOSE · Proyección en 35 mm"
        }
    ]
},
    {
        "id": "yo-daniel-blake",
        "title": "Yo, Daniel Blake",
        "originalTitle": "I, Daniel Blake",
        "poster": "images/yo-daniel-blake.jpg",
        "director": "Ken Loach",
        "cast": [
            "Dave Johns",
            "Hayley Squires",
            "Sharon Percy",
            "Briana Shann"
        ],
        "year": 2016,
        "duration": 100,
        "country": "Reino Unido, Francia",
        "genres": [
            "Drama"
        ],
        "synopsis": "Daniel Blake, un carpintero inglés de 59 años, se ve obligado a acudir a las ayudas sociales tras sufrir un problema cardíaco. A pesar de los médicos, la burocracia estatal le obliga a buscar trabajo mientras entabla amistad con Katie, una madre soltera en una situación similar.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-29",
                "time": "22:00"
            }
        ]
    },
    {
        "id": "felices-16",
        "title": "Felices 16",
        "originalTitle": "Sweet Sixteen",
        "poster": "images/felices-16.jpg",
        "director": "Ken Loach",
        "cast": [
            "Martin Compston",
            "Annmarie Fulton",
            "William Ruane",
            "Michelle Abercromby"
        ],
        "year": 2002,
        "duration": 106,
        "country": "Reino Unido, Alemania, España",
        "genres": [
            "Drama",
            "Crimen"
        ],
        "synopsis": "Liam es un adolescente de 15 años de Greenock que sueña con reunir dinero suficiente para comprar un hogar donde vivir junto a su madre cuando esta salga de prisión. Para lograrlo se adentra en el peligroso mundo del tráfico de drogas local.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-30",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "leones-por-corderos",
        "title": "Leones por corderos",
        "originalTitle": "Lions for Lambs",
        "poster": "images/leones-por-corderos.jpg",
        "director": "Robert Redford",
        "cast": [
            "Robert Redford",
            "Meryl Streep",
            "Tom Cruise",
            "Peter Sarsgaard",
            "Andrew Garfield"
        ],
        "year": 2007,
        "duration": 92,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "synopsis": "Tres historias entrelazadas exploran las consecuencias de la guerra de Afganistán: un congresista ambicioso que concede una entrevista exclusiva a una veterana periodista, un profesor universitario que intenta motivar a un brillante alumno y dos soldados atrapados en territorio enemigo.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-08-30",
                "time": "20:30"
            }
        ]
    }

];
