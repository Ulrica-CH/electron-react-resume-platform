module.exports = {
  presets: [
    "@babel/preset-env", // ð æ ¹æ®éç½®çç®æ æµè§å¨æèè¿è¡ç¯å¢ï¼éæ©å¯¹åºçè¯­æ³åï¼ä»èå°ä»£ç è¿è¡è½¬æ¢
    "@babel/preset-react", // ð react è¯­æ³åï¼è®©æä»¬å¯ä»¥ä½¿ç¨ React ES6 Class Component çåæ³ï¼æ¯æJSXãTSXè¯­æ³æ ¼å¼
    "@babel/preset-typescript", // ð https://github.com/babel/babel/issues/10570
  ],
  plugins: [
    "@babel/plugin-transform-runtime", // ð å®æ¹æä¾çæä»¶ï¼ä½ç¨æ¯åå°åä½çä»£ç 
    [
      "@babel/plugin-transform-modules-commonjs", // ð å° ECMAScript modules è½¬æ CommonJS.
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
  ],
};
