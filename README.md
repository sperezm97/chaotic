# Chaotic

## Description
I'm a passionate person who loves Chaotic anime and card trading game. This is the first step to replicating the game I like! The database has built-in GoogleSheet for a while, it might be better to migrate to SQL Database.

It's a fun project to polish many skills in video game development, I hope it will be very funny and interesting.


## Installation

run `yarn install`

make sure to complete the .env with the correct values.

```
    SPREADSHEET_ATTACKS=
    SPREADSHEET_CREATURES=
    SPREADSHEET_LOCATIONS=
    SPREADSHEET_MUGICS=
    SPREADSHEET_EQUIPMENTS=

    GOOGLE_SPREADSHEET_API_KEY=
```

> `GOOGLE_API_KEY` will provide by this [guide](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=api-key)

run `node .` for generating the CSV file separate by `|` 
> Makes funny to me, the most difficult part of this project was to find the best separator for CSV in order to now break the CSV

## TODO

- [ ] add [eslint]() and [prettier]()
- [ ] add a setup for testing
- [ ] Write a test hehe :D
- [ ] Design the roadmap for the video game