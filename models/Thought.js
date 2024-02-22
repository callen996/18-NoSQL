const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    body: {
      type: String,
      minLength: 1,
      maxLength: 500,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getReactions` that gets the amount of reactions associated with an thought
thoughtSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
