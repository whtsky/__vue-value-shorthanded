import Vue from 'vue'

const App = {
  data() {
    return {
      a: '123'
    }
  },
  render () {
    return (
      <div>
        <button
          onClick={() => this.a = ''}
        >
          Clear
        </button>
        <div>
        a: {this.a}
        </div>
        <input value={this.a} onInput={$e => this.a = $e.target.value} />
      </div>
    )
  }
}


new Vue({
  el: '#app',
  render: h => h(App)
})
