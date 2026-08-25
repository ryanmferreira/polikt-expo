# Polikt App

Polikt is a mobile app focused on political education and civic awareness. It
helps users learn about politics, public responsibilities, elections, and how
to report irregularities.

> Status: In development

## Tech Stack

- Expo 57
- React Native
- TypeScript

## Requirements

- Node.js 24 or later
- npm

## Installation

```bash
git clone https://github.com/ryanmferreira/polikt-app.git

cd polikt-app

npm install
```

## Running the App

Start the Expo development server:

```bash
npx expo start
```

Or run the app directly on a target platform:

```bash
npm run web
```

## Development

Run the linter with:

```bash
npm run lint
```

The app is currently using static content in some screens while its complete
functionality and API integration are still being developed.

## File Structure
```plaintext
src
├── app
│   ├── (auth)
│   │   ├── index.tsx
│   │   └── register.tsx
│   ├── guides
│   │   └── [id].tsx
│   ├── _layout.tsx
│   ├── news
│   │   └── [id].tsx
│   └── (tabs)
│       ├── courses.tsx
│       ├── guides.tsx
│       ├── home.tsx
│       ├── _layout.tsx
│       ├── profile.tsx
│       └── search.tsx
├── constants
│   └── theme.ts
└── styles
    ├── articleStyles.ts
    ├── authStyles.ts
    ├── coursesStyles.ts
    ├── guideStyles.ts
    ├── homeStyles.ts
    ├── profileStyles.ts
    └── searchStyles.ts
```

## License

This project is licensed under the MIT License.
