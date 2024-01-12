const { Report } = require("../../Model/export")
const categories = ['hate', 'abuseHarassment', 'violentSpeech', 'ChildSafety', 'Privacy', 'Spam', 'SuicideSelfHarm', 'SensitiveOrDisturbingMedia', 'DeceptiveIdentities', 'Violent&hatefulEntities']
const sortReportCategory = async(reportId, category)=>{
    if (category !== 'all'){
        const data  = await Report.sortCategory(reportId,category)
        return { [category]: { data } };
    }else{
        const result = {};
        for (const ct of categories) {
            try {
                const data = await Report.sortCategory(reportId, ct);
                if (data.length !== 0) {
                    result[ct] = {data};
                }            
            }catch (error){
                console.error(`Error for category ${ct}:`, error);
            }
        }
        return result;

    }

}


module.exports = {sortReportCategory}



