<template>

  <main class="game-board">

    <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="viewBox">

    </svg>

  </main>

</template>

<script>
import Level from '@/level/index'

export default {
  data () {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      level: null
    }
  },
  computed: {
    viewBox () {
      return `${this.x} ${this.y} ${this.width} ${this.height}`
    }
  },
  mounted () {
    window.addEventListener('resize', this.sizeSvg)
    this.sizeSvg()
    this.level = new Level({
      level: parseInt(this.$route.params.level)
    })
  },
  methods: {
    sizeSvg () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
}
</script>
