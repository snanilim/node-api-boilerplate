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

exports.updateOneCost = async (costID, data) => {
    try {
        const resSaveCost = await Cost.update(costID, data);
        const costInfo = resSaveCost.costInfo();
        return costInfo;
    } catch (error) {
        throw Cost.checkDuplicateEmail(error);
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

exports.oneCost = async (id) => {
    try {
        const resCostList = await Cost.getOneCost(id);
        const costInfo = resCostList.costInfo();
        return costInfo;
    } catch (error) {
        throw error;
    }
};

exports.deleteCost = async (id) => {
    try {
        await Cost.delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};
