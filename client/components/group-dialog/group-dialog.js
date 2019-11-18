Component({
  mixins: [],
  data: {},
  props: {
    showGroup: false,
    changeGroup: function () {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    choseGroup() {
      console.log(this.$page.setData({
        showGroup: false
      }))
      console.log(this.$page)
      // this.setData({
      //   showGroup: false
      // })
    }
  },
});