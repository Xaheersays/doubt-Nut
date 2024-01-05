const saveToDb = async (document) => {
    try {
        await document.save();
        return { success: true, message: 'data saved to db' };
    } catch (error) {
        console.error('Error saving to DB:', error);
        return { success: false, message: 'data could not be saved to db' };
    }
};

module.exports = { saveToDb };
