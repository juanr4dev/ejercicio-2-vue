new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: null,
      time: null

    }
  },
  
  computed: {
    totalTime() {
      return this.courses.reduce( (total, c) => total += +c.time,0)
    }
  },
  
  methods: {
    addCourse() {
      if ( !this.title || !this.time) return
      this.courses.push({
        title: this.title,time: this.time
      })
      this.title = null
      this.time = null

    }
  }
})