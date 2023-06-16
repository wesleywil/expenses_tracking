# Expenses Tracking App - WW Finance Tracking

Introducing "WW Finance Tracking", a user-friendly app designed to simplify your financial management. With individual accounts, you can effortlessly track your expenses and incomes, ensuring a clear understanding of your financial health. The app provides customizable categories for expenses, such as meals, travels, hobbies, and more, allowing you to efficiently organize your spending. Stay in control of your finances with this app and achieve your financial goals with ease.

## Tech Stack

**Client:** ReactJS, Tailwindcss, Framer-Motion, React-Icons, React-Redux, Redux-Toolkit...

**Bakcend:** NextJS, Prisma, MySQL...

## Screenshots

### Dashboard

![DashBoard](https://i.imgur.com/d6yD27y.png)

### Expenses

![Expenses](https://i.imgur.com/s3PsFJ6.png)

### Categories

![Categories](https://i.imgur.com/gmBWHjm.png)

### Form - Create Expense

![Form](https://i.imgur.com/aTjbwfX.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/wesleywil/expenses_tracking
```

### Frontend

Install dependencies

```bash
  npm install
```

Execute the Prisma commands

```bash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`NEXTAUTH_SECRET`

`NEXTAUTH_URL`

`GOOGLE_ID`

`GOOGLE_SECRET`

## Authors

- [Wesley Wilson](https://github.com/wesleywil)
