import{t as e}from"./rolldown-runtime.b6nc_xxv.mjs";import{A as t,B as n,F as r,M as i,N as a,O as o,P as s,R as c,T as l,_ as u,c as d,g as f,j as p,l as m,o as h,y as g,z as _}from"./react.bq_geygs.mjs";import{F as v,a as y,h as b,r as ee,t as x,w as te}from"./motion.bf6bctpf.mjs";import{C as ne,I as re,O as ie,T as S,W as C,et as ae,ht as oe,k as se,mt as ce,ot as le,r as w,st as ue,t as de,tt as fe,w as T,y as E}from"./framer.b1ep-qd_.mjs";var pe,D,O,me=e((()=>{C(),se.loadFonts([`GF;DM Sans-regular`,`GF;DM Sans-700`,`GF;DM Sans-700italic`,`GF;DM Sans-italic`]),pe=[{explicitInter:!0,fonts:[{cssFamilyName:`DM Sans`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`DM Sans`,url:`https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,weight:`400`},{cssFamilyName:`DM Sans`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`DM Sans`,url:`https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,weight:`700`},{cssFamilyName:`DM Sans`,openType:!0,source:`google`,style:`italic`,uiFamilyName:`DM Sans`,url:`https://fonts.gstatic.com/s/dmsans/v17/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2`,weight:`700`},{cssFamilyName:`DM Sans`,openType:!0,source:`google`,style:`italic`,uiFamilyName:`DM Sans`,url:`https://fonts.gstatic.com/s/dmsans/v17/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-JDW32RmYJpso5.woff2`,weight:`400`}]}],D=[`.framer-F4CG6 .framer-styles-preset-kg90fx:not(.rich-text-wrapper), .framer-F4CG6 .framer-styles-preset-kg90fx.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`],O=`framer-F4CG6`}));function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function ge(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:L;if(typeof e!=`string`)return L;let t,n,r,i=1;if(e.startsWith(`#`))[t,n,r,i]=function(e){return(e=e.replace(/^#/,``)).length===3&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]}(e);else if(e.startsWith(`rgb`))[t,n,r,i]=function(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}(e);else{if(!e.startsWith(`hsl`))return L;[t,n,r,i]=function(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}(function(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}(e))}return[I(t,0,1),I(n,0,1),I(r,0,1),I(i,0,1)]}function _e(e){let t=o(void 0),n=i(t=>{let n=e.map(e=>{if(e!=null){if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}}});return()=>{n.forEach(e=>e?.())}},e);return p(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}async function ve(e){let t={},r=[];return Object.entries(e).forEach(([e,i])=>{if(typeof i==`string`){if(!(e=>{try{return e.startsWith(`/`)||new URL(e),!0}catch{return!1}})(i))return;let a=new Promise((r,a)=>{let o=new Image;(e=>{try{return!e.startsWith(`/`)&&new URL(e,n.location.origin).origin!==n.location.origin}catch{return!1}})(i)&&(o.crossOrigin=`anonymous`),o.onload=()=>{t[e]=o,r()},o.onerror=()=>{a()},o.src=i});r.push(a)}else t[e]=i}),await Promise.all(r),t}var A,j,M,N,ye,P,F,I,L,R,z,be,xe=e((()=>{c(),l(),h(),A=class{constructor(e,t,r,i,a=0,o=0,s=2,c=8294400){if(k(this,`parentElement`,void 0),k(this,`canvasElement`,void 0),k(this,`gl`,void 0),k(this,`program`,null),k(this,`uniformLocations`,{}),k(this,`fragmentShader`,void 0),k(this,`rafId`,null),k(this,`lastRenderTime`,0),k(this,`totalFrameTime`,0),k(this,`speed`,0),k(this,`providedUniforms`,void 0),k(this,`hasBeenDisposed`,!1),k(this,`resolutionChanged`,!0),k(this,`textures`,new Map),k(this,`minPixelRatio`,void 0),k(this,`maxPixelCount`,void 0),k(this,`isSafari`,function(){let e=_.userAgent.toLowerCase();return e.includes(`safari`)&&!e.includes(`chrome`)&&!e.includes(`android`)}()),k(this,`initProgram`,()=>{let e=function(e,t,n){let r=he(e,e.VERTEX_SHADER,t),i=he(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return a?(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)?(e.detachShader(a,r),e.detachShader(a,i),e.deleteShader(r),e.deleteShader(i),a):(e.deleteProgram(a),e.deleteShader(r),e.deleteShader(i),null)):null}(this.gl,j,this.fragmentShader);e&&(this.program=e)}),k(this,`setupPositionAttribute`,()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)}),k(this,`setupUniforms`,()=>{let e={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`)};Object.entries(this.providedUniforms).forEach(([t,n])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),n instanceof HTMLImageElement){let n=`${t}_aspect_ratio`;e[n]=this.gl.getUniformLocation(this.program,n)}}),this.uniformLocations=e}),k(this,`renderScale`,1),k(this,`parentWidth`,0),k(this,`parentHeight`,0),k(this,`resizeObserver`,null),k(this,`setupResizeObserver`,()=>{this.resizeObserver=new ResizeObserver(([e])=>{e?.borderBoxSize[0]&&(this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize),this.handleResize()}),this.resizeObserver.observe(this.parentElement),visualViewport?.addEventListener(`resize`,this.handleVisualViewportChange);let e=this.parentElement.getBoundingClientRect();this.parentWidth=e.width,this.parentHeight=e.height,this.handleResize()}),k(this,`resizeRafId`,null),k(this,`handleVisualViewportChange`,()=>{this.resizeRafId!==null&&cancelAnimationFrame(this.resizeRafId),this.resizeRafId=requestAnimationFrame(()=>{this.resizeRafId=requestAnimationFrame(()=>{this.handleResize()})})}),k(this,`handleResize`,()=>{this.resizeRafId!==null&&cancelAnimationFrame(this.resizeRafId);let e=visualViewport?.scale??1,t=visualViewport?visualViewport.width*visualViewport.scale:n.innerWidth,r=Math.round(1e4*n.outerWidth/t)/1e4,i=this.isSafari?devicePixelRatio:devicePixelRatio/r,a=Math.max(i,this.minPixelRatio)*r*e,o=this.parentWidth*a,s=this.parentHeight*a,c=Math.sqrt(this.maxPixelCount)/Math.sqrt(o*s),l=a*Math.min(1,c),u=Math.round(this.parentWidth*l),d=Math.round(this.parentHeight*l);this.canvasElement.width===u&&this.canvasElement.height===d&&this.renderScale===l||(this.renderScale=l,this.canvasElement.width=u,this.canvasElement.height=d,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))}),k(this,`render`,e=>{if(this.hasBeenDisposed||this.program===null)return;let t=e-this.lastRenderTime;this.lastRenderTime=e,this.speed!==0&&(this.totalFrameTime+=t*this.speed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.totalFrameTime),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.speed===0?this.rafId=null:this.requestRender()}),k(this,`requestRender`,()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)}),k(this,`setTextureUniform`,(e,t)=>{if(!t.complete||t.naturalWidth===0)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let n=this.textures.get(e);n&&this.gl.deleteTexture(n);let r=this.gl.createTexture();if(this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.getError()!==this.gl.NO_ERROR||r===null)return;this.textures.set(e,r);let i=this.uniformLocations[e];if(i){let n=this.textures.size-1;this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+n),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(i,n);let a=`${e}_aspect_ratio`,o=this.uniformLocations[a];if(o){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(o,e)}}}),k(this,`setUniformValues`,e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let n=this.uniformLocations[e];if(n)if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let e=null,r=null;if(t[0]!==void 0&&Array.isArray(t[0])){let n=t[0].length;if(!t.every(e=>e.length===n))return;e=t.flat(),r=n}else e=t,r=e.length;switch(r){case 2:this.gl.uniform2fv(n,e);break;case 3:this.gl.uniform3fv(n,e);break;case 4:this.gl.uniform4fv(n,e);break;case 9:this.gl.uniformMatrix3fv(n,!1,e);break;case 16:this.gl.uniformMatrix4fv(n,!1,e)}}else typeof t==`number`?this.gl.uniform1f(n,t):typeof t==`boolean`&&this.gl.uniform1i(n,t?1:0)})}),k(this,`getCurrentFrameTime`,()=>this.totalFrameTime),k(this,`setFrame`,e=>{this.totalFrameTime=e,this.lastRenderTime=performance.now(),this.render(performance.now())}),k(this,`setSpeed`,(e=1)=>{this.speed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)}),k(this,`setUniforms`,e=>{this.providedUniforms={...this.providedUniforms,...e},this.setUniformValues(e),this.render(performance.now())}),k(this,`dispose`,()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),visualViewport?.removeEventListener(`resize`,this.handleVisualViewportChange),this.uniformLocations={},this.parentElement.paperShaderMount=void 0}),!(e instanceof HTMLElement))throw Error(`Paper Shaders: parent element must be an HTMLElement`);if(this.parentElement=e,!document.querySelector(`style[data-paper-shaders]`)){let e=document.createElement(`style`);e.innerHTML=M,e.setAttribute(`data-paper-shaders`,``),document.head.prepend(e)}let l=document.createElement(`canvas`);this.canvasElement=l,this.parentElement.prepend(l),this.fragmentShader=t,this.providedUniforms=r,this.totalFrameTime=o,this.minPixelRatio=s,this.maxPixelCount=c;let u=l.getContext(`webgl2`,i);if(!u)throw Error(`Paper Shaders: WebGL is not supported in this browser`);this.gl=u,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),this.setSpeed(a),this.parentElement.setAttribute(`data-paper-shaders`,``),this.parentElement.paperShaderMount=this}},j=`#version 300 es
layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_objectHelperBox;

out vec2 v_responsiveUV;
out vec2 v_responsiveBoxSize;
out vec2 v_responsiveHelperBox;
out vec2 v_responsiveBoxGivenSize;

out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_patternHelperBox;

// #define ADD_HELPERS

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize, vec2 maxBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(maxBoxSize[0] / boxRatio, maxBoxSize[1]);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(maxBoxSize[0] / boxRatio, maxBoxSize[1]);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  vec2 maxBoxSize = vec2(max(u_resolution.x, givenBoxSize.x), max(u_resolution.y, givenBoxSize.y));
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================
  // Sizing api for graphic objects with fixed ratio
  // (currently supports only ratio = 1)

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
    (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
    (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize, maxBoxSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  #ifdef ADD_HELPERS
    v_objectHelperBox = uv;
    v_objectHelperBox *= objectWorldScale;
    v_objectHelperBox += boxOrigin * (objectWorldScale - 1.);
  #endif

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;


  // ===================================================


  // ===================================================
  // Sizing api for graphic objects with either givenBoxSize ratio or canvas ratio.
  // Full-screen mode available with u_worldWidth = u_worldHeight = 0

  v_responsiveBoxGivenSize = vec2(
    (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
    (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  v_responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize, maxBoxSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / v_responsiveBoxSize;

  #ifdef ADD_HELPERS
    v_responsiveHelperBox = uv;
    v_responsiveHelperBox *= responsiveBoxScale;
    v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================


  // ===================================================
  // Sizing api for patterns
  // (treating graphics as a image u_worldWidth x u_worldHeight size)

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
    (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
    (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize, maxBoxSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  #ifdef ADD_HELPERS
    v_patternHelperBox = uv;
    v_patternHelperBox *= patternBoxScale;
    v_patternHelperBox += boxOrigin * (patternBoxScale - 1.);
  #endif

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  v_patternUV += .5;

  // ===================================================

}`,M=`@layer paper-shaders {
  :where([data-paper-shaders]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
}`,N={fit:`contain`,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},ye={none:0,contain:1,cover:2},P=5,F=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${P}];
uniform float u_colorsCount;

uniform float u_frequency;
uniform float u_spotty;
uniform float u_midSize;
uniform float u_midIntensity;
uniform float u_density;
uniform float u_blending;


in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;

out vec4 fragColor;


#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846


float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}


vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}


float hash(float n) {
  return fract(sin(n * 43758.5453123) * 43758.5453123);
}

float valueNoise(vec2 uv) {
  vec2 i = floor(uv);
  vec2 f = fract(uv);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float raysShape(vec2 uv, float r, float freq, float density, float radius) {
  float a = atan(uv.y, uv.x);
  vec2 left = vec2(a * freq, r);
  vec2 right = vec2(mod(a, TWO_PI) * freq, r);
  float n_left = pow(valueNoise(left), density);
  float n_right = pow(valueNoise(right), density);
  float shape = mix(n_right, n_left, smoothstep(-.15, .15, uv.x));
  return shape;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = .2 * u_time;

  float radius = length(shape_uv);
  float spots = 5. * abs(u_spotty);

  float density = 4. - 3. * clamp(u_density, 0., 1.);

  float delta = 1. - smoothstep(0., 1., radius);

  float middleShape = pow(u_midIntensity, .3) * smoothstep(abs(u_midSize), 0.02 * abs(u_midSize), 3.0 * radius);
  middleShape = pow(middleShape, 5.0);

  vec3 accumColor = vec3(0.0);
  float accumAlpha = 0.0;

  for (int i = 0; i < ${P}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 rotatedUV = rotate(shape_uv, float(i) + 1.0);

    float r1 = radius * (1.0 + 0.4 * float(i)) - 3.0 * t;
    float r2 = 0.5 * radius * (1.0 + spots) - 2.0 * t;
    float f = mix(1.0, 3.0 + 0.5 * float(i), hash(float(i) + 10.0)) * u_frequency;

    float ray = raysShape(rotatedUV, r1, 5.0 * f, density, radius);
    ray *= raysShape(rotatedUV, r2, 4.0 * f, density, radius);
    ray += (1. + 4. * ray) * middleShape;
    ray = clamp(ray, 0.0, 1.0);

    float srcAlpha = u_colors[i].a * ray;
    vec3 srcColor = u_colors[i].rgb * srcAlpha;

    vec3 alphaBlendColor = accumColor + (1.0 - accumAlpha) * srcColor;
    float alphaBlendAlpha = accumAlpha + (1.0 - accumAlpha) * srcAlpha;

    vec3 addBlendColor = accumColor + srcColor;
    float addBlendAlpha = accumAlpha + srcAlpha;

    accumColor = mix(alphaBlendColor, addBlendColor, u_blending);
    accumAlpha = mix(alphaBlendAlpha, addBlendAlpha, u_blending);
  }

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;

  vec3 alphaBlendColor = accumColor + (1.0 - accumAlpha) * bgColor;
  float alphaBlendAlpha = accumAlpha + (1.0 - accumAlpha) * u_colorBack.a;

  vec3 addBlendColor = accumColor + bgColor;
  float addBlendAlpha = accumAlpha + u_colorBack.a;

  accumColor = mix(alphaBlendColor, addBlendColor, u_blending);
  accumAlpha = mix(alphaBlendAlpha, addBlendAlpha, u_blending);

  vec3 color = clamp(accumColor, 0.0, 1.0);
  float opacity = clamp(accumAlpha, 0.0, 1.0);


  
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);


  fragColor = vec4(color, opacity);
}
`,I=(e,t,n)=>Math.min(Math.max(e,t),n),L=[0,0,0,1],R=u(function({fragmentShader:e,uniforms:t,webGlContextAttributes:n,speed:i=0,frame:s=0,minPixelRatio:c,maxPixelCount:l,...u},f){let[p,m]=r(!1),h=o(null),g=o(null);return a(()=>((async()=>{let r=await ve(t);h.current&&!g.current&&(g.current=new A(h.current,e,r,n,i,s,c,l),m(!0))})(),()=>{g.current?.dispose(),g.current=null}),[e,n]),a(()=>{(async()=>{let e=await ve(t);g.current?.setUniforms(e)})()},[t,p]),a(()=>{g.current?.setSpeed(i)},[i,p]),a(()=>{g.current?.setFrame(s)},[s,p]),d(`div`,{ref:_e([h,f]),...u})}),R.displayName=`ShaderMount`,z={...N,offsetX:-.4,offsetY:-.4,colorBack:`hsla(215, 100%, 11%, 1)`,colors:[`hsla(45, 100%, 70%, 1)`,`hsla(10, 100%, 80%, 1)`,`hsla(178, 100%, 83%, 1)`],frequency:6,spotty:.28,midIntensity:1,midSize:3,density:.3,blending:0,speed:1,frame:0},be=f(function({speed:e=z.speed,frame:t=z.frame,colorBack:n=z.colorBack,colors:r=z.colors,frequency:i=z.frequency,spotty:a=z.spotty,midIntensity:o=z.midIntensity,midSize:s=z.midSize,density:c=z.density,blending:l=z.blending,fit:u=z.fit,scale:f=z.scale,rotation:p=z.rotation,originX:m=z.originX,originY:h=z.originY,offsetX:g=z.offsetX,offsetY:_=z.offsetY,worldWidth:v=z.worldWidth,worldHeight:y=z.worldHeight,...b}){let ee={u_colorBack:ge(n),u_colors:r.map(ge),u_colorsCount:r.length,u_frequency:i,u_spotty:a,u_midIntensity:o,u_midSize:s,u_density:c,u_blending:l,u_fit:ye[u],u_scale:f,u_rotation:p,u_offsetX:g,u_offsetY:_,u_originX:m,u_originY:h,u_worldWidth:v,u_worldHeight:y};return d(R,{...b,speed:e,frame:t,fragmentShader:F,uniforms:ee})},function(e,t){for(let n in e)if(n!==`colors`){if(!1===Object.is(e[n],t[n]))return!1}else{let n=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!n||!r){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,n)=>e===t.colors?.[n]))return!1}return!0})}));function B(e){let t=E.hasRestrictions(),n=o(null),r=v(n,{once:!1}),i=e.preset===`Custom`?null:Se[e.preset],a=e.colorsMode===`Custom`?V(e.colorBack):V(i?i.background:e.colorBack),s=e.colorsMode===`Custom`?e.colors.map(V):i?i.colors.map(V):e.colors.map(V),c=!e.canvasPreview&&t?0:i?i.speed:e.speed;return m(`div`,{ref:n,style:{width:`100%`,height:`100%`,position:`relative`},children:[d(be,{style:{width:`100%`,height:`100%`},colorBack:a,colors:s,frequency:i?i.frequency:e.frequency,spotty:i?i.spotty:e.spotty,midSize:i?i.center.size:e.center.size,midIntensity:i?i.center.intensity:e.center.intensity,density:i?i.density:e.density,blending:1,speed:r?c:0,offsetX:i?i.offsetX:e.offsetX,offsetY:i?i.offsetY:e.offsetY}),e.noise&&e.noise.opacity>0&&d(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url("../images/g0qcwrxr87k0ufoxiufbakwya8.png")`,backgroundSize:e.noise.scale*200,backgroundRepeat:`repeat`,opacity:e.noise.opacity/2}})]})}var Se,V,Ce=e((()=>{h(),C(),x(),xe(),l(),S(B,{preset:{type:w.Enum,title:`Preset`,options:[`Time Travel`,`Kinetic Field`,`Highway`,`Ocean`,`Flowers`,`Custom`],defaultValue:`Time Travel`},colorsMode:{type:w.Enum,title:`Color`,options:[`Preset`,`Custom`],defaultValue:`Preset`,displaySegmentedControl:!0},noise:{type:w.Object,optional:!0,icon:`effect`,controls:{opacity:{type:w.Number,defaultValue:.5,min:0,max:1,step:.01},scale:{type:w.Number,defaultValue:1,min:.2,max:2,step:.1}}},colorBack:{type:w.Color,title:`Background`,defaultValue:`rgb(0,0,0)`,hidden:e=>e.colorsMode===`Preset`},colors:{type:w.Array,title:`Ray Colors`,control:{type:w.Color},defaultValue:[`rgb(177, 177, 177)`],hidden:e=>e.colorsMode===`Preset`},frequency:{type:w.Number,title:`Frequency`,defaultValue:5,min:0,max:50,step:.5,hidden:e=>e.preset!==`Custom`},spotty:{type:w.Number,title:`Spotty`,defaultValue:.5,min:0,max:10,step:.1,hidden:e=>e.preset!==`Custom`},center:{type:w.Object,title:`Center`,controls:{size:{type:w.Number,title:`Size`,defaultValue:.5,min:0,max:1,step:.1},intensity:{type:w.Number,title:`Intensity`,defaultValue:.5,min:0,max:1,step:.01}},hidden:e=>e.preset!==`Custom`},density:{type:w.Number,title:`Density`,defaultValue:.5,min:0,max:1,step:.01,hidden:e=>e.preset!==`Custom`},speed:{type:w.Number,title:`Speed`,defaultValue:1,min:0,max:10,step:.1,hidden:e=>e.preset!==`Custom`},offsetX:{type:w.Number,title:`Offset X`,defaultValue:0,min:-2,max:2,step:.01,hidden:e=>e.preset!==`Custom`},offsetY:{type:w.Number,title:`Offset Y`,defaultValue:0,min:-2,max:2,step:.01,hidden:e=>e.preset!==`Custom`},canvasPreview:{type:w.Boolean,title:`Preview`,defaultValue:!0,description:`More components at [Framer University](https://frameruni.link/cc).`}}),B.defaultProps={preset:`Time Travel`,colorsMode:`Preset`,colorBack:`rgb(0,0,0)`,colors:[`rgb(177, 177, 177)`],frequency:5,spotty:.5,center:{size:.5,intensity:.5},density:.5,speed:1,offsetX:0,offsetY:0,canvasPreview:!0},Se={"Kinetic Field":{background:`rgb(0,0,0)`,colors:[`rgb(254, 128, 66)`,`rgb(253, 251, 154)`,`rgb(123, 76, 70)`,`rgb(43, 21, 23)`,`rgb(180, 43, 27)`],frequency:0,spotty:5,center:{size:1,intensity:1},density:.28,speed:2,offsetX:0,offsetY:0},"Time Travel":{background:`rgb(0,0,0)`,colors:[`rgb(17, 44, 113)`,`rgb(187, 99, 255)`,`rgb(86, 225, 233)`,`rgb(91, 88, 235)`,`rgb(10, 35, 83)`],frequency:.5,spotty:0,center:{size:.7,intensity:.33},density:.74,speed:2,offsetX:0,offsetY:0},Highway:{background:`rgb(0,0,0)`,colors:[`rgb(94, 94, 94)`,`rgb(99, 250, 255)`,`rgb(0, 229, 255)`],frequency:2,spotty:.2,center:{size:0,intensity:.23},density:0,speed:1.2,offsetX:0,offsetY:-1.1},Ocean:{background:`rgb(0,0,0)`,colors:[`rgb(62, 204, 248)`,`rgb(90, 118, 242)`,`rgb(41, 84, 231)`],frequency:1.5,spotty:0,center:{size:.7,intensity:.33},density:.7,speed:2,offsetX:0,offsetY:-2},Flowers:{background:`rgb(0,0,0)`,colors:[`rgb(255, 212, 100)`,`rgb(238, 34, 51)`,`rgb(95, 134, 250)`],frequency:.5,spotty:1.9,center:{size:0,intensity:.23},density:1,speed:2,offsetX:-.55,offsetY:2}},V=e=>{let t=e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/),n=e.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);if(n){let[e,t,r,i,a]=n;return`rgba(${t}, ${r}, ${i}, ${a})`}else if(t){let[e,n,r,i]=t;return`rgba(${n}, ${r}, ${i}, 1)`}return console.warn(`Could not parse color:`,e),`rgba(0, 0, 0, 1)`},B.displayName=`God Rays`}));function we(...e){let t=E.current()===E.canvas,i=n===void 0,o=De(),[s,c]=r(()=>Te(e.map(H)));a(()=>{if(!t)return;let n=document.body.querySelector(`main > div`);if(!n)return;let r=new MutationObserver(()=>{c(Te(e.map(H)))});return r.observe(n,{attributes:!0,attributeFilter:[`style`]}),()=>r.disconnect()},e);let l=p(()=>e.map(H),[e]);if(i)return e.map(e=>Oe(e));let u=[];for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!=`string`){u.push(n);continue}let r=l[t],i=s[r];r&&i?u.push(o?i.dark||i.light||n:i.light||n):u.push(n)}return u}function Te(e){let t=E.current()===E.canvas,n={},r={},i={};if(t&&typeof document<`u`){let e=document.body.querySelector(`main > div`);if(e){let t=e.getAttribute(`style`);if(t){let e=U(t);r=e,i=e}}}else{let{light:e,dark:t}=Ee();r=U(e),i=U(t)}return new Set([...Object.keys(r),...Object.keys(i)]).forEach(e=>{n[e]={light:r[e]||``,dark:i[e]||``}}),n}function Ee(){let e=``,t=``;if(typeof document<`u`){let n=document.head.querySelectorAll(`style[data-framer-css], style[data-framer-css-ssr], style[data-framer-css-ssr-minified]`);for(let r of n){let n=r.sheet?.cssRules;if(!n)continue;let i=[];for(let e of n)if(e instanceof CSSStyleRule)i.push([e,!1]);else if(e instanceof CSSMediaRule&&e.conditionText===`(prefers-color-scheme: dark)`)for(let t of e.cssRules)t instanceof CSSStyleRule&&i.push([t,!0]);for(let[n,r]of i){let i=n.cssText;if(!i.includes(`--token-`))continue;let a=r?n.selectorText===`body`:n.selectorText===`body[data-framer-theme="dark"]`,o=!r&&n.selectorText===`body`;if(!(!a&&!o)&&(a?t||=i.substring(i.indexOf(`{`)+1,i.lastIndexOf(`}`)).trim():e||=i.substring(i.indexOf(`{`)+1,i.lastIndexOf(`}`)).trim(),t&&e))break}if(t&&e)break}}return{light:e,dark:t}}function De(){let e=n!==void 0&&n.location.origin.endsWith(`framercanvas.com`),[t,i]=r(()=>n===void 0?!1:e&&typeof document<`u`?document.body.getAttribute(`data-framer-theme`)===`dark`:n.matchMedia(`(prefers-color-scheme: dark)`).matches);return a(()=>{if(e){let e=new MutationObserver(e=>{e.forEach(e=>{e.attributeName===`data-framer-theme`&&i(document.body.getAttribute(`data-framer-theme`)===`dark`)})});return e.observe(document.body,{attributes:!0,attributeFilter:[`data-framer-theme`]}),()=>e.disconnect()}else{let e=n.matchMedia(`(prefers-color-scheme: dark)`),r=e=>{i(e.matches)};return e.matches!==t&&i(e.matches),e.addListener(r),()=>e.removeListener(r)}},[e]),t}function H(e){if(!e||!e.startsWith(`var(`))return``;let t=ke.exec(e);return t&&t[1]||``}function U(e){let t={};return e&&e.split(`;`).filter(Boolean).forEach(e=>{let[n,r]=e.split(`:`).map(e=>e.trim());n&&r&&(t[n]=r)}),t}function Oe(e){if(!e||!e.startsWith(`var(`))return e;let t=e.slice(4,-1).split(`,`);return t.length>1?t.slice(1).join(`,`).trim():``}var ke,Ae=e((()=>{c(),C(),l(),ke=/var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*))?\s*\)/}));function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: `+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function Me(e,t,n){let r=je(e,e.VERTEX_SHADER,t),i=je(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return a?(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)?(e.detachShader(a,r),e.detachShader(a,i),e.deleteShader(r),e.deleteShader(i),a):(console.error(`Unable to initialize the shader program: `+e.getProgramInfoLog(a)),e.deleteProgram(a),e.deleteShader(r),e.deleteShader(i),null)):null}var Ne,Pe,Fe=e((()=>{c(),Ne=class{constructor(e,t,r={},i,a=1,o=0){W(this,`canvas`,void 0),W(this,`gl`,void 0),W(this,`program`,null),W(this,`uniformLocations`,{}),W(this,`fragmentShader`,void 0),W(this,`rafId`,null),W(this,`lastFrameTime`,0),W(this,`totalAnimationTime`,0),W(this,`speed`,1),W(this,`providedUniforms`,void 0),W(this,`hasBeenDisposed`,!1),W(this,`resolutionChanged`,!0),W(this,`initWebGL`,()=>{let e=Me(this.gl,Pe,this.fragmentShader);e&&(this.program=e,this.setupPositionAttribute(),this.setupUniforms())}),W(this,`setupPositionAttribute`,()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)}),W(this,`setupUniforms`,()=>{this.uniformLocations={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`),...Object.fromEntries(Object.keys(this.providedUniforms).map(e=>[e,this.gl.getUniformLocation(this.program,e)]))}}),W(this,`resizeObserver`,null),W(this,`setupResizeObserver`,()=>{this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.canvas),this.handleResize()}),W(this,`handleResize`,()=>{let e=n.devicePixelRatio,t=this.canvas.clientWidth*e,r=this.canvas.clientHeight*e;(this.canvas.width!==t||this.canvas.height!==r)&&(this.canvas.width=t,this.canvas.height=r,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))}),W(this,`render`,e=>{if(this.hasBeenDisposed)return;let t=e-this.lastFrameTime;this.lastFrameTime=e,this.speed!==0&&(this.totalAnimationTime+=t*this.speed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.totalAnimationTime*.001),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,n.devicePixelRatio),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.speed===0?this.rafId=null:this.requestRender()}),W(this,`requestRender`,()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)}),W(this,`updateProvidedUniforms`,()=>{this.gl.useProgram(this.program),Object.entries(this.providedUniforms).forEach(([e,t])=>{let n=this.uniformLocations[e];if(n)if(Array.isArray(t))switch(t.length){case 2:this.gl.uniform2fv(n,t);break;case 3:this.gl.uniform3fv(n,t);break;case 4:this.gl.uniform4fv(n,t);break;default:t.length===9?this.gl.uniformMatrix3fv(n,!1,t):t.length===16?this.gl.uniformMatrix4fv(n,!1,t):console.warn(`Unsupported uniform array length: ${t.length}`)}else typeof t==`number`?this.gl.uniform1f(n,t):typeof t==`boolean`?this.gl.uniform1i(n,t?1:0):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})}),W(this,`setSeed`,e=>{this.totalAnimationTime=1e3/120*e,this.lastFrameTime=performance.now(),this.render(performance.now())}),W(this,`setSpeed`,(e=1)=>{this.speed=e,this.rafId===null&&e!==0&&(this.lastFrameTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)}),W(this,`setUniforms`,e=>{this.providedUniforms={...this.providedUniforms,...e},this.updateProvidedUniforms(),this.render(performance.now())}),W(this,`dispose`,()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),this.uniformLocations={}}),this.canvas=e,this.fragmentShader=t,this.providedUniforms=r,this.totalAnimationTime=o;let s=e.getContext(`webgl2`,i);if(!s)throw Error(`WebGL not supported`);this.gl=s,this.initWebGL(),this.setupResizeObserver(),this.setSpeed(a),this.canvas.setAttribute(`data-paper-shaders`,`true`)}},Pe=`#version 300 es
layout(location = 0) in vec4 a_position;

void main() {
  gl_Position = a_position;
}
`})),G,Ie,Le=e((()=>{G={Checks:0,Stripes:1,Edge:2},Ie=`#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;


out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // Smoothstep for interpolation
  vec2 u = f * f * (3.0 - 2.0 * f);

  // Do the interpolation as two nested mix operations
  // If you try to do this in one big operation, there's enough precision loss to be off by 1px at cell boundaries
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);

}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv_original = uv;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`}));function K(e,t=[0,0,0,1]){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:K(t);if(typeof e!=`string`)return K(t);let n,r,i,a=1;if(e.startsWith(`#`))[n,r,i,a]=Re(e);else if(e.startsWith(`rgb`))[n,r,i,a]=ze(e);else if(e.startsWith(`hsl`))[n,r,i,a]=Ve(Be(e));else return console.error(`Unsupported color format`,e),K(t);return[q(n,0,1),q(r,0,1),q(i,0,1),q(a,0,1)]}function Re(e){return e=e.replace(/^#/,``),e.length===3&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]}function ze(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Be(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Ve(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}var q,He=e((()=>{q=(e,t,n)=>Math.min(Math.max(e,t),n)})),Ue=e((()=>{h(),Fe(),Le(),He()})),We=e((()=>{Ue(),Ue()}));function J(e){let t=le(),n=E.current()===E.canvas,r=e.preset===`custom`||e.colorMode===`custom`,i=e.preset===`custom`?e:Y[e.preset]||Object.values(Y)[0],[a,s,c]=we(e.color1,e.color2,e.color3),l=o(null),u=v(l,{once:!1,amount:.1}),f=p(()=>n&&e.preview||!t&&u?Ge(e.speed/100)*5:0,[u,t,e.speed,e.preview,n]);return m(`div`,{ref:l,style:{borderRadius:e.radius,overflow:`hidden`,position:`relative`,...e.style},children:[d(Ke,{color1:r?a:i.color1,color2:r?s:i.color2,color3:r?c:i.color3,scale:i.scale,proportion:i.proportion/100,distortion:i.distortion/50,swirl:i.swirl/100,swirlIterations:i.swirl===0?0:i.swirlIterations,rotation:i.rotation*Math.PI/180,speed:f,seed:i.offset*10,shape:G[i.shape],shapeScale:i.shapeSize/100,softness:i.softness/100,style:e.style}),e.noise&&e.noise.opacity>0&&d(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url("../images/g0qcwrxr87k0ufoxiufbakwya8.png")`,backgroundSize:e.noise.scale*200,backgroundRepeat:`repeat`,opacity:e.noise.opacity/2}})]})}var Ge,Y,X,Ke,qe,Je=e((()=>{h(),C(),l(),Ae(),We(),x(),Ge=b(.65,0,.88,.77),Y={Prism:{color1:`#050505`,color2:`#66B3FF`,color3:`#FFFFFF`,rotation:-50,proportion:1,scale:.01,speed:30,distortion:0,swirl:50,swirlIterations:16,softness:47,offset:-299,shape:`Checks`,shapeSize:45},Lava:{color1:`#FF9F21`,color2:`#FF0303`,color3:`#000000`,rotation:114,proportion:100,scale:.52,speed:30,distortion:7,swirl:18,swirlIterations:20,softness:100,offset:717,shape:`Edge`,shapeSize:12},Plasma:{color1:`#B566FF`,color2:`#000000`,color3:`#000000`,rotation:0,proportion:63,scale:.75,speed:30,distortion:5,swirl:61,swirlIterations:5,softness:100,offset:-168,shape:`Checks`,shapeSize:28},Pulse:{color1:`#66FF85`,color2:`#000000`,color3:`#000000`,rotation:-167,proportion:92,scale:0,speed:20,distortion:54,swirl:75,swirlIterations:3,softness:28,offset:-813,shape:`Checks`,shapeSize:79},Vortex:{color1:`#000000`,color2:`#FFFFFF`,color3:`#000000`,rotation:50,proportion:41,scale:.4,speed:20,distortion:0,swirl:100,swirlIterations:3,softness:5,offset:-744,shape:`Stripes`,shapeSize:80},Mist:{color1:`#050505`,color2:`#FF66B8`,color3:`#050505`,rotation:0,proportion:33,scale:.48,speed:39,distortion:4,swirl:65,swirlIterations:5,softness:100,offset:-235,shape:`Edge`,shapeSize:48}},S(J,{preset:{type:w.Enum,defaultValue:Object.keys(Y)[0],options:[...Object.keys(Y),`custom`],optionTitles:[...Object.keys(Y),`Custom`]},preview:{type:w.Boolean,defaultValue:!1},colorMode:{type:w.Enum,defaultValue:`preset`,options:[`preset`,`custom`],optionTitles:[`Preset`,`Custom`],displaySegmentedControl:!0,title:`Colors`,hidden:e=>e.preset===`custom`},color1:{type:w.Color,defaultValue:`#262626`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},color2:{type:w.Color,defaultValue:`#75c1f0`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},color3:{type:w.Color,defaultValue:`#ffffff`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},noise:{type:w.Object,optional:!0,icon:`effect`,controls:{opacity:{type:w.Number,defaultValue:.5,min:0,max:1,step:.01},scale:{type:w.Number,defaultValue:1,min:.2,max:2,step:.1}}},rotation:{type:w.Number,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.preset!==`custom`},proportion:{type:w.Number,defaultValue:35,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},scale:{type:w.Number,defaultValue:1,min:0,max:10,step:.01,hidden:e=>e.preset!==`custom`},speed:{type:w.Number,defaultValue:25,step:1,min:0,max:100},distortion:{type:w.Number,defaultValue:12,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},swirl:{type:w.Number,defaultValue:80,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},swirlIterations:{type:w.Number,defaultValue:10,min:0,max:20,step:1,title:`Iterations`,hidden:e=>e.swirl===0||e.preset!==`custom`},softness:{type:w.Number,defaultValue:100,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},offset:{type:w.Number,defaultValue:0,min:-1e3,max:1e3,step:1,hidden:e=>e.preset!==`custom`},shape:{type:w.Enum,defaultValue:`Checks`,options:Object.keys(G),hidden:e=>e.preset!==`custom`},shapeSize:{type:w.Number,defaultValue:10,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},radius:{type:w.BorderRadius,defaultValue:`0px`}}),X={name:`Default`,params:{scale:1,rotation:0,speed:20,seed:0,color1:`hsla(0, 0%, 15%, 1)`,color2:`hsla(203, 80%, 70%, 1)`,color3:`hsla(0, 0%, 100%, 1)`,proportion:.35,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:G.Checks}},Ke=e=>{let t=p(()=>({u_scale:e.scale??X.params.scale,u_rotation:e.rotation??X.params.rotation,u_color1:K(e.color1,X.params.color1),u_color2:K(e.color2,X.params.color2),u_color3:K(e.color3,X.params.color2),u_proportion:e.proportion??X.params.proportion,u_softness:e.softness??X.params.softness,u_distortion:e.distortion??X.params.distortion,u_swirl:e.swirl??X.params.swirl,u_swirlIterations:e.swirlIterations??X.params.swirlIterations,u_shapeScale:e.shapeScale??X.params.shapeScale,u_shape:e.shape??X.params.shape}),[e.scale,e.rotation,e.color1,e.color2,e.color3,e.proportion,e.softness,e.distortion,e.swirl,e.swirlIterations,e.shapeScale,e.shape,e.speed]);return d(qe,{...e,fragmentShader:Ie,uniforms:t})},qe=({ref:e,fragmentShader:t,style:n,uniforms:r={},webGlContextAttributes:i,speed:s=1,seed:c=0})=>{let l=e??o(null),u=o(null);return a(()=>(l.current&&(u.current=new Ne(l.current,t,r,i,s,c)),()=>{u.current?.dispose()}),[t,i]),a(()=>{u.current?.setUniforms(r)},[r]),a(()=>{u.current?.setSpeed(s)},[s]),a(()=>{u.current?.setSeed(c)},[c]),d(`canvas`,{ref:l,style:n})},J.displayName=`Animated Gradient Background`}));function Z(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Ye,Q,Xe,Ze,Qe,$e,et,tt,nt,rt,it,$,at,ot=e((()=>{h(),C(),x(),l(),Ce(),Je(),Ye=re(B),Q=re(J),Xe=[`BivUSc2ni`,`uQ0q6xQir`,`Aq6_ROgrb`,`P_35IDOMF`,`Dv7tyfHq1`,`uY7VRhzV6`],Ze=`framer-y5W8U`,Qe={Aq6_ROgrb:`framer-v-1wfhnws`,BivUSc2ni:`framer-v-1m0ikhy`,Dv7tyfHq1:`framer-v-152qhst`,P_35IDOMF:`framer-v-aeorco`,uQ0q6xQir:`framer-v-ng1ffc`,uY7VRhzV6:`framer-v-u0l3b5`},$e={bounce:.2,delay:0,duration:.4,type:`spring`},et=({value:e,children:n})=>{let r=t(y),i=e??r.transition,a=p(()=>({...r,transition:i}),[JSON.stringify(i)]);return d(y.Provider,{value:a,children:n})},tt={"Diagnal-Stripes":`Dv7tyfHq1`,"Horizontal-Stripes":`uQ0q6xQir`,Curtains:`P_35IDOMF`,Droplet:`Aq6_ROgrb`,Fog:`uY7VRhzV6`,Ocean:`BivUSc2ni`},nt=te.create(s),rt=({click:e,color1:t,color2:n,color3:r,height:i,id:a,width:o,...s})=>({...s,aHaJITJip:e??s.aHaJITJip,AzlBke1Oi:n??s.AzlBke1Oi??`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,iFYvlXJ7Z:t??s.iFYvlXJ7Z??`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,myyL2023t:r??s.myyL2023t??`rgb(158, 100, 19)`,variant:tt[s.variant]??s.variant??`BivUSc2ni`}),it=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),$=oe(u(function(e,t){let n=o(null),r=t??n,i=g(),{activeLocale:a,setLocale:s}=ue();fe();let{style:c,className:l,layoutId:u,variant:f,iFYvlXJ7Z:p,AzlBke1Oi:h,myyL2023t:_,aHaJITJip:v,...y}=rt(e),{baseVariant:b,classNames:x,clearLoadingGesture:re,gestureHandlers:S,gestureVariant:C,isLoading:oe,setGestureState:se,setVariant:le,variants:w}=ce({cycleOrder:Xe,defaultVariant:`BivUSc2ni`,ref:r,variant:f,variantClassNames:Qe}),T=it(e,w),{activeVariantCallback:E,delay:pe}=ae(b),D=E(async(...e)=>{if(se({isPressed:!1}),v&&await v(...e)===!1)return!1}),O=ie(Ze),me=()=>!![`Aq6_ROgrb`,`P_35IDOMF`].includes(b),k=()=>![`Aq6_ROgrb`,`P_35IDOMF`].includes(b);return d(ee,{id:u??i,children:d(nt,{animate:w,initial:!1,children:d(et,{value:$e,children:m(te.div,{...y,...S,className:ie(O,`framer-1m0ikhy`,l,x),"data-framer-name":`Ocean`,"data-highlight":!0,layoutDependency:T,layoutId:`BivUSc2ni`,onTap:D,ref:r,style:{filter:`blur(25px)`,mask:`linear-gradient(0deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) add`,WebkitFilter:`blur(25px)`,WebkitMask:`linear-gradient(0deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) add`,...c},...Z({Aq6_ROgrb:{"data-framer-name":`Droplet`},Dv7tyfHq1:{"data-framer-name":`Diagnal-Stripes`},P_35IDOMF:{"data-framer-name":`Curtains`},uQ0q6xQir:{"data-framer-name":`Horizontal-Stripes`},uY7VRhzV6:{"data-framer-name":`Fog`}},b,C),children:[me()&&d(de,{children:d(ne,{className:`framer-cypggk-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:T,layoutId:`CRzMKdNqY-container`,nodeId:`CRzMKdNqY`,rendersWithMotion:!0,scopeId:`aQTwPgOSd`,children:d(B,{canvasPreview:!0,center:{intensity:.63,size:0},colorBack:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,colors:[`rgb(6, 47, 255)`,`rgb(46, 137, 255)`],colorsMode:`Custom`,density:1,frequency:0,height:`100%`,id:`CRzMKdNqY`,layoutId:`CRzMKdNqY`,offsetX:0,offsetY:0,preset:`Custom`,speed:3.4,spotty:10,style:{height:`100%`,width:`100%`},width:`100%`,...Z({Aq6_ROgrb:{center:{intensity:1,size:0},colors:[`rgb(158, 100, 19)`,`rgb(158, 100, 19)`],frequency:.04},P_35IDOMF:{center:{intensity:0,size:1},colors:[`rgb(158, 100, 19)`,`rgb(158, 100, 19)`],frequency:.6,offsetX:1.94,offsetY:-2}},b,C)})})}),k()&&d(de,{children:d(ne,{className:`framer-4abm2n-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:T,layoutId:`I3OA80I0s-container`,nodeId:`I3OA80I0s`,rendersWithMotion:!0,scopeId:`aQTwPgOSd`,children:d(J,{color1:p,color2:h,color3:_,colorMode:`custom`,distortion:5,height:`100%`,id:`I3OA80I0s`,layoutId:`I3OA80I0s`,offset:-231,preset:`custom`,preview:!0,proportion:51,radius:`0px`,rotation:-94,scale:.6,shape:`Stripes`,shapeSize:98,softness:100,speed:35,style:{height:`100%`,width:`100%`},swirl:0,swirlIterations:0,width:`100%`,...Z({Dv7tyfHq1:{color2:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,distortion:0,offset:169,proportion:54,scale:.31,shapeSize:100,softness:31,speed:65,swirl:11,swirlIterations:3},uQ0q6xQir:{distortion:0,offset:-86,proportion:43,rotation:6,scale:.31,shapeSize:100,softness:31,speed:56,swirl:26},uY7VRhzV6:{color1:`rgb(158, 100, 19)`,color2:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,color3:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0))`,distortion:40,offset:15,proportion:0,rotation:0,scale:.62,shapeSize:0,softness:0,speed:26,swirl:100,swirlIterations:20}},b,C)})})})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-y5W8U.framer-299qdf, .framer-y5W8U .framer-299qdf { display: block; }`,`.framer-y5W8U.framer-1m0ikhy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-y5W8U .framer-cypggk-container, .framer-y5W8U .framer-4abm2n-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`],`framer-y5W8U`),at=$,$.displayName=`Gradient Background`,$.defaultProps={height:800,width:1200},S($,{variant:{options:[`BivUSc2ni`,`uQ0q6xQir`,`Aq6_ROgrb`,`P_35IDOMF`,`Dv7tyfHq1`,`uY7VRhzV6`],optionTitles:[`Ocean`,`Horizontal-Stripes`,`Droplet`,`Curtains`,`Diagnal-Stripes`,`Fog`],title:`Variant`,type:w.Enum},iFYvlXJ7Z:{defaultValue:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0)) /* {"name":"Black"} */`,title:`Color 1`,type:w.Color},AzlBke1Oi:{defaultValue:`var(--token-6bcaad7d-beee-4bf7-ac15-a9dc0353d0c4, rgb(0, 0, 0)) /* {"name":"Black"} */`,title:`Color 2`,type:w.Color},myyL2023t:{defaultValue:`rgb(158, 100, 19)`,title:`Color 3`,type:w.Color},aHaJITJip:{title:`Click`,type:w.EventHandler}}),T($,[{explicitInter:!0,fonts:[]},...Ye,...Q],{supportsExplicitInterCodegen:!0})}));function st(e,t){return{description:`Consultoria em Inteligência Artificial para PMEs. Mapeamos processos, automatizamos com IA e geramos eficiência operacional real. Escale sua empresa com IA aplicada ao negócio.`,favicon:`../images/48wcng2c6rcvsolhmxcn380qlwu-1.png`,robots:`max-image-preview:large`,socialImage:`../images/uxnxulq82eflaxgt19i7cg4ryiy.png`,title:`aurya.solutions`}}var ct=e((()=>{}));export{O as a,me as c,ot as i,st as n,D as o,at as r,pe as s,ct as t};
//# sourceMappingURL=shared-lib.BxxkSjl5.mjs.map