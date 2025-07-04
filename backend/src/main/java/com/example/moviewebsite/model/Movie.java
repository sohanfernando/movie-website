package com.example.moviewebsite.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String movieName;

    @Column(nullable = false)
    private String director;

    @Column(nullable = false)
    private String movieDescription;

    @Column(nullable = false)
    private String movieGenre;

    @Column(nullable = false)
    private String year;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String trailerLink;

    @Column(nullable = false)
    private String movieCover;
}
