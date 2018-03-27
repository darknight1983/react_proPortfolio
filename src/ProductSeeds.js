import liriScreenShot from './images/liri_node_app.png';
import BamazonScreenShot from './images/bamazon.png';
import ReactPortfolioShot from './images/react-mdl-portfolio.png';
import EatABurger from './images/eatABurger.png';


const Seeds = [

    {
      key: 1,
      title: '"LIRI" Node App',
      screenShot: liriScreenShot,
      alt: 'liri_app_screen_shot',
      link: 'https://github.com/darknight1983/liri_node_app',
      description: `LIRI is like iPhone's SIRI. However, while SIRI is a Speech
               Interpretation and Recognition Interface, LIRI is a Language
               Interpretation and Recognition Interface. LIRI will be a command
               line node app that takes in parameters and gives you back data.`
    },{
      key: 2,
      title: 'BAMAZON',
      screenShot: BamazonScreenShot,
      alt: 'Bamazon_app',
      link: 'https://github.com/darknight1983/bamazon_app',
      description: `A Node.js & MySQL digital storefront. This is a command
                    line Node app that mimics a beloved online retailer. The
                    packages used to build this application were Inquirer,
                    MySQL, and Cli-Table`
    },{
      key: 3,
      title: 'React Portfolio',
       screenShot: ReactPortfolioShot,
       alt: 'My Portfolio Site',
       link: 'https://github.com/darknight1983/react_proPortfolio.git',
       description: `My current Portfolio site built with Create-React-App.
       I really do like Material Design Lite so I used a few components from
       that framework to build a lite and responsive portfolio.`
     },{
       key: 4,
       title: 'Eat-A-Burger',
       screenShot: EatABurger,
       alt: 'Eat-A-Burger',
       link: 'https://github.com/darknight1983/burger',
       description: `A Node, Express, Handlebars, and MySQL burger
                     app that lets users input the names of burgers they'd
                     like to eat... and then devour them!`
     }

]

export default Seeds;
