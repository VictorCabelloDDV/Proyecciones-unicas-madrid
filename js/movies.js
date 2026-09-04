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
        "screenings": []
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
                "date": "2026-09-04",
                "time": "22:35",
                "version": "Embajadores Río"
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
                "time": "19:00"
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
        "screenings": []
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
                "date": "2026-09-07",
                "time": "17:50",
                "version": "Embajadores río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-09",
                "time": "22:35"
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
// 10
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
//20
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-03",
                "time": "12:00"
            },
            {
                "cinema": "mk2 Cine Paz",
                "date": "2026-10-04",
                "time": "12:00"
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
//30
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
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-18",
                "time": "20:00",
                "version": "Piano en directo - Embajadores Río"
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
                "time": "19:00"
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
                "cinema": "Cineteca Madrid",
                "date": "2026-09-09",
                "time": "19:00"
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
        "screenings": []
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
                "cinema": "Cibeles de Cine",
                "date": "2026-09-08",
                "time": "22:00"
            }
        ]
    },
//40
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
                "date": "2026-09-04",
                "time": "20:00",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-05",
                "time": "18:15"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-05",
                "time": "22:25",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-06",
                "time": "20:35",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-07",
                "time": "19:45",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-08",
                "time": "20:40",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-09",
                "time": "22:35",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-10",
                "time": "17:30",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-10",
                "time": "22:30",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cibeles de Cine",
                "date": "2026-09-10",
                "time": "22:00",
                "version": "Sing-Along"
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
        "screenings": []
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
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-09",
                "time": "22:30"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-06",
                "time": "11:45",
                "version": "doblada al español - embajadores río"
            }
        ]
    },
//50
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
        "synopsis": "Un abuelo le lee a sus nieto enfermo el cuento de Westley y Buttercup: tras años buscando fortuna, Westley regresa para casarse con su amada, pero deberá enfrentarse a piratas, gigantes, espadachines y a un malvado príncipe para recuperarla.",
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
                "time": "19:00"
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
        "screenings": []
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
        "screenings": []
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
                "date": "2026-09-05",
                "time": "16:00"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-06",
                "time": "20:30"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-08",
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
//60
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
        "screenings": []
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
                "time": "19:00"
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
                "time": "22:30"
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
//70
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
        "screenings": []
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
        "screenings": []
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
//80
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
        "screenings": []
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
        "screenings": []
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
                "time": "19:00"
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
                "date": "2026-09-06",
                "time": "21:45"
            },
            {
                "cinema": "Sala Equis",
                "date": "2026-09-10",
                "time": "19:30"
            },
            {
                "cinema": "Sala Equis",
                "date": "2026-09-15",
                "time": "21:45"
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
        "screenings": []
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
                "time": "19:00"
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
        "screenings": []
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
        "screenings": []
    },
//90
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
        "screenings": []
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
                "date": "2026-09-04",
                "time": "22:30",
                "version": "Embajadores Río"
            },
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-10",
                "time": "22:30"
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
        "screenings": []
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
                "date": "2026-09-10",
                "time": "22:35"
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
        "screenings": []
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
                "date": "2026-09-07",
                "time": "22:30"
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
        "screenings": []
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
                "date": "2026-09-04",
                "time": "22:00",
                "version": "Concierto tributo U2 a las 21:15"
            }
        ]
    },
//100
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
//110
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
    },
//120
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
    "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
    },
//130
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
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
        "screenings": []
    },
    {
        "id": "berdea",
        "title": "Berdea",
        "originalTitle": "Berdea",
        "poster": "images/berdea.jpg",
        "director": "Oihane Ruiz",
        "cast": [
            "Oihane Ruiz",
            "Ane Barrutia",
            "Elena Aranda",
            "Guillermo Ruiz De Erentxun"
        ],
        "year": 2025,
        "duration": 67,
        "country": "España",
        "genres": [
            "Documental",
            "Medioambiente"
        ],
        "synopsis": "La madera es el material del futuro. Con esa idea como punto de partida, la arquitecta Oihane Ruiz y la paisajista Ane Barrutia recorren el ciclo de la madera en su Euskadi natal —del bosque a la industria— en busca de respuestas: ¿qué bosque dejaremos a las generaciones futuras?, ¿quién define hoy el bosque del mañana?",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-06",
                "time": "12:00",
                "version": "VOSE - Coloquio - embajadores río"
            }
        ]
    },
    {
        "id": "cristal-oscuro",
        "title": "Cristal Oscuro",
        "originalTitle": "The Dark Crystal",
        "poster": "images/cristal-oscuro.jpg",
        "director": "Jim Henson, Frank Oz",
        "cast": [
            "Jim Henson",
            "Kathryn Mullen",
            "Frank Oz",
            "Dave Goelz"
        ],
        "year": 1982,
        "duration": 93,
        "country": "Estados Unidos",
        "genres": [
            "Fantástico",
            "Aventura",
            "Animación"
        ],
        "synopsis": "En un planeta lejano, un joven Gelfling llamado Jen emprende una peligrosa búsqueda para encontrar el fragmento perdido del Cristal Oscuro y restaurar el equilibrio en su mundo antes de que expire la Conjunción de los tres soles.",
        "screenings": []
    },
//140
    {
        "id": "blue-jasmine",
        "title": "Blue Jasmine",
        "originalTitle": "Blue Jasmine",
        "poster": "images/blue-jasmine.jpg",
        "director": "Woody Allen",
        "cast": [
            "Cate Blanchett",
            "Alec Baldwin",
            "Sally Hawkins",
            "Bobby Cannavale"
        ],
        "year": 2013,
        "duration": 98,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Comedia"
        ],
        "synopsis": "Jasmine, una ama de casa rica de Nueva York que lo ha perdido todo tras la quiebra de su marido, se ve obligada a mudarse a San Francisco a vivir con su hermana Ginger, una mujer de clase trabajadora, e intentar rehacer su vida desde cero.",
        "screenings": [
            {
                "cinema": "Kinépolis Ciudad de la Imagen",
                "date": "2026-10-01",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "call-me-by-your-name",
        "title": "Call Me by Your Name",
        "originalTitle": "Call Me by Your Name",
        "poster": "images/call-me-by-your-name.jpg",
        "director": "Luca Guadagnino",
        "cast": [
            "Timothée Chalamet",
            "Armie Hammer",
            "Michael Stuhlbarg",
            "Amira Casar"
        ],
        "year": 2017,
        "duration": 132,
        "country": "Estados Unidos, Italia",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "En el verano de 1983, en el norte de Italia, Elio Perlman, un joven de 17 años, pasa los días en la villa familiar estudiando música y leyendo. La llegada de Oliver, el nuevo ayudante de su padre, cambiará su vida para siempre.",
        "screenings": []
    },
    {
        "id": "suspiria-2018",
        "title": "Suspiria (2018)",
        "originalTitle": "Suspiria",
        "poster": "images/suspiria-2018.jpg",
        "director": "Luca Guadagnino",
        "cast": [
            "Dakota Johnson",
            "Tilda Swinton",
            "Mia Goth",
            "Chloe Grace Moretz"
        ],
        "year": 2018,
        "duration": 152,
        "country": "Italia, Estados Unidos",
        "genres": [
            "Terror",
            "Misterio",
            "Thriller"
        ],
        "synopsis": "Susie Bannion, una joven bailarina estadounidense, viaja a Berlín en los años 70 para audicionar en la prestigiosa compañía de danza Markos. Tras ser aceptada, descubre que la escuela esconde oscuros e inquietantes secretos relacionados con la brujería.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-05",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "emilia-perez",
        "title": "Emilia Pérez",
        "originalTitle": "Emilia Pérez",
        "poster": "images/emilia-perez.jpg",
        "director": "Jacques Audiard",
        "cast": [
            "Zoe Saldaña",
            "Karla Sofía Gascón",
            "Selena Gomez",
            "Adriana Paz"
        ],
        "year": 2024,
        "duration": 132,
        "country": "Francia",
        "genres": [
            "Musical",
            "Drama",
            "Comedia"
        ],
        "synopsis": "Rita, una abogada sobrecualificada e infravalorada en un gran bufete de México, recibe una oferta inesperada: ayudar al temido líder de un cártel a retirarse del negocio y realizar el proceso de afirmación de género que siempre ha deseado.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-06",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "august-so-tragic-and-tender",
        "title": "August: So Tragic and Tender",
        "originalTitle": "August: So Tragic and Tender",
        "poster": "images/august-so-tragic-and-tender.jpg",
        "director": "Bruno Lázaro",
        "cast": [
            "Ingrid García-Jonsson",
            "Fernando Tielve",
            "Carlos Camino",
            "Ahmed Mohamed Fadel (el Rubio)"
        ],
        "year": 2024,
        "duration": 80,
        "country": "España, Canadá",
        "genres": [
            "Drama",
            "Misterio",
            "Thriller"
        ],
        "synopsis": "Erica, una documentalista, busca a su novio Marc tras su misteriosa desaparición en parapente en las costas del sur de España. Durante la angustiosa búsqueda junto al mejor amigo de Marc, se desatan tensiones y dilemas entre la realidad, el deseo y lo paranormal.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-09",
                "time": "20:30"
            },
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-10",
                "time": "18:30"
            },
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-11",
                "time": "18:30"
            }
        ]
    },
    {
        "id": "carriage-trade",
        "title": "Carriage Trade",
        "originalTitle": "Carriage Trade",
        "poster": "images/carriage-trade.jpg",
        "director": "Warren Sonbert",
        "cast": [],
        "year": 1972,
        "duration": 61,
        "country": "Estados Unidos",
        "genres": [
            "Experimental",
            "Documental"
        ],
        "synopsis": "Pieza histórica de videoarte mudo (sin sonido ni música). Un montaje rítmico e hipnótico de fragmentos en 16mm grabados en viajes por todo el mundo, explorando el lenguaje visual y el movimiento sin narrativa tradicional.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-16",
                "time": "20:30",
                "version": "Muda / Videoarte"
            }
        ]
    },
    {
        "id": "la-sexta-parte-del-mundo-1926",
        "title": "La sexta parte del mundo",
        "originalTitle": "Shestaya chast mira",
        "poster": "images/la-sexta-parte-del-mundo.jpg",
        "director": "Dziga Vertov",
        "cast": [],
        "year": 1926,
        "duration": 73,
        "country": "Unión Soviética",
        "genres": [
            "Documental",
            "Clásico"
        ],
        "synopsis": "Obra cumbre del cine documental mudo soviético. A través de un montaje innovador y sinfónico de noticiarios y archivos de viajes, explora la inmensa diversidad de pueblos, culturas, paisajes e industrias que componían la antigua URSS en la década de 1920.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-16",
                "time": "18:00",
                "version": "Cine Mudo"
            }
        ]
    },
    {
        "id": "marnie-la-ladrona-1964",
        "title": "Marnie, la ladrona",
        "originalTitle": "Marnie",
        "poster": "images/marnie-la-ladrona.jpg",
        "director": "Alfred Hitchcock",
        "cast": [
            "Tippi Hedren",
            "Sean Connery",
            "Diane Baker",
            "Martin Gabel"
        ],
        "year": 1964,
        "duration": 130,
        "country": "Estados Unidos",
        "genres": [
            "Thriller",
            "Misterio",
            "Drama",
            "Clásico"
        ],
        "synopsis": "Marnie es una ladrona compulsiva que aprovecha su trabajo como secretaria para robar. Cuando Mark Rutland la contrata y descubre su secreto, cede a un impulso inexplicable: decide casarse con ella para desentrañar los oscuros traumas del pasado que provocan su comportamiento.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-17",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "escrito-sobre-el-viento-1956",
        "title": "Escrito sobre el viento",
        "originalTitle": "Written on the Wind",
        "poster": "images/escrito-sobre-el-viento.jpg",
        "director": "Douglas Sirk",
        "cast": [
            "Rock Hudson",
            "Lauren Bacall",
            "Robert Stack",
            "Dorothy Malone"
        ],
        "year": 1956,
        "duration": 99,
        "country": "Estados Unidos",
        "genres": [
            "Drama",
            "Romance",
            "Clásico"
        ],
        "synopsis": "Kyle Hadley, un magnate del petróleo, y Mitch Wayne, su mejor amigo, se enamoran de la secretaria Lucy Moore. Aunque Kyle es un alcohólico irresponsable, se casa con ella. Tras un año, Kyle parece transformado, pero los celos y pasiones no tardarán en desatarse.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-18",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "smog-en-tu-corazon-2022",
        "title": "Smog en tu corazón",
        "originalTitle": "Smog en tu corazón",
        "poster": "images/smog-en-tu-corazon.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Martín Aletta",
            "Gabriela Ditisheim",
            "Laura Nevole",
            "Pablo Ragoni"
        ],
        "year": 2022,
        "duration": 112,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Cinco personas trabajan en un club de tenis argentino: el dueño, la profesora, un nuevo empleado, el contador y el tímido gerente. Las tensiones y el caos estallan cuando deciden organizar una peregrinación omitiendo invitar a uno de ellos en este melodrama anárquico de culto.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-27",
                "time": "20:00"
            }
        ]
    },
//150
    {
        "id": "saturdays-disorders-2022",
        "title": "Saturdays Disorders",
        "originalTitle": "Saturdays Disorders",
        "poster": "images/saturdays-disorders.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Ignacio Sánchez Mestre",
            "Gabriela Ditisheim",
            "Martín Aletta",
            "Laura Nevole",
            "Pablo Ragoni"
        ],
        "year": 2022,
        "duration": 97,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "En esta secuela de 'Smog en tu corazón', Luján se emprende en una surrealista peregrinación llena de rarezas urbanas. Mientras tanto, en el club de tenis local se intenta organizar un torneo donde insólitamente solo se han inscrito dos participantes.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-28",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "weak-rangers-2022",
        "title": "Weak Rangers",
        "originalTitle": "Weak Rangers",
        "poster": "images/weak-rangers.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Martín Aletta",
            "Gabriela Ditisheim",
            "Laura Nevole",
            "Pablo Ragoni",
            "Ignacio Sánchez Mestre"
        ],
        "year": 2022,
        "duration": 128,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "El partido final de la 'trilogía del tenis' afila al máximo el humor y desencadena todos los dramas entre el propietario y los empleados del complejo, sumando notas de melancolía y nuevos personajes a este insólito viacrucis.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-28",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "the-urgency-of-death-2023",
        "title": "The Urgency of Death",
        "originalTitle": "The Urgency of Death",
        "poster": "images/the-urgency-of-death.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Gonzalo García-Pelayo",
            "Gabriela Ditisheim",
            "Lara Sol Gaudini",
            "Pablo Ragoni",
            "Martín Aletta"
        ],
        "year": 2023,
        "duration": 125,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Un relato singular e inclasificable en una ciudad de La Plata nada convencional. Seles despliega de nuevo sus diálogos anárquicos, tensiones cotidianas y humor excéntrico en torno a la memoria, las obsesiones y los vínculos humanos.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-31",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "rezar-como-queria",
        "title": "Rezar como quería",
        "originalTitle": "Rezar como quería",
        "poster": "images/rezar-como-queria.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Lucía Seles"
        ],
        "year": 2023,
        "duration": 60,
        "country": "Argentina",
        "genres": [
            "Documental",
            "Experimental"
        ],
        "synopsis": "Obra íntima e inclasificable articulada a través de archivos, recuerdos y narraciones particulares sobre la memoria, la música y las vivencias personales, presentada dentro del ciclo dedicado a la cineasta argentina.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-30",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "fire-supply-2024",
        "title": "Fire Supply",
        "originalTitle": "Fire Supply",
        "poster": "images/fire-supply.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Martín Aletta",
            "Gabriela Ditisheim",
            "Laura Nevole",
            "Susana Pampín",
            "Pablo Ragoni"
        ],
        "year": 2024,
        "duration": 156,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Un joven de la provincia de San Juan descubre la admiración que su madre siente por el dueño de una pista de patinaje sobre hielo y la invita a Buenos Aires para conocerlo, desencadenando nuevos enredos en esta cómica entrega de Lucía Seles.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-29",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "terminal-young-2023",
        "title": "Terminal Young",
        "originalTitle": "Terminal Young",
        "poster": "images/terminal-young.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Ignacio Sánchez Mestre",
            "Susana Pampín",
            "Laura Nevole",
            "Pablo Ragoni",
            "Gabriela Ditisheim"
        ],
        "year": 2023,
        "duration": 128,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Una mujer que sufrió un incidente del pasado mantiene una relación con un inseguro músico de jazz de Ramos Mejía. Pese a las tensiones y peculiaridades de su entorno, afronta la vida con renovada fuerza en esta particular comedia de enredos urbanos.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-29",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "lejos-de-los-arboles-1972",
        "title": "Lejos de los árboles",
        "originalTitle": "Lejos de los árboles",
        "poster": "images/lejos-de-los-arboles.jpg",
        "director": "Jacinto Esteva",
        "cast": [],
        "year": 1972,
        "duration": 99,
        "country": "España",
        "genres": [
            "Documental",
            "Clásico"
        ],
        "synopsis": "Una fascinante colección en blanco y negro sobre la España más oculta a través de sus ritos y fiestas populares. Jacinto Esteva muestra un retrato duro y revelador de las costumbres rústicas del folclore regional, muchas de ellas profundamente vinculadas a la religión, la violencia y la muerte.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-04",
                "time": "19:30"
            }
        ]
    },
    {
        "id": "its-for-you-bruno-lazaro",
        "title": "It's for You!",
        "originalTitle": "It's for You!",
        "poster": "images/its-for-you.jpg",
        "director": "Bruno Lázaro",
        "cast": [
            "Joris Jarsky",
            "Sundra Rue Ros",
            "Edith Tankus",
            "Debra Felstead"
        ],
        "year": 2002,
        "duration": 94,
        "country": "Canadá, España",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "Julián regresa a Toronto tras un apasionado romance en Barcelona con Sundra, una modelo a la que decide enviar vídeocartas diarias para mantener viva la relación. Al descubrir que ella tiene otro amante, Sundra le propone mantener el contacto a distancia enviándose las grabaciones de sus nuevas experiencias íntimas.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-07",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "runa-simi-2026",
        "title": "Runa Simi",
        "originalTitle": "Runa Simi",
        "poster": "images/runa-simi.jpg",
        "director": "Augusto Zegarra",
        "cast": [
            "Fernando Valencia",
            "Dylan Valencia"
        ],
        "year": 2025,
        "duration": 81,
        "country": "Perú",
        "genres": [
            "Documental"
        ],
        "synopsis": "Fernando Valencia, un joven actor de doblaje y activista cusqueño, sueña con doblar 'El Rey León' al quechua para evitar que su lengua caiga en la extinción. Junto a su hijo Dylan, emprende un viaje personal de paternidad y activismo para preservar su herencia cultural.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-11-13",
                "time": "19:30",
                "version": "VOSE (Coloquio con la productora Claudia Chávez)"
            }
        ]
    },
    {
        "id": "the-bewilderment-of-chile-2024",
        "title": "The Bewilderment of Chile",
        "originalTitle": "The Bewilderment of Chile",
        "poster": "images/the-bewilderment-of-chile.jpg",
        "director": "Lucía Seles",
        "cast": [
            "Martín Aletta",
            "Gabriela Ditisheim",
            "Laura Nevole",
            "Pablo Ragoni"
        ],
        "year": 2024,
        "duration": 121,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Un hombre de Lugo termina caminando solo por la estación ferroviaria de La Plata. Su deriva errante se convierte en el hilo conductor para retratar distintas escenas, personajes y momentos cotidianos de la vida en esta ciudad argentina.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-10-31",
                "time": "20:30"
            }
        ]
    },
//160
    {
        "id": "la-noche-esta-marchandose-ya",
        "title": "La noche está marchándose ya",
        "originalTitle": "La noche está marchándose ya",
        "poster": "images/la-noche-esta-marchandose-ya.jpg",
        "director": "Ramiro Sonzini, Ezequiel Salinas",
        "cast": [
            "Octavio Bertone",
            "Juana Oviedo",
            "Rodrigo Fierro"
        ],
        "year": 2025,
        "duration": 104,
        "country": "Argentina",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Pelu, treintañero y proyeccionista de un cineclub municipal, es degradado a sereno nocturno. Tras perder su casa, se muda al cine en secreto. Poco a poco, forma una comunidad con un grupo de cuidadores de autos y su mejor amiga, mientras una crisis generalizada amenaza con cerrar el cine y destruir su pequeño refugio.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-26",
                "time": "20:30",
                "version": "Coloquio con el equipo artístico"
            }
        ]
    },
    {
        "id": "as-cidades-e-as-trocas-2014",
        "title": "As Cidades e as Trocas",
        "originalTitle": "As Cidades e as Trocas",
        "poster": "images/as-cidades-e-as-trocas.jpg",
        "director": "Pedro Pinho, Luísa Homem",
        "cast": [],
        "year": 2014,
        "duration": 138,
        "country": "Portugal",
        "genres": [
            "Documental"
        ],
        "synopsis": "En 2008, el boom turístico de Cabo Verde se frena por la falta de arena para hormigón, desatando el envío de barcos cargados desde Mauritania. Partiendo de Lisboa en un carguero, la película recorre esta ruta atlántica para poner de manifiesto las profundas transformaciones físicas y sociales que estos intercambios generan en el paisaje.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-22",
                "time": "19:30"
            }
        ]
    },
    {
        "id": "la-risa-y-la-navaja-version-integral",
        "title": "La risa y la navaja (versión integral)",
        "originalTitle": "O Riso e a Faca",
        "poster": "images/la-risa-y-la-navaja.jpg",
        "director": "Pedro Pinho",
        "cast": [
            "Sérgio Coragem",
            "Cleo Diára",
            "Jonathan Guilherme"
        ],
        "year": 2025,
        "duration": 330,
        "country": "Portugal",
        "genres": [
            "Drama"
        ],
        "synopsis": "Sergio viaja a África Occidental como ingeniero ambiental para construir una carretera entre el desierto y la selva. Allí entabla una relación compleja con dos lugareños, Diara y Gui, mientras descubre detalles sobre la misteriosa desaparición del ingeniero italiano que le precedió en el puesto.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-24",
                "time": "17:00"
            },
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-26",
                "time": "17:00"
            },
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-27",
                "time": "17:00"
            }
        ]
    },
    {
        "id": "canciller-el-templo-del-rock",
        "title": "Canciller, el templo del rock",
        "originalTitle": "Canciller, el templo del rock",
        "poster": "images/canciller-el-templo-del-rock.jpg",
        "director": "Vicente Martín Terán",
        "cast": [
            "Armando de Castro",
            "Jero Ramiro",
            "Leonor Marchessi"
        ],
        "year": 2025,
        "duration": 90,
        "country": "España",
        "genres": [
            "Documental",
            "Música"
        ],
        "synopsis": "Un recorrido por la historia de la mítica Sala Canciller de Madrid, templo clave para la escena del rock duro y el heavy metal en la España de los 80. A través de imágenes históricas y testimonios de la época, el documental repasa el impacto cultural y el ambiente único de un local que marcó a toda una generación.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-16",
                "time": "17:30",
                "version": "Coloquio con el director"
            }
        ]
    },
    {
        "id": "el-silencio-de-otros-2018",
        "title": "El silencio de otros",
        "originalTitle": "El silencio de otros",
        "poster": "images/el-silencio-de-otros.jpg",
        "director": "Almudena Carracedo, Robert Bahar",
        "cast": [],
        "year": 2018,
        "duration": 96,
        "country": "España",
        "genres": [
            "Documental"
        ],
        "synopsis": "Filmada a lo largo de seis años con un estilo directo e intimista, la película revela la épica lucha de las víctimas de la dictadura de Franco para romper el 'pacto del olvido'. El documental sigue a los supervivientes mientras organizan la 'Querella Argentina' para llevar ante la justicia los crímenes de lesa humanidad en un país dividido por la amnesia estatal.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-11",
                "time": "18:00"
            }
        ]
    },
    {
        "id": "we-die-bruno-lazaro",
        "title": "We Die",
        "originalTitle": "We Die",
        "poster": "images/we-die.jpg",
        "director": "Rebeca Sánchez",
        "cast": [],
        "year": 1998,
        "duration": 70,
        "country": "Canadá, España",
        "genres": [
            "Documental",
            "Experimental"
        ],
        "synopsis": "Una reflexión sobre la concepción mágico-realista de la muerte en tres comunidades singulares: los Tana Toraja en Indonesia, las viudas de Vrindaban en India y los mayas de Pomuch en México. A través de sus ritos mortuorios y tradiciones, la película recorre la espera, el fallecimiento y el duelo para comprender cómo conviven con el final de la vida.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-12",
                "time": "20:30"
            }
        ]
    },
    {
        "id": "la-berma-2024",
        "title": "La berma",
        "originalTitle": "La Berma",
        "poster": "images/la-berma.jpg",
        "director": "Agustín Domínguez",
        "cast": [
            "Yauguiha Mohamed Embarec",
            "Matamulana Sidi Brahim"
        ],
        "year": 2026,
        "duration": 90,
        "country": "España, Sáhara Occidental",
        "genres": [
            "Documental"
        ],
        "synopsis": "La historia de Yauguiha Mohamed Embarec, una joven refugiada saharaui y bióloga que trabaja desminando en la barrera militar operativa más larga del planeta. A lo largo de sus 2.720 km de longitud hay escondidas más de 10 millones de minas, convirtiendo este territorio en una de las zonas más peligrosas del mundo y retratando la resistencia y el liderazgo femenino del pueblo saharaui.",
        "screenings": [
            {
                "cinema": "Cineteca Madrid",
                "date": "2026-09-15",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "retrato-de-una-mujer-en-llamas",
        "title": "Retrato de una mujer en llamas",
        "originalTitle": "Portrait de la jeune fille en feu",
        "poster": "images/retrato-de-una-mujer-en-llamas.jpg",
        "director": "Céline Sciamma",
        "cast": [
            "Noémie Merlant",
            "Adèle Haenel",
            "Luàna Bajrami"
        ],
        "year": 2019,
        "duration": 120,
        "country": "Francia",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "Francia, 1770. Marianne, una pintora, recibe un encargo que consiste en realizar el retrato de bodas de Héloïse, una joven que acaba de dejar el convento y que tiene serias dudas respecto a su próximo matrimonio. Marianne tiene que retratarla sin su conocimiento, por lo que se dedica a investigarla a diario.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-05",
                "time": "22:35"
            }
        ]
    },
    {
        "id": "copying-beethoven",
        "title": "Copying Beethoven",
        "originalTitle": "Copying Beethoven",
        "poster": "images/copying-beethoven.jpg",
        "director": "Agnieszka Holland",
        "cast": [
            "Ed Harris",
            "Diane Kruger",
            "Matthew Goode",
            "Phyllida Law",
            "Ralph Riach"
        ],
        "year": 2006,
        "duration": 104,
        "country": "Estados Unidos",
        "genres": [
            "Biografía",
            "Drama",
            "Música"
        ],
        "synopsis": "En la Viena de 1824, Beethoven se encuentra preparando el estreno de su Novena Sinfonía mientras lucha contra su creciente sordera. Anna Holtz, una joven estudiante de composición, comienza a trabajar como su copista y se convierte en una figura fundamental durante uno de los momentos más importantes de su carrera.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-21",
                "time": "20:00",
                "version": "Embajadores Rio"
            }
        ]
    },
    {
        "id": "el-piano",
        "title": "El piano",
        "originalTitle": "The Piano",
        "poster": "images/el-piano.jpg",
        "director": "Jane Campion",
        "cast": [
            "Holly Hunter",
            "Harvey Keitel",
            "Sam Neill",
            "Anna Paquin"
        ],
        "year": 1993,
        "duration": 121,
        "country": "Australia, Francia, Nueva Zelanda",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "En la década de 1850, Ada, una mujer muda desde niña, viaja desde Escocia hasta Nueva Zelanda junto a su hija Flora y su piano para contraer un matrimonio concertado. Cuando su marido se niega a llevar el piano a casa y decide venderlo, Ada establece un particular acuerdo con George Baines, el hombre que lo ha comprado.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-09-28",
                "time": "20:00",
                "version": "Embajadores Rio"
            }
        ]
    },
//170
    {
        "id": "master-and-commander",
        "title": "Master and Commander: Al otro lado del mundo",
        "originalTitle": "Master and Commander: The Far Side of the World",
        "poster": "images/master-and-commander.jpg",
        "director": "Peter Weir",
        "cast": [
            "Russell Crowe",
            "Paul Bettany",
            "James D'Arcy",
            "Edward Woodall"
        ],
        "year": 2003,
        "duration": 138,
        "country": "Estados Unidos",
        "genres": [
            "Aventura",
            "Acción",
            "Drama"
        ],
        "synopsis": "Durante las guerras napoleónicas, el audaz capitán británico Jack Aubrey y el doctor y naturalista Stephen Maturin lideran al HMS Surprise en una encarnizada persecución por los océanos contra un buque de guerra corsario francés.",
        "screenings": [
            {
                "cinema": "Cines Embajadores",
                "date": "2026-10-04",
                "time": "12:00"
            }
        ]
    },
    {
        "id": "el-sexto-sentido-1929",
        "title": "El sexto sentido",
        "originalTitle": "El sexto sentido",
        "poster": "images/el-sexto-sentido.jpg",
        "director": "Nemesio M. Sobrevila, Eusebio Fernández Ardavín",
        "cast": [
            "Enrique Durán",
            "Faustino Bretaño",
            "María Anaya"
        ],
        "year": 1929,
        "duration": 100,
        "country": "España",
        "genres": [
            "Drama",
            "Comedia",
            "Experimental",
            "Cine mudo"
        ],
        "synopsis": "Dos parejas atraviesan problemas en sus matrimonios y los dos amigos, Carlos y León, los afrontan de modos muy distintos debido a su opuesto talante. Para animar a su amigo pesimista, Carlos le lleva a conocer a Kamus, quien acaba de comprarse una cámara de cine. Rareza mayúscula de la vanguardia española restaurada por la Filmoteca Española. La sesión incluye la proyección previa del cortometraje documental 'Estampas 1932' de José Val del Omar.",
        "screenings": []
    },
    {
        "id": "fort-apache-1948",
        "title": "Fort Apache",
        "originalTitle": "Fort Apache",
        "poster": "images/fort-apache.jpg",
        "director": "John Ford",
        "cast": [
            "John Wayne",
            "Henry Fonda",
            "Shirley Temple",
            "John Agar",
            "Pedro Armendáriz",
            "Ward Bond",
            "Victor McLaglen"
        ],
        "year": 1948,
        "duration": 128,
        "country": "Estados Unidos",
        "genres": [
            "Western"
        ],
        "synopsis": "Tras la Guerra de Secesión, el general Owen Thursday ha sido degradado a coronel y destinado a un fuerte situado en el desierto de Arizona. Allí toma el mando del cuartel frente a unos soldados habituados a tratar y luchar contra los apaches mescaleros. Su rigidez militar, su soberbia y su desconcierto ante las costumbres locales chocan con la experiencia del capitán Kirby York, abocando a las tropas a un trágico enfrentamiento contra el jefe Cochise por la búsqueda de gloria personal.",
        "screenings": []
    },
    {
        "id": "martin-hache-1997",
        "title": "Martín (Hache)",
        "originalTitle": "Martín (Hache)",
        "poster": "images/martin-hache.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "Federico Luppi",
            "Juan Diego Botto",
            "Cecilia Roth",
            "Eusebio Poncela"
        ],
        "year": 1997,
        "duration": 130,
        "country": "España, Argentina",
        "genres": [
            "Drama"
        ],
        "synopsis": "Martín Echenique es un cineasta argentino que lleva veinte años viviendo en Madrid. Tras sufrir su hijo de 19 años (Hache) una sobredosis en Buenos Aires, su exmujer le pide que se haga cargo del joven. Padre e hijo emprenden una convivencia forzada en España, donde también les esperan Alicia, la amante de Martín, y Dante, su mejor amigo y actor hedonista, poniendo a prueba los vínculos familiares y la incapacidad de amar sin miedo al dolor.",
        "screenings": []
    },
    {
        "id": "notre-musique-2004",
        "title": "Notre Musique",
        "originalTitle": "Notre Musique",
        "poster": "images/notre-musique.jpg",
        "director": "Jean-Luc Godard",
        "cast": [
            "Sara Adler",
            "Nade Dieu",
            "Rony Kramer"
        ],
        "year": 2004,
        "duration": 80,
        "country": "Francia, Suiza",
        "genres": [
            "Drama",
            "Ensayo"
        ],
        "synopsis": "La película se estructura en tres partes inspiradas en la Divina Comedia de Dante: Infierno, Purgatorio y Paraíso. El Infierno se compone de un montaje impactante de imágenes de guerras reales y ficticias que muestran la violencia histórica y la destrucción, mientras el célebre cineasta examina la brutalidad de los conflictos a lo largo de los segmentos.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-18",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "variety-1983",
        "title": "Variety",
        "originalTitle": "Variety",
        "poster": "images/variety.jpg",
        "director": "Bette Gordon",
        "cast": [
            "Sandy McLeod",
            "Will Patton",
            "Luis Guzmán"
        ],
        "year": 1983,
        "duration": 100,
        "country": "Reino Unido, Alemania, Estados Unidos",
        "genres": [
            "Drama",
            "Thriller",
            "Cine independiente"
        ],
        "synopsis": "Christine consigue trabajo como taquillera de un cine porno en Times Square. En lugar de sentir rechazo por ese mundo marginal, poco a poco irá desarrollando una obsesión por la sordidez del sexo que amenazará con consumirla, a la vez que siente una fuerte atracción por un cliente habitual. La narrativa detectivesca que floreció en los años cuarenta se fusiona con este vibrante escenario ochentero, mezclando el Hollywood clásico con el cine independiente.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-08",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "tiempo-de-revancha-1981",
        "title": "Tiempo de revancha",
        "originalTitle": "Tiempo de revancha",
        "poster": "images/tiempo-de-revancha.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "Federico Luppi",
            "Haydée Padilla",
            "Julio De Grazia",
            "Ulises Dumont"
        ],
        "year": 1981,
        "duration": 108,
        "country": "Argentina",
        "genres": [
            "Thriller",
            "Drama"
        ],
        "synopsis": "Un ex-sindicalista y experto en explosivos entra a trabajar en una peligrosa empresa minera. Junto a otros compañeros traza un plan para simular un accidente y conseguir una gran indemnización, pero la tragedia se desata y se ve obligado a hacerse pasar por mudo para enfrentarse en solitario a una corporación despiadada.",
        "screenings": []
    },
    {
        "id": "vida-en-sombras-1948",
        "title": "Vida en sombras",
        "originalTitle": "Vida en sombras",
        "poster": "images/vida-en-sombras.jpg",
        "director": "Lorenzo Llobet Gràcia",
        "cast": [
            "Fernando Fernán Gómez",
            "María Dolores Pradera",
            "Ana Esmeralda"
        ],
        "year": 1948,
        "duration": 75,
        "country": "España",
        "genres": [
            "Drama",
            "Cine dentro del cine"
        ],
        "synopsis": "Homenaje absoluto al séptimo arte a través de la vida de un fotógrafo y cinéfilo barcelonés cuya existencia discurre en paralelo a la historia del cine y a los acontecimientos políticos y sociales de España, desde principios de siglo hasta la posguerra.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-20",
                "time": "21:00"
            }
        ]
    },
    {
        "id": "boat-people-1982",
        "title": "Boat People",
        "originalTitle": "Tau sun yau",
        "poster": "images/boat-people.jpg",
        "director": "Ann Hui",
        "cast": [
            "George Lam",
            "Cora Miao",
            "Andy Lau"
        ],
        "year": 1982,
        "duration": 103,
        "country": "Hong Kong",
        "genres": [
            "Drama"
        ],
        "synopsis": "El fotoperiodista japonés Akutagawa Shiomi viaja a Vietnam tras la unificación para retratar la supuesta prosperidad del nuevo régimen socialista. Sin embargo, tras la fachada oficial descubre la cruda realidad de los campos de reeducación, la miseria y el drama desesperado de los refugiados.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-12",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "la-rosa-purpura-de-el-cairo-1985",
        "title": "La rosa púrpura de El Cairo",
        "originalTitle": "The Purple Rose of Cairo",
        "poster": "images/la-rosa-purpura-de-el-cairo.jpg",
        "director": "Woody Allen",
        "cast": [
            "Mia Farrow",
            "Jeff Daniels",
            "Danny Aiello"
        ],
        "year": 1985,
        "duration": 82,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Fantasía",
            "Romance"
        ],
        "synopsis": "En plena Gran Depresión, una camarera de Nueva Jersey acude al cine para escapar de su gris realidad y de su infeliz matrimonio. Una noche, el protagonista de la película que está viendo cruza la pantalla del cine y se baja del atril para conocerla, desatando una fantasía romántica inolvidable.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-16",
                "time": "17:30"
            }
        ]
    },
//180
    {
        "id": "mirages-de-paris-1933",
        "title": "Mirages de Paris",
        "originalTitle": "Mirages de Paris",
        "poster": "images/mirages-de-paris.jpg",
        "director": "Fëdor Ocep",
        "cast": [
            "Jacqueline Francell",
            "Roger Tréville",
            "Alice Tissot",
            "Colette Darfeuil"
        ],
        "year": 1933,
        "duration": 77,
        "country": "Francia, Alemania",
        "genres": [
            "Comedia",
            "Drama",
            "Musical"
        ],
        "synopsis": "Madeleine Duchanel, una joven de provincias convencida de que está destinada a triunfar en los escenarios, se escapa a París para perseguir sus sueños de fama. Allí descubre un mundo mucho más duro de lo que imaginaba, moviéndose entre pensiones miserables, timadores y delincuentes.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-04",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-13",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "generacion-1955",
        "title": "Generación",
        "originalTitle": "Pokolenie",
        "poster": "images/generacion.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Tadeusz Łomnicki",
            "Urszula Modrzyńska",
            "Tadeusz Janczar"
        ],
        "year": 1955,
        "duration": 87,
        "country": "Polonia",
        "genres": [
            "Drama",
            "Bélico"
        ],
        "synopsis": "Ambientada en la Varsovia ocupada de 1943, la película tiene como protagonista a Stach Mazur, un muchacho de un suburbio de barracas que pasa del pequeño hurto de carbón en los trenes alemanes al compromiso armado con la resistencia comunista, guiado por el viejo obrero Sekuła. Ópera prima de Wajda que retrata la maduración forzosa de una juventud marcada por la guerra.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-04",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-23",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "el-moderno-sherlock-holmes-1924",
        "title": "El moderno Sherlock Holmes",
        "originalTitle": "Sherlock Jr.",
        "poster": "images/el-moderno-sherlock-holmes.jpg",
        "director": "Buster Keaton",
        "cast": [
            "Buster Keaton",
            "Kathryn McGuire",
            "Joe Keaton"
        ],
        "year": 1924,
        "duration": 45,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Cine mudo"
        ],
        "synopsis": "Un proyeccionista de cine que aspira a convertirse en detective privado es acusado injustamente por un rival sin escrúpulos de robar un reloj de bolsillo. Mientras duerme profundamente en la cabina de proyección, su espíritu se separa de su cuerpo y entra literalmente dentro de la película para intentar salvar a su amada y resolver el misterio.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-05",
                "time": "17:30",
                "version": "Mudo"
            }
        ]
    },
    {
        "id": "made-in-hong-kong-1997",
        "title": "Made in Hong Kong",
        "originalTitle": "Xiang gang zhi zao",
        "poster": "images/made-in-hong-kong.jpg",
        "director": "Fruit Chan",
        "cast": [
            "Sam Lee",
            "Neiky Yip",
            "Wun Lai Tun",
            "Tam Suet-Mei"
        ],
        "year": 1997,
        "duration": 108,
        "country": "Hong Kong",
        "genres": [
            "Drama",
            "Cine independiente"
        ],
        "synopsis": "Rodada de manera totalmente independiente con película caducada justo antes de la devolución de Hong Kong a China, la historia sigue a Autumn Moon, un joven matón de poca monta de los bajos fondos urbanos, cuya vida cambia al entablar relación con una chica enferma y una estudiante suicida.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-05",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-25",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "la-legion-invencible-1949",
        "title": "La legión invencible",
        "originalTitle": "She Wore a Yellow Ribbon",
        "poster": "images/la-legion-invencible.jpg",
        "director": "John Ford",
        "cast": [
            "John Wayne",
            "Joanne Dru",
            "John Agar",
            "Ben Johnson"
        ],
        "year": 1949,
        "duration": 103,
        "country": "Estados Unidos",
        "genres": [
            "Western"
        ],
        "synopsis": "Poco después de la derrota de Custer en Little Big Horn, un veterano capitán de caballería próximo a jubilarse afronta su última y delicada misión en la frontera: evitar a toda costa un levantamiento general de las tribus indias tras unificar sus fuerzas.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-05",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "matinee-1993",
        "title": "Matinee",
        "originalTitle": "Matinee",
        "poster": "images/matinee.jpg",
        "director": "Joe Dante",
        "cast": [
            "John Goodman",
            "Cathy Moriarty",
            "Simon Fenton",
            "Omri Katz"
        ],
        "year": 1993,
        "duration": 99,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Cine dentro del cine"
        ],
        "synopsis": "En plena crisis de los misiles de Cuba, un astuto y extravagante productor de cine de serie B llega a un pueblo costero de Florida para estrenar su última película de terror de bajo presupuesto, revolucionando a los adolescentes locales con efectos especiales en directo y una campaña publicitaria inolvidable.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-06",
                "time": "17:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-23",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "twin-dragons-1992",
        "title": "Twin Dragons",
        "originalTitle": "Shuang long hui",
        "poster": "images/twin-dragons.jpg",
        "director": "Ringo Lam, Tsui Hark",
        "cast": [
            "Jackie Chan",
            "Maggie Cheung",
            "Teddy Robin",
            "Sylvia Chang"
        ],
        "year": 1992,
        "duration": 104,
        "country": "Hong Kong",
        "genres": [
            "Acción",
            "Comedia"
        ],
        "synopsis": "Divertida comedia de enredos y artes marciales dirigida por dos grandes del cine de Hong Kong. Dos hermanos gemelos separados al nacer llevan vidas totalmente opuestas: uno es un prestigioso director de orquesta y el otro un gamberro callejero. Cuando cruzan sus caminos por casualidad en Hong Kong, se desata el caos absoluto con confusiones de identidad y peleas memorables.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-06",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-16",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "una-manana-mejor-1986",
        "title": "Un mañana mejor",
        "originalTitle": "Ying hung boon sik",
        "poster": "images/una-manana-mejor.jpg",
        "director": "John Woo",
        "cast": [
            "Ti Lung",
            "Leslie Cheung",
            "Chow Yun-fat",
            "Emily Chu"
        ],
        "year": 1986,
        "duration": 95,
        "country": "Hong Kong",
        "genres": [
            "Acción",
            "Crimen",
            "Drama"
        ],
        "synopsis": "Obra maestra fundacional del cine de acción de Hong Kong que narra la compleja relación entre un falsificador de billetes arrepentido, su hermano menor (un joven y ambicioso policía) y un leal compañero marcado por la venganza y los códigos de honor de la triada.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-08",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-18",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "la-patrulla-de-la-muerte-1957",
        "title": "La patrulla de la muerte",
        "originalTitle": "Kanal",
        "poster": "images/la-patrulla-de-la-muerte.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Tadeusz Janczar",
            "Wiola Glinkowna",
            "Andrzej Szalawski",
            "Marek Perepeczko"
        ],
        "year": 1957,
        "duration": 91,
        "country": "Polonia",
        "genres": [
            "Bélico",
            "Drama"
        ],
        "synopsis": "Crónica claustrofóbica y desesperada de los últimos días del Alzamiento de Varsovia en 1944. Un grupo de soldados e insurgentes polacos intenta escapar del cerco y los bombardeos nazis adentrándose en la oscura y laberíntica red de alcantarillado de la ciudad.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-09",
                "time": "17:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-25",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "talking-about-trees-2019",
        "title": "Talking About Trees",
        "originalTitle": "Talking About Trees",
        "poster": "images/talking-about-trees.jpg",
        "director": "Suhaib Gasmelbari",
        "cast": [
            "Manar Al Hilo",
            "Suliman Elnour",
            "Eltayeb Mahdi",
            "Ibrahim Shaddad"
        ],
        "year": 2019,
        "duration": 93,
        "country": "Sudán, Francia, Alemania",
        "genres": [
            "Documental"
        ],
        "synopsis": "Cuatro veteranos cineastas sudaneses y miembros del histórico Sudanese Film Group se reencuentran con el propósito de revivir el cine en su país tras décadas de censura y abandono institucional, intentando reabrir un viejo cine al aire libre en las afueras de Jartum.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-09",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-24",
                "time": "17:30"
            }
        ]
    },
//190
    {
        "id": "rio-grande-1950",
        "title": "Río Grande",
        "originalTitle": "Rio Grande",
        "poster": "images/rio-grande.jpg",
        "director": "John Ford",
        "cast": [
            "John Wayne",
            "Maureen O'Hara",
            "Claude Jarman Jr.",
            "Ben Johnson"
        ],
        "year": 1950,
        "duration": 105,
        "country": "Estados Unidos",
        "genres": [
            "Western"
        ],
        "synopsis": "Última entrega de la emblemática trilogía de la caballería de John Ford. Un teniente coronel destinado en la conflictiva frontera del río Grande ve cómo su hijo recién reclutado se alista en su propio regimiento. Con la tensa presencia de su esposa de fondo y las constantes incursiones de los apaches, padre e hijo deberán afrontar sus deberes militares y familiares.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-09",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "las-dos-memorias-2001",
        "title": "Las dos memorias",
        "originalTitle": "Las dos memorias",
        "poster": "images/las-dos-memorias.jpg",
        "director": "Jorge Semprún",
        "cast": [],
        "year": 2001,
        "duration": 125,
        "country": "España, Francia",
        "genres": [
            "Documental"
        ],
        "synopsis": "Documental dirigido por el escritor y político Jorge Semprún que reflexiona sobre la memoria histórica de España, abordando la Guerra Civil y la posterior dictadura franquista a través de testimonios y un profundo análisis político y moral.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-10",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "shirin-2008",
        "title": "Shirin",
        "originalTitle": "Shirin",
        "poster": "images/shirin.jpg",
        "director": "Abbas Kiarostami",
        "cast": [
            "Juliette Binoche",
            "Hanieh Tehrani",
            "Shirin Bina"
        ],
        "year": 2008,
        "duration": 92,
        "country": "Irán",
        "genres": [
            "Drama",
            "Experimental"
        ],
        "synopsis": "Hipnótica y original propuesta en la que la cámara se sitúa fija frente a los rostros de decenas de mujeres iraníes —incluyendo a la actriz Juliette Binoche— mientras asisten en una sala oscura a la representación en audio de un clásico poema trágico persa sobre el amor, reflejando sus emociones cambiantes a través de las expresiones y la mirada.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-10",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-22",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "city-on-fire-1987",
        "title": "City on Fire",
        "originalTitle": "Lung fu fong wan",
        "poster": "images/city-on-fire.jpg",
        "director": "Ringo Lam",
        "cast": [
            "Chow Yun-fat",
            "Danny Lee",
            "Sun Yueh",
            "Maria Cordero"
        ],
        "year": 1987,
        "duration": 101,
        "country": "Hong Kong",
        "genres": [
            "Acción",
            "Thriller",
            "Crimen"
        ],
        "synopsis": "Un policía encubierto se infiltra en una peligrosa banda de ladrones de Hong Kong para planificar y frustrar un gran robo a una joyería, vierto se debate entre la lealtad hacia su trabajo y los lazos de hermandad criminal que forja con uno de los atracadores.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-10",
                "time": "20:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-26",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "la-ley-de-la-frontera-1995",
        "title": "La ley de la frontera",
        "originalTitle": "La ley de la frontera",
        "poster": "images/la-ley-de-la-frontera.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "Federico Luppi",
            "Pere Ponce",
            "Aitana Sánchez-Gijón",
            "Achero Mañas"
        ],
        "year": 1995,
        "duration": 115,
        "country": "España, Argentina",
        "genres": [
            "Aventuras",
            "Comedia"
        ],
        "synopsis": "A comienzos del siglo XX en la frontera galaico-portuguesa, un joven adinerado y el hijo de un minero cruzan sus caminos y se adentran en el bandolerismo. Juntos asaltan a recaudadores y conocen a una intrépida periodista que busca entrevistar al célebre bandido conocido como 'El Argentino'.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-11",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "retratos-fantasma-2023",
        "title": "Retratos fantasma",
        "originalTitle": "Retratos Fantasmas",
        "poster": "images/retratos-fantasma.jpg",
        "director": "Kleber Mendonça Filho",
        "cast": [
            "Kleber Mendonça Filho",
            "Sonia Braga",
            "Arlindo Bezerra"
        ],
        "year": 2023,
        "duration": 93,
        "country": "Brasil",
        "genres": [
            "Documental"
        ],
        "synopsis": "Un viaje íntimo y cinematográfico por el centro de la ciudad brasileña de Recife a través del tiempo, explorando la historia, los grandes cines de barrio desaparecidos y las transformaciones urbanas y sociales mediante el archivo personal y la memoria del propio director.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-11",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-17",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "cenizas-y-diamantes-1958",
        "title": "Cenizas y diamantes",
        "originalTitle": "Popiól i diament",
        "poster": "images/cenizas-y-diamantes.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Zbigniew Cybulski",
            "Ewa Krzyżewska",
            "Adam Pawlikowski",
            "Bogumił Kobiela"
        ],
        "year": 1958,
        "duration": 98,
        "country": "Polonia",
        "genres": [
            "Drama",
            "Bélico"
        ],
        "synopsis": "En la Polonia de 1945, justo el día en que finaliza la Segunda Guerra Mundial, el caos político y el extremismo se apoderan del país. Un joven miembro de la resistencia clandestina anticomunista recibe la orden de asesinar a un funcionario del partido comunista, pero sus dudas crecen al enamorarse de una camarera en un hotel de provincias durante sus últimas horas decisivas.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-11",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-27",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "el-ultimo-gran-heroe-1993",
        "title": "El último gran héroe",
        "originalTitle": "Last Action Hero",
        "poster": "images/el-ultimo-gran-heroe.jpg",
        "director": "John McTiernan",
        "cast": [
            "Arnold Schwarzenegger",
            "Austin O'Brien",
            "F. Murray Abraham"
        ],
        "year": 1993,
        "duration": 130,
        "country": "Estados Unidos",
        "genres": [
            "Acción",
            "Comedia",
            "Fantasía"
        ],
        "synopsis": "Un joven cinéfilo recibe una entrada mágica que le permite entrar en la película de acción protagonizada por su héroe, Jack Slater. Juntos deberán impedir que un peligroso villano escape al mundo real y desate el caos.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-12",
                "time": "17:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-30",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "un-lugar-en-el-mundo-1992",
        "title": "Un lugar en el mundo",
        "originalTitle": "Un lugar en el mundo",
        "poster": "images/un-lugar-en-el-mundo.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "José Sacristán",
            "Federico Luppi",
            "Leonor Benedetto",
            "Cecilia Roth"
        ],
        "year": 1992,
        "duration": 120,
        "country": "Argentina, España",
        "genres": [
            "Drama"
        ],
        "synopsis": "Un hombre regresa a un remoto y árido valle en el centro de Argentina donde pasó su infancia, evocando el tiempo en que sus padres vivían allí exiliados, dedicados a ayudar a los campesinos locales frente a las injusticias de los terratenientes y compartiendo su vida con un geólogo español.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-12",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "everything-for-sale-1969",
        "title": "Everything for Sale",
        "originalTitle": "Wszystko na sprzedaż",
        "poster": "images/everything-for-sale.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Beata Tyszkiewicz",
            "Elżbieta Czyżewska",
            "Andrzej Łapicki",
            "Daniel Olbrychski",
            "Bogumił Kobiela"
        ],
        "year": 1969,
        "duration": 98,
        "country": "Polonia",
        "genres": [
            "Drama"
        ],
        "synopsis": "Fascinante ejercicio metacinematográfico de Andrzej Wajda que rinde tributo y a la vez reflexiona sobre la figura del actor Zbigniew Cybulski. La trama arranca cuando un célebre actor no se presenta en el rodaje de una película, desencadenando una intensa búsqueda por parte del director, sus esposa y sus allegados mientras se difuminan los límites entre la ficción y la realidad.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-13",
                "time": "17:30"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-22",
                "time": "17:30"
            }
        ]
    },
//200
    {
        "id": "el-ultimo-verano-2016",
        "title": "El último verano",
        "originalTitle": "El último verano",
        "poster": "images/el-ultimo-verano.jpg",
        "director": "Leire Apellaniz",
        "cast": [
            "Miguel Ángel",
            "Garlós Hamparzoumian",
            "Roberto Moreno",
            "Álvaro Ogalla"
        ],
        "year": 2016,
        "duration": 93,
        "country": "España",
        "genres": [
            "Documental"
        ],
        "synopsis": "Durante el verano, Miguel Ángel recorre distintas localidades proyectando películas al aire libre en 35 milímetros. Su oficio atraviesa un momento crítico debido a la inminente e implacable sustitución del celuloide tradicional por los nuevos sistemas de proyección digital.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-15",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "paisaje-despues-de-la-batalla-1970",
        "title": "Paisaje después de la batalla",
        "originalTitle": "Krajobraz po bitwie",
        "poster": "images/paisaje-despues-de-la-batalla.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Daniel Olbrychski",
            "Stanisława Celińska",
            "Aleksander Bardini",
            "Zygmunt Malanowicz"
        ],
        "year": 1970,
        "duration": 100,
        "country": "Polonia",
        "genres": [
            "Drama",
            "Bélico",
            "Romance"
        ],
        "synopsis": "Recién finalizada la Segunda Guerra Mundial, un joven poeta polaco superviviente de un campo de concentración nazi es liberado por las tropas aliadas y trasladado a un campo de desplazados en Alemania. Allí, entre las ruinas y la incertidumbre del porvenir, intenta recuperar las ganas de vivir y su vocación artística, un proceso marcado por su intenso y complejo romance con una joven prisionera judía.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-15",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-24",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "lugares-comunes-2002",
        "title": "Lugares comunes",
        "originalTitle": "Lugares comunes",
        "poster": "images/lugares-comunes.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "Federico Luppi",
            "Mercedes Sampietro",
            "Arturo Puig"
        ],
        "year": 2002,
        "duration": 112,
        "country": "España, Argentina",
        "genres": [
            "Drama"
        ],
        "synopsis": "Fernando Robles, un profesor de literatura cercano a la jubilación, es apartado inesperadamente de la universidad. Junto a su esposa Liliana, decide afrontar los cambios vitales, la crisis económica y el traslado desde Buenos Aires hacia una nueva vida en el entorno rural de Córdoba.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-16",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "my-heart-is-that-eternal-rose-1989",
        "title": "My Heart is That Eternal Rose",
        "originalTitle": "Sha shou hu die meng",
        "poster": "images/my-heart-is-that-eternal-rose.jpg",
        "director": "Patrick Tam",
        "cast": [
            "Kenny Bee",
            "Tony Leung Chiu-wai",
            "Joey Wang"
        ],
        "year": 1989,
        "duration": 90,
        "country": "Hong Kong",
        "genres": [
            "Acción",
            "Crimen",
            "Romance"
        ],
        "synopsis": "Lap, una joven que trabaja en un restaurante, se enamora de Rick, un joven vinculado al mundo del crimen. Cuando el padre de Lap, propietario del local, se ve obligado a colaborar con la policía, Rick debe huir de Hong Kong tras un peligroso enfrentamiento, marcando sus destinos por la lealtad y el peligro.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-17",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-27",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-desencanto-1976",
        "title": "El desencanto",
        "originalTitle": "El desencanto",
        "poster": "images/el-desencanto.jpg",
        "director": "Jaime Chávarri",
        "cast": [
            "Felicidad Blanc",
            "Juan Luis Panero",
            "Leopoldo María Panero",
            "Michi Panero"
        ],
        "year": 1976,
        "duration": 107,
        "country": "España",
        "genres": [
            "Documental"
        ],
        "synopsis": "Tras la muerte del poeta Leopoldo Panero, su viuda, Felicidad Blanc, y sus tres hijos —Juan Luis, Leopoldo María y Michi— rememoran la figura del patriarca y la historia de la familia. A través de sus testimonios y confesiones afloran viejos resentimientos, profundas frustraciones y heridas nunca cerradas.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-17",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "goodbye-dragon-inn-2003",
        "title": "Goodbye Dragon Inn",
        "originalTitle": "Bu san",
        "poster": "images/goodbye-dragon-inn.jpg",
        "director": "Tsai Ming-liang",
        "cast": [
            "Lee Kang-sheng",
            "Chen Shiang-chyi",
            "Kiyonobu Mitamura"
        ],
        "year": 2003,
        "duration": 82,
        "country": "Taiwán",
        "genres": [
            "Drama"
        ],
        "synopsis": "En una vieja y decadente sala de cine de Taipéi que se dispone a cerrar definitivamente sus puertas, se proyecta una última sesión de un clásico de las artes marciales. Mientras fuera cae una intensa lluvia, un puñado de solitarios espectadores y los empleados del cine deambulan por los pasillos y butacas en una melancólica despedida a una época dorada de la gran pantalla.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-18",
                "time": "20:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-29",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "the-cameraman-1928",
        "title": "El cameraman",
        "originalTitle": "The Cameraman",
        "poster": "images/the-cameraman.jpg",
        "director": "Edward Sedgwick, Buster Keaton",
        "cast": [
            "Buster Keaton",
            "Marceline Day",
            "Harold Goodwin"
        ],
        "year": 1928,
        "duration": 76,
        "country": "Estados Unidos",
        "genres": [
            "Comedia",
            "Cine mudo",
            "Romance"
        ],
        "synopsis": "Un modesto fotógrafo callejero se enamora perdidamente de una joven que trabaja en un estudio cinematográfico de noticiarios. Decidido a conquistarla, compra una cámara vieja para convertirse en cámara profesional, provocando una cadena infinita de desastres cómicos y tiernas situaciones en su intento por destacar.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-19",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "la-tierra-de-la-gran-promesa-1975",
        "title": "La tierra de la gran promesa",
        "originalTitle": "Ziemia obiecana",
        "poster": "images/la-tierra-de-la-gran-promesa.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Daniel Olbrychski",
            "Wojciech Pszoniak",
            "Andrzej Seweryn"
        ],
        "year": 1975,
        "duration": 179,
        "country": "Polonia",
        "genres": [
            "Drama"
        ],
        "synopsis": "A finales del siglo XIX en la industrializada ciudad polaca de Łódź, tres jóvenes amigos de diferentes orígenes —un polaco, un alemán y un judío— se asocian con el propósito de construir una gran fábrica textil y amasar una fortuna durante el vertiginoso boom capitalista, enfrentándose a un entorno implacable marcado por la ambición, la explotación y la pérdida de valores éticos.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-19",
                "time": "19:00"
            },
            {
                "cinema": "Cine Doré",
                "date": "2026-09-29",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "the-killer-1989",
        "title": "The Killer",
        "originalTitle": "Die xue shuang xiong",
        "poster": "images/the-killer.jpg",
        "director": "John Woo",
        "cast": [
            "Chow Yun-fat",
            "Danny Lee",
            "Sally Yeh",
            "Kenneth Tsang"
        ],
        "year": 1989,
        "duration": 111,
        "country": "Hong Kong",
        "genres": [
            "Acción",
            "Thriller",
            "Crimen"
        ],
        "synopsis": "Obra maestra del cine de acción de Hong Kong dirigida por John Woo. Un sicario desilusionado acepta realizar un último trabajo para poder costear una costosa operación quirúrgica que devuelva la vista a una cantante a la que hirió accidentalmente por culpa de su oficio. Mientras intenta protegerla, un inspector de policía tenaz le sigue muy de cerca, forjando ambos una extraña y compleja relación de respeto mutuo al margen de la ley.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-19",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "el-hombre-de-marmol-1977",
        "title": "El hombre de mármol",
        "originalTitle": "Człowiek z marmuru",
        "poster": "images/el-hombre-de-marmol.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Krystyna Janda",
            "Jerzy Radziwiłowicz",
            "Tadeusz Łomnicki",
            "Michał Tarkowski"
        ],
        "year": 1977,
        "duration": 164,
        "country": "Polonia",
        "genres": [
            "Drama"
        ],
        "synopsis": "En la Polonia de los años setenta, una joven estudiante de cine realiza un documental sobre Mateusz Birkut, un albañil que en la década de 1950 fue aclamado como héroe del trabajo socialista y estajanovista, pero que posteriormente cayó en desgracia y fue marginado por el régimen. A través de su investigación, destapa las contradicciones y los abusos del sistema político comunista.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-20",
                "time": "17:30"
            }
        ]
    },
//210
    {
        "id": "fallen-angels-1995",
        "title": "Fallen Angels",
        "originalTitle": "Duo luo tian shi",
        "poster": "images/fallen-angels.jpg",
        "director": "Wong Kar-wai",
        "cast": [
            "Leon Lai",
            "Michelle Reis",
            "Takeshi Kaneshiro",
            "Charlie Yeung"
        ],
        "year": 1995,
        "duration": 103,
        "country": "Hong Kong",
        "genres": [
            "Drama",
            "Crimen",
            "Romance"
        ],
        "synopsis": "Hipnótico y estilizadísimo retrato urbano de Hong Kong que entrelaza las historias de varios personajes solitarios en los márgenes de la noche: un asesino a sueldo que busca abandonar su peligrosa profesión, su misteriosa socia que organiza sus contratos desde la sombra, un joven mudo que se dedica a allanar locales ajenos por las noches y una chica desconsolada por un desamor que busca desesperadamente un contacto humano.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-23",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "roma-2004",
        "title": "Roma",
        "originalTitle": "Roma",
        "poster": "images/roma.jpg",
        "director": "Adolfo Aristarain",
        "cast": [
            "Juan Diego Botto",
            "Susú Pecoraro",
            "José Sacristán"
        ],
        "year": 2004,
        "duration": 155,
        "country": "España, Argentina",
        "genres": [
            "Drama"
        ],
        "synopsis": "Joaquín Gónez, un prestigioso escritor argentino, regresa a su país para recibir un homenaje tras años de exilio. Durante el viaje rememora su infancia y juventud, marcadas por la figura de su madre, Roma, una mujer fuerte y generosa que sostuvo a la familia en tiempos difíciles.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-24",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "la-vida-util-2010",
        "title": "La vida útil",
        "originalTitle": "La vida útil",
        "poster": "images/la-vida-util.jpg",
        "director": "Federico Veiroj",
        "cast": [
            "Jorge Jellinek",
            "Manuel Martínez Carril",
            "Paola Venditto"
        ],
        "year": 2010,
        "duration": 63,
        "country": "Uruguay, España",
        "genres": [
            "Comedia",
            "Drama"
        ],
        "synopsis": "Jorge, un cinéfilo empedernido que ha trabajado durante veinticinco años en la Cinemateca Uruguaya, se ve obligado a reinventar su vida cuando la institución atraviesa una profunda crisis económica y se plantea su cierre definitivo, empujándolo a descubrir el mundo exterior más allá de las paredes de la sala de proyección.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-25",
                "time": "20:00"
            }
        ]
    },
    {
        "id": "cien-ninos-esperando-un-tren-1988",
        "title": "Cien niños esperando un tren",
        "originalTitle": "Cien niños esperando un tren",
        "poster": "images/cien-ninos-esperando-un-tren.jpg",
        "director": "Ignacio Agüero",
        "cast": [
            "Alicia Vega"
        ],
        "year": 1988,
        "duration": 56,
        "country": "Chile",
        "genres": [
            "Documental"
        ],
        "synopsis": "En una población de los suburbios de Santiago de Chile durante la dictadura, la profesora Alicia Vega imparte un taller de cine los fines de semana para un centenar de niños que nunca antes habían visto una película. A través de las clases, los juegos ópticos y las proyecciones, los niños descubren un mundo nuevo de libertad, imaginación y esperanza.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-26",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "la-boda-1973",
        "title": "La boda",
        "originalTitle": "Wesele",
        "poster": "images/la-boda.jpg",
        "director": "Andrzej Wajda",
        "cast": [
            "Marek Walczewski",
            "Izabella Olszewska",
            "Daniel Olbrychski",
            "Ewa Ziętek"
        ],
        "year": 1973,
        "duration": 105,
        "country": "Polonia",
        "genres": [
            "Drama"
        ],
        "synopsis": "Ambientada a principios del siglo XX, la película narra el enlace matrimonial entre un intelectual de la burguesía de Cracovia y una joven de origen campesino. A la celebración acude una heterogénea concurrencia que representa a todas las clases sociales de la Polonia de la época. Entre bailes, alcohol y discusiones, la fiesta se transforma en un profundo y fantasmagórico examen sobre la identidad nacional, la historia y los traumas políticos del país.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-26",
                "time": "19:00"
            }
        ]
    },
    {
        "id": "padre-nuestro-1985",
        "title": "Padre nuestro",
        "originalTitle": "Padre nuestro",
        "poster": "images/padre-nuestro.jpg",
        "director": "Francisco Regueiro",
        "cast": [
            "Fernando Rey",
            "Francisco Rabal",
            "Victoria Abril",
            "Emma Penella"
        ],
        "year": 1985,
        "duration": 99,
        "country": "España",
        "genres": [
            "Drama"
        ],
        "synopsis": "A un cardenal español le diagnostican una enfermedad incurable y decide abandonar Roma para regresar a España antes de morir. Su principal obsesión es dejarlo todo en orden y conseguir legitimar a su hija —que trabaja como prostituta de lujo—, para lo cual urde un insólito plan: convencer a su hermano, un ateo convencido, de que se case con ella.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-30",
                "time": "17:30"
            }
        ]
    },
    {
        "id": "comrades-almost-a-love-story-1996",
        "title": "Comrades: Almost a Love Story",
        "originalTitle": "Tian mi mi",
        "poster": "images/comrades-almost-a-love-story.jpg",
        "director": "Peter Chan",
        "cast": [
            "Maggie Cheung",
            "Leon Lai",
            "Eric Tsang"
        ],
        "year": 1996,
        "duration": 118,
        "country": "Hong Kong",
        "genres": [
            "Drama",
            "Romance"
        ],
        "synopsis": "A finales de la década de 1980, Xiaojun llega a Hong Kong desde la China continental con el objetivo de ganar suficiente dinero para casarse con su novia de toda la vida. Poco después de instalarse, conoce a Qiao, una ambiciosa joven que también intenta prosperar en la gran ciudad. La relación entre ambos evoluciona de la amistad al amor a lo largo de los años, marcada por las idas y venidas, el destino y la música de Teresa Teng.",
        "screenings": [
            {
                "cinema": "Cine Doré",
                "date": "2026-09-30",
                "time": "19:00"
            }
        ]
    },
    {
    "id": "porco-rosso",
    "title": "Porco Rosso",
    "originalTitle": "Kurenai no Buta",
    "poster": "images/porco-rosso.jpg",
    "director": "Hayao Miyazaki",
    "cast": [
        "Shûichirô Moriyama",
        "Tokiko Katô",
        "Sanshi Katsura",
        "Mahiro Tsugawa"
    ],
    "year": 1992,
    "duration": 94,
    "country": "Japón",
    "genres": [
        "Animación",
        "Aventura",
        "Fantasía",
        "Comedia"
    ],
    "synopsis": "Ambientada en Italia durante el periodo de entreguerras, la historia sigue a Marco Pagot, un piloto veterano de la Primera Guerra Mundial que ha sufrido una extraña maldición convirtiéndolo en un hombre con cabeza de cerdo. Conocido como 'Porco Rosso', trabaja como cazarrecompensas persiguiendo a los piratas aéreos en el mar Adriático mientras lidia con su pasado y con un rival estadounidense.",
    "screenings": [
            {
            "cinema": "Cines Embajadores",
            "date": "2026-09-06",
            "time": "16:00",
            "version": "Doblada al español - Embajadores Río"
        },
            {
            "cinema": "Cines Embajadores",
            "date": "2026-09-09",
            "time": "16:00",
            "version": "Doblada al español - Embajadores Río"
        }
        ]
    },
    {
    "id": "midsommar",
    "title": "Midsommar",
    "originalTitle": "Midsommar",
    "poster": "images/midsommar.jpg",
    "director": "Ari Aster",
    "cast": [
        "Florence Pugh",
        "Jack Reynor",
        "Will Poulter",
        "William Jackson Harper",
        "Vilhelm Blomgren"
    ],
    "year": 2019,
    "duration": 147,
    "country": "Estados Unidos, Suecia",
    "genres": [
        "Terror",
        "Drama",
        "Misterio"
    ],
    "synopsis": "Una pareja joven viaja a Suecia para visitar la ciudad natal de su amigo de la infancia y disfrutar de su festival de verano rural. Lo que comienza como unas vacaciones idílicas de verano en un remoto pueblo con tradiciones ancestrales se convierte poco a poco en una competición cada vez más violenta y extraña a manos de un culto pagano.",
    "screenings": [
            {
            "cinema": "Cines Embajadores",
            "date": "2026-09-09",
            "time": "22:30",
            "version": "Embajadores Río"
        }
        ]
    },
    {
    "id": "el-pianista-2002",
    "title": "El pianista",
    "originalTitle": "The Pianist",
    "poster": "images/el-pianista.jpg",
    "director": "Roman Polanski",
    "cast": [
        "Adrien Brody",
        "Thomas Kretschmann",
        "Frank Finlay",
        "Maureen Lipman",
        "Emilia Fox"
    ],
    "year": 2002,
    "duration": 150,
    "country": "Reino Unido, Francia, Polonia, Alemania",
    "genres": [
        "Drama",
        "Bélico",
        "Biográfico"
    ],
    "synopsis": "Władysław Szpilman, un brillante pianista polaco de origen judío, toca en la radio de Varsovia cuando estalla la Segunda Guerra Mundial. Con la invasión alemana, la vida de los judíos en la ciudad cambia drásticamente, siendo confinados en el gueto de Varsovia. Szpilman logra evitar la deportación gracias a la ayuda de algunos amigos, debiendo sobrevivir oculto entre las ruinas de la ciudad mientras busca desesperadamente comida y refugio.",
    "screenings": [
            {
            "cinema": "Cines Embajadores",
            "date": "2026-09-14",
            "time": "20:00",
            "version": "Embajadores Río"
        }
        ]
    },
//220
    {
    "id": "el-tiempo-de-montserrat-2026",
    "title": "El tiempo de Montserrat",
    "originalTitle": "El temps de Montserrat",
    "poster": "images/el-tiempo-de-montserrat.jpg",
    "director": "Carles Prats",
    "cast": [],
    "year": 2026,
    "duration": 80,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "La vida cotidiana de los monjes del Monasterio de Montserrat cuando se celebra su Milenario. Una reflexión sobre el paso del tiempo en una comunidad benedictina regida por la Regla de San Benedicto, que muestra aquello que no está a la vista del público: cómo vive, de puertas adentro, la comunidad monástica.",
    "screenings": [
            {
            "cinema": "Cines Verdi",
            "date": "2026-09-10",
            "time": "18:30"
        }
        ]
    },
    {
    "id": "eso-de-lo-que-nunca-se-habla-2026",
    "title": "Eso de lo que nunca se habla",
    "originalTitle": "Eso de lo que nunca se habla",
    "poster": "images/eso-de-lo-que-nunca-se-habla.jpg",
    "director": "Juanjo Castro",
    "cast": [],
    "year": 2026,
    "duration": 80,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Documental que aborda, con una mirada íntima y rigurosa, uno de los grandes tabúes de nuestra sociedad: la muerte. A través de testimonios reales, la película reflexiona sobre cuestiones como la eutanasia, el suicidio, los cuidados paliativos, el duelo y el acompañamiento al final de la vida. Lejos del sensacionalismo, el documental propone un espacio de reflexión sereno y profundamente humano, planteando preguntas esenciales sobre la dignidad, el sufrimiento y la responsabilidad colectiva ante la muerte.",
    "screenings": [
            {
            "cinema": "Cines Verdi",
            "date": "2026-09-12",
            "time": "11:30",
            "version": "Sesión con coloquio a cargo de Juanjo Castro"
        }
        ]
    },
    {
    "id": "queen-hungarian-rhapsody-live-in-budapest-1986",
    "title": "Queen: Hungarian Rhapsody - Live in Budapest",
    "originalTitle": "Hungarian Rhapsody: Queen Live in Budapest",
    "poster": "images/queen-hungarian-rhapsody-live-in-budapest.jpg",
    "director": "János Zsombolyai",
    "cast": [
        "Freddie Mercury",
        "Brian May",
        "Roger Taylor",
        "John Deacon"
    ],
    "year": 1986,
    "duration": 97,
    "country": "Reino Unido, Hungría",
    "genres": [
        "Documental",
        "Musical"
    ],
    "synopsis": "El 27 de julio de 1986, la banda británica de rock Queen marcó un hito al tocar por primera vez en Hungría, un país que aún se encontraba bajo una dictadura comunista tras el Telón de Acero. Hungarian Rhapsody: Queen Live in Budapest es una película del concierto que Queen ofreció en Budapest durante su última gira con Freddie Mercury, The Magic Tour, siendo una de las pocas bandas de Europa Occidental en actuar en el Bloque del Este durante la Guerra Fría.",
    "screenings": [
            {
            "cinema": "Cines Verdi",
            "date": "2026-10-07",
            "time": "20:30"
        },
            {
            "cinema": "Cines Embajadores",
            "date": "2026-10-07",
            "time": "22:30",
            "version": "Embajadores Río"
        }
        ]
    },
    {
    "id": "la-llamada-2017",
    "title": "La llamada",
    "originalTitle": "La llamada",
    "poster": "images/la-llamada.jpg",
    "director": "Javier Calvo, Javier Ambrossi",
    "cast": [
        "Macarena García",
        "Anna Castillo",
        "Belén Cuesta",
        "Gracia Olayo",
        "Richard Collins-Moore"
    ],
    "year": 2017,
    "duration": 108,
    "country": "España",
    "genres": [
        "Comedia",
        "Musical",
        "Romance"
    ],
    "synopsis": "María y Susana son dos jóvenes de 17 años que pasan el verano en un campamento de verano cristiano en Segovia llamado La Brisa. Las dos adolescentes son muy amantes del electro latino, pero una noche se le aparece a María Dios en persona cantando canciones de Whitney Houston. A partir de ahí, las vidas de todos los personajes cambiarán por completo.",
    "screenings": [
            {
            "cinema": "mk2 Cine Paz",
            "date": "2026-09-17",
            "time": "20:00"
        }
        ]
    },
    {
    "id": "the-ferryman-2016",
    "title": "The Ferryman",
    "originalTitle": "Le passeur des lieux",
    "poster": "images/the-ferryman.jpg",
    "director": "Gilles Delmas",
    "cast": [
        "Damien Jalet",
        "Marina Abramović",
        "Clara Furey",
        "Aimilios Arapoglou"
    ],
    "year": 2016,
    "duration": 71,
    "country": "Francia, Japón",
    "genres": [
        "Documental",
        "Musical"
    ],
    "synopsis": "Una exploración cinematográfica y coreográfica de las raíces animistas de los rituales, la danza y la escultura. A través del recorrido de un hombre mi-cerf, mi-cazador, la película funciona como un viaje chamánico y una metáfora poética y visceral de la ascensión de una montaña en seis etapas, explorando los límites del arte, la espiritualidad y la naturaleza en localizaciones de Japón.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-06",
            "time": "18:30"
        }
        ]
    },
    {
    "id": "mares-2025",
    "title": "Mares",
    "originalTitle": "Mares",
    "poster": "images/mares.jpg",
    "director": "Ariadna Seuba Serra",
    "cast": [],
    "year": 2025,
    "duration": 74,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Anna (41) y Ari (32) quieren ser madres. Lo que parecía que iba a ser fácil, pronto se convierte en una dura prueba médica, física y emocional que llevará a la pareja al límite. Durante más de cuatro años, Ari filma los altibajos de un proceso lleno de ilusiones y frustraciones. Una película transgeneracional que invita a reflexionar sobre las consecuencias de retrasar la maternidad y celebra el amor, el cariño y los lazos afectivos.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-09",
            "time": "20:30"
        }
        ]
    },
    {
    "id": "duels-2024",
    "title": "DuEls",
    "originalTitle": "DuEls",
    "poster": "images/duels.jpg",
    "director": "Jonas Åkerlund",
    "cast": [],
    "year": 2024,
    "duration": 60,
    "country": "Noruega, Bélgica, Islandia",
    "genres": [
        "Documental",
        "Musical"
    ],
    "synopsis": "Un viaje visual y sonoro a través del emblemático Museo Vigeland de Oslo, concebido por los coreógrafos Damien Jalet y Erna Ómarsdóttir. La obra se construye a partir de un diálogo dinámico entre las esculturas del recinto y una serie de piezas coreográficas breves e intensas que exploran el movimiento y el espacio.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-12",
            "time": "19:00"
        }
        ]
    },
    {
    "id": "llamame-sinsorga-2025",
    "title": "Llámame Sinsorga",
    "originalTitle": "Llámame Sinsorga",
    "poster": "images/llamame-sinsorga.jpg",
    "director": "Marta Gómez, Paula Iglesias",
    "cast": [
        "Irantzu Varela",
        "Andrea Momoitio"
    ],
    "year": 2025,
    "duration": 88,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Irantzu Varela y Andrea Momoitio son dos transgresoras periodistas que deciden transformar un centenario atelier de vestidos de novia en el primer centro cultural feminista de la ciudad: La Sinsorga. Para ello, plantean un reto singular: realizar toda la obra de rehabilitación exclusivamente con mujeres, creando una base de datos en un sector altamente masculinizado. Cinco obreras son las encargadas de reconstruir este espacio, combinando el costumbrismo de la obra con un universo performático donde asoman sus miedos, deseos y la deconstrucción del amor romántico.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-13",
            "time": "20:30"
        }
        ]
    },
    {
    "id": "borau-y-el-cine-2025",
    "title": "Borau y el cine",
    "originalTitle": "Borau y el cine",
    "poster": "images/borau-y-el-cine.jpg",
    "director": "Germán Roda",
    "cast": [],
    "year": 2025,
    "duration": 77,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Un niño enamorado del cine consigue que su sueño se haga realidad, pero no es como él se lo había imaginado. Durante toda su vida intentará hacer el cine que le hubiera gustado al niño de su infancia. Un recorrido por la vida y obra de José Luis Borau, un creador único y su inmenso impacto en la cinematografía española a través de su legado y de personalidades que compartieron con él su trayectoria.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-16",
            "time": "20:00"
        }
        ]
    },
    {
    "id": "al-sur-de-ninguna-parte-2025",
    "title": "Al sur de ninguna parte",
    "originalTitle": "Al sur de ninguna parte",
    "poster": "images/al-sur-de-ninguna-parte.jpg",
    "director": "Nico Recover",
    "cast": [],
    "year": 2025,
    "duration": 75,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Un largometraje documental que ofrece una mirada íntima y humana a la situación de las personas refugiadas y migrantes en España, poniendo el foco en las historias personales, la superación y la búsqueda de un nuevo hogar por encima de las cifras.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-17",
            "time": "17:30"
        }
        ]
    },
//230
    {
    "id": "cecilia-bartolome-tan-lluny-tan-prop-2024",
    "title": "Cecilia Bartolomé: Tan lluny, tan prop",
    "originalTitle": "Cecilia Bartolomé: Tan lluny, tan prop",
    "poster": "images/cecilia-bartolome-tan-lluny-tan-prop.jpg",
    "director": "Giovanna Ribes",
    "cast": [
        "Cecilia Bartolomé"
    ],
    "year": 2024,
    "duration": 97,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "La alicantina Cecilia Bartolomé es una directora de cine, guionista y productora pionera del cine español. Maltratada por la censura, mantiene, siendo octogenaria, el espíritu libre que siempre la ha caracterizado. Un viaje a través de su apasionante vida, obra y lucha que continúan tan lejos, tan cerca.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-17",
            "time": "20:00"
        }
        ]
    },
    {
    "id": "omega-wants-to-dance-2024",
    "title": "Omega Wants to Dance",
    "originalTitle": "Omega Wants to Dance",
    "poster": "images/omega-wants-to-dance.jpg",
    "director": "Ramon Tort",
    "cast": [
        "Karina Matas Piper",
        "Christian Stamm",
        "Daniel Francis-Berenson"
    ],
    "year": 2024,
    "duration": 92,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Un viaje en busca de la identidad individual y colectiva a través del baile, la música, el pensamiento y la espiritualidad. Combinando testimonios personales, hechos históricos, ficción y un electrizante collage audiovisual, se exploran las múltiples dimensiones del acto de bailar: diversión, catarsis, seducción, ritual y crecimiento personal.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-09-25",
            "time": "20:00",
            "version": "Coloquio con el director"
        }
        ]
    },
    {
    "id": "raquel-meller-insumisa-y-divina-2025",
    "title": "Raquel Meller, insumisa y divina",
    "originalTitle": "Raquel Meller, insumisa y divina",
    "poster": "images/raquel-meller-insumisa-y-divina.jpg",
    "director": "Lidia Peralta García, Roberto S. Romero",
    "cast": [
        "Raquel Meller"
    ],
    "year": 2025,
    "duration": 78,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Un recorrido por la fascinante y arrolladora vida de Raquel Meller, una de las grandes estrellas de la canción y el cine mudo de principios del siglo XX, cuya fama traspasó fronteras internacionales antes de caer en el injusto olvido. El documental reivindica su figura como una mujer independiente, moderna e insumisa para su época.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-10-08",
            "time": "19:30"
        }
        ]
    },
    {
    "id": "natividad-zaro-en-voz-alta-2024",
    "title": "Natividad Zaro. En voz alta",
    "originalTitle": "Natividad Zaro. En voz alta",
    "poster": "images/natividad-zaro-en-voz-alta.jpg",
    "director": "Vicky Calavia",
    "cast": [
        "Natividad Zaro"
    ],
    "year": 2024,
    "duration": 74,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Un documental que recupera la figura y el legado de Natividad Zaro, una mujer polifacética y pionera nacida a principios del siglo XX que destacó como actriz, dramaturga, guionista, traductora y productora, además de ser estrecha colaboradora y amiga de Federico García Lorca. Su apasionante trayectoria personal y profesional supuso todo un referente de libertad y modernidad.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-10-09",
            "time": "19:30"
        }
        ]
    },
    {
    "id": "amilcar-2025",
    "title": "Amílcar",
    "originalTitle": "Amílcar",
    "poster": "images/amilcar.jpg",
    "director": "Miguel Eek",
    "cast": [],
    "year": 2025,
    "duration": 89,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Agrónomo, poeta, pensador utópico y revolucionario, Amílcar Cabral fue el gran líder del movimiento anticolonial contra Portugal que unió a Guinea-Bissau y Cabo Verde. Un ensayo documental poético que aborda, a través de archivos inéditos y escritos íntimos, la compleja y fascinante vida de una figura fundamental de la descolonización.",
    "screenings": [
            {
            "cinema": "Cineteca Madrid",
            "date": "2026-10-09",
            "time": "19:30"
        }
        ]
    },
    {
    "id": "madrid-ext-2025",
    "title": "Madrid, Ext.",
    "originalTitle": "Madrid, Ext.",
    "poster": "images/madrid-ext.jpg",
    "director": "Juan Cavestany",
    "cast": [],
    "year": 2025,
    "duration": 93,
    "country": "España",
    "genres": [
        "Documental"
    ],
    "synopsis": "Una película sinfónica y ensayo fílmico acerca de la ciudad, el tiempo, sus flujos y sus contradicciones. Un gran archivo visual y sonoro de sus habitantes y localizaciones donde se cruzan comercio y fauna, arquitectura, mercerías y poetas, constructores y destructores de la ciudad, transitando entre la nostalgia y la ironía.",
    "screenings": [
            {
            "cinema": "Sala Equis",
            "date": "2026-09-12",
            "time": "17:30"
        },
            {
            "cinema": "Sala Equis",
            "date": "2026-09-17",
            "time": "19:30"
        }
        ]
    },
    {
    "id": "reversion-2025",
    "title": "Reversión",
    "originalTitle": "Reversión",
    "poster": "images/reversion.jpg",
    "director": "Jacob Santana",
    "cast": [
        "Jaime Lorente",
        "Manu Vega",
        "Belén Rueda",
        "Fernando Cayo",
        "Eva Llorach"
    ],
    "year": 2025,
    "duration": 97,
    "country": "España",
    "genres": [
        "Thriller",
        "Misterio"
    ],
    "synopsis": "Mario se muda a una nueva casa con sus padres y con su hermano mayor David, al cual está muy unido. Mario sufre episodios de ansiedad y falta de concentración, por lo que está tomando medicación de manera regular. Una tarde lluviosa, Mario presencia cómo secuestran a su hermano mayor. Después de 19 días de angustiosa espera, David vuelve a casa, pero no recuerda nada de su desaparición. Desde ese momento, Mario nota suficientes cambios en la personalidad y el comportamiento de su hermano mayor como para empezar a creer que la persona que ha regresado no es su verdadero hermano.",
    "screenings": []
    }

]