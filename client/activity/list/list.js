Component({
  mixins: [],
  data: {
    dataSource: [{
      name: '呼呼',
      date: '2019-11-09'
    }, {
      name: 'haha',
      date: '2019-11-09'
    }],
    pageInfo: {
      size: 10,
      total: 100
    }
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleClickCheck(evt) {
      console.log('check', evt.target.dataset.x)
    },
    handleClickEdit(evt) {
      console.log('edit', evt.target.dataset.x)
    },
    changePagination(evt) {
      console.log(evt)
    },
    tapname() {
      this.$page.$router.push('/activity/add')
    }
  },
});