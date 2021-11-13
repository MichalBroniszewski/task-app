const bcrypt = require("bcryptjs");
const Task = require("../task");

const events = (userSchema) => {
    userSchema.pre('save', async function (next) {
        const user = this
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8)
        }

        next()
    })

    userSchema.pre('remove', async function (next) {
        const user = this
        await Task.deleteMany({owner: user._id})

        next()
    })
}

module.exports = events
