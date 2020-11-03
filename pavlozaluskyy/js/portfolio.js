Vue.component('blog-post', {
  props: ['post'],
  template: '<li class="view  view-first"><img class="img_slider" v-bind:src="post.url_img"><a target="_blank" v-bind:href="post.url_site"><div class="mask"><h2><strong>{{post.title}}</strong></h2><p>{{post.description}}</p><a target="_blank" class="info" v-bind:href="post.url_site"><strong>Visit site</strong></a></div></li>'
})

new Vue({
    el: '#ell',
    data: {
        posts: [
        {id: 1, url_img:'img/slides/Michelangelo.JPG', url_site: 'https://pavlozaluskyy.github.io/Michelangelo/', title: 'Michelangelo', description: 'Just a site of an architectural company!'},
        {id: 2, url_img:'img/slides/1491233764815_501364.png', url_site: 'https://pavlozaluskyy.github.io/NoLimits/build/', title: 'No Limits', description: 'Website-Landing Ukrainian rock band "NO Limits"'},
        {id: 3, url_img:'img/slides/webSpiders.PNG', url_site: 'https://pavlozaluskyy.github.io/webSpiders/', title: 'Web Spider', description: 'Web site with animation on CSS and JS!'},
        {id: 4, url_img:'img/slides/pavlozaluskyy.JPG', url_site: 'https://pavlozaluskyy.github.io/InDealProTask/', title: 'Wall', description: 'An application that checks whether it is possible to build a wall or not according to the specified data.'},
        {id: 5, url_img:'img/slides/chat.png', url_site: 'https://pavlozaluskyy.github.io/ChatReenbitTest/', title: 'Chat', description: 'A simple chat written in Angular. Which generates API responses'},
        {id: 6, url_img:'img/slides/PortLand.JPG', url_site: 'http://pavlozaluskyy.zzz.com.ua/Portland/', title: 'PortLand', description: 'Front-end of the page of the online store!'},
        {id: 7, url_img:'img/slides/world.JPG', url_site: 'https://pavlozaluskyy.github.io/world/', title: 'MyWork', description: 'A simple web-app for learning English!'}
        ]
    }

})
