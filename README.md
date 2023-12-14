## Getting Started

First, create the database `compta-fruits` and run the migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

