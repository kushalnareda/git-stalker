# Project Name

A full-stack app made using the GitHub API, built with React and styled using Material UI.

## Demo




https://github.com/kushalnareda/git-stalker/assets/128476254/b12712ec-fb79-4de2-b11e-3827eac01d40






## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)

### Installation

1. Clone the repository
   ```sh
   https://github.com/kushalnareda/git-stalker.git
   
2. Install dependencies
   ```sh
   npm install

### Usage

1. Start the development server
   ```sh
   npm run dev
   
2. Open http://localhost:{$PORT} in your browser

### Technologies Used

1. React
2. Material-UI
3. Typescript
4. GitHub API
   ```sh
   1. [GET] https://api.github.com/users/<user-name-here>
   2. [GET] https://api.github.com/users/<user-name-here>/repos?page=1&per_page=10


## Features

- Users can enter a username and fetch their details from GitHub.
- Displayed user information:
  - Username
  - Name
  - Bio
  - Location
  - Profile Picture
  - Number of Followers
  - Number of Following
  - Number of Public Repositories
- Display a list of all public repositories for the user.
  - For each repository, display:
    - Full Name
    - Description
    - Language
    - Number of Forks
    - Number of Watchers
- **Loading state while fetching data.**
- **Error state in case the user is not found or if there is any other network error.**
- **Pagination on the list of repositories.**
- **Ability to switch between dark/light mode.**

