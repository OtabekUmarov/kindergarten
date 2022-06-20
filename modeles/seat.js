const {Schema, model} = require('mongoose')
const seat = new Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    fullname: String,
    phone: String,
    classId: {
        type: Schema.Types.ObjectId,
        ref: 'Classes'
    }
})
module.exports = model('Seat',seat)