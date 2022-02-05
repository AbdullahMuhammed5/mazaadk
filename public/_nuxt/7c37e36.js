(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{279:function(n,e,t){"use strict";var r=t(412)(t(413)),o=t(39),c=o.ApolloLink,f=o.Observable,l=t(414),d=l.selectURI,m=l.selectHttpOptionsAndBody,v=l.fallbackHttpConfig,h=l.serializeFetchParameter,O=l.createSignalIfSupported,y=l.parseAndCheckHttpResponse,w=t(415),k=w.extractFiles,j=w.isExtractableFile,x=w.ReactNativeFile;function F(n,e,t){n.append(e,t,t.name)}e.ReactNativeFile=x,e.isExtractableFile=j,e.formDataAppendFile=F,e.createUploadLink=function(n){var e=void 0===n?{}:n,t=e.uri,o=void 0===t?"/graphql":t,l=e.isExtractableFile,w=void 0===l?j:l,x=e.FormData,D=e.formDataAppendFile,E=void 0===D?F:D,S=e.fetch,_=e.fetchOptions,N=e.credentials,P=e.headers,A={http:{includeExtensions:e.includeExtensions},options:_,credentials:N,headers:P};return new c((function(n){var e=d(n,o),t=n.getContext(),c=t.clientAwareness,l=(c=void 0===c?{}:c).name,j=c.version,F=t.headers,D={http:t.http,options:t.fetchOptions,credentials:t.credentials,headers:(0,r.default)({},l&&{"apollographql-client-name":l},{},j&&{"apollographql-client-version":j},{},F)},_=m(n,v,A,D),N=_.options,body=_.body,P=k(body,"",w),C=P.clone,J=P.files,R=h(C,"Payload");if(J.size){delete N.headers["content-type"];var form=new(x||FormData);form.append("operations",R);var map={},i=0;J.forEach((function(n){map[++i]=n})),form.append("map",JSON.stringify(map)),i=0,J.forEach((function(n,e){E(form,++i,e)})),N.body=form}else N.body=R;return new f((function(t){var r;if(!N.signal){var o=O().controller;o&&(r=o,N.signal=r.signal)}return(S||fetch)(e,N).then((function(e){return n.setContext({response:e}),e})).then(y(n)).then((function(n){t.next(n),t.complete()})).catch((function(n){"AbortError"!==n.name&&(n.result&&n.result.errors&&n.result.data&&t.next(n.result),t.error(n))})),function(){r&&r.abort()}}))}))}},39:function(n,e,t){"use strict";t.r(e),t.d(e,"ApolloLink",(function(){return D})),t.d(e,"concat",(function(){return F})),t.d(e,"createOperation",(function(){return O})),t.d(e,"empty",(function(){return k})),t.d(e,"execute",(function(){return E})),t.d(e,"from",(function(){return j})),t.d(e,"fromError",(function(){return h})),t.d(e,"fromPromise",(function(){return v})),t.d(e,"makePromise",(function(){return m})),t.d(e,"split",(function(){return x})),t.d(e,"toPromise",(function(){return d}));var r=t(40);t.d(e,"Observable",(function(){return r.a}));var o=t(2),c=t(0),f=t(74);t.d(e,"getOperationName",(function(){return f.c}));!function(n){function e(e,link){var t=n.call(this,e)||this;return t.link=link,t}Object(c.__extends)(e,n)}(Error);function l(link){return link.request.length<=1}function d(n){var e=!1;return new Promise((function(t,r){n.subscribe({next:function(data){e||(e=!0,t(data))},error:r})}))}var m=d;function v(n){return new r.a((function(e){n.then((function(n){e.next(n),e.complete()})).catch(e.error.bind(e))}))}function h(n){return new r.a((function(e){e.error(n)}))}function O(n,e){var t=Object(c.__assign)({},n);return Object.defineProperty(e,"setContext",{enumerable:!1,value:function(n){t="function"==typeof n?Object(c.__assign)({},t,n(t)):Object(c.__assign)({},t,n)}}),Object.defineProperty(e,"getContext",{enumerable:!1,value:function(){return Object(c.__assign)({},t)}}),Object.defineProperty(e,"toKey",{enumerable:!1,value:function(){return function(n){var e=n.query,t=n.variables,r=n.operationName;return JSON.stringify([r,e,t])}(e)}}),e}function y(n,e){return e?e(n):r.a.of()}function w(n){return"function"==typeof n?new D(n):n}function k(){return new D((function(){return r.a.of()}))}function j(n){return 0===n.length?k():n.map(w).reduce((function(n,e){return n.concat(e)}))}function x(n,e,t){var o=w(e),c=w(t||new D(y));return l(o)&&l(c)?new D((function(e){return n(e)?o.request(e)||r.a.of():c.request(e)||r.a.of()})):new D((function(e,t){return n(e)?o.request(e,t)||r.a.of():c.request(e,t)||r.a.of()}))}var F=function(n,e){var t=w(n);if(l(t))return t;var o=w(e);return l(o)?new D((function(n){return t.request(n,(function(n){return o.request(n)||r.a.of()}))||r.a.of()})):new D((function(n,e){return t.request(n,(function(n){return o.request(n,e)||r.a.of()}))||r.a.of()}))},D=function(){function n(n){n&&(this.request=n)}return n.prototype.split=function(e,t,r){return this.concat(x(e,t,r||new n(y)))},n.prototype.concat=function(n){return F(this,n)},n.prototype.request=function(n,e){throw new o.a(1)},n.empty=k,n.from=j,n.split=x,n.execute=E,n}();function E(link,n){return link.request(O(n.context,function(n){var e={variables:n.variables||{},extensions:n.extensions||{},operationName:n.operationName,query:n.query};return e.operationName||(e.operationName="string"!=typeof e.query?Object(f.c)(e.query):""),e}(function(n){for(var e=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(n);t<r.length;t++){var c=r[t];if(e.indexOf(c)<0)throw new o.a(2)}return n}(n))))||r.a.of()}},74:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return h})),t.d(e,"c",(function(){return v})),t.d(e,"d",(function(){return l})),t.d(e,"e",(function(){return j}));var r=t(6),o=t(2),c=t(0);t(61),t(38);function f(n){return"Field"===n.kind}function l(n,e){return function(n){var e=[];return Object(r.b)(n,{Directive:function(n){e.push(n.name.value)}}),e}(e).some((function(e){return n.indexOf(e)>-1}))}function d(n){Object(o.b)(n&&"Document"===n.kind,8);var e=n.definitions.filter((function(n){return"FragmentDefinition"!==n.kind})).map((function(n){if("OperationDefinition"!==n.kind)throw new o.a(9);return n}));return Object(o.b)(e.length<=1,10),n}function m(n){return d(n),n.definitions.filter((function(n){return"OperationDefinition"===n.kind}))[0]}function v(n){return n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&n.name})).map((function(n){return n.name.value}))[0]||null}function h(n){var e;d(n);for(var t=0,r=n.definitions;t<r.length;t++){var c=r[t];if("OperationDefinition"===c.kind){var f=c.operation;if("query"===f||"mutation"===f||"subscription"===f)return c}"FragmentDefinition"!==c.kind||e||(e=c)}if(e)return e;throw new o.a(16)}function O(n,e,t){var r=0;return n.forEach((function(t,i){e.call(this,t,i,n)&&(n[r++]=t)}),t),n.length=r,n}function y(n,e){return n.selectionSet.selections.every((function(n){return"FragmentSpread"===n.kind&&y(e[n.name.value],e)}))}function w(n){return y(m(n)||function(n){Object(o.b)("Document"===n.kind,13),Object(o.b)(n.definitions.length<=1,14);var e=n.definitions[0];return Object(o.b)("FragmentDefinition"===e.kind,15),e}(n),function(n){void 0===n&&(n=[]);var e={};return n.forEach((function(n){e[n.name.value]=n})),e}(function(n){return n.definitions.filter((function(n){return"FragmentDefinition"===n.kind}))}(n)))?null:n}function k(n){return function(e){return n.some((function(n){return n.name&&n.name===e.name.value||n.test&&n.test(e)}))}}function j(n,e){var t=Object.create(null),o=[],f=Object.create(null),l=[],d=w(Object(r.b)(e,{Variable:{enter:function(n,e,r){"VariableDefinition"!==r.kind&&(t[n.name.value]=!0)}},Field:{enter:function(e){if(n&&e.directives&&(n.some((function(n){return n.remove}))&&e.directives&&e.directives.some(k(n))))return e.arguments&&e.arguments.forEach((function(n){"Variable"===n.value.kind&&o.push({name:n.value.name.value})})),e.selectionSet&&x(e.selectionSet).forEach((function(n){l.push({name:n.name.value})})),null}},FragmentSpread:{enter:function(n){f[n.name.value]=!0}},Directive:{enter:function(e){if(k(n)(e))return null}}}));return d&&O(o,(function(n){return!t[n.name]})).length&&(d=function(n,e){var t=function(n){return function(e){return n.some((function(n){return e.value&&"Variable"===e.value.kind&&e.value.name&&(n.name===e.value.name.value||n.test&&n.test(e))}))}}(n);return w(Object(r.b)(e,{OperationDefinition:{enter:function(e){return Object(c.__assign)(Object(c.__assign)({},e),{variableDefinitions:e.variableDefinitions.filter((function(e){return!n.some((function(n){return n.name===e.variable.name.value}))}))})}},Field:{enter:function(e){if(n.some((function(n){return n.remove}))){var r=0;if(e.arguments.forEach((function(n){t(n)&&(r+=1)})),1===r)return null}}},Argument:{enter:function(n){if(t(n))return null}}}))}(o,d)),d&&O(l,(function(n){return!f[n.name]})).length&&(d=function(n,e){function t(e){if(n.some((function(n){return n.name===e.name.value})))return null}return w(Object(r.b)(e,{FragmentSpread:{enter:t},FragmentDefinition:{enter:t}}))}(l,d)),d}function x(n){var e=[];return n.selections.forEach((function(n){(f(n)||function(n){return"InlineFragment"===n.kind}(n))&&n.selectionSet?x(n.selectionSet).forEach((function(n){return e.push(n)})):"FragmentSpread"===n.kind&&e.push(n)})),e}"function"==typeof WeakMap&&"object"==typeof navigator&&navigator.product,Object.prototype.toString;Object.prototype.hasOwnProperty;Object.create({})}).call(this,t(72))}}]);