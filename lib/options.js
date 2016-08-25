Options.set('forbidClientAccountCreation', false);
Options.set('profileSchema', {
  name: {
    type: String,
    label: orion.helpers.getTranslation('accountsNameLabel'),
  },
});