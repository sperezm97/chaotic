# Chaotic

## Description
I'm a passionate person who loves Chaotic anime and card trading games. This is the first step to replicating the game I like! The database has built-in GoogleSheet for a while, it might be better to migrate to SQL Database.

It's a fun project to polish many skills in video game development, I hope it will be very funny and interesting.
**spoiler** will change a lot in the meantime.

## Features

- Generate .CSV based on my spreadsheet link on my account.

## Installation

Run `yarn install`

Make sure to complete the `.env` with the correct values.

```
# it is the spreadsheet id require to fetch the data
    SPREADSHEET_ID=1jj0n-EFmcF9UwJLNH-T9aQIrAwFYLah3DbZ7JtujA6o

    GOOGLE_API_KEY=
```

For `GOOGLE_API_KEY` will need to talk with @sperezm97 in order to generate  API Key in Google Console

Run `node .` for generating the CSV file separate by `|` 
> Makes funny to me, the most difficult part of this project was to find the best separator for CSV in order to now break the CSV
