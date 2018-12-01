const mongoose = require('mongoose');
const ThrowError = require('../../helper/throwError');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
};

const generatorSchema = mongoose.Schema({
    materials: {
        type: Array,
        trim: true,
    },
    costs: {
        type: Array,
        trim: true,
    },
    profitPercentage: {
        type: String,
        trim: true,
    },
    basicinfo: {
        type: Object,
        trim: true,
    },
}, schemaOptions);

generatorSchema.method({
    generatorInfo() {
        const generatorInfo = {};
        const fields = ['id', 'materials', 'costs', 'profitPercentage', 'basicinfo'];

        fields.forEach((field) => {
            generatorInfo[field] = this[field];
        });
        return generatorInfo;
    },
});

generatorSchema.statics = {

    async getOneGenerator(generatorID) {
        console.log('generatorID', generatorID);
        try {
            const generator = await this.findOne({ _id: generatorID });
            return generator;
        } catch (err) {
            throw new ThrowError(err);
        }
    },

    async getAllGenerator({
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

const Generator = mongoose.model('Generator', generatorSchema);

module.exports = Generator;
