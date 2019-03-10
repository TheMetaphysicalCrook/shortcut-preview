const identifier = 'is.workflow.actions.getmarkdownfromrichtext';
const icon = 'RichText';

const WFAction = {
  ActionClass: 'WFMarkdownFromRichTextAction',
  ActionKeywords: ['html2text', 'source'],
  CreationDate: '2016-03-07T08:00:00.000Z',
  Description: {
    DescriptionResult: 'Markdown',
    DescriptionSummary:
      "Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).",
  },
  Input: {
    Multiple: false,
    Required: true,
    Types: ['WFRichTextContentItem'],
  },
  Name: 'Make Markdown from Rich Text',
  Output: {
    Multiple: false,
    OutputName: 'Markdown from Rich Text',
    Types: ['NSString'],
  },
  ShortName: 'Make Markdown',
};

export { identifier, icon, WFAction };
