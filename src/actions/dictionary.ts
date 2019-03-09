const identifier = 'is.workflow.actions.dictionary';
const icon = 'Scripting';

const WFAction = {
  ActionClass: 'WFDictionaryAction',
  ActionKeywords: ['json', 'plist'],
  CreationDate: '2016-11-10T20:00:00.000Z',
  Description: {
    DescriptionNote: 'When coerced to text, the dictionary is represented as JSON.',
    DescriptionSummary:
      'Passes the specified list of key-value pairs to the next action as a dictionary.',
  },
  Name: 'Dictionary',
  Output: {
    Multiple: false,
    OutputName: 'Dictionary',
    Types: ['NSDictionary'],
  },
  Parameters: [
    {
      AllowedValueTypes: [0, 1, 2, 3, 4],
      Class: 'WFDictionaryParameter',
      Key: 'WFItems',
      Label: 'Items',
    },
  ],
  SuggestedNever: true,
};

export { identifier, icon, WFAction };
