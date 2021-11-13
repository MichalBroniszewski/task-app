const bcrypt = require("bcryptjs");

const statics = (userSchema) => {
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
}

module.exports = statics
