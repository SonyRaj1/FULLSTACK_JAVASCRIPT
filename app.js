
/*function loadTemplate1() {
  var temlate1 =document.getElementById("template1");
  console.log(template1);
  template1.innerHTML=(`
  <html>
  <head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   <style>
   .row.heading h2 {
    color: #fff;
    font-size: 52.52px;
    line-height: 95px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.heading.heading-icon {
    display: block;
}
.padding-lg {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.practice-area.padding-lg {
    padding-bottom: 55px;
    padding-top: 55px;
}
.practice-area .inner{ 
     border:1px solid #999999; 
	 text-align:center; 
	 margin-bottom:28px; 
	 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    border: 0;
}
.practice-area .inner h3{ 
    color:#3c3c3c; 
	font-size:24px; 
	font-weight:500;
	font-family: 'Poppins', sans-serif;
	padding: 10px 0;
}
.practice-area .inner p{ 
    font-size:14px; 
	line-height:22px; 
	font-weight:400;
}
.practice-area .inner img{
	display:inline-block;
}


.our-webcoderskull{
  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
  
}
.our-webcoderskull .cnt-block{ 
   float:left; 
   width:100%; 
   background:#fff; 
   padding:30px 20px; 
   text-align:center; 
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px; 
   height:148px; 
   border-radius:100%; 
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
   width:148px; 
   height:148px; 
   border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
   color:#2a2a2a; 
   font-size:20px; 
   font-weight:500; 
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
   color:#2a2a2a; 
   font-size:13px; 
   line-height:20px; 
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
    display:inline-block; 
	width:auto; 
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
   font-size:24px; 
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
   color:#025a8e;
}
</style>
</head>

<body>
  <section class="our-webcoderskull padding-lg">
    <div class="container">
      <div class="row heading heading-icon">
          <h2>Our Team</h2>
      </div>
      <ul class="row">
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Kappua </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
         </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </section>
  </body>
  </html>
  `)
}
  

function loadTemplate2() {
  var temlate2 =document.getElementById("template2");
    console.log(template2);
    template2.innerHTML=(`
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
  
<style>	/* Coded with love by Mutiullah Samim 
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #60a3bc !important;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #f39c12;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #60a3bc;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #c0392b !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
  background-color: #c0392b !important;
}
</style>
	<title>My Awesome Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
</head>
<!--Coded with love by Mutiullah Samim-->


<body>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
`)
}

function loadTemplate3() {
  var temlate3 =document.getElementById("template3");
  console.log(template3);
  template3.innerHTML=(`
  <html>
  <head>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  
  
      <link href="https://fonts.googleapis.com/css?family=Rokkitt" rel="stylesheet"> 
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <style>/*
      *
      * ===========================================================
      *     HERO SECTION
      * ===========================================================
      *
      
      .hero {
        padding: 6.25rem 0px !important;
        margin: 0px !important;
      }
      .cardbox {
        border-radius: 3px;
        margin-bottom: 20px;
        padding: 0px !important;
      }
      
      /* ------------------------------- */
      /* Cardbox Heading
      ---------------------------------- 
      .cardbox .cardbox-heading {
        padding: 16px;
        margin: 0;
      }
      .cardbox .btn-flat.btn-flat-icon {
       border-radius: 50%;
       font-size: 24px;
       height: 32px;
       width: 32px;
       padding: 0;
       overflow: hidden;
       color: #fff !important;
       background: #b5b6b6;
       
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      }
      .cardbox .float-right .dropdown-menu{
        position: relative;
        left: 13px !important;  
      }
      .cardbox .float-right a:hover{
        background: #f4f4f4 !important;	
      }
      .cardbox .float-right a.dropdown-item {
        display: block;
        width: 100%;
        padding: 4px 0px 4px 10px;
        clear: both;
        font-weight: 400;
        font-family: 'Abhaya Libre', serif;
        font-size: 14px !important;
        color: #848484;
        text-align: inherit;
        white-space: nowrap;
        background: 0 0;
        border: 0;
      }
      
      /* ------------------------------- */
      /* Media Section
      ---------------------------------- 
      .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
      }
      .d-flex {
        display: -ms-flexbox !important;
        display: flex !important;
      }
      .media .mr-3{
        margin-right: 1rem !important;
      }
      .media img{
        width: 48px !important;
        height: 48px !important;
        padding: 2px;
        border: 2px solid #f4f4f4;
      } 
      .media-body {
        -ms-flex: 1;
        flex: 1;
        padding: .4rem !important;
      }
      .media-body p{
        font-family: 'Rokkitt', serif;	
        font-weight: 500 !important;
        font-size: 14px;
        color: #88898a;
      }
      .media-body small span{
        font-family: 'Rokkitt', serif;	
        font-size: 12px;
        color: #aaa;
        margin-right: 10px;
      }
      
      
      /* ------------------------------- */
      /* Cardbox Item
      ---------------------------------- 
      .cardbox .cardbox-item {
          position: relative;
          display: block;
      }
      .cardbox .cardbox-item img{
      }
      .img-responsive{
          display: block;
          max-width: 100%;
          height: auto;
      }	
      .fw {
          width: 100% !important;
        height: auto;
      }
      
      
      /* ------------------------------- */
      /* Cardbox Base
      ---------------------------------- 
      .cardbox-base{
       border-bottom: 2px solid #f4f4f4;
      }	
      .cardbox-base ul{
       margin: 10px 0px 10px 15px!important; 
       padding: 10px !important;
       font-size: 0px;	
        display: inline-block;
      }
      .cardbox-base li {
        list-style: none;
        margin: 0px 0px 0px -8px !important;
        padding: 0px 0px 0px 0px !important;
        display: inline-block;
      }
      
      .cardbox-base li a{
        margin: 0px !important;
        padding: 0px !important;
      }
      .cardbox-base li a i{
       position: relative;
       top: 4px; 
       font-size: 16px;
       color: #8d8d8d;
       margin-right: 15px;
      }
      .cardbox-base li a span{
       font-family: 'Rokkitt', serif;
       font-size: 14px;
       color: #8d8d8d;
       margin-left: 20px;
       position: relative;
       top: 5px; 
      }
      .cardbox-base li a em{
       font-family: 'Rokkitt', serif;
       font-size: 14px;
       color: #8d8d8d;
       position: relative;
       top: 3px; 
      }
      .cardbox-base li a img{
        width: 25px;
        height: 25px;
        margin: 0px !important;
        border: 2px solid #fff;
      }
      
      
      /* ------------------------------- */
      /* Cardbox Comments
      ---------------------------------- 
      .cardbox-comments{
        padding: 10px 40px 20px 40px !important;
        font-size: 0px;	
        text-align: center;
        display: inline-block;
      }
      .cardbox-comments .comment-avatar img{
        margin-top: 1px;
        margin-right: 10px;
        position: relative;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
      }
      .cardbox-comments .comment-body {
        overflow: auto;
      }
      .search {
       position: relative;
       right: -60px;
       top: -40px;
       margin-bottom: -40px;
       border: 2px solid #f4f4f4;	
       width: 100%;
       overflow: hidden;
      }
      .search input[type="text"] {
       background-color: #fff;
       line-height: 10px;
       padding: 15px 60px 20px 10px;
       border: none;
       border-radius: 4px;
       width: 350px;
       font-family: 'Rokkitt', serif;
       font-size: 14px;
       color: #8d8d8d;
       height: inherit;
       font-weight: 700;
      }
      .search button {
       position: absolute;
       right: 0;
       top: 0px;
       border: none;
       background-color: transparent;
       color: #bbbbbb;
       padding: 15px 25px;
       cursor: pointer;
       
       display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      }
      .search button i {
       font-size: 20px;
       line-height: 30px;
       display: block;
      }
      
      
      /* ------------------------------- */
      /* Author
      ---------------------------------- 
      .author a{
       font-family: 'Rokkitt', serif;
       font-size: 16px;
       color: #00C4CF;
      }
      .author p{
       font-family: 'Rokkitt', serif;
       font-size: 16px;
       color: #8d8d8d;
      }
      </style>
      </head>
    
        <!-- ==============================================
        Hero
        =============================================== -->
          <section class="hero">
           <div class="container">
            <div class="row">	
        
         <div class="col-lg-6 offset-lg-3">
        
        <div class="cardbox shadow-lg bg-white">
         
         <div class="cardbox-heading">
          <!-- START dropdown-->
          <div class="dropdown float-right">
           <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
          <em class="fa fa-ellipsis-h"></em>
           </button>
           <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style="position: absolute; transform: translate3d(-136px, 28px, 0px); top: 0px; left: 0px; will-change: transform;">
          <a class="dropdown-item" href="#">Hide post</a>
          <a class="dropdown-item" href="#">Stop following</a>
          <a class="dropdown-item" href="#">Report</a>
           </div>
          </div><!--/ dropdown -->
          <div class="media m-0">
           <div class="d-flex mr-3">
          <a href=""><img class="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User"></a>
           </div>
           <div class="media-body">
            <p class="m-0">Benjamin Robinson</p>
          <small><span><i class="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
          <small><span><i class="icon ion-md-time"></i> 10 hours ago</span></small>
           </div>
          </div><!--/ media -->
         </div><!--/ cardbox-heading -->
          
         <div class="cardbox-item">
          <img class="img-fluid" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg" alt="Image">
         </div><!--/ cardbox-item -->
         <div class="cardbox-base">
          <ul class="float-right">
           <li><a><i class="fa fa-comments"></i></a></li>
           <li><a><em class="mr-5">12</em></a></li>
           <li><a><i class="fa fa-share-alt"></i></a></li>
           <li><a><em class="mr-3">03</em></a></li>
          </ul>
          <ul>
           <li><a><i class="fa fa-thumbs-up"></i></a></li>
           <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" class="img-fluid rounded-circle" alt="User"></a></li>
           <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
           <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
           <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" class="img-fluid rounded-circle" alt="User"></a></li>
           <li><a><span>242 Likes</span></a></li>
          </ul>			   
         </div><!--/ cardbox-base -->
         <div class="cardbox-comments">
          <span class="comment-avatar float-left">
           <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."></a>                            
          </span>
          <div class="search">
           <input placeholder="Write a comment" type="text">
           <button><i class="fa fa-camera"></i></button>
          </div><!--/. Search -->
         </div><!--/ cardbox-like -->			  
            
        </div><!--/ cardbox -->
  
             </div><!--/ col-lg-6 -->	
         <div class="col-lg-3">
        <div class="shadow-lg p-4 mb-2 bg-white author">
         <a href="http://www.themashabrand.com/">Get more from themashabrand.com</a>
         <p>Bootstrap 4.1.0</p>
        </div>
         </div><!--/ col-lg-3 -->
        
            </div><!--/ row -->
           </div><!--/ container -->
          </section>
          </body>
          </html>
  `)
}

function loadTemplate4() {
  var temlate4 =document.getElementById("template4");
  console.log(template4);
  template4.innerHTML=(`
 
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Responsive Sticky Navbar</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
      <style>html, body {
        margin: 0;
        padding: 0;
        width: 100%;
  }
  
  body {
        font-family: "Helvetica Neue",sans-serif;
        font-weight: lighter;
  }
  
  header {
        width: 100%;
        height: 100vh;
        background: url(https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Beautiful-Full-HD-Wallpaper-Download-Free-PIC-WPE0010098.jpg) no-repeat 50% 50%;
        background-size: cover;
  }
  
  .content {
        width: 94%;
        margin: 4em auto;
        font-size: 20px;
        line-height: 30px;
        text-align: justify;
  }
  
  .logo {
        line-height: 60px;
        position: fixed;
        float: left;
        margin: 16px 46px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 2px;
  }
  
  nav {
        position: fixed;
        width: 100%;
        line-height: 60px;
  }
  
  nav ul {
        line-height: 60px;
        list-style: none;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;
        color: #fff;
        padding: 0;
        text-align: right;
        margin: 0;
        padding-right: 40px;
        transition: 1s;
  }
  
  nav.black ul {
        background: #000;
  }
  
  nav ul li {
        display: inline-block;
        padding: 16px 40px;;
  }
  
  nav ul li a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
  }
  
  .menu-icon {
        line-height: 60px;
        width: 100%;
        background: #000;
        text-align: right;
        box-sizing: border-box;
        padding: 15px 24px;
        cursor: pointer;
        color: #fff;
        display: none;
  }
  
  @media(max-width: 786px) {
  
        .logo {
              position: fixed;
              top: 0;
              margin-top: 16px;
        }
  
        nav ul {
              max-height: 0px;
              background: #000;
        }
  
        nav.black ul {
              background: #000;
        }
  
        .showing {
              max-height: 34em;
        }
  
        nav ul li {
              box-sizing: border-box;
              width: 100%;
              padding: 24px;
              text-align: center;
        }
  
        .menu-icon {
              display: block;
        }
  
  }
  </style>
   </head>
   <body>
      <div class="wrapper">
         <header>
            <nav>
               <div class="menu-icon">
                  <i class="fa fa-bars fa-2x"></i>
               </div>
               <div class="logo">
                  LOGO
               </div>
               <div class="menu">
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
               </div>
            </nav>
         </header>
         <div class="content">
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
         </div>
      </div>
   </body>
</html>
  `)
}

function username(name,age,company,salary) {
  console.log(`
  my name is ${name} and my age is ${age} i work for ${company} and i am getting ${salary}`);
}
username ("sony",20,"qspider",30000);

function number(num) {
  if (num === undefined){
    num =10*2;
  }
console.log(num);
}
number();

function names (args) {
  //console.log("my name is" ,ages);
 // var names=Array(arguments);
 var [...names] =arguments;
 names.forEach(function(name){
   console.log(name);
 });

}
names("sony","manu" ,"vinu","kumar");


username();
function username(){
  console.log("my name is manu");

}
company ();
var company=function(){
  console.log("my name is nanu");//error
}

var x="hello x";
function show() {
  var outerText ="hello outerText";
 
  function innerBlock(){
    var innerText="hello innnerText"
    console.log(innerText)
  console.assert(outerText)
  console.log(x)
  }
 innerBlock();
}
show();

var username=function(){
  console.log("hello username")
}
//es6 arrow function
var usernamewithEs6=()=> {
  console.log('hello Arrow function...')
}
usernamewithEs6();



var username= function(name){
  return name ;

};
console.log(usernamewithEs6("manu"));//noemal function calling
//Es6 arrow function
var usernamewithEs6=name=>name;
console.log(usernamewithEs6("sony"));//es6 fat arrow calling...



var username=function(){
  return arguments;
};
console.log(usernamewithEs6("manu"));

var usernamewithEs6 =(...args)=> {
  return args;
};
console.log(usernamewithEs6("shashi", "manu","anu"));


var users ={
  name:"anu",
  age:20,
  company:"Testyantra",
  salary:20000,
  userInfo:function(){
    console.log(`name is${this.name} and age is ${this.age} work for ${this.company} salary is ${this.salary}`)
  }
};

users.userInfo();//narmal function

var users1 ={
  name:"manu",
  age:20,
  company:"Testyantra",
  salary:20000,
  userInfo:()=>{
    console.log(`name is${users1.name} and age is ${users1.age} work for ${users1.company} salary is ${users1.salary}`)
  }
};

users1.userInfo();//fat arrow*/


/*function addNumbers() {
  var firstnumber = parseInt(document.getElementById("firstnumber").value);
  if (firstnumber === " "){
    alert('firstnumber is required');
    return;
  }
  var secondnumber = parseInt(document.getElementById("secondnumber").value);
  if (secondnumber === " "){
    alert('secondnumber is required');
    return;
  }
 document.getElementById('result').value = firstnumber + secondnumber;
 submitOK = "true";

 if (firstnumber.length ===0){
   alert 
 }
 if (isNaN(firstnumber)){
   alert('please add number')
 }
 if (isNaN(secondnumber)){
   alert('please add  number')
 }
}*/


/*var languages = ["java" , "java" , "java" , "python" , "python" , "python"]; //remove dublicates value
var num = [1,5,7,109,40,20,50,60,1001,4001];
var result = num.filter(function (x){
  return x > 50;
});
var es6way = num.filter(y => y >50);
console.log(result);
console.log(num)
var testresult = languages.filter(function(value , index , array) {
  return array.indexOf(value) === index;
});
console.log(testresult);

var users = ["anu" ,"manu" ,"anu" , "shashi" , "shashi"];
var [...es6waytoRemoveDuplicates] = new Set(users);
var duplicates = [];
for (var i = 0; i < users.length;i++){
  if (users.indexOf(users[i]) == -1){
    duplicates.push(users[i])
  }
}
console.log(es6waytoRemoveDuplicates);*/

/*var numbers = [10,40,500,600,20,50,43,600,200];
var test = numbers.reduce((a , b) => {
 // console.log(a);
 // console.log(b);

 return  a+b;
});
console.log(test);*/

/*var numbers = [10,40,500,600,20,50,43,600,200]; //find method
var find = numbers.find(element => element > 100);
console.log(find);*/


/*var numbers = [10,40,500,600,20,50,43,600,200];  //fill method
var lang = ["jee" ,"angular","react","node","aws"];
var test = lang.fill("java");
console.log(lang);
console.log(test);*/

/*var numbers = [10,40,500,600,20,50,43,600,200];
var lang = ["jee" ,"angular","react","node","aws"];
var keys = lang.keys();

console.log(keys);

var users=["anu","manu","ravi","shashi"];//for of loop
for (let users of users){
  console.log(users)
}*/

/*var numbers = [10,40,500,600,20,50,43,600,200];
var lang = ["jee" ,"angular","react","node","aws"];//key method
var keys = lang.keys();
var values = lang.values();
for (let key of keys){
  console.log(key);
}
for (let value of values){
  console.log(value);
}
*/
/*var numbers = [10,40,500,600,20,50,43,600,200];
var lang = ["jee" ,"angular","react","node","aws"];//alert methodeg
if (lang.includes("angular")) {
  alert("angular is  exits....");
}else {
  alert("angular is not exits....");
}*/

/*var numbers = [10,40,500,600,20,50,43,600,200];
var lang = ["jee" ,"angular","react","node","aws"];//foreach method
var foreach = lang.forEach(x => x);
console.log(foreach);

var map = lang.map(y => y);
console.log(map);
console.log(lang);*/

/*var numbers = [10,40,500,600,20,50,43,600,200];
var foreach = numbers.forEach(x =>x*2);
console.log(foreach);

var map = numbers.map(x => x*2);
console.log(map);*/
var date = new Date ();
var result = date.getFullYear();
var hours = date.getHours();
var minutes =date.getMinutes();
var second = data.getsecond();
var miliseconds =date.getMilliseconds();
var time =date.getTime();

console.log(result);
console.log(hours);
console.log(min);
console.log(second);
console.log(miliseconds);
console.log(time);
