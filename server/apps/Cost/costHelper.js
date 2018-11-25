const Cost = require('./costModel');

exports.addNewCost = async (data) => {
    try {
        const cost = new Cost({
            name: data.name,
            value: data.value,
        });
        const resSavecost = await cost.save();
        const costInfo = resSavecost.costInfo();
        return costInfo;
    } catch (error) {
        throw error;
    }
};

exports.listAllCosts = async (query) => {
    try {
        const rescostList = await Cost.getAllCost(query);
        const costInfo = rescostList.map(cost => cost.costInfo());
        return costInfo;
    } catch (error) {
        throw error;
    }
};

exports.onecost = async (id) => {
    try {
        const resCostList = await Cost.getOneCost(id);
        const costInfo = resCostList.costInfo();
        return costInfo;
    } catch (error) {
        throw error;
    }
};
