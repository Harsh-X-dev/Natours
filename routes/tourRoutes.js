const express = require('express');
const tourController = require('../controller/tourController');
const authController = require('../controller/authController');

const router = express.Router();
// router.param('id', tourController.checkID);
router
  .route('/top-5-cheap')
  .get(tourController.aliseTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTours);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTours)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTours,
  );
module.exports = router;
