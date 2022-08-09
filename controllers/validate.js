const Joi= require("@hapi/joi")



function registerValidate(data){
    const  schema = Joi.object({
        name:Joi.string().required().min(5).max(30).messages({  'string.base': `"Nome" precisa ser do tipo texto`,
        'string.empty': ` Não pode estar  vazio`,
        'string.min': `"Nome" precisa ter um tamanho minimo de {#limit} caracteres`,
        'any.required': `"Nome" nao pode estar em branco`}),
        age:Joi.number().required().positive().integer().messages({  'string.base': `"{PATH}"precisa ser do tipo texto`,
        'string.empty': `"{PATH}" Não pode estar  vazio`,
        'string.min': `"{PATH}" precisa ter um tamanho minimo de {#limit} caracteres`,
        'any.required': `"{PATH}" nao pode estar em branco`}),
        email:Joi.string().email().required().messages({  'string.base': `"{PATH}"precisa ser do tipo texto`,
        'string.empty': `"{PATH}" Não pode estar  vazio`,
        'string.min': `"{PATH}" precisa ter um tamanho minimo de {#limit} caracteres`,
        'any.required': `"{PATH}" nao pode estar em branco`}),
        password:Joi.string().required().min(5).max(30).messages({  'string.base': `"{PATH}"precisa ser do tipo texto`,
        'string.empty': `"{PATH}" Não pode estar  vazio`,
        'string.min': `"{PATH}" precisa ter um tamanho minimo de {#limit} caracteres`,
        'any.required': `"{PATH}" nao pode estar em branco`}),
        repeat_password: Joi.ref('password')

    })
    
    return schema.validate(data)
}
function loginValidate(data){
    const  schema = object({
        email:string().email().required(),
        password:string().required().min(5).max(30)

    })
    return schema.validate(data).catch(err=>{console.log(err)})
}
module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;