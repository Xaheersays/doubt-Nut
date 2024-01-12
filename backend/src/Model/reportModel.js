const { mongoose } = require('../Db/connectToDb');

const reportSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  reports: [{
    category: {
      type: String,
      enum: ['hate', 'abuseHarassment', 'violentSpeech', 'ChildSafety', 'Privacy', 'Spam', 'Suicide-self-harm', 'Sensitive or disturbingMedia', 'DeceptiveIdentities', 'Violent&hatefulEntities'],
      required: true,
    },
    reporterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  count: {
    type: Number,
    default: 1,
  },
  actionTaken :{
      type : Boolean ,
      default : false
    }
});

reportSchema.statics.incrementReportCount = async function (questionId, category, reporterId) {
  try {
    const existingReport = await this.findOne({
      questionId,
      'reports.category': category,
      'reports.reporterId': reporterId,
    });

    if (!existingReport) {
      await this.findOneAndUpdate(
        { questionId },
        {
          $inc: { count: 1 },
          $push: { reports: { category, reporterId } },
        },
        { new: true, upsert: true }
      );
      console.log(`Count incremented for question ${questionId} and category ${category}`);
    } else {
      console.log(`Report already exists for question ${questionId}, category ${category}, and reporterId ${reporterId}`);
    }
    return {sucess:true , message:'report has been submitted successfully'}
  } catch (error) {
    console.error(error);
    return {sucess:true , message:'cant add report rn '}
  }
};

reportSchema.statics.sortCategory = async function (reportId,category) {
  try{
    const reports = await this.findOne({_id:reportId})
    if (!reports) {
      throw new Error('Report not found');
    }
    const filteredReports = reports.reports.filter(report => {
      if (report.category === category){
        return {reporterId:report.reporterId , _id : report._id}
      }
    })
    return  filteredReports
  }catch(err){
    console.error(err)
    return []
  }
}

const Report = mongoose.model('Report', reportSchema);

module.exports = { Report };
