/* fieldCreator:
  first argument - field name,
  second (optional) - object with preference
*/
const fieldCreator = (name = '', options = {}) => {
  return {
    name,
    values: [{ value: '' }],
    ...options,
  };
};

export const modalFieldsSchema = {
  employment: [
    {
      id: 1,
      options: {},
      fields: [
        fieldCreator('Company'),
        fieldCreator('Position', { multi: true }),
        fieldCreator('Responsibilities', { multi: true }),
        fieldCreator('Location'),
        fieldCreator('Start work', { date: true }),
        fieldCreator('End work', { date: true }),
      ],
    },
  ],
  skills: [
    {
      id: 1,
      options: {},
      fields: [fieldCreator('Skills', { multi: true })],
    },
  ],
  hobbies: [
    {
      id: 1,
      options: {},
      fields: [fieldCreator('Hobbies', { multi: true })],
    },
  ],
  languages: [
    {
      id: 1,
      options: {},
      fields: [fieldCreator('Languages', { multi: true })],
    },
  ],
  contact_info: [
    {
      id: 1,
      options: {},
      fields: [
        fieldCreator('Email', { multi: true }),
        fieldCreator('Phone', { multi: true }),
        fieldCreator('Social network', { multi: true }),
      ],
    },
  ],
  education: [
    {
      id: 1,
      options: {},
      fields: [
        fieldCreator('University', { multi: true }),
        fieldCreator('Department', { multi: true }),
        fieldCreator('Education level', { multi: true }),
        fieldCreator('Start education', { date: true }),
        fieldCreator('End education', { date: true }),
      ],
    },
  ],
  soft_skills: [
    {
      id: 1,
      options: {},
      fields: [fieldCreator('Soft skills', { multi: true })],
    },
  ],
  about_my_self: [
    {
      id: 1,
      options: {},
      fields: [fieldCreator('About my self', { multi: true })],
    },
  ],
};
