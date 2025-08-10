# 0x14 – Reading API Documentation

A foundational project focused on thoroughly understanding API documentation and translating that knowledge into clear, type-safe application design.

---

##  API Overview
The MoviesDatabase API provides access to a wide range of movie-related data, including film titles, genres, release years, and detailed metadata. It supports powerful filtering, pagination, and sorting to efficiently fetch relevant movie listings.

---

##  Version
Information based on MoviesDatabase API version: **v1** (as indicated in the latest official documentation).

---

##  Available Endpoints

| Endpoint             | Description                                      |
|----------------------|--------------------------------------------------|
| `/titles`           | Retrieve a list of movie titles with metadata.   |
| `/titles/{id}`      | Get detailed information for a specific movie.   |
| `/titles?year={year}`     | Filter movies by release year.                 |
| `/titles?genre={genre}`   | Filter movies by genre.                        |
| `/titles?page={n}`  | Navigate through pages of movie listings.        |

---

##  Request & Response Format

**Example Request:**  
```http
GET /titles?year=2022 HTTP/1.1
Host: api.moviesdb.com
Authorization: API_KEY_HERE
