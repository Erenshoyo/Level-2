# Football Ticket Booking System - Database Design & SQL Queries

## Overview & Objectives

This repository contains the SQL assignment for a simplified **Football Ticket Booking System**. The goal is to demonstrate relational database design, enforce data integrity with keys and constraints, and implement intermediate SQL query techniques.

## Project Structure

- `QUERY.sql` — Contains the DDL for table creation, sample data insertion, and the required SQL queries.

## Database Design & Schema

The database includes three tables:

1. `Users`
2. `Matches`
3. `Bookings`

### Users Table

Tracks administrative staff and fans using the booking platform.

| Field          | Description                                    |
| -------------- | ---------------------------------------------- |
| `user_id`      | Unique ID for each registered user.            |
| `full_name`    | Full name of the user.                         |
| `email`        | Email address used for login.                  |
| `role`         | User role: `Ticket Manager` or `Football Fan`. |
| `phone_number` | Contact mobile number.                         |

### Matches Table

Stores football match listings and ticket availability.

| Field                 | Description                                        |
| --------------------- | -------------------------------------------------- |
| `match_id`            | Unique ID for each match.                          |
| `fixture`             | Competing teams (e.g. `Real Madrid vs Barcelona`). |
| `tournament_category` | Match tournament or league name.                   |
| `base_ticket_price`   | Base price for a standard ticket.                  |
| `match_status`        | Ticket availability status.                        |

### Bookings Table

Records ticket purchases and links users with matches.

| Field            | Description                                      |
| ---------------- | ------------------------------------------------ |
| `booking_id`     | Unique ticket booking transaction ID.            |
| `user_id`        | FK to `Users.user_id` for the buyer.             |
| `match_id`       | FK to `Matches.match_id` for the selected match. |
| `seat_number`    | Reserved seat identifier (e.g. `A-12`).          |
| `payment_status` | Payment workflow state.                          |
| `total_cost`     | Final cost charged for the booking.              |

## Relationships

The assignment implements the following relationships:

- One User → Many Bookings
- Many Bookings → One Match
- Each booking row maps one user to one match with a specific seat choice

The `Bookings` table uses foreign keys to enforce referential integrity with `Users` and `Matches`.

## Sample Data

### Users

| user_id | full_name     | email           | role           | phone_number   |
| ------- | ------------- | --------------- | -------------- | -------------- |
| 1       | Tanvir Rahman | tanvir@mail.com | Football Fan   | +8801711111111 |
| 2       | Asif Haque    | asif@mail.com   | Football Fan   | +8801722222222 |
| 3       | Sajjad Rahman | sajjad@mail.com | Ticket Manager | +8801733333333 |
| 4       | Jannat Ara    | jannat@mail.com | Football Fan   | NULL           |

### Matches

| match_id | fixture                  | tournament_category | base_ticket_price | match_status |
| -------- | ------------------------ | ------------------- | ----------------- | ------------ |
| 101      | Real Madrid vs Barcelona | Champions League    | 150               | Available    |
| 102      | Man City vs Liverpool    | Premier League      | 120               | Selling Fast |
| 103      | Bayern Munich vs PSG     | Champions League    | 130               | Available    |
| 104      | AC Milan vs Inter Milan  | Serie A             | 90                | Sold Out     |
| 105      | Juventus vs Roma         | Serie A             | 80                | Available    |

### Bookings

| booking_id | user_id | match_id | seat_number | payment_status | total_cost |
| ---------- | ------- | -------- | ----------- | -------------- | ---------- |
| 501        | 1       | 101      | A-12        | Confirmed      | 150        |
| 502        | 1       | 102      | B-04        | Confirmed      | 120        |
| 503        | 2       | 101      | A-13        | Confirmed      | 150        |
| 504        | 2       | 101      | NULL        | NULL           | 150        |
| 505        | 3       | 102      | C-20        | Pending        | 120        |

## SQL Queries in `QUERY.sql`

### Query 1

Retrieve all available Champions League matches.

### Query 2

Find users whose names start with `Tanvir` or contain `Haque` (case-insensitive).

### Query 3

Show bookings with missing payment status and replace `NULL` with `Action Required`.

### Query 4

Get booking details with user full names and match fixtures using `INNER JOIN`.

### Query 5

List all users and their bookings, including users with no bookings using `LEFT JOIN`.

### Query 6

Find bookings with `total_cost` greater than the average booking cost.

### Query 7

Return the 2nd and 3rd most expensive matches by base ticket price using pagination.
