export const cvReducerServices = {
  addAdditionalFields(state, payload) {
    return {
      [payload.path]: state[payload.path].map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            fields: payload.value,
          };
        }

        return item;
      }),
    };
  },
  addAdditionalPage(schema, state, payload) {
    return {
      [payload]: [
        ...state[payload],
        ...schema[payload].map(item => {
          return {
            ...item,
            id: Math.max(...state[payload].map(item => item.id)) + 1,
          };
        }),
      ],
    };
  },
  removeAdditionalPage(state, payload) {
    return { [payload.path]: [...state[payload.path].filter(field => field.id !== payload.id)] };
  },
  mergedLocalFieldsWithApi(payload) {
    console.log(payload);
    //   const fields = payload?.data;
    //   const successFields = {};
    //
    //   for (let key in fields) {
    //     if (fields[key].length > 0) {
    //       successFields[key] = fields[key];
    //     }
    //   }
    //
    //   return successFields;
  },
};
