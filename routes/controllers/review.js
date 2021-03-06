const db = require('../../models');
module.exports = {
   addReview: (req, res, next) => {
      if (!req.user) {
         res.status(401);
         next(new Error('User Required To Add Review'));
      }
      else {
         console.log(req.user)
         // Create Review
         db.Review.create({
            park_id: req.body.park_id,
            review_text: req.body.review_text,
            overall_rating: req.body.overall_rating,
            accessibility_rating: req.body.accessibility_rating,
            cleanliness_rating: req.body.cleanliness_rating,
            activities_rating: req.body.activities_rating,
            user_id: req.user.id
         })
   
         // Redirect to login
         .then(user =>  res.json(user))
         .catch(err => {
               res.status(401);
               next(err)
         });
      }
   },

   // Script to render three most recent reviews
   lastThreeReviews: (req, res) => {
       return new Promise ((resolve, reject) => {
         db.Review.findAll({
         limit: 3 ,
         order: [ ['createdAt',  'DESC'] ]
       })
      .then(result => {
         res.json(result)
      })
})
},

   // Pull reviews corresponding to specific park 
   pullParkReviews: (req, res) => {
   return new Promise ((resolve, reject) => {
   // Specific park
     db.Review.findAll({
      where: {park_id: req.body.park_id}
   })
  .then(result => {
     console.log(result)
     res.json(result)
  })
 })
}
} 

