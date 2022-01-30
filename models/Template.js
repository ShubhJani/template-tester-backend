const mongoose = require('mongoose');

const TemplateSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        required: true
    },
    issues: String
}, { versionKey: false });

module.exports = mongoose.model('Template', TemplateSchema);