# Marketstack mini stock exchange preview app

<img src="https://res.cloudinary.com/it-s-tech/image/upload/v1643306718/Screen_Shot_2022-01-27_at_19.12.42_z0gngy.png">

### About
This app is capable of creating a wallet, adding symbols to the wallet, and performing an End-Of-Day data request to the [Marketstack API](https://marketstack.com/) using all the symbols of the wallet. It performs a validation at the level of creating a symbol making sure that only global existing symbols will be saved in the database. The app was built as a dashboard with the help of React which facilitated instant interaction without loading the page.

### Live Demo 
Click [here](https://shielded-garden-55584.herokuapp.com/) to see the live version.

### Technologies Used.

* Ruby 3.0.0
* Rails 6.1.1
* PostgreSQL 14.5
* Bootstrap 5.3.1
* Sass 5.0
* RSpec 5.9
* Capybara 4.15
* React
* Node
* Yarn

### Installation And Usage

* Make sure you have the above technologies installed on your computer.
* Clone the repository using the command:
```
git@github.com:evaveskova/microverse_facebook.git
```
* Install the gems using the command:

```
$ bundle install
```

* Installed npm packages using the command
```
yarn install
```

* Migrate the database using the command:

``` 
rails db:migrate
```

* Run the development server using the command:
```
rails s
```

* Run webpack server for automatic page referesh on saving a jsx file
```
bin/webpack-dev-server
```

### Testing
* To test models:
```
rspec spec/models
```

### Deployment On Heroku
* Create a [Heroku](https://dashboard.heroku.com/) account.
* Install [Heroku CLI](https://dashboard.heroku.com/) on your computer.
* Login to Heroku from your terminal using the command: <br>
  ```heroku login```
* Enter your credentials as the above command will prompt you.
* Cd to the root folder of your project.
* Create a Heroku app using the command: <br> 
  ```heroku create <name-of-you-app> ```
* Commit your work and push to github. <br> 
```
  git add .
  git commit -m"commit-message"
  git push origin master
```
* Deploy your work to Heroku using the command: <br>
``` git push Heroku master```
* To see your hosted application on the browser, type the command: <br>
``` heroku open```

### ToDo
* Using readable dates for notifications.
* Add feature testing of the dashboard.
* Test the Marketstack service module.
* add new labels to newly created notifications.
* display symbols and their data in a graphical way.
* Deletion of a wallet.

### Author
:bust_in_silhouette: [Nyaga Andre Roy](https://github.com/RoyNyaga)
* Gihub: [RoyNyaga](https://github.com/RoyNyaga)
* Email: [nyagaandreroy@gmail.com](mailto:nyagaandreroy@gmail.com)
* Linkedin: [Roy Nyaga](https://www.linkedin.com/in/roy-nyaga-andre/)


