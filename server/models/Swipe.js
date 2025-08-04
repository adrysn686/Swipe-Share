const mongoose = require('mongoose');

const swipeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  diningHall: {
    type: String,
    required: true,
    enum: [
      'North Campus Dining Hall',
      'South Campus Dining Hall', 
      'East Campus Dining Hall',
      'West Campus Dining Hall',
      'Student Union Food Court',
      'Library Cafe',
      'Engineering Building Cafe',
      'Business School Dining',
      'Athletic Center Cafe',
      'Medical Center Dining'
    ]
  },
  timeSlot: {
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    }
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  isFree: {
    type: Boolean,
    default: function() {
      return this.price === 0;
    }
  },
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'anytime'],
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'pending', 'completed', 'cancelled'],
    default: 'available'
  },
  requests: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    status: {
      type: String,
      enum: ['pending', 'accepted', 'declined'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  acceptedRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  meetingPoint: {
    type: String,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }],
  expiresAt: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
swipeSchema.index({ diningHall: 1, 'timeSlot.startTime': 1 });
swipeSchema.index({ owner: 1, status: 1 });
swipeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Virtual for checking if swipe is active
swipeSchema.virtual('isActive').get(function() {
  return this.status === 'available' && this.expiresAt > new Date();
});

// Virtual for formatted time
swipeSchema.virtual('formattedTime').get(function() {
  const start = this.timeSlot.startTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const end = this.timeSlot.endTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  return `${start} - ${end}`;
});

// Ensure virtual fields are serialized
swipeSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Swipe', swipeSchema);