const user = require('../modals/user')

const bcrypt = require('bcrypt')

const userRegister = async (req, res) => {
    const {name, email, age, gender, password} = req.body

    if(!(name && email && age && gender && password)){
        return res.status(401).send("All fields are mandatory!")
    }

    try {
        const existingUser = await user.findOne({email})

        const hashPassword = await bcrypt.hash(password, 10)


        if(!existingUser){
            const newUser = new user({
                name,
                email,
                age,
                gender,
                password: hashPassword,
            })

            await newUser.save()

            return res.status(201).json({staus: 'true', msg: 'user has been created'})
        }
        return res.status(404).json({staus: 'false', err: 'user already existed!'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userRegister
}