Component({
  mixins: [],
  data: {
    timeValue: [],
    showGroup: false,
    form: {
      title: '打星球活动',
      timeVal: []

    }
  },
  props: {},
  didMount() {
    console.log(this);
    // let sevenDay = new Date().getTime() + 86400 * 7 * 1000;
    // let afertSevenDay = this.formatDate(sevenDay);
    // let nowDay = this.formatDate(new Date())
    // this.setData({
    //   timeValue:[nowDay,afertSevenDay]
    // })
    // console.log(afertSevenDay,nowDay)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToActivityList() {
      this.$page.$router.push('/activity/list')
    },
    pickerChange(opt) {
      console.log(opt)
    },
    changeVisible() {

    },
    onClose() {

    },
    changeGroup(e) {
      console.log(e, 'eeeee')
    },
    handlerShowGroup() {
      // console.log("aaaaa")
      this.setData({
        showGroup: true
      })
      // console.log(this.data.showGroup, 'showGroup')
    },
    formatDate(date) {
      var date = new Date(date);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      return YY + MM + DD;
    }
  },
});