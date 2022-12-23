const router = require('express').Router(); // require the express router

const apiRoutes = require('./api'); // require the api routes
const homeRoutes = require('./home-routes.js'); // require the home routes
const dashboardRoutes = require('./dashboard-routes.js'); // require the dashboard routes

router.use('/api', apiRoutes); // use the api routes
router.use('/', homeRoutes); // use the home routes
router.use('/dashboard', dashboardRoutes); // use the dashboard routes

router.use((req, res) => { // if a request is made to any route that does not exist
    res.status(404).end(); // send a 404 status code
});

module.exports = router; // export the router