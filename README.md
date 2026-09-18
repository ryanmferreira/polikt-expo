<div align="center">

# Polikt App

**A platform for political education and civic awareness.**

[![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)](https://github.com/ryanmferreira/polikt-app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-24+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## About the Project

**Polikt** is a mobile app focused on political education and civic engagement. It helps users learn about politics, civic duties, and electoral processes, and enables them to report irregularities.

---

## Technologies

- **Mobile Framework:** React Native + Expo (v57)
- **Language:** TypeScript
- **Package Manager:** npm

---

## Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v24 or higher)
- **npm** (included with Node.js)

---

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

## File Structure
```plaintext
src
├── app
│   ├── (auth)
│   │   ├── index.tsx
│   │   └── register.tsx
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── courses.tsx
│   │   ├── guides.tsx
│   │   ├── home.tsx
│   │   ├── profile.tsx
│   │   └── search.tsx
│   ├── _layout.tsx
│   ├── guides
│   │   └── [id].tsx
│   └── news
│       └── [id].tsx
├── constants
│   └── theme.ts
├── models
│   ├── agency.ts
│   ├── guide.ts
│   ├── news.ts
│   └── user.ts
├── services
│   ├── api.ts
│   ├── guides.ts
│   ├── news.ts
│   └── users.ts
└── styles
    ├── articleStyles.ts
    ├── authStyles.ts
    ├── coursesStyles.ts
    ├── guideStyles.ts
    ├── homeStyles.ts
    ├── markdownStyles.ts
    ├── profileStyles.ts
    └── searchStyles.ts
```

## License

This project is licensed under the MIT License.
