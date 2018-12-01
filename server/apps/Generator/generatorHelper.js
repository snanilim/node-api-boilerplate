const Generator = require('./generatorModel');

exports.addNewGenerator = async (data) => {
    try {
        const generator = new Generator({
            materials: data.materials,
            costs: data.costs,
            profitPercentage: data.profitPercentage,
            basicinfo: data.basicinfo,
        });
        const resSavegenerator = await generator.save();
        const generatorInfo = resSavegenerator.generatorInfo();
        return generatorInfo;
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
        console.log('resGeneratorList', resGeneratorList);
        const generatorInfo = resGeneratorList.generatorInfo();
        return generatorInfo;
    } catch (error) {
        throw error;
    }
};
