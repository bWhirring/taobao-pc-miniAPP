Component({
  mixins: [],
  data: {},
  props: {
    showGroup: false,
    changeGroup: (data) => console.log(data)
  },
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
    },
    confirm() {
      this.props.changeGroup('hahah')
    }
  },
});