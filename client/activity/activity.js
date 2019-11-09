Component({
  mixins: [],
  data: {
    dataSource: [{
      name: '呼呼',
      date: '2019-11-09'
    }]
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleClick(evt) {
      console.log('val', evt.target.dataset.x)
    }
  },
});
