import mongoose from 'mongoose';

const PlanSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            default: 'patricia',
        },
        message: {
            type: String,
            required: [true, 'Please provide a message'],
            trim: true,
            maxlength: [1000, 'Message cannot be more than 1000 characters'],
        },
        planDetails: {
            type: String,
            trim: true,
            maxlength: [500, 'Plan details cannot be more than 500 characters'],
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Plan || mongoose.model('Plan', PlanSchema);
