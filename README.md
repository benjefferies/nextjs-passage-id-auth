Determining workspace structure

Deciding which workspace information to collect

Gathering workspace info

# NextJS with Passage Identity Demo App

This is a demo application showcasing how to integrate Passage Identity with a NextJS application.

## Project Structure

The project is structured as follows:

- [`src/`](./src/): Contains the source code of the application.
  - `app/`: Contains the main application components.
    - `login/`: Contains the login page component.
    - `page.tsx`: The main page component.
    - `layout.tsx`: The main layout component.
  - `hooks/`: Contains custom React hooks.
    - `useCurrentUser.ts`: A custom hook for accessing the current user's data.
- [`.env`](./.env): Contains environment variables. You need to set up the environment variables for the Passage App ID and API Key.

## Key Features

- User authentication using Passage Identity.
- Custom React hook for accessing the current user's data.
- Protected routes that require user authentication. (TODO)
- Middleware for checking user authentication. (TODO)

## Setup

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up the environment variables in the [`.env`](./.env) file:
   - `PASSAGE_APP_ID`: Your Passage App ID.
   - `PASSAGE_API_KEY`: Your Passage API Key.
4. Run the application in development mode using `npm run dev`.

## Usage

When you run the application, you will be redirected to the login page if you are not authenticated. After successful authentication, you will be redirected to the main page where you can see a welcome message with your username.

## Notes
For chrome to work with passkeys you must run the server with TLS.

## License

This project is licensed under the MIT License.