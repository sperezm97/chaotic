# Chaotic

## Description
I'm a passionate person who loves Chaotic anime and card trading game. This is the first step to replicating the game I like! The database has built-in GoogleSheet for a while, it might be better to migrate to SQL Database.

It's a fun project to polish many skills in video game development, I hope it will be very funny and interesting.

**spoiler** it will be change a lot in the meantime.

## Features

- Generate .CSV based on my spreadheet link on my account.

## Installation

Run `yarn install`

Make sure to complete the `.env` with the correct values.

```
    SPREADSHEET_ATTACKS=1yXFijC2hN1vybU3ejdINYoTOTG62qCkpPLPsiYUEEyo
    SPREADSHEET_CREATURES=15QPS08iq6pkyMFsYuDsKIXX8LQmQ8MUoJeeNtjU54Xo
    SPREADSHEET_LOCATIONS=1fUFYhG1NLLkSTzrdbevm6ZMKNP6xLiKUZvM1sY10pVI
    SPREADSHEET_MUGICS=1rOMFKnWaz6XmhD43YFpcemWGzEok9IgtKCoiPMwA35s
    SPREADSHEET_EQUIPMENTS=1UUEPAEHZwmH52AJj2Jtskf6d4z5XIFEBb3HT-FTAcgs
```

Run `node .` for generating the CSV file separate by `|` 
> Makes funny to me, the most difficult part of this project was to find the best separator for CSV in order to now break the CSV
