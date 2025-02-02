(()=>{"use strict";var e,l={422:()=>{function e(l){var o,t,a="";if("string"==typeof l||"number"==typeof l)a+=l;else if("object"==typeof l)if(Array.isArray(l)){var r=l.length;for(o=0;o<r;o++)l[o]&&(t=e(l[o]))&&(a&&(a+=" "),a+=t)}else for(t in l)l[t]&&(a&&(a+=" "),a+=t);return a}const l=function(){for(var l,o,t=0,a="",r=arguments.length;t<r;t++)(l=arguments[t])&&(o=e(l))&&(a&&(a+=" "),a+=o);return a},o=window.wp.i18n,t=window.wp.hooks,a=window.wp.compose,r=window.wp.blockEditor,n=window.wp.components,s=window.lodash,i=e=>{if(!(0,s.isObject)(e)||Array.isArray(e))return e;const l=(0,s.pickBy)((0,s.mapValues)(e,i),(e=>null!=e&&""!==e&&!1!==e));return(0,s.isEmpty)(l)?void 0:l},c=window.ReactJSXRuntime,{assign:v,merge:u}=lodash,b=(0,a.createHigherOrderComponent)((e=>t=>{const{attributes:a,setAttributes:s}=t,{revealControls:v}=a;function u(e={}){const l=i(e);s({revealControls:l})}return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e,{...t}),(0,c.jsx)(r.InspectorControls,{children:(0,c.jsxs)(n.PanelBody,{className:l("block-editor-panel-reveal",{}),title:(0,o.__)("Reveal on scroll","tzm-reveal-block-controls"),initialOpen:!1,children:[(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.ToggleControl,{__nextHasNoMarginBottom:!0,label:v?.enabled?(0,o.__)("Enabled","tzm-reveal-block-controls"):(0,o.__)("Disabled","tzm-reveal-block-controls"),checked:v?.enabled,onChange:e=>u({...v,enabled:e})})}),!!v?.enabled&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,o.__)("Reveal Effect","tzm-reveal-block-controls"),value:v?.effect||"fade",options:[{label:(0,o.__)("Fade","tzm-reveal-block-controls"),value:"fade"},{label:(0,o.__)("Slide up","tzm-reveal-block-controls"),value:"slide-up"},{label:(0,o.__)("Slide down","tzm-reveal-block-controls"),value:"slide-down"},{label:(0,o.__)("Slide left","tzm-reveal-block-controls"),value:"slide-left"},{label:(0,o.__)("Slide right","tzm-reveal-block-controls"),value:"slide-right"},{label:(0,o.__)("Rotate","tzm-reveal-block-controls"),value:"rotate"},{label:(0,o.__)("Zoom in","tzm-reveal-block-controls"),value:"zoom-in"},{label:(0,o.__)("Zoom out","tzm-reveal-block-controls"),value:"zoom-out"}],onChange:e=>u({...v,effect:e})})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Reveal permanently","tzm-reveal-block-controls"),help:(0,o.__)("Enable this option to keep the block permanently visible when it has been revealed once.","tzm-reveal-block-controls"),checked:!!v?.permanent||!1,onChange:e=>u({...v,permanent:e})})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.SelectControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,o.__)("Animation easing","tzm-reveal-block-controls"),value:v?.easing||"default",options:[{label:(0,o.__)("Default","tzm-reveal-block-controls"),value:"default"},{label:(0,o.__)("Linear","tzm-reveal-block-controls"),value:"linear"},{label:(0,o.__)("Sine","tzm-reveal-block-controls"),value:"sine"},{label:(0,o.__)("Cubic","tzm-reveal-block-controls"),value:"cubic"},{label:(0,o.__)("Quint","tzm-reveal-block-controls"),value:"quint"},{label:(0,o.__)("Back","tzm-reveal-block-controls"),value:"back"}],onChange:e=>u({...v,easing:e})})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,o.__)("Reveal duration (in ms)","tzm-reveal-block-controls"),value:v?.duration||400,onChange:e=>u({...v,duration:e}),step:100,min:100,max:2e3,marks:[{value:100},{value:400},{value:800},{value:1200},{value:1600},{value:2e3}]})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.RangeControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,o.__)("Reveal delay (in ms)","tzm-reveal-block-controls"),value:v?.delay||0,onChange:e=>u({...v,delay:e}),step:150,min:0,max:3e3,marks:[{value:0},{value:300},{value:600},{value:900},{value:1200},{value:1500},{value:1800},{value:2100},{value:2400},{value:2700},{value:3e3}]})})]})]})})]})}),"withRevealControls"),d=(0,a.createHigherOrderComponent)((e=>o=>{const{attributes:t,className:a}=o,{revealControls:r}=t;if("object"!=typeof r||!r?.enabled)return(0,c.jsx)(e,{...o});let n=[],s={};for(const[e,l]of Object.entries(r))switch(e){case"effect":n.push("tzm-reveal__"+l);break;case"permanent":n.push("tzm-reveal__"+e);break;case"easing":n.push("tzm-reveal__ease-"+l);break;case"duration":s["--tzm-reveal--duration"]=l+"ms";break;case"delay":s["--tzm-reveal--delay"]=l+"ms"}return n.length||n.push("tzm-reveal"),(0,c.jsx)(e,{...o,className:l(a,n),wrapperProps:{...o.wrapperProps,style:s}})}),"addRevealStylingEditor");(0,t.addFilter)("blocks.registerBlockType","tzm/reveal-attributes",(function(e){return void 0!==e.attributes?v({},e,{attributes:u(e.attributes,{revealControls:{type:"object",default:null}})}):e})),(0,t.addFilter)("editor.BlockEdit","tzm/reveal-controls",b),(0,t.addFilter)("editor.BlockListBlock","tzm/reveal-styling-editor",d)}},o={};function t(e){var a=o[e];if(void 0!==a)return a.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,t),r.exports}t.m=l,e=[],t.O=(l,o,a,r)=>{if(!o){var n=1/0;for(v=0;v<e.length;v++){for(var[o,a,r]=e[v],s=!0,i=0;i<o.length;i++)(!1&r||n>=r)&&Object.keys(t.O).every((e=>t.O[e](o[i])))?o.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(v--,1);var c=a();void 0!==c&&(l=c)}}return l}r=r||0;for(var v=e.length;v>0&&e[v-1][2]>r;v--)e[v]=e[v-1];e[v]=[o,a,r]},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={539:0,212:0};t.O.j=l=>0===e[l];var l=(l,o)=>{var a,r,[n,s,i]=o,c=0;if(n.some((l=>0!==e[l]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(i)var v=i(t)}for(l&&l(o);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(v)},o=globalThis.webpackChunktzm_reveal_block_controls=globalThis.webpackChunktzm_reveal_block_controls||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))})();var a=t.O(void 0,[212],(()=>t(422)));a=t.O(a)})();