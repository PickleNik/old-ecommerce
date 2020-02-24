<template>
  <v-app class="background">
    <v-toolbar fixed flat class="transparent hidden-sm-and-down">
      <v-toolbar-title class="display-2 ma-0"><router-link to="/" class="pt-3 px-3 dancing link link--takiri">Eccentric<span>Apparel</span></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn slot="activator" fab class="btnav mt-4" color="accent" to="shop"><v-icon>shopping_basket</v-icon></v-btn>
        <span>Shop</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" fab class="btnav mt-4" color="accent" to="cart"><v-icon>shopping_cart</v-icon></v-btn>
        <span>Cart</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" fab class="btnav mt-4" color="accent" to="profile"><v-icon>person</v-icon></v-btn>
        <span>Profile</span>
      </v-tooltip>
    </v-toolbar>
    <v-toolbar class="hidden-md-and-up" fixed app>
      <v-toolbar-title><router-link to="/" class="dancing display-1">Eccentric</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon class="accent" to="shop"><v-icon >shopping_basket</v-icon></v-btn>
        <v-btn icon class="accent" to="cart"><v-icon >shopping_cart</v-icon></v-btn>
        <v-btn icon class="accent" to="profile"><v-icon >person</v-icon></v-btn>
    </v-toolbar>

    <v-content class="hidden-md-and-up">
      <router-view/>
    </v-content>
      <router-view class="hidden-sm-and-down"/>
  </v-app>
</template>

<script>
export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script|Marck+Script|Comfortaa');
*{
  font-family: 'Comfortaa', sans-serif;
}
.dancing{
  font-family: 'Dancing Script', sans-serif;
}
a{
  text-decoration: none;
}
.rounded{
  -webkit-border-radius:3em;
  -moz-border-radius:3em;
  border-radius:3em;
}
.txt-shadow{
  text-shadow: 0 .05em .2em #ddd;
}
/*scrollbar*/
::-webkit-scrollbar{
  width: 0px;
}


.link {
	outline: none;
	text-decoration: none;
	position: relative;
	line-height: 1;
	display: inline-block;
}

/* Takiri */
.link--takiri {
	font-size: 1em;
	padding: 0 10px 20px;
	-webkit-transition: color 0.5s;
	transition: color 0.5s;
  color:#333;
}

.link--takiri:hover {
	color: #e91e63;
}

.link--takiri::before {
	content: '';
	position: absolute;
	height: 77px;
	width: 150%;
	top: 50%;
	margin-top: -18px;
	left: -20%;
	z-index: -1;
	background: #333;
	-webkit-transform: rotate3d(0,0,1,45deg) scale3d(0,1,1);
	transform: rotate3d(0,0,1,45deg) scale3d(0,1,1);
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
}

.link--takiri:hover::before {
	-webkit-transform: rotate3d(0,0,1,45deg) scale3d(1,1,1);
	transform: rotate3d(0,0,1,45deg) scale3d(1,1,1);
}

.link--takiri span {
	font-size: 40%;
	font-weight: 400;
	position: absolute;
	right: 1.5em;
	color: #82B1FF;
	bottom: 0;
	opacity: 0;
	-webkit-transform: translate3d(-10px,-10px,0);
	transform: translate3d(-10px,-10px,0);
	-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
	transition: transform 0.5s, opacity 0.5s;
}

.link--takiri:hover span {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

.btnav{
  opacity: 0;
  animation: rollIn 1s 1.5s ease 1 forwards;
}
@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(300%, 0, 0) rotate3d(0, 0, 1, 360deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

</style>
