!function(){var e,l={900:function(e,l,t){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}var o=window.wp.element,r=t(184),a=t.n(r),c=window.wp.i18n,i=window.wp.hooks,s=window.wp.compose,u=window.wp.blockEditor,v=window.wp.components;const{assign:b,merge:d}=lodash,f=(0,s.createHigherOrderComponent)((e=>l=>{const{attributes:t,setAttributes:n}=l,{revealBlock:r}=t,i={enabled:!1,effect:"fade",distance:"100%",revealOnce:!1,delay:0,duration:500,easing:"linear"};function s(e,l){let t=r||{};t={...t,[e]:l&&l!==i[e]?l:void 0},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(e&&"object"==typeof e)for(let l in e)if(e[l]&&e[l]!==i[l])return!1;return!0}(t)?n({revealBlock:null}):n({revealBlock:t})}return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(e,l),(0,o.createElement)(u.InspectorControls,null,(0,o.createElement)(v.PanelBody,{className:a()("block-editor-panel-reveal",{}),title:(0,c.__)("Reveal on scroll","tzm-reveal-block-controls"),initialOpen:!1},(0,o.createElement)(v.PanelRow,null,(0,o.createElement)(v.ToggleControl,{label:null!=r&&r.enabled?(0,c.__)("Enabled"):(0,c.__)("Disabled"),checked:null==r?void 0:r.enabled,onChange:e=>s("enabled",e)})),!(null==r||!r.enabled)&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(v.PanelRow,null,(0,o.createElement)(v.SelectControl,{label:(0,c.__)("Reveal Effect","tzm-reveal-block-controls"),value:(null==r?void 0:r.effect)||"fade",options:[{label:(0,c.__)("Fade","tzm-reveal-block-controls"),value:"fade"},{label:(0,c.__)("Slide up","tzm-reveal-block-controls"),value:"slide-up"},{label:(0,c.__)("Slide down","tzm-reveal-block-controls"),value:"slide-down"},{label:(0,c.__)("Slide left","tzm-reveal-block-controls"),value:"slide-left"},{label:(0,c.__)("Slide right","tzm-reveal-block-controls"),value:"slide-right"},{label:(0,c.__)("Rotate","tzm-reveal-block-controls"),value:"rotate"},{label:(0,c.__)("Zoom in","tzm-reveal-block-controls"),value:"zoom-in"},{label:(0,c.__)("Zoom out","tzm-reveal-block-controls"),value:"zoom-out"}],onChange:e=>s("effect",e),__nextHasNoMarginBottom:!0})),(0,o.createElement)(v.PanelRow,null,(0,o.createElement)(v.ToggleControl,{label:(0,c.__)("Reveal once only","tzm-reveal-block-controls"),help:(0,c.__)("Enable this option to keep the block permanently visible after leaving the viewport.","tzm-reveal-block-controls"),checked:!(null==r||!r.revealOnce),onChange:e=>s("revealOnce",e)})),(0,o.createElement)(v.PanelRow,null,(0,o.createElement)(v.RangeControl,{label:(0,c.__)("Reveal delay","tzm-reveal-block-controls"),value:(null==r?void 0:r.delay)||0,onChange:e=>s("delay",e),step:1,min:0,max:5,marks:!0})),(0,o.createElement)(v.PanelRow,null,(0,o.createElement)(v.SelectControl,{label:(0,c.__)("Animation easing","tzm-reveal-block-controls"),value:(null==r?void 0:r.easing)||"linear",options:[{label:(0,c.__)("Linear","tzm-reveal-block-controls"),value:"linear"},{label:(0,c.__)("Sine","tzm-reveal-block-controls"),value:"sine"},{label:(0,c.__)("Cubic","tzm-reveal-block-controls"),value:"cubic"},{label:(0,c.__)("Quint","tzm-reveal-block-controls"),value:"quint"},{label:(0,c.__)("Back","tzm-reveal-block-controls"),value:"back"},{label:(0,c.__)("Bounce","tzm-reveal-block-controls"),value:"bounce"}],onChange:e=>s("easing",e),__nextHasNoMarginBottom:!0}))))))}),"withRevealControls"),p=(0,s.createHigherOrderComponent)((e=>l=>{const{attributes:t,className:r}=l,{revealBlock:c}=t;let i=l.wrapperProps||{};return i.style=function(){if(c&&"object"==typeof c)for(const[e,l]of Object.entries(c));return{}}(),(0,o.createElement)(e,n({},l,{className:a()(r,function(){let e=[];if(c&&"object"==typeof c){for(const[l,t]of Object.entries(c))"enabled"!==l&&("revealOnce"===l&&t?e.push("tzm-reveal-once"):"delay"===l&&t?e.push("tzm-reveal-delay-"+t):l&&t&&e.push("tzm-reveal-"+t));null!=c&&c.enabled&&!e.length&&e.push("tzm-reveal")}return e.push("visible"),e}()),wrapperProps:i}))}),"addRevealClassesEditor");(0,i.addFilter)("blocks.registerBlockType","tzm/reveal-attributes",(function(e){return void 0!==e.attributes?b({},e,{attributes:d(e.attributes,{revealBlock:{type:"object",default:null}})}):e})),(0,i.addFilter)("editor.BlockEdit","tzm/reveal-controls",f),(0,i.addFilter)("editor.BlockListBlock","tzm/reveal-classes-editor",p)},184:function(e,l){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(l,[]))||(e.exports=t)}()}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return l[e](r,r.exports,n),r.exports}n.m=l,e=[],n.O=function(l,t,o,r){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,i=0;i<t.length;i++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var s=o();void 0!==s&&(l=s)}}return l}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]},n.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(l,{a:l}),l},n.d=function(e,l){for(var t in l)n.o(l,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},function(){var e={61:0,974:0};n.O.j=function(l){return 0===e[l]};var l=function(l,t){var o,r,a=t[0],c=t[1],i=t[2],s=0;if(a.some((function(l){return 0!==e[l]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var u=i(n)}for(l&&l(t);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},t=self.webpackChunktzm_reveal_block_controls=self.webpackChunktzm_reveal_block_controls||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var o=n.O(void 0,[974],(function(){return n(900)}));o=n.O(o)}();