# BookStack

BookStack is a full-stack web application for managing books, built using `React`, `Node.js`, `Express`, `MongoDB`, and `Vite`.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://github.com/PrasantaScripts/BookStack.git
```

## Installation

After cloning change the directory to the particular directories present into this main directory and install the packages using node

```bash
npm install

```

### Configure MongoDB

Make sure you have a MongoDB server running. Create a `config.js` file in the `backend` directory with the following content:

```bash
export const PORT = 'your port';
export const mongoDBURL ='your mongoDB URL';
```

## Usage

To run this change each directory present in main directory and run:

```bash
npm run dev
```

\*you can configure it according to your choice from package.json

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

Thank you
