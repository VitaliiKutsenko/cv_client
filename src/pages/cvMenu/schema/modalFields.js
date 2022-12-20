/* fieldCreator:
  first argument - field name,
  second (optional) - object with preference
*/
const fieldCreator = (name = '', options = {}) => {
  return {
    name,
    fieldOptions: {},
    values: [{ value: '' }],
    ...options,
  };
};

export const modalFieldsSchema = {
  employment: [
    {
      id: 1,
      options: {
        area: {
          position: 'right',
          id: 2,
        },
      },
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
      options: {
        area: {
          position: 'right',
          id: 1,
        },
      },
      fields: [fieldCreator('Skills', { multi: true })],
    },
  ],
  hobbies: [
    {
      id: 1,
      options: {
        area: {
          position: 'right',
          id: 2,
        },
      },
      fields: [fieldCreator('Hobbies', { multi: true })],
    },
  ],
  languages: [
    {
      id: 1,
      options: {
        area: {
          position: 'left',
          id: 2,
        },
      },
      fields: [fieldCreator('Languages', { multi: true })],
    },
  ],
  contact_info: [
    {
      id: 1,
      options: {
        area: {
          position: 'left',
          id: 4,
        },
      },
      fields: [
        fieldCreator('Email', { multi: true }),
        fieldCreator('Phone', { multi: true }),
        fieldCreator('Social network', { multi: true }),
        fieldCreator('Location', { multi: true }),
      ],
    },
  ],
  education: [
    {
      id: 1,
      options: {
        area: {
          position: 'left',
          id: 3,
        },
      },
      fields: [
        fieldCreator('University', { multi: true }),
        fieldCreator('Department', { multi: true }),
        fieldCreator('Education level', { multi: true }),
        fieldCreator('Start education', { date: true }),
        fieldCreator('End education', {
          date: true,
          labelName: 'Working period',
        }),
      ],
    },
  ],
  soft_skills: [
    {
      id: 1,
      options: {
        area: {
          position: 'right',
          id: 2,
        },
      },
      fields: [fieldCreator('Soft skills', { multi: true })],
    },
  ],
  about_my_self: [
    {
      id: 1,
      options: {
        area: {
          position: 'left',
          id: 2,
        },
      },
      fields: [fieldCreator('About my self', { multi: true })],
    },
  ],
};
