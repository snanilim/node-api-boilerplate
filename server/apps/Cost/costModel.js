const mongoose = require('mongoose');
const ThrowError = require('../../helper/throwError');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
};

const costSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 3,
        trim: true,
    },
    value: {
        type: Number,
        maxlength: 50,
        minlength: 1,
        trim: true,
    },
}, schemaOptions);

costSchema.method({
    costInfo() {
        const costInfo = {};
        const fields = ['name', 'value'];

        fields.forEach((field) => {
            costInfo[field] = this[field];
        });
        return costInfo;
    },
});

costSchema.statics = {

    async getOneMaterial(costID) {
        try {
            const cost = await this.findOne({ _id: costID });
            return cost;
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

const Material = mongoose.model('Material', costSchema);

module.exports = Material;
