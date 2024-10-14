# Reviva assignment

This project was bootstrapped with boilerplate projects for speed. My hope was to implement a calendar
demo with some demo data populated from an API. For speed I found some calendar markup using tailwind
CSS styles. Then I started to build an api with some basic models to populate the react component.

Goals
- get some calendar proof of concept in place
- have some models in place that look similar to:

```
User
  - id
  - name
  - group
  - createdAt
```

```
Group (enum for now)
```

```
Rooms
  - id
  - FK -> Services
  - FK -> Provider
```

```
Bookings
  - id
  - appointment time
  - userid
  - room
```

```
Services
  - id
  - name
```

## API

```
cd api
npm install
cp .env.example .env
```

View api routes: `http://localhost:8000`

## Client

```
cd client
npm install
npm run dev
```

View in browser: `http://localhost:3000`
