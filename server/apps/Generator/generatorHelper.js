const Generator = require('./generatorModel');

exports.addNewGenerator = async (data) => {
    try {
        const generator = new Generator({
            materials: data.materials,
            costs: data.costs,
            profitPercentage: data.profitPercentage,
            values: data.values,
            kg: data.kg,
            weight: data.weight,
            basicinfo: data.basicinfo,
        });
        const resSavegenerator = await generator.save();
        const generatorInfo = resSavegenerator.generatorInfo();
        return generatorInfo;
    } catch (error) {
        throw error;
    }
};

exports.updateOneGenerator = async (generatorID, data) => {
    try {
        await Generator.update(generatorID, data);
        return true;
    } catch (error) {
        throw error;
    }
};

exports.listAllGenerators = async (query) => {
    try {
        const resgeneratorList = await Generator.getAllGenerator(query);
        const generatorInfo = resgeneratorList.map(generator => generator.generatorInfo());
        return generatorInfo;
    } catch (error) {
        throw error;
    }
};

exports.oneGenerator = async (id) => {
    try {
        const resGeneratorList = await Generator.getOneGenerator(id);
        const generatorInfo = resGeneratorList.generatorInfo();
        return generatorInfo;
    } catch (error) {
        throw error;
    }
};

exports.deleteGenerator = async (id) => {
    try {
        await Generator.delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};
