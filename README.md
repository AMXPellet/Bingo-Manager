# Bingo Manager
Bingo Manager is an application made for the E-Town CS Club Spring 2026 Coding Challenge.

Bingo Manager is designed to create an easy entry point for people to host bingo boards
for use by friends, classes, or events. This application allows for multiple people to use
and interact with their bingo boards in an asynchronous and synchronous format.

## Functionality
This application allows for a host to create a bingo room, either private (password protected)
or public, and create custom bingo boards. Additionally, you can select to create a traditional bingo game.

There are two modes with two fill styles. The first mode is host-directed, which only allows the
host to select and mark bingo spots. The second mode is player-directed, which allows players to
mark off their spaces (e.g. if you had a game about visiting cities a player can individually mark
a place they have been.). There are two fill styles to accompany these modes, which are autofill and
manual fill. Autofill allows for synced boards, where shared spaces on different boards are marked as
completed when it is marked for a single board, and manual requires each board to be marked off individually.

## Tech Stack
The tech stack for this project is a React TypeScript web app, using Convex as the backend for data management
and authorization. It was also created using Vite as part of the development environment.
