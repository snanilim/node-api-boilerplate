const mongoose = require('mongoose');
const ThrowError = require('../../helper/throwError');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
};

const materialSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 3,
        trim: true,
    },
    weight: {
        type: Number,
        maxlength: 50,
        minlength: 1,
        trim: true,
    },
    value: {
        type: Number,
        maxlength: 50,
        minlength: 1,
        trim: true,
    },
    view: {
        type: Boolean,
        default: true,
    },
}, schemaOptions);

materialSchema.method({
    materialInfo() {
        const materialInfo = {};
        const fields = ['id', 'name', 'weight', 'value', 'view'];

        fields.forEach((field) => {
            materialInfo[field] = this[field];
        });
        return materialInfo;
    },
});

materialSchema.statics = {

    async getOneMaterial(materialID) {
        try {
            const material = await this.findOne({ _id: materialID });
            return material;
        } catch (err) {
            throw new ThrowError(err);
        }
    },

    async getAllMaterial({
        page = 1, perPage = 20, name,
    }) {
        const queryObj = { name };
        const findQuery = Object.keys(queryObj)
            .filter(key => queryObj[key] !== undefined)
            .reduce((obj, key) => {
                // eslint-disable-next-line no-param-reassign
                obj[key] = queryObj[key];
                return obj;
            }, {});
        try {
            return this.find(findQuery)
                .sort({ createdAt: -1 })
                .skip(perPage * (page - 1))
                .limit(perPage)
                .exec();
        } catch (error) {
            return error;
        }
    },
};

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
