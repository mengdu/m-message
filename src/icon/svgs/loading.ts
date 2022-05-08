export default {
  name: 'loading',
  viewBox: '0 0 50 50',
  html: '<g stroke="#f2f2f2" stroke-width="3.5"  stroke-linecap="round" fill="none"><circle cx="25" cy="25" r="20" class="m-loading-icon-bg-path"></circle><circle cx="25" cy="25" r="20" stroke="#20a0ff" stroke-dasharray="90, 150" stroke-dashoffset="0" class="m-loading-icon-active-path"><animate attributeName="stroke-dasharray" dur="1.5s" values="1,200;90,150;90,150" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-40px;-120px" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></g>'
}
