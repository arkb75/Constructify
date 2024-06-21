<style>
/* html{
  scroll-behavior: smooth;
} */
/* .bgimgissue{
  background-image: url(../assets/images/1900x1200_img_5.jpg)
}

@import '../assets/css/bootstrap/bootstrap.css';
@import '../assets/fonts/ionicons/css/ionicons.min.css';
@import '../assets/fonts/fontawesome/css/font-awesome.min.css';
@import '../assets/css/slick.css';
@import '../assets/css/slick-theme.css';
@import '../assets/css/helpers.css';
@import '../assets/css/style.css';
@import '../assets/css/landing-2.css'; */


@import '../assets/fonts/ionicons/css/ionicons.min.css';
@import '../assets/fonts/fontawesome/css/font-awesome.min.css';
@import '../assets/css/style.css';

/* @font-face {
   } */
   
body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
  font-family: 'FontAwesome';
  
}

.card-img-left {
  width: 45%;
  /* Link to your background image using in the property below! */
  background: scroll center url('https://static.dezeen.com/uploads/2024/01/fr-house-caza_dezeen_2364_col_3-scaled.jpg');
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}

</style>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Landing &mdash; Free One Page Bootstrap 4 Template by uicookies.com</title>
    <meta name="description" content="Free Bootstrap 4 Template by uicookies.com">
    <meta name="keywords"
      content="Free website templates, Free bootstrap themes, Free template, Free bootstrap, Free website template">

    <!-- <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600|Montserrat:200,300,400"
      rel="stylesheet"> -->

    
  </head>

  <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->

<body>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body p-4 p-sm-5">
            <h2 class="card-title text-center mb-5 fw-light fs-5">Tell Us More About Yourself</h2>
            <form class="pb-form-v1">

              <div class="form-floating mb-3">
                <label for="floatingInputUsername">Annual Income (USD)</label>
                <input type="number" class="form-control" id="floatingInputUsername" placeholder="100,000">
                
              </div>

              <div class="form-floating mb-3">
                <label for="floatingInputEmail">What's your budget for your first project?</label>
                <input type="number" class="form-control" id="floatingInputEmail" placeholder="1,000,000">

              </div>

              <hr>

              <div class="form-floating mb-3">
                <label for="floatingPassword">Name of your first project</label>
                <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                
              </div>

              <div class="form-floating mb-3">
                <label for="floatingPasswordConfirm">How did you hear about us?</label>
                <select class="form-control">
                    <option value=""></option>
                    <option value="">Google Search</option>
                    <option value="">Social Media</option>
                    <option value="">Friends or Family</option>
                    <option value="">Other</option>
                  </select>
                <!-- <input type="" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"> -->
                
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
              </div>

              <a class="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>

              <hr class="my-4">

              <!-- <div class="d-grid mb-2">
                <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i class="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>

              <div class="d-grid">
                <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div> -->

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>


  </html>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>


