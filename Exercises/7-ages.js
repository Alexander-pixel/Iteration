'use strict';

const ages = persons => {
  const ages = {};
  for (const personsKey in persons) {
    ages[personsKey] = persons[personsKey].died - persons[personsKey].born;
  }
  return ages;
};

module.exports = { ages };
