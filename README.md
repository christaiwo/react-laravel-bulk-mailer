# react laravel bulk mailer

This is an Bulk mailer website built with Laravel 10.3.3 and PHP 8.1.2. with react as frontend  It comes with features for both users and administrators to manage investments and transactions on the platform.

## Features


- Sign up
- Sign in
- send mail
- mail handle by cronjob

## Installation

To install and run the application, please follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/christaiwo/react-laravel-bulk-mailer.git
2. Install dependencies:
   ```bash
   cd react-laravel-bulk-mailer
   composer install
2. Install dependencies:
   ```bash
   cd react-laravel-bulk-mailer/react/
   npm install
3. Create a new database and update the .env file with the database details:
   ```bash
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
3. Update smtp credentials:
   ```bash
   MAIL_MAILER=smtp
   MAIL_HOST=mailpit
   MAIL_PORT=1025
   MAIL_USERNAME=null
   MAIL_PASSWORD=null
   MAIL_ENCRYPTION=null
   MAIL_FROM_ADDRESS="hello@example.com"
   MAIL_FROM_NAME="${APP_NAME}"
6. Run the database migrations:
   ```bash
   php artisan migrate
9. Start the local development server:
   ```bash
   php artisan serve
9. set the base url for react
    ```bash
    edit .env to set the base url for react
9. Start the local react server:
    ```bash
    cd react
    npm run dev
9. Finally, run the scheduler for the cronjob:
   ```bash
   php artisan schedule:run 

Now you should be able to access the website at http://localhost:8000.

## License
This project is licensed under the MIT License - see the LICENSE file for details.