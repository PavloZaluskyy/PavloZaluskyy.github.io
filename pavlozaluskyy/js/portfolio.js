Vue.component('blog-post', {
  props: ['post'],
  template: '<li class="view  view-first"><img class="img_slider" v-bind:src="post.url_img"><a target="_blank" v-bind:href="post.url_site"><div class="mask"><h2><strong>{{post.title}}</strong></h2><p>{{post.description}}</p><a target="_blank" class="info" v-bind:href="post.url_site"><strong>Visit site</strong></a></div></li>'
})

new Vue({
	el: '#ell',
	data: {
		posts: [
		{id: 1, url_img:'img/slides/1491233764815_501364.png', url_site: 'http://testqwe.zzz.com.ua/', title: 'No Limits', description: 'Website-Landing Ukrainian rock band "NO Limits"'},
		{id: 2, url_img:'img/slides/webSpiders.PNG', url_site: 'https://pavlozaluskyy.github.io/webSpiders/', title: 'Web Spider', description: 'Web site with animation on CSS and JS!'}
		
		]
	}

})