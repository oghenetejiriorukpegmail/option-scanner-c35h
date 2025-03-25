# Options Scanner Project Structure

## Directory Layout

```
option-scanner-c35h/
│
├── client/                     # Frontend React application
│   ├── public/                 # Static public assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   │
│   ├── src/                    # Source code
│   │   ├── components/         # Reusable React components
│   │   │   ├── charts/
│   │   │   ├── common/
│   │   │   └── forms/
│   │   │
│   │   ├── context/            # React context providers
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Page components
│   │   │   ├── Dashboard/
│   │   │   ├── OptionsChain/
│   │   │   ├── Settings/
│   │   │   └── StockAnalysis/
│   │   │
│   │   ├── services/           # API and data services
│   │   ├── utils/              # Utility functions
│   │   ├── App.tsx
│   │   └── index.tsx
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── server/                     # Backend Node.js application
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   ├── controllers/        # Route handlers
│   │   ├── middleware/         # Express middleware
│   │   ├── models/             # Data models
│   │   ├── routes/             # API route definitions
│   │   ├── services/           # Business logic services
│   │   │   ├── cacheService.js
│   │   │   ├── calculationService.js
│   │   │   ├── marketService.js
│   │   │   └── optionsService.js
│   │   │
│   │   └── index.js            # Server entry point
│   │
│   └── package.json
│
├── database/                   # SQLite database files
│
├── .env.example                # Environment variable template
├── .gitignore
├── LICENSE
├── README.md
└── package.json                # Root package management
```

## Key Structural Principles

### Frontend (Client)
- Modular component architecture
- Separation of concerns
- Context-based state management
- TypeScript for type safety

### Backend (Server)
- Layered architecture
- Separation of concerns
- Service-oriented design
- Middleware for cross-cutting concerns

## State Management
- React Context API for global state
- Minimal prop drilling
- Centralized state logic

## Data Flow
1. Frontend sends API request
2. Backend processes request
3. Database interaction
4. Response sent back to frontend
5. UI updated via React Context

## Scalability Considerations
- Loosely coupled modules
- Easy to add new features
- Minimal dependencies
- Consistent code organization