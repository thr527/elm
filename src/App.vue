<template>
  <!-- 自适应宽度vw，根据宽度比例来自动设置像素，；自适应高度vh，根据高度比例，来自动调整宽度 -->
  
  <router-view></router-view>
  
  
  
</template>

<style>

	html,
	body,
	div,
	span,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	ol,
	li,
	p {
		margin: 0;
		padding: 0;
	}

	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
	}

	ul,
	ol {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
</style>
