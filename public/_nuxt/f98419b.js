(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{687:function(t,e,o){"use strict";o.r(e);var n={name:"_provider",data:function(){return{loading:!0}},mounted:function(){var t=this;console.log(this.$route.query.token),this.$auth.setStrategy("local"),this.$auth.setToken("local","Bearer "+this.$route.query.token),this.$axios.setToken(this.$route.query.token,"Bearer"),this.$apolloHelpers.onLogin(this.$route.query.token),this.$axios.get("/api/user").then((function(e){t.$auth.setUser(e.data.user),t.$router.push("/")}))}},r=o(69),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"001815b7",null);e.default=component.exports}}]);