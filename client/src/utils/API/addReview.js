import axios from "axios";

//Review-related Axios calls
export default {
  addReview: function (review) {
    return axios.post("/api/review/addReview", review)
  },

  lastThreeParks: function () {
    return axios.get("/api/review/lastThreeReviews")
  },

  pullParkReviews: function (park_id) {
    return axios.post("/api/review/pullParkReviews", {park_id: park_id})
  }
}