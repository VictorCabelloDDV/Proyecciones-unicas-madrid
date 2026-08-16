// =====================================================
// ELEMENTOS DE LA PÁGINA PRINCIPAL
// =====================================================

const moviesGrid = document.getElementById("movies-grid");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");
const dateInput = document.getElementById("date-input");
const clearDate = document.getElementById("clear-date");
const cinemaSelect = document.getElementById("cinema-select");

// =====================================================
// PÁGINA PRINCIPAL
// =====================================================

if (moviesGrid) {

    // RECUPERAR FECHA GUARDADA
    const savedDate = localStorage.getItem("movieDatePreference");

    if (savedDate) {
        dateInput.value = savedDate;
    }


    function displayMovies(movieList) {

        moviesGrid.innerHTML = "";

        if (movieList.length === 0) {
            noResults.style.display = "block";
            return;
        }

        noResults.style.display = "none";

        movieList.forEach(movie => {

            const card = document.createElement("article");

            card.className = "movie-card";

            card.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.originalTitle}</p>
            `;

card.addEventListener("click", () => {

    sessionStorage.setItem(
        "movieScrollPosition",
        window.scrollY
    );

    window.location.href = `movie.html?id=${movie.id}`;
});

            moviesGrid.appendChild(card);
        });
    }

    function sortMovies(movieList, sortType) {

        const sortedMovies = [...movieList];

        switch (sortType) {

            case "title-asc":
                sortedMovies.sort((a, b) =>
                    a.title.localeCompare(b.title, "es")
                );
                break;

            case "title-desc":
                sortedMovies.sort((a, b) =>
                    b.title.localeCompare(a.title, "es")
                );
                break;

            case "duration-asc":
                sortedMovies.sort((a, b) =>
                    a.duration - b.duration
                );
                break;

            case "duration-desc":
                sortedMovies.sort((a, b) =>
                    b.duration - a.duration
                );
                break;

            case "release-asc":
                sortedMovies.sort((a, b) =>
                    a.year - b.year
                );
                break;

            case "release-desc":
                sortedMovies.sort((a, b) =>
                    b.year - a.year
                );
                break;

            case "next-screening":
                sortedMovies.sort((a, b) => {
                    const nextA = getNextScreening(a);
                    const nextB = getNextScreening(b);

                    return nextA - nextB;
                });
                break;
        }

        return sortedMovies;
    }

    function getNextScreening(movie) {

        const now = new Date().getTime();

        const futureScreenings = movie.screenings
            .map(screening => getDateTime(screening))
            .filter(dateTime => dateTime >= now);

        if (futureScreenings.length === 0) {
            return Infinity;
        }

        return Math.min(...futureScreenings);
    }


    function updateMovies() {

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    const selectedDate = dateInput.value;
    const selectedCinema = cinemaSelect.value;

    const filteredMovies = movies.filter(movie => {

        // 1. FILTRO AUTOMÁTICO:
        // Oculta la película si no le queda ninguna proyección futura
        if (!hasFutureScreenings(movie)) {
            return false;
        }

        const searchableText = [
            movie.title,
            movie.originalTitle,
            movie.director,
            ...movie.cast
        ]
            .join(" ")
            .toLowerCase();

        const matchesSearch =
            searchableText.includes(searchTerm);

        const matchesDate =
            !selectedDate ||
            movie.screenings.some(screening =>
                screening.date === selectedDate
            );

        const matchesCinema =
            !selectedCinema ||
            movie.screenings.some(screening =>
                screening.cinema === selectedCinema
            );

        return (
            matchesSearch &&
            matchesDate &&
            matchesCinema
        );
    });

    const sortedMovies = sortMovies(
        filteredMovies,
        sortSelect.value
    );

    displayMovies(sortedMovies);
}
    


    // =================================================
    // RECORDAR ORDENACIÓN
    // =================================================


    sortSelect.addEventListener("change", () => {
        localStorage.setItem("movieSortPreference", sortSelect.value);
        updateMovies();
    });

    dateInput.addEventListener("change", () => {
        localStorage.setItem("movieDatePreference", dateInput.value);
        updateMovies();
    });


    clearDate.addEventListener("click", () => {
        dateInput.value = "";
        localStorage.removeItem("movieDatePreference");
        updateMovies();
    });

cinemaSelect.addEventListener("change", () => {

    localStorage.setItem(
        "movieCinemaPreference",
        cinemaSelect.value
    );

    updateMovies();
});


// =================================================
// BUSCADOR
// =================================================

searchInput.addEventListener(
    "input",
    updateMovies
);




// =================================================
// MOSTRAR PELÍCULAS
// =================================================

populateCinemaFilter();


// RECUPERAR FILTROS GUARDADOS
const savedSort = localStorage.getItem(
    "movieSortPreference"
);

const savedCinema = localStorage.getItem(
    "movieCinemaPreference"
);

if (savedSort) {
    sortSelect.value = savedSort;
}

if (savedCinema) {
    cinemaSelect.value = savedCinema;
}

updateMovies();


// =================================================
// RESTAURAR POSICIÓN DE SCROLL
// =================================================

const savedScrollPosition = sessionStorage.getItem(
    "movieScrollPosition"
);

if (savedScrollPosition !== null) {

    window.scrollTo(
        0,
        parseInt(savedScrollPosition, 10)
    );

    sessionStorage.removeItem(
        "movieScrollPosition"
    );
}
}


// =====================================================
// PÁGINA INDIVIDUAL DE PELÍCULA
// =====================================================

const moviePage = document.querySelector(".movie-page");

if (moviePage) {

    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");
    const movie = movies.find(item => item.id === movieId);


    if (movie) {

        const poster = document.querySelector(".movie-poster img");
        const title = document.querySelector(".movie-info h1");
        const originalTitle = document.querySelector(".original-title");
        const technicalInfo = document.querySelector(".technical-info");
        const synopsis = document.querySelector(".synopsis");
        const screenings = document.querySelector(".screenings");


        poster.src = movie.poster;
        poster.alt = movie.title;

        title.textContent = movie.title;
        originalTitle.textContent = movie.originalTitle;


        // =============================================
        // FICHA TÉCNICA
        // =============================================

        technicalInfo.innerHTML = `
            <div class="technical-item">
                <strong>Director</strong>
                <span>${movie.director}</span>
            </div>

            <div class="technical-item">
                <strong>Reparto</strong>
                <span>${movie.cast.join(", ")}</span>
            </div>

            <div class="technical-item">
                <strong>Año</strong>
                <span>${movie.year}</span>
            </div>

            <div class="technical-item">
                <strong>Duración</strong>
                <span>${movie.duration} min</span>
            </div>

            <div class="technical-item">
                <strong>País</strong>
                <span>${movie.country}</span>
            </div>

            <div class="technical-item">
                <strong>Género</strong>
                <span>${movie.genres.join(", ")}</span>
            </div>
        `;


        synopsis.textContent = movie.synopsis;

        // Pasamos a la vista individual solo las proyecciones que no hayan caducado
        const now = new Date().getTime();
        const futureScreeningsOnly = movie.screenings.filter(s => getDateTime(s) >= now);

        displayScreenings(futureScreeningsOnly, screenings);

    } else {

        moviePage.innerHTML = `
            <a href="index.html" class="back-link">
                ← Volver a películas
            </a>

            <h1>Película no encontrada</h1>
        `;
    }
}


// =====================================================
// PROYECCIONES AGRUPADAS POR CINE
// =====================================================

// =====================================================
// PROYECCIONES AGRUPADAS POR CINE (ORDENADAS POR FECHA MÁS CERCANA)
// =====================================================

function displayScreenings(screeningList, container) {

    const cinemas = {};

    screeningList.forEach(screening => {
        if (!cinemas[screening.cinema]) {
            cinemas[screening.cinema] = [];
        }
        cinemas[screening.cinema].push(screening);
    });

    if (screeningList.length === 0) {
        container.innerHTML = `
            <h2>Proyecciones</h2>
            <p style="color: #64748b; font-size: 14px;">No hay pases futuros programados actualmente.</p>
        `;
        return;
    }

    // Asegurarnos de que las sesiones de cada cine estén ordenadas de más cercana a más lejana
    Object.keys(cinemas).forEach(cinema => {
        cinemas[cinema].sort((a, b) => getDateTime(a) - getDateTime(b));
    });

    // Ordenar la lista de cines según la fecha de su PRIMERA proyección disponible
    const sortedCinemas = Object.keys(cinemas).sort((cinemaA, cinemaB) => {
        const earliestA = getDateTime(cinemas[cinemaA][0]);
        const earliestB = getDateTime(cinemas[cinemaB][0]);
        return earliestA - earliestB;
    });

    let html = `<h2>Proyecciones</h2>`;

    sortedCinemas.forEach(cinema => {

        const screenings = cinemas[cinema];

        html += `
            <div class="cinema-group">
                <h3>${cinema}</h3>
                <div class="cinema-screenings">
        `;

        screenings.forEach(screening => {
            html += `
                <div class="screening">
                    <strong>
                        ${formatDate(screening.date)}
                    </strong>

                    <span class="screening-time">
                        ${screening.time}

                        ${screening.version
                            ? `<small class="screening-version">${screening.version}</small>`
                            : ""
                        }
                    </span>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


// =====================================================
// FUNCIONES AUXILIARES DE FECHA Y HORA
// =====================================================

// Comprueba si a una película le queda al menos 1 proyección futura activa
function hasFutureScreenings(movie) {
    const now = new Date().getTime();
    return movie.screenings.some(screening => getDateTime(screening) >= now);
}

function getDateTime(screening) {
    return new Date(`${screening.date}T${screening.time || "23:59"}`).getTime();
}

function formatDate(dateString) {
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });
}

function populateCinemaFilter() {

    const cinemas = new Set();

    movies.forEach(movie => {
        movie.screenings.forEach(screening => {
            cinemas.add(screening.cinema);
        });
    });

    const sortedCinemas = [...cinemas].sort((a, b) =>
        a.localeCompare(b, "es")
    );

    sortedCinemas.forEach(cinema => {

        const option = document.createElement("option");

        option.value = cinema;
        option.textContent = cinema;

        cinemaSelect.appendChild(option);
    });
}