# SanFransFood

A simple CLI tool to search for food trucks in San Francisco using the [SFGov Food Truck API](https://data.sfgov.org/). Find the best street food around the city in seconds!

## Features

- Search for food trucks near you.

## Future features

- Filter food trucks by name, type, or address.
  - CLI completions to improve filters insertions
- Use *inquirer* to a more interactive experience.

## Installation

You can use this CLI tool directly with `npx`, or you can install it globally on your machine.

### Option 1: Run with `npx` (No installation required)

Simply run the following command to use the CLI without installing it globally:

```bash
npx sanfransfood
```

### Option 2: Install Globally

To install the CLI globally and use it anywhere:

```bash
npm install -g sanfransfood
```

Once installed, you can use the CLI by running:

```bash
sanfransfood
```

## Usage

After running the CLI, you'll receive in a table visualization of the first 999 entries.

### Future Implementation

#### Search by Food Truck Name

```bash
sanfransfood --name "Tacos El Primo"
```

```bash
sanfransfood --n "Tacos El Primo"
```

#### Search by Type of Food

```bash
sanfransfood --type "Mexican"
```

```bash
sanfransfood --t "Mexican"
```

#### Search by Location

```bash
sanfransfood --address "Mission District"
```

```bash
sanfransfood --a "Mission District"
```

If no arguments are provided, the CLI will return a list of all available food trucks.

## Options

- `--name`: Filter food trucks by name.
- `--type`: Filter food trucks by type of food.
- `--address`: Filter food trucks by location.
- `--help`: Display help information.

## Data Source

This CLI uses the [SFGov Food Truck API](https://data.sfgov.org/) to fetch real-time data about food trucks in San Francisco.
