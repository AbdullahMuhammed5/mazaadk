(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{611:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"payment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"payment_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"checkPayment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"payment_id"},value:{kind:"Variable",name:{kind:"Name",value:"payment_id"}}}],directives:[]}]}}],loc:{start:0,end:77}};t.loc.source={body:"mutation payment($payment_id:ID!){\n    checkPayment(payment_id:$payment_id)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var d={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.payment=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=d[n]||new Set,c=new Set,l=new Set;for(o.forEach((function(e){l.add(e)}));l.size>0;){var f=l;l=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"payment")},675:function(e,n,t){"use strict";t.r(n);var o={name:"check",mounted:function(){var e=this.$route.query.paymentId;this.$apollo.mutate({mutation:t(611),variables:{payment_id:e}}).then((function(e){console.log(e)}))}},d=t(68),component=Object(d.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"82f4e674",null);n.default=component.exports}}]);