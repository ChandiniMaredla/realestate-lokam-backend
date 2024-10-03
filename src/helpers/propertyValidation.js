const Joi = require("joi");

const validateType = Joi.object({
    propertyType: Joi.string().required()
})

const validateId = Joi.object({
    propertyId: Joi.string().required()
})

const validateIdAndType= Joi.object({
    propertyId: Joi.string().required(),
    propertyType: Joi.string().required()
})

const validateIdTypeStatus = Joi.object({
    propertyId: Joi.string().required(),
    propertyType: Joi.string().required(),
    status: Joi.number().valid(0,1).required()
})

const validateIdUserIdType= Joi.object({
    propertyType: Joi.string().required().custom((value, helper) => {
        // Convert the first character to uppercase and the rest to lowercase
        const formattedValue =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return formattedValue;
      }, "formatting propertyType"),
    userId: Joi.string().required(),
    propertyId: Joi.string().required()
})
module.exports= {validateType,validateIdAndType, validateIdTypeStatus, validateIdUserIdType, validateId}