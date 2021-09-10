<template>
  <div class="absolute w-full min-h-full dark:bg-black bg-white">
    <div class="w-full sm:w-1/3 p-10 sm:p-20 font-urbanist space-y-4 sm:space-y-8 select-none">
      <h1 class="text-6xl font-bold hello dark:text-white text-gray-800">Hello<span class="inline-block dot">.</span></h1>
      <h3 class="text-2xl sm:text-4xl font-semibold dark:text-white text-gray-800 name">My name is Nenad Kaevik</h3>
      <div class="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl space-y-4 paragraph">  
        <p class="line">
          I am Web Developer and passionate UI designer giving strong importance to details and aesthetics.
          I currently work for <a target="_blank" href="https://www.endava.com/" class="font-bold text-red-500">Endava</a> as a Frontend Developer. 
          My expertise covers 8+ years in Web Development and Graphic Design working for both startup and enterprise companies.
          Read more about my expertise by checking my <a target="_blank" href="https://docs.google.com/document/d/1NqePv88QWuSDe25HWW-ccBIH9vr7e8zMgJOwLm1JiEE/export?format=pdf" class="font-bold text-indigo-500">resume</a>.
        </p>
        <p class="line">
          I am also a shutterbug so i know to throw in a few photos on my <a target="_blank" href="https://unsplash.com/@nenadkaevik" class="font-bold text-black dark:text-white">Unsplash</a>
          and <a target="_blank" href="https://www.instagram.com/nenad_kaevik/" class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600">Instagram</a> accounts.
        </p>
        <p class="line">
          I am open for any type of collaboration. You can reach out via <a target="_blank" class="font-bold text-black dark:text-white" href="mailto:nenadkaevik@gmail.com">email</a> or follow me on social media.
        </p>
      </div>
      <div class="social space-x-6 text-xl text-gray-400 pt-4">
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://www.linkedin.com/in/nenadkaevik/">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://github.com/NenadKaevik">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://dribbble.com/nenadkaevik">
          <font-awesome-icon :icon="['fab', 'dribbble']" />
        </a>
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://unsplash.com/@nenadkaevik">
          <font-awesome-icon :icon="['fab', 'unsplash']" />
        </a>
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://www.instagram.com/nenad_kaevik/">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a class="inline-block hover:text-gray-700 dark:hover:text-white" href="https://codepen.io/nenadkaevik">
          <font-awesome-icon :icon="['fab', 'codepen']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gsap, { Power3, Bounce, TimelineLite } from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUnsplash, faInstagram, faLinkedinIn, faDribbble, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faUnsplash, faInstagram, faLinkedinIn, faDribbble, faGithub, faCodepen])

gsap.registerPlugin(TimelineLite, Bounce, Power3)

export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
  },

  mounted(){
    const tl = new TimelineLite();
    tl.from(".hello", 1, {
      ease: Power3.easeOut ,
      y: -100, 
      autoAlpha: 0,
    })
    .from(".dot", 1, {y: -100, autoAlpha: 0, ease: Bounce.easeOut}, '-=0.4')
    .from(".name", 1, {x: -100, autoAlpha: 0, ease: Power3.easeOut}, '-=0.4')
    .from(".paragraph", 1, {
      ease: Power3.easeOut ,
      x: -100, 
      autoAlpha: 0,
    }, '-=0.4')
    .staggerFrom(".social a", 1, {
      ease: Power3.easeOut ,
      autoAlpha: 0,
    }, 0.1, '-=0.6', "stagger",)
  }
}
</script>
