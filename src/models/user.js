const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = require('./user/schema')
const events = require('./user/events')
const statics = require('./user/statics')
const methods = require('./user/methods')

events(userSchema)
methods(userSchema)
statics(userSchema)

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User
