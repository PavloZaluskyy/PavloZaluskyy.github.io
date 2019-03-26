Vue.component('blog-post', {
  props: ['post'],
  template: '<li class="view  view-first"><img class="img_slider" v-bind:src="post.url_img"><a target="_blank" v-bind:href="post.url_site"><div class="mask"><h2><strong>{{post.title}}</strong></h2><p>{{post.description}}</p><a target="_blank" class="info" v-bind:href="post.url_site"><strong>Visit site</strong></a></div></li>'
})

new Vue({
	el: '#ell',
	data: {
		posts: [
		{id: 1, url_img:'img/slides/Michelangelo.JPG', url_site: 'https://pavlozaluskyy.github.io/Michelangelo/', title: 'Michelangelo', description: 'Just a site of an architectural company!'},
		{id: 2, url_img:'img/slides/accnetua.jpg', url_site: 'http://acc.net.ua/', title: 'ACC.NET.UA', description: 'Online store of accessories for smartphones!'},
		{id: 3, url_img:'img/slides/webSpiders.PNG', url_site: 'https://pavlozaluskyy.github.io/webSpiders/', title: 'Web Spider', description: 'Web site with animation on CSS and JS!'},
		{id: 4, url_img:'img/slides/pavlozaluskyy.jpg', url_site: 'http://www.pavlozaluskyy.zzz.com.ua/', title: 'Pavlo Zaluskyy', description: 'My first site!'},
		{id: 5, url_img:'img/slides/1491233764815_501364.png', url_site: 'http://testqwe.zzz.com.ua/', title: 'No Limits', description: 'Website-Landing Ukrainian rock band "NO Limits"'},
		{id: 6, url_img:'img/slides/PortLand.jpg', url_site: 'https://pavlozaluskyy.github.io/Portland/', title: 'PortLand', description: 'Front-end of the page of the online store!'},
		{id: 7, url_img:'img/slides/world.jpg', url_site: 'https://pavlozaluskyy.github.io/world/', title: 'MyWork', description: 'A simple web-app for learning English!'}
		]
	}

})
