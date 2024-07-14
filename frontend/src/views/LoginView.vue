<template>
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<title>Login</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
	  </head>
	  <body>
		<section class="ftco-section">
		  <div class="container">
			<div class="row justify-content-center">
			  <div class="col-md-6 text-center mb-5">
				<h2 class="heading-section">Welcome Back, Please Sign In</h2>
			  </div>
			</div>
			<div class="row justify-content-center">
			  <div class="col-md-7 col-lg-5">
				<div class="wrap relative">
				  <div class="absolute top-4 left-4 text-3xl cursor-pointer" @click="goHome" title="Home">
					<i class="fa fa-arrow-left"></i>
				  </div>
				  <img class="img bgimgissue" src="../assets/logo.png" />
				  <div class="login-wrap p-4 p-md-5">
					<form action="#" class="signin-form" autocomplete="off" @submit.prevent="handleClick">
					  <div class="form-group mt-3">
						<input type="email" class="form-control" required v-model="email" placeholder="Email" />
						<label class="form-control-placeholder" for="email">Email</label>
					  </div>
					  <br />
					  <div class="form-group">
						<input id="password-field" type="password" class="form-control" required v-model="password" placeholder="Password" />
						<label class="form-control-placeholder" for="password">Password</label>
						<span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click="togglePass"></span>
					  </div>
					  <div class="form-group">
						<button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
					  </div>
					  <div class="form-group d-md-flex">
						<div class="w-50 text-left">
						  <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
							<input type="checkbox" checked />
							<span class="checkmark"></span>
						  </label>
						</div>
						<div class="w-50 text-md-right">
						  <a href="#">Forgot Password</a>
						</div>
					  </div>
					</form>
					<p class="text-center">Not a member? <a data-toggle="tab" href="" @click="signUp">Sign Up</a></p>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</section>
		<div id="pb_loader" class="show fullscreen">
		  <svg class="circular" width="48px" height="48px">
			<circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
			<circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#1d82ff" />
		  </svg>
		</div>
	  </body>
	</html>
  </template>
  
  <script>
  export default {
	name: 'LoginView',
	data() {
	  return {
		email: '',
		password: ''
	  }
	},
	methods: {
	  handleClick() {
		// handle login stuff
	  },
	  signUp() {
		this.$router.push('/signup');
	  },
	  togglePass() {
		let x = document.getElementById("password-field");
		if (x.type === "password") {
		  x.type = "text";
		} else {
		  x.type = "password";
		}
	  },
	  goHome() {
		this.$router.push('/');
	  },
	},
	mounted: function () {
	  this.$nextTick(function () {
		setTimeout(function () {
		  if ($('#pb_loader').length > 0) {
			$('#pb_loader').removeClass('show');
		  }
		}, 700);
	  });
	}
  }
  </script>
  
  <style scoped src="../assets/css/style_login.css"></style>
  <style scoped>
  .bgimgissue {
	scale: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
	padding-top: 10%;
  }
  </style>