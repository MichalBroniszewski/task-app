const jwt = require("jsonwebtoken")

const methods = (userSchema) => {
    userSchema.methods.toJSON = function () {
        const userObject = this.toObject()

        delete userObject.password
        delete userObject.tokens
        delete userObject.avatar

        return userObject
    }

    userSchema.methods.generateAuthToken = async function () {
        const user = this
        const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET, {'expiresIn': '7 days'})

        user.tokens = user.tokens.concat({token})
        await user.save()

        return token
    }
}

module.exports = methods
