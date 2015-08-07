var tap = require('tap')
var hw = require('@bcoe/hardwork')

tap.test(function (t) {
  t.equal(hw.foo, 'bar')
  t.end()
})
